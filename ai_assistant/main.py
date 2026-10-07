import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY is not set")

client = genai.Client(api_key=GEMINI_API_KEY)

app = FastAPI(
    title="skillIssue AI Assistant API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class QueryRequest(BaseModel):
    query: str


class QueryResponse(BaseModel):
    status: str
    query: str
    response: str


@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "skillIssue AI Assistant API"
    }


@app.post("/api/ask-ai", response_model=QueryResponse)
def ask_ai(payload: QueryRequest):
    user_query = payload.query.strip()

    if not user_query:
        return QueryResponse(
            status="error",
            query="",
            response="Please enter a question."
        )

    prompt = f"""
You are the AI Assistant for skillIssue, a student job-preparation website.

Help the user with:
- DSA and algorithms
- Python and programming
- Web development
- APIs and databases
- Git and GitHub
- Debugging code
- Technical interview preparation

Give beginner-friendly, accurate explanations.
Use examples or code when useful.
Explain step by step without unnecessary complexity.
If the question is ambiguous, ask a short clarification.
Do not pretend to know something when you are uncertain.

User's question:
{user_query}
"""

    try:
        interaction = client.interactions.create(
            model="gemini-3.8-flash",
            input=prompt
        )

        answer = interaction.output_text or "I couldn't generate a response."

        return QueryResponse(
            status="success",
            query=user_query,
            response=answer
        )

    except Exception as e:
        return QueryResponse(
            status="error",
            query=user_query,
            response=f"AI request failed: {str(e)}"
        )
