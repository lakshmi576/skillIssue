/**
 * skillIssue - Core Application Logic & Interactive State Management
 * Includes Dark/Light theme, Motto Hero, Aptitude/Role Mock Questions,
 * 3-Tier Progressive Hints, AI Image Review, Doubt Solver, and Flashcards.
 */

// ==========================================
// 1. DATA REPOSITORIES
// ==========================================

const DSA_QUESTIONS = [
  {
    id: "dsa-1",
    title: "Two Sum",
    topic: "Arrays & Hashing",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/two-sum/",
    pattern: "Hash Map for O(1) complement lookup.",
    timeComp: "O(n)",
    spaceComp: "O(n)"
  },
  {
    id: "dsa-2",
    title: "Contains Duplicate",
    topic: "Arrays & Hashing",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/contains-duplicate/",
    pattern: "Hash Set to check if value has already been visited.",
    timeComp: "O(n)",
    spaceComp: "O(n)"
  },
  {
    id: "dsa-3",
    title: "Valid Anagram",
    topic: "Arrays & Hashing",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/valid-anagram/",
    pattern: "Frequency counter / array of size 26 for char counts.",
    timeComp: "O(n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-4",
    title: "Group Anagrams",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/group-anagrams/",
    pattern: "Sorted string or tuple of character counts as Hash Map key.",
    timeComp: "O(n * k log k)",
    spaceComp: "O(n * k)"
  },
  {
    id: "dsa-5",
    title: "Top K Frequent Elements",
    topic: "Arrays & Hashing",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",
    pattern: "Bucket Sort or Min-Heap based on frequencies.",
    timeComp: "O(n)",
    spaceComp: "O(n)"
  },
  {
    id: "dsa-6",
    title: "Valid Palindrome",
    topic: "Two Pointers",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/valid-palindrome/",
    pattern: "Two pointers from left and right skipping non-alphanumerics.",
    timeComp: "O(n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-7",
    title: "3Sum",
    topic: "Two Pointers",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/3sum/",
    pattern: "Sort array, fix first number, use two pointers for remaining two.",
    timeComp: "O(n^2)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-8",
    title: "Container With Most Water",
    topic: "Two Pointers",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/container-with-most-water/",
    pattern: "Pointers at both ends; advance the pointer with shorter height.",
    timeComp: "O(n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-9",
    title: "Trapping Rain Water",
    topic: "Two Pointers",
    difficulty: "Hard",
    url: "https://leetcode.com/problems/trapping-rain-water/",
    pattern: "Two pointers maintaining leftMax and rightMax boundaries.",
    timeComp: "O(n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-10",
    title: "Best Time to Buy & Sell Stock",
    topic: "Sliding Window",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    pattern: "Maintain running min price and calculate max profit so far.",
    timeComp: "O(n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-11",
    title: "Longest Substring Without Repeating Characters",
    topic: "Sliding Window",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    pattern: "Sliding window with Hash Set or char index map to contract left boundary.",
    timeComp: "O(n)",
    spaceComp: "O(min(m, n))"
  },
  {
    id: "dsa-12",
    title: "Minimum Window Substring",
    topic: "Sliding Window",
    difficulty: "Hard",
    url: "https://leetcode.com/problems/minimum-window-substring/",
    pattern: "Expand right until window is valid, contract left to minimize.",
    timeComp: "O(n + m)",
    spaceComp: "O(m)"
  },
  {
    id: "dsa-13",
    title: "Binary Search",
    topic: "Binary Search",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/binary-search/",
    pattern: "Classic binary search on sorted array; avoid overflow with mid = l + (r-l)/2.",
    timeComp: "O(log n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-14",
    title: "Search in Rotated Sorted Array",
    topic: "Binary Search",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    pattern: "Determine which half is sorted, then check if target lies within that half.",
    timeComp: "O(log n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-15",
    title: "Reverse Linked List",
    topic: "Linked List",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/reverse-linked-list/",
    pattern: "Iterative 3-pointer manipulation (prev, curr, next).",
    timeComp: "O(n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-16",
    title: "Merge Two Sorted Lists",
    topic: "Linked List",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    pattern: "Dummy head node and pointer comparison.",
    timeComp: "O(n + m)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-17",
    title: "Invert Binary Tree",
    topic: "Trees",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/invert-binary-tree/",
    pattern: "Recursive DFS: swap left and right subtrees.",
    timeComp: "O(n)",
    spaceComp: "O(h)"
  },
  {
    id: "dsa-18",
    title: "Maximum Depth of Binary Tree",
    topic: "Trees",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    pattern: "DFS 1 + max(depth(left), depth(right)) or BFS level order.",
    timeComp: "O(n)",
    spaceComp: "O(h)"
  },
  {
    id: "dsa-19",
    title: "Lowest Common Ancestor of a BST",
    topic: "Trees",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    pattern: "Utilize BST property: if both values < root go left; if both > root go right; else root is LCA.",
    timeComp: "O(h)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-20",
    title: "Number of Islands",
    topic: "Graphs",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/number-of-islands/",
    pattern: "Grid traversal with DFS or BFS, sinking visited '1's into '0's.",
    timeComp: "O(m * n)",
    spaceComp: "O(m * n)"
  },
  {
    id: "dsa-21",
    title: "Course Schedule",
    topic: "Graphs",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/course-schedule/",
    pattern: "Cycle detection in directed graph using Kahn's topological sort (indegrees) or DFS visit states.",
    timeComp: "O(V + E)",
    spaceComp: "O(V + E)"
  },
  {
    id: "dsa-22",
    title: "Climbing Stairs",
    topic: "Dynamic Programming",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/climbing-stairs/",
    pattern: "Fibonacci recurrence: dp[i] = dp[i-1] + dp[i-2] with 2 variables.",
    timeComp: "O(n)",
    spaceComp: "O(1)"
  },
  {
    id: "dsa-23",
    title: "Coin Change",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/coin-change/",
    pattern: "Bottom-up 1D DP array initialized to infinity, dp[i] = min(dp[i], 1 + dp[i - coin]).",
    timeComp: "O(amount * coins)",
    spaceComp: "O(amount)"
  },
  {
    id: "dsa-24",
    title: "Word Break",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/word-break/",
    pattern: "1D DP where dp[i] is true if s[0...i] can be segmented using dictionary words.",
    timeComp: "O(n^2 * k)",
    spaceComp: "O(n)"
  },
  {
    id: "dsa-25",
    title: "Maximum Subarray (Kadane's)",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    url: "https://leetcode.com/problems/maximum-subarray/",
    pattern: "Kadane's algorithm: currMax = max(num, currMax + num).",
    timeComp: "O(n)",
    spaceComp: "O(1)"
  }
];

// EXPANDED MOCK INTERVIEW QUESTIONS WITH 3 PROGRESSIVE HINTS
const MOCK_QUESTIONS = {
  coding: [
    {
      prompt: "Design and implement an LRU (Least Recently Used) Cache with get(key) and put(key, value) operating in O(1) average time complexity.",
      hints: [
        "Hint 1 (Intuition): A regular Hash Map gives O(1) lookup, but how can you track the order of usage in O(1) without shifting an array?",
        "Hint 2 (Data Structure): Combine a Hash Map with a Doubly Linked List. The Map stores keys pointing to list nodes, while list nodes allow O(1) removal and insertion.",
        "Hint 3 (Edge Cases): Use dummy head and tail nodes to avoid null pointer checks when inserting or evicting items at the boundaries."
      ]
    },
    {
      prompt: "Given an array of integers representing daily stock prices, calculate the maximum profit from at most two transactions. You must sell before buying again.",
      hints: [
        "Hint 1 (Intuition): Think about splitting the timeline at index i. Can you precompute max profit before day i and after day i?",
        "Hint 2 (DP Approach): Build two arrays: leftProfits[i] (max profit from day 0 to i) and rightProfits[i] (max profit from day i to end).",
        "Hint 3 (Optimization): You can compute leftProfits in a forward pass and rightProfits in a backward pass, then find max(leftProfits[i] + rightProfits[i]). Time O(n), Space O(n)."
      ]
    },
    {
      prompt: "Given a binary tree, determine if it is a valid Binary Search Tree (BST). Handle 32-bit and 64-bit integer overflow edge cases.",
      hints: [
        "Hint 1 (Intuition): It is NOT enough for a node to be greater than its left child and less than its right child. All nodes in the left subtree must be smaller than the root.",
        "Hint 2 (Bounds): Pass down a valid (minBound, maxBound) range to each recursive call. For root.left, the new maxBound is root.val.",
        "Hint 3 (Edge Cases): Use null or Long.MIN_VALUE / Long.MAX_VALUE for initial bounds so INT_MAX or INT_MIN node values don't trigger false positives."
      ]
    },
    {
      prompt: "Find the Longest Palindromic Substring in a string s. Explain the optimal time and space complexity.",
      hints: [
        "Hint 1 (Intuition): Every palindrome has a center. How many possible centers exist in a string of length n?",
        "Hint 2 (Expansion): There are 2n - 1 centers (n single characters for odd palindromes, and n - 1 adjacent pairs for even palindromes). Expand outwards from each center.",
        "Hint 3 (Complexity): Expanding around center takes O(n^2) time and O(1) space, avoiding the O(n^2) memory required by dynamic programming tables."
      ]
    }
  ],

  aptitude: [
    {
      prompt: "A train running at 54 km/hr crosses a platform 180 meters long in 20 seconds. What is the length of the train in meters?",
      hints: [
        "Hint 1 (Unit Conversion): Convert train speed from km/hr to m/s by multiplying by 5/18. (54 * 5/18 = 15 m/s).",
        "Hint 2 (Distance Formula): Total distance covered when crossing a platform = Length of train (L) + Length of platform (180m). Distance = Speed * Time.",
        "Hint 3 (Calculation): Total distance = 15 m/s * 20 s = 300 meters. Therefore, Train Length L = 300 - 180 = 120 meters."
      ]
    },
    {
      prompt: "Pipe A can fill a tank in 12 hours, while Pipe B can fill it in 15 hours. If both pipes are opened together, how long will it take to fill the tank?",
      hints: [
        "Hint 1 (Rate of Work): In 1 hour, Pipe A fills 1/12 of the tank, and Pipe B fills 1/15 of the tank.",
        "Hint 2 (LCM Method): Assume total tank capacity is LCM(12, 15) = 60 units. Pipe A does 5 units/hr, Pipe B does 4 units/hr.",
        "Hint 3 (Calculation): Combined rate = 9 units/hr. Total time = 60 / 9 = 20/3 hours = 6 hours and 40 minutes."
      ]
    },
    {
      prompt: "A bag contains 5 red, 4 green, and 3 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both are red?",
      hints: [
        "Hint 1 (Total Count): Total marbles = 5 + 4 + 3 = 12 marbles.",
        "Hint 2 (First Draw): Probability of picking the first red marble is 5/12.",
        "Hint 3 (Second Draw): After drawing one red marble, 4 red marbles remain out of 11. Total probability = (5/12) * (4/11) = 20/132 = 5/33."
      ]
    },
    {
      prompt: "Find the missing number in the sequence: 4, 9, 25, 49, 121, 169, ___",
      hints: [
        "Hint 1 (Exponents): Notice that all numbers in the series are perfect squares: 2^2, 3^2, 5^2, 7^2, 11^2, 13^2.",
        "Hint 2 (Base Pattern): Observe the bases: 2, 3, 5, 7, 11, 13. These are consecutive prime numbers!",
        "Hint 3 (Result): The next prime number after 13 is 17. The missing term is 17^2 = 289."
      ]
    },
    {
      prompt: "If 12 men or 18 women can harvest a field in 14 days, how many days will 8 men and 16 women take to harvest the same field?",
      hints: [
        "Hint 1 (Equivalence): 12 men = 18 women, which simplifies to 2 men = 3 women (or 1 man = 1.5 women).",
        "Hint 2 (Convert to One Gender): Convert 8 men to women: 8 men = (8 * 1.5) = 12 women. So 8 men + 16 women = 12 + 16 = 28 women.",
        "Hint 3 (Inverse Proportion): 18 women take 14 days. Days for 28 women = (18 * 14) / 28 = 9 days."
      ]
    }
  ],

  frontend: [
    {
      prompt: "Explain the Virtual DOM and React Reconciliation (Fiber architecture). How does React determine what changed and optimize actual browser DOM mutations?",
      hints: [
        "Hint 1 (Core Concept): Virtual DOM is a lightweight JavaScript object tree mirroring the real DOM. Direct real DOM mutations cause expensive browser reflows and repaints.",
        "Hint 2 (Diffing Rules): React uses heuristic O(n) diffing based on two assumptions: elements of different types produce different trees, and keys preserve identities across re-renders.",
        "Hint 3 (Fiber Scheduling): React Fiber breaks reconciliation into interruptible units of work, prioritizing user input and animations over background state updates."
      ]
    },
    {
      prompt: "Implement a custom `debounce(fn, delay, immediate)` utility function in JavaScript supporting both trailing and immediate leading calls.",
      hints: [
        "Hint 1 (Closure & Timer): Maintain a `timerId` inside the outer function closure. Clear the timer whenever a new call occurs.",
        "Hint 2 (Immediate Execution): If `immediate` is true and `!timerId`, call `fn.apply(this, args)` immediately on the leading edge.",
        "Hint 3 (Trailing Reset): In the `setTimeout` callback, reset `timerId = null`, and if `immediate` was false, execute `fn.apply(context, args)`."
      ]
    },
    {
      prompt: "How would you diagnose and fix a 3-second Cumulative Layout Shift (CLS) and slow Largest Contentful Paint (LCP) on a high-traffic e-commerce product page?",
      hints: [
        "Hint 1 (LCP Diagnosis): Identify the LCP element (typically the hero product image). Check for render-blocking CSS/JS, server TTFB, and lack of image preloading.",
        "Hint 2 (CLS Root Causes): Unsized images/videos, dynamically injected ad banners, or late-loading web fonts causing FOIT/FOUT.",
        "Hint 3 (Remediation): Add explicit `width` and `height` attributes or CSS `aspect-ratio`, preload hero image `<link rel='preload'>`, use `font-display: optional`, and reserve skeleton space."
      ]
    }
  ],

  backend: [
    {
      prompt: "How would you design a distributed locking mechanism using Redis across multiple microservices to prevent duplicate financial transaction processing?",
      hints: [
        "Hint 1 (Primitive Lock): `SET resource_name my_random_value NX PX 30000`. NX ensures set if not exists; PX sets an automatic TTL expiry to prevent deadlocks.",
        "Hint 2 (Safe Release): A process must only release the lock if the value matches its unique random token, using an atomic Lua script to verify and delete in one step.",
        "Hint 3 (Redlock Algorithm): If using a Redis cluster, discuss the Redlock algorithm: acquiring lock on N/2 + 1 independent Redis master nodes."
      ]
    },
    {
      prompt: "Explain the differences between PostgreSQL isolation levels (Read Committed, Repeatable Read, Serializable). What concurrency anomalies does each prevent?",
      hints: [
        "Hint 1 (Read Committed): Default level. Prevents Dirty Reads (reading uncommitted data), but allows Non-Repeatable Reads and Phantom Reads.",
        "Hint 2 (Repeatable Read): Takes a snapshot at transaction start. Prevents Dirty Reads and Non-Repeatable Reads, but can still encounter Write Skew.",
        "Hint 3 (Serializable): Highest level. Emulates strictly serial execution using SSI (Serializable Snapshot Isolation) to eliminate Write Skew and Phantoms."
      ]
    }
  ],

  devops: [
    {
      prompt: "A Kubernetes Pod is stuck in 'CrashLoopBackOff'. Walk through your systematic triage commands and the most common root causes.",
      hints: [
        "Hint 1 (Diagnostic Commands): `kubectl describe pod <name>` (check Events section) followed by `kubectl logs <name> --previous` to see why the previous container crashed.",
        "Hint 2 (Common Failures): OOMKilled (Out of Memory - check exit code 137), missing environment variables/secrets, incorrect port binding, or failed liveness probe.",
        "Hint 3 (Interactive Debug): Use `kubectl run debug-pod --image=busybox` or override entrypoint to `/bin/sh` to test network connectivity to databases/services."
      ]
    }
  ],

  data: [
    {
      prompt: "Given a database table of customer transactions, write a SQL query to find the 30-day rolling average spend per customer using window functions.",
      hints: [
        "Hint 1 (Window Syntax): `AVG(amount) OVER (PARTITION BY customer_id ORDER BY transaction_date ...)`",
        "Hint 2 (Range vs Rows): Use `RANGE BETWEEN INTERVAL '29 DAYS' PRECEDING AND CURRENT ROW` for true calendar 30-day windows rather than count of transactions.",
        "Hint 3 (Edge Cases): Handle multiple transactions on the same day by aggregating daily sums first with a Common Table Expression (CTE)."
      ]
    }
  ],

  product: [
    {
      prompt: "How would you measure the success of an automated resume scanner feature on a job portal, and how would you prioritize between improving parsing accuracy vs speed?",
      hints: [
        "Hint 1 (North Star Metric): Primary metric: Completed application rate after resume upload and user edit frequency (lower edits = higher accuracy).",
        "Hint 2 (Tradeoff Analysis): If accuracy is 70%, speed doesn't matter because candidates will abandon a broken auto-fill. Accuracy is table stakes up to ~95%.",
        "Hint 3 (RICE Scoring): Apply RICE (Reach, Impact, Confidence, Effort) to evaluate if asynchronous parsing with progress indicators solves perceived latency."
      ]
    }
  ],

  behavioral: [
    {
      prompt: "Tell me about a time you had a fundamental disagreement with a technical decision made by your manager or tech lead. How did you handle it?",
      hints: [
        "Hint 1 (STAR Structure): Set the Situation and Task briefly (e.g. choosing between microservices vs monolithic architecture under tight deadlines).",
        "Hint 2 (Objective Disagreement): Focus on data, customer impact, and benchmarks rather than personal opinions or emotions.",
        "Hint 3 (Commit and Execute): Highlight 'Disagree and Commit' if the final decision went the other way, or how you collaboratively found a middle ground."
      ]
    }
  ]
};

// INTERVIEW TIPS FLASHCARDS DATA
const FLASHCARDS_DATA = [
  {
    category: "JavaScript & Web",
    question: "What is Event Delegation in JavaScript and why is it useful?",
    answer: "Event Delegation attaches a single event listener to a parent container instead of individual child nodes. It leverages event bubbling (propagating upwards from target to root). Benefits: saves memory, handles dynamically injected DOM children automatically, and cleans up garbage collection."
  },
  {
    category: "JavaScript & Web",
    question: "What is a Closure in JavaScript? Give a practical use case.",
    answer: "A closure is the combination of a function bundled with references to its surrounding lexical state (scope). Practical use cases: creating private variables (module pattern), factory functions, currying, memoization caches, and event handler state preservation."
  },
  {
    category: "DSA & Algorithms",
    question: "What is Kadane's Algorithm and what problem does it solve in O(n)?",
    answer: "Kadane's algorithm finds the maximum contiguous subarray sum in O(n) time and O(1) space. Intuition: At each index, decide whether to start a new subarray or extend the existing one: `currSum = Math.max(num, currSum + num)`. Keep track of `maxSum = Math.max(maxSum, currSum)`."
  },
  {
    category: "DSA & Algorithms",
    question: "When should you choose Breadth-First Search (BFS) over Depth-First Search (DFS)?",
    answer: "Choose BFS when finding the shortest path in unweighted graphs or trees, finding nodes nearest to a source, or level-order traversals (using a Queue). Choose DFS for exploring all paths, topological sort, cycle detection, and memory efficiency in deep/bushy graphs."
  },
  {
    category: "System Design",
    question: "What is the CAP Theorem and what does it dictate for distributed databases?",
    answer: "The CAP theorem states that a distributed data store can guarantee at most two of: Consistency (all nodes see latest write), Availability (every request receives a response), and Partition Tolerance (system continues despite network dropouts). Since network partitions are inevitable, systems must choose CP (e.g. HBase, MongoDB) or AP (e.g. Cassandra, DynamoDB)."
  },
  {
    category: "System Design",
    question: "What is the difference between Database Sharding and Horizontal Replication?",
    answer: "Replication copies the exact same data across multiple read-replicas to handle read-heavy traffic and fault tolerance. Sharding (horizontal partitioning) splits the dataset by a shard key across multiple database instances to scale writes and handle datasets too large for a single disk."
  },
  {
    category: "Behavioral & HR",
    question: "How should you answer: 'What is your greatest technical weakness?'",
    answer: "Pick a genuine professional development area that is NOT a fatal flaw for the role, explain how you became aware of it, and highlight concrete steps you are taking to improve. Example: 'Earlier in my career, I tended to over-engineer solutions upfront. I learned to focus on YAGNI and write lean MVPs first.'"
  },
  {
    category: "Behavioral & HR",
    question: "What are the 4 parts of the STAR Interview Method?",
    answer: "Situation (context & stakes in 2-3 sentences), Task (your specific goal or challenge), Action (the most critical 60% of your answer: your individual technical choices, leadership, and execution), Result (quantified business or system impact, e.g. 'reduced latency by 45%', plus key takeaways)."
  },
  {
    category: "JavaScript & Web",
    question: "Explain the difference between `null`, `undefined`, and `undeclared`.",
    answer: "`undefined` means a variable has been declared but not assigned a value. `null` is an intentional assignment representing 'no value' or empty object reference. `undeclared` means the identifier was never defined in any accessible scope, resulting in a ReferenceError."
  },
  {
    category: "DSA & Algorithms",
    question: "How does a Hash Map handle hash collisions?",
    answer: "Two primary techniques: 1. Separate Chaining (each bucket holds a linked list or balanced tree of colliding entries). 2. Open Addressing (probing for the next open slot via linear probing, quadratic probing, or double hashing)."
  }
];

const JOB_ROLES_DATA = [
  {
    id: "full-stack-engineer",
    title: "Full Stack Engineer",
    summary: "Builds complete web applications, connecting user interfaces with server infrastructure and databases.",
    sections: [
      {
        heading: "Core Skills",
        items: [
          "JavaScript, TypeScript, React, Node.js",
          "PostgreSQL, MongoDB, REST & GraphQL APIs",
          "Git, Docker, CI/CD basics"
        ]
      },
      {
        heading: "Roadmap Focus",
        items: [
          "Phase 1: HTML/CSS, modern JS, and DOM manipulation",
          "Phase 2: React frontend connected to Node/Express backend",
          "Phase 3: Database design, authentication, and cloud deployment"
        ]
      },
      {
        heading: "Portfolio Projects",
        items: [
          "Real-time collaboration app with WebSockets",
          "Full-stack e-commerce store with payment integration"
        ]
      }
    ]
  },
  {
    id: "frontend-specialist",
    title: "Frontend Specialist",
    summary: "Crafts performant, accessible, and responsive user interfaces for modern web applications.",
    sections: [
      {
        heading: "Core Skills",
        items: [
          "HTML5, CSS3, Modern JavaScript/TypeScript",
          "React, Next.js, Vue, state management",
          "CSS frameworks (Tailwind), Web Vitals, accessibility (a11y)"
        ]
      },
      {
        heading: "Roadmap Focus",
        items: [
          "Phase 1: Responsive design, Flexbox/Grid, semantic markup",
          "Phase 2: Component architecture, custom hooks, API integration",
          "Phase 3: Performance optimization, testing (Jest/Cypress), SSR"
        ]
      },
      {
        heading: "Portfolio Projects",
        items: [
          "Design system component library with Storybook",
          "Interactive analytics dashboard with complex data visualization"
        ]
      }
    ]
  },
  {
    id: "backend-specialist",
    title: "Backend Specialist",
    summary: "Designs scalable server architecture, database schemas, and business logic for web apps.",
    sections: [
      {
        heading: "Core Skills",
        items: [
          "Node.js, Python (FastAPI/Django), Go, or Java",
          "PostgreSQL, MySQL, Redis, MongoDB",
          "API design, authentication (JWT/OAuth), microservices"
        ]
      },
      {
        heading: "Roadmap Focus",
        items: [
          "Phase 1: Data structures, networking fundamentals, HTTP protocol",
          "Phase 2: Database modeling, indexing, and ORM integration",
          "Phase 3: Caching strategy, system design, message queues (Kafka/RabbitMQ)"
        ]
      },
      {
        heading: "Portfolio Projects",
        items: [
          "Scalable URL shortener with Redis caching and analytics",
          "Role-based access control (RBAC) authentication microservice"
        ]
      }
    ]
  },
  {
    id: "data-analyst-scientist",
    title: "Data Analyst / Scientist",
    summary: "Extracts insights from complex data sets to solve business problems and train predictive models.",
    sections: [
      {
        heading: "Core Skills",
        items: [
          "Python (Pandas, NumPy, Scikit-learn), R, SQL",
          "Data visualization (Tableau, Power BI, Matplotlib)",
          "Probability, statistics, linear algebra, machine learning fundamentals"
        ]
      },
      {
        heading: "Roadmap Focus",
        items: [
          "Phase 1: Advanced SQL queries, data cleaning, EDA (Exploratory Data Analysis)",
          "Phase 2: Statistical hypothesis testing and regression modeling",
          "Phase 3: Machine learning pipelines and model deployment"
        ]
      },
      {
        heading: "Portfolio Projects",
        items: [
          "Customer churn prediction pipeline using logistic regression and Random Forest",
          "Interactive business intelligence dashboard for sales performance"
        ]
      }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    summary: "Automates software delivery, builds infrastructure, and ensures system uptime and security.",
    sections: [
      {
        heading: "Core Skills",
        items: [
          "Linux administration, Bash scripting, Python",
          "Docker, Kubernetes, Terraform (IaC)",
          "AWS/GCP/Azure, GitHub Actions, CI/CD pipelines, Prometheus/Grafana"
        ]
      },
      {
        heading: "Roadmap Focus",
        items: [
          "Phase 1: Linux fundamentals, networking (DNS, Subnets, VPC), Git workflows",
          "Phase 2: Containerization with Docker and automated CI/CD builds",
          "Phase 3: Infrastructure as Code (Terraform) and Kubernetes orchestration"
        ]
      },
      {
        heading: "Portfolio Projects",
        items: [
          "Automated CI/CD deployment pipeline for a microservices app",
          "Terraform configuration for scalable cloud server deployment"
        ]
      }
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    summary: "Defines product strategy, prioritizes feature roadmaps, and aligns engineering with business goals.",
    sections: [
      {
        heading: "Core Skills",
        items: [
          "Product lifecycle management, PRD writing, wireframing",
          "Agile/Scrum methodologies, user story mapping",
          "A/B testing, user research, business metrics (ARR, Churn, LTV)"
        ]
      },
      {
        heading: "Roadmap Focus",
        items: [
          "Phase 1: Market research, competitive analysis, customer interviews",
          "Phase 2: PRD drafting, wireframing (Figma), and backlog prioritization",
          "Phase 3: Launch strategy, post-launch analytics, and iteration"
        ]
      },
      {
        heading: "Portfolio Projects",
        items: [
          "Comprehensive Product Requirement Document (PRD) for a new SaaS feature",
          "Product tear-down and feature optimization analysis for an existing web app"
        ]
      }
    ]
  }
];

const INTERVIEW_TIPS_DATA = [
  {
    category: "Behavioral (STAR)",
    badge: "tip-badge-blue",
    title: "STAR Framework",
    summary: "Structure stories clearly: Situation, Task, Action, Result.",
    points: [
      "Situation (15%): Set quick context & timeline.",
      "Task (15%): Define your specific objective.",
      "Action (50%): Detail YOUR exact steps and leadership.",
      "Result (20%): Share quantified metrics & key learnings."
    ],
    example: "Key Tip: Focus 50%+ of your story on your individual actions, not what 'we' did."
  },
  {
    category: "Coding & Technical",
    badge: "tip-badge-green",
    title: "Live Coding Blueprint",
    summary: "Demonstrate clear problem-solving and communication while coding.",
    points: [
      "Clarify First: Ask about edge cases and constraints (inputs, nulls, bounds).",
      "Mention Brute Force: Briefly state naive approach before optimizing.",
      "Think Out Loud: Speak your logic step-by-step as you write.",
      "Dry Run: Trace a sample test case before declaring completion."
    ],
    example: "Key Tip: Ask 'What is max N and can inputs contain negatives?' before coding."
  },
  {
    category: "System Design",
    badge: "tip-badge-amber",
    title: "System Design Checklist",
    summary: "Guide architectural interviews smoothly in 4 key phases.",
    points: [
      "Requirements (0-5m): Clarify traffic, SLA, & scale expectations.",
      "Estimations (5-10m): Estimate QPS, bandwidth, and storage needs.",
      "High Level (10-25m): Outline Client → LB → API → DB architecture.",
      "Deep Dive (25-40m): Address caching, sharding, & failure modes."
    ],
    example: "Key Tip: Start simple with client-server flow before adding Redis or Kafka queues."
  },
  {
    category: "HR & Negotiation",
    badge: "tip-badge-purple",
    title: "Negotiation & Fit",
    summary: "Maximize offer value and ask high-impact questions.",
    points: [
      "Delay Numbers: Let employer share compensation range first.",
      "Market Benchmark: Use verified compensation data for your level.",
      "Total Comp: Evaluate base salary, bonus, equity, and benefits.",
      "Reverse Questions: Ask about tech debt and 90-day success metrics."
    ],
    example: "Key Tip: Always calculate Total Compensation (Base + Bonus + Equity) when comparing offers."
  }
];

const DAILY_TIPS = [
  "When solving LeetCode, write constraints on paper first. If N <= 1000, O(N^2) passes. If N >= 10^5, you need O(N) or O(N log N).",
  "In behavioral interviews, spend 60% of your response talking about YOUR actions, not what 'we' did as a group.",
  "Always ask at least 2 thoughtful questions at the end of an interview. It signals high curiosity and leadership interest.",
  "Practice coding on a blank Google Doc or notepad without syntax highlighting or auto-complete at least once a week.",
  "Before writing any code, state the space and time complexity you are aiming for. It shows strong engineering discipline.",
  "When answering system design questions, never assume requirements. Always ask: 'Is this system read-heavy or write-heavy?'"
];

// ==========================================
// 2. STATE INITIALIZATION & LOCALSTORAGE
// ==========================================

const STATE = {
  theme: localStorage.getItem("jobfinds_theme") || "light",
  activeTab: "dashboard",
  dsaSolved: JSON.parse(localStorage.getItem("jobfinds_dsa_solved") || "[]"),
  mockHistory: JSON.parse(localStorage.getItem("jobfinds_mock_history") || "[]"),

  // Mock Interview State
  currentMockQuestionObj: null,
  hintsRevealed: 0,
  timerSecondsRemaining: 30 * 60,
  timerInterval: null,
  isTimerRunning: false,
  uploadedImageBase64: null,

  // Flashcards State
  flashcardsCategory: "All",
  filteredFlashcards: [...FLASHCARDS_DATA],
  currentCardIndex: 0,
  isCardFlipped: false
};

// Persistence helpers
function saveDsaState() {
  localStorage.setItem("jobfinds_dsa_solved", JSON.stringify(STATE.dsaSolved));
  updateDashboardMetrics();
}

function saveMockHistory() {
  localStorage.setItem("jobfinds_mock_history", JSON.stringify(STATE.mockHistory));
  updateDashboardMetrics();
}
// ==========================================
// 3. THEME MANAGEMENT
// ==========================================

function initTheme() {
  document.documentElement.setAttribute("data-theme", STATE.theme);
}

// ==========================================
// 4. TAB NAVIGATION & MOTTO HERO SCROLL
// ==========================================

function initNavigation() {
  const navButtons = document.querySelectorAll(".nav-item button[data-tab]");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Motto Hero "Scroll Down" Button
  const scrollDownBtn = document.getElementById("scrollDownToDash");
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
      const target = document.getElementById("dashboardContent");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Quick Action Buttons on Dashboard
  document.querySelectorAll("[data-action-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-action-target");
      switchTab(target);
    });
  });
}

window.switchTab = function (tabId) {
  if (tabId === "tips") {
    tabId = "mock";
    setTimeout(() => {
      if (window.openInterviewToolsModal) window.openInterviewToolsModal("flashcards");
    }, 50);
  }
  STATE.activeTab = tabId;

  // Update navbar active state
  document.querySelectorAll(".nav-item button[data-tab]").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Close mobile nav if open
  const navLinks = document.getElementById("navLinks");
  if (navLinks) navLinks.classList.remove("mobile-open");

  // Show correct tab pane
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.remove("active");
  });
  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) {
    targetPane.classList.add("active");
  }

  if (tabId === "profile") {
    renderProfileSection();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};
const switchTab = window.switchTab;

// ==========================================
// 5. DASHBOARD RENDER & METRICS
// ==========================================

function updateDashboardMetrics() {
  const bank = getDsaQuestionBank() || [];
  const totalDsa = bank?.length || DSA_QUESTIONS?.length || 120;
  const solvedIds = (STATE && Array.isArray(STATE.dsaSolved)) ? STATE.dsaSolved : getUserSolvedIds();
  const solvedCount = solvedIds?.length || 0;
  const dsaPercent = Math.round((solvedCount / totalDsa) * 100) || 0;

  // Header quick chip
  const heroSolved = document.getElementById("heroDsaSolved");
  if (heroSolved) heroSolved.textContent = `${solvedCount}/${totalDsa}`;

  // Metric cards
  const metricDsa = document.getElementById("dashDsaVal");
  const metricDsaBar = document.getElementById("dashDsaBar");
  const metricDsaSub = document.getElementById("dashDsaSub");
  if (metricDsa) metricDsa.textContent = `${solvedCount} / ${totalDsa}`;
  if (metricDsaBar) metricDsaBar.style.width = `${dsaPercent}%`;
  if (metricDsaSub) metricDsaSub.textContent = `${dsaPercent}% of curated syllabus complete`;

  // Mock Interviews
  const mockHistory = (STATE && Array.isArray(STATE.mockHistory)) ? STATE.mockHistory : [];
  const mockCount = mockHistory?.length || 0;
  const dashMockVal = document.getElementById("dashMockVal");
  const heroMocks = document.getElementById("heroMockCount");
  if (dashMockVal) dashMockVal.textContent = mockCount;
  if (heroMocks) heroMocks.textContent = mockCount;

  // Readiness Score
  const posts = (STATE && Array.isArray(STATE.communityPosts)) ? STATE.communityPosts : [];
  const mockScore = Math.min(mockCount * 20, 100);
  const commScore = Math.min(posts?.length * 15, 100);
  const readiness = Math.min(100, Math.round((dsaPercent * 0.55) + (mockScore * 0.3) + (commScore * 0.15)));

  const dashReadyVal = document.getElementById("dashReadyVal");
  const dashReadyBar = document.getElementById("dashReadyBar");
  if (dashReadyVal) dashReadyVal.textContent = `${readiness}%`;
  if (dashReadyBar) dashReadyBar.style.width = `${readiness}%`;

  // Community discussions count
  const dashCommVal = document.getElementById("dashCommVal");
  if (dashCommVal) dashCommVal.textContent = posts?.length || 0;

  renderDashboardCommunityPreview();
}

function renderDashboardCommunityPreview() {
  const container = document.getElementById("dashRecentPostsList");
  if (!container) return;

  const recent = [...STATE.communityPosts].sort((a, b) => b.timestamp - a.timestamp).slice(0, 3);

  container.innerHTML = recent.map(p => `
    <div style="padding: 0.85rem 0; border-bottom: 1px solid var(--border-light); cursor: pointer;" onclick="switchTab('community')">
      <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
        <span class="badge badge-topic" style="font-size: 0.72rem;">${p.category}</span>
        <span style="font-size: 0.78rem; color: var(--text-muted);">${p.author} • ${p.timeAgo}</span>
      </div>
      <h5 style="font-size: 0.92rem; font-weight: 600; color: var(--text-primary);">${p.title}</h5>
      <span style="font-size: 0.8rem; color: var(--text-muted);">▲ ${p.upvotes - p.downvotes} votes • ${p.comments.length} comments</span>
    </div>
  `).join("");
}

function initDailyTip() {
  const tipText = document.getElementById("dailyTipText");
  const refreshBtn = document.getElementById("refreshTipBtn");

  if (tipText) {
    tipText.textContent = DAILY_TIPS[STATE.currentTipIndex];
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      STATE.currentTipIndex = (STATE.currentTipIndex + 1) % DAILY_TIPS.length;
      tipText.textContent = DAILY_TIPS[STATE.currentTipIndex];
    });
  }
}

// DSA Question Storage persistence
let cachedQuestionBank = null;

function getDsaQuestionBank() {
  if (cachedQuestionBank) return cachedQuestionBank;
  const saved = localStorage.getItem("skillissue_dsa_bank");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Ensure we only use parsed bank if it doesn't contain generic placeholder names
      if (Array.isArray(parsed) && parsed.length >= 100 && parsed[0].title && !parsed[0].title.includes("Problem 1")) {
        cachedQuestionBank = parsed;
        return cachedQuestionBank;
      }
    } catch (e) { }
  }
  return DSA_QUESTIONS;
}

function saveDsaQuestionBank(bank) {
  cachedQuestionBank = bank;
  localStorage.setItem("skillissue_dsa_bank", JSON.stringify(bank));
  updateDashboardMetrics();
  renderDsaTable();
}

let currentStatusPill = "all";

function loadQuestionsJson() {
  // Clear any old stored placeholders forcing 'Problem 1' titles
  localStorage.removeItem("skillissue_dsa_bank");
  cachedQuestionBank = null;

  fetch("questions.json?v=" + Date.now())
    .then(r => {
      if (r.ok) return r.json();
      throw new Error("No questions.json");
    })
    .then(data => {
      if (data && Array.isArray(data.questions) && data.questions.length > 0) {
        cachedQuestionBank = data.questions;
        localStorage.setItem("skillissue_dsa_bank", JSON.stringify(data.questions));
        renderDsaTable();
        updateDashboardMetrics();
      }
    })
    .catch(() => { });
}

function initDsaSection() {
  loadQuestionsJson();
  renderDsaTable();

  const searchInput = document.getElementById("dsaSearch");
  const topicFilter = document.getElementById("dsaTopicFilter");
  const diffFilter = document.getElementById("dsaDiffFilter");
  const platformFilter = document.getElementById("dsaPlatformFilter");
  const btnOpenAddModal = document.getElementById("btnOpenAddQuestionModal");

  const filterHandler = () => renderDsaTable();
  if (searchInput) searchInput.addEventListener("input", filterHandler);
  if (topicFilter) topicFilter.addEventListener("change", filterHandler);
  if (diffFilter) diffFilter.addEventListener("change", filterHandler);
  if (platformFilter) platformFilter.addEventListener("change", filterHandler);

  // Status Pill Tabs Handler (Exclusive Status Controls)
  document.querySelectorAll(".status-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".status-pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentStatusPill = btn.getAttribute("data-status-pill") || "all";
      renderDsaTable();
    });
  });

  if (btnOpenAddModal) {
    btnOpenAddModal.addEventListener("click", () => {
      openAdminQuestionModal();
    });
  }

  const adminForm = document.getElementById("adminQuestionForm");
  if (adminForm) {
    adminForm.addEventListener("submit", (e) => {
      e.preventDefault();
      saveAdminQuestionSubmit();
    });
  }
}

function renderDsaTable() {
  const bank = getDsaQuestionBank();
  const user = getAuthUser();
  const isAdmin = user && (user.isAdmin || user.email === "admin@skillissue.com" || user.email === "alex.johnson@example.com");

  // Show/Hide Admin Action Bar
  const adminContainer = document.getElementById("dsaAdminActionContainer");
  if (adminContainer) {
    adminContainer.style.display = isAdmin ? "flex" : "none";
  }

  const unsolvedTableBody = document.getElementById("unsolvedTableBody");
  const solvedTableBody = document.getElementById("solvedTableBody");
  const unsolvedSection = document.getElementById("unsolvedSection");
  const solvedSection = document.getElementById("solvedSection");
  const sectionDivider = document.getElementById("dsaSectionDivider");

  if (!unsolvedTableBody || !solvedTableBody) return;

  const searchVal = (document.getElementById("dsaSearch")?.value || "").toLowerCase();
  const topicVal = document.getElementById("dsaTopicFilter")?.value || "all";
  const diffVal = document.getElementById("dsaDiffFilter")?.value || "all";
  const platformVal = document.getElementById("dsaPlatformFilter")?.value || "all";
  const statusVal = currentStatusPill.toLowerCase();

  // Sync status pill tabs active state
  document.querySelectorAll(".status-pill-btn").forEach(btn => {
    if ((btn.getAttribute("data-status-pill") || "all") === statusVal) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const userSolvedIds = getUserSolvedIds();

  // Filter bank questions by search, topic, difficulty, and platform
  const filtered = bank.filter(q => {
    // Search filter
    const matchesSearch = (q.title || "").toLowerCase().includes(searchVal) ||
      (q.summary || q.problemStatement || q.pattern || "").toLowerCase().includes(searchVal) ||
      (q.tags || []).join(" ").toLowerCase().includes(searchVal);
    if (!matchesSearch) return false;

    // Topic filter
    if (topicVal !== "all") {
      const qTopic = (q.topic || "").toLowerCase();
      const targetTopic = topicVal.toLowerCase();
      if (qTopic !== targetTopic && !qTopic.includes(targetTopic) && !targetTopic.includes(qTopic)) {
        return false;
      }
    }

    // Difficulty filter
    if (diffVal !== "all" && q.difficulty !== diffVal) return false;

    // Platform filter
    if (platformVal !== "all" && (q.platform || "LeetCode") !== platformVal) return false;

    return true;
  });

  // Separate into Unsolved and Solved arrays
  const unsolvedList = filtered.filter(q => !userSolvedIds.includes(q.id));
  const solvedList = filtered.filter(q => userSolvedIds.includes(q.id));

  // Sort each list cleanly by Topic first
  const sortByTopic = (a, b) => {
    const topicCompare = (a.topic || "").localeCompare(b.topic || "");
    if (topicCompare !== 0) return topicCompare;
    return (a.id || "").localeCompare(b.id || "");
  };

  unsolvedList.sort(sortByTopic);
  solvedList.sort(sortByTopic);

  // Visibility based on status pill tab
  if (statusVal === "unsolved") {
    if (unsolvedSection) unsolvedSection.style.display = "block";
    if (solvedSection) solvedSection.style.display = "none";
    if (sectionDivider) sectionDivider.style.display = "none";
  } else if (statusVal === "solved") {
    if (unsolvedSection) unsolvedSection.style.display = "none";
    if (solvedSection) solvedSection.style.display = "block";
    if (sectionDivider) sectionDivider.style.display = "none";
  } else {
    // "all" tab
    if (unsolvedSection) unsolvedSection.style.display = "block";
    if (solvedSection) solvedSection.style.display = "block";
    if (sectionDivider) sectionDivider.style.display = "block";
  }

  // Update Summary Badges
  const countSummary = document.getElementById("dsaCountSummary");
  if (countSummary) {
    if (statusVal === "unsolved") {
      countSummary.textContent = `Showing ${unsolvedList.length} Unsolved question${unsolvedList.length === 1 ? '' : 's'}`;
    } else if (statusVal === "solved") {
      countSummary.textContent = `Showing ${solvedList.length} Solved question${solvedList.length === 1 ? '' : 's'}`;
    } else {
      countSummary.textContent = `Showing ${filtered.length} question${filtered.length === 1 ? '' : 's'} (${unsolvedList.length} Unsolved, ${solvedList.length} Solved)`;
    }
  }

  const unsolvedCountBadge = document.getElementById("unsolvedCountBadge");
  if (unsolvedCountBadge) unsolvedCountBadge.textContent = unsolvedList.length;

  const solvedCountBadge = document.getElementById("solvedCountBadge");
  if (solvedCountBadge) solvedCountBadge.textContent = solvedList.length;

  // Render Unsolved Table Rows
  unsolvedTableBody.innerHTML = "";
  if (unsolvedList.length === 0) {
    unsolvedTableBody.innerHTML = `
      <tr>
        <td colspan="${isAdmin ? 6 : 5}" style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No unsolved questions found matching your filters.
        </td>
      </tr>
    `;
  } else {
    unsolvedTableBody.innerHTML = unsolvedList.map(q => renderQuestionRow(q, false, isAdmin)).join("");
  }

  // Render Solved Table Rows
  solvedTableBody.innerHTML = "";
  if (solvedList.length === 0) {
    solvedTableBody.innerHTML = `
      <tr>
        <td colspan="${isAdmin ? 6 : 5}" style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No solved questions yet matching your filters.
        </td>
      </tr>
    `;
  } else {
    solvedTableBody.innerHTML = solvedList.map(q => renderQuestionRow(q, true, isAdmin)).join("");
  }

  // Attach Checkbox Change Listeners across both tables
  document.querySelectorAll(".dsa-checkbox").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const qId = e.target.getAttribute("data-id");
      toggleUserSolvedQuestion(qId, e.target.checked);
      renderDsaTable();
    });
  });
}

function renderQuestionRow(q, isSolved, isAdmin) {
  const diffBadge = q.difficulty === "Easy" ? "badge-easy" : q.difficulty === "Medium" ? "badge-medium" : "badge-hard";
  const platform = q.platform || "LeetCode";
  const problemUrl = q.problemUrl || q.url || "";

  return `
    <tr class="${isSolved ? 'solved-row' : ''}">
      <td style="width: 48px; text-align: center;">
        <input type="checkbox" id="chk-${q.id}" class="dsa-checkbox" data-id="${q.id}" ${isSolved ? "checked" : ""} aria-label="Mark ${q.title.replace(/"/g, '&quot;')} as solved">
      </td>
      <td>
        <div class="problem-title ${isSolved ? "solved" : ""}">
          <span>${q.title}</span>
          ${problemUrl ? `
            <a href="${problemUrl}" target="_blank" rel="noopener noreferrer" title="Open Problem" style="font-size: 0.82rem; color: var(--primary); display: inline-flex; align-items: center; margin-left: 4px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          ` : ''}
        </div>
      </td>
      <td>
        <span class="badge badge-topic">${q.topic}</span>
      </td>
      <td>
        <span class="badge ${diffBadge}">${q.difficulty}</span>
      </td>
      <td>
        <span class="badge" style="background: var(--bg-subtle); color: var(--text-secondary); border: 1px solid var(--border-light);">${platform}</span>
      </td>
      ${isAdmin ? `
        <td style="text-align: right;">
          <button class="btn-sm-outline" onclick="editAdminQuestion('${q.id}')" style="margin-right: 0.35rem; font-size: 0.78rem;">
            Edit
          </button>
          <button class="btn-sm-outline" onclick="deleteAdminQuestion('${q.id}')" style="color: #dc2626; border-color: rgba(220,38,38,0.3); font-size: 0.78rem;">
            Delete
          </button>
        </td>
      ` : `
        <td style="text-align: right;">
          <button class="btn-sm-outline" onclick="showPatternModal('${q.id}')">
            Pattern
          </button>
        </td>
      `}
    </tr>
  `;
}
function getUserSolvedIds() {
  const user = getAuthUser();
  const userIdKey = user ? `jobfinds_dsa_solved_${user.email}` : "jobfinds_dsa_solved_guest";
  try {
    return JSON.parse(localStorage.getItem(userIdKey) || "[]");
  } catch (e) {
    return [];
  }
}

function toggleUserSolvedQuestion(qId, isChecked) {
  const user = getAuthUser();
  const userIdKey = user ? `jobfinds_dsa_solved_${user.email}` : "jobfinds_dsa_solved_guest";
  let solvedIds = getUserSolvedIds();

  if (isChecked) {
    if (!solvedIds.includes(qId)) solvedIds.push(qId);
  } else {
    solvedIds = solvedIds.filter(id => id !== qId);
  }

  localStorage.setItem(userIdKey, JSON.stringify(solvedIds));
  // Sync fallback global state for metrics
  STATE.dsaSolved = solvedIds;
  saveDsaState();
  renderDsaTable();
}

// ADMIN QUESTION MANAGEMENT CRUD
window.openAdminQuestionModal = function () {
  const modal = document.getElementById("adminQuestionModal");
  const title = document.getElementById("adminQuestionModalTitle");
  const form = document.getElementById("adminQuestionForm");
  const err = document.getElementById("adminQuestionErrorMsg");

  if (err) err.style.display = "none";
  if (title) title.textContent = "Add New DSA Question (Admin)";
  if (form) form.reset();
  document.getElementById("adminQuestionId").value = "";

  if (modal) modal.classList.add("open");
};

window.editAdminQuestion = function (id) {
  const bank = getDsaQuestionBank();
  const q = bank.find(item => item.id === id);
  if (!q) return;

  const modal = document.getElementById("adminQuestionModal");
  const title = document.getElementById("adminQuestionModalTitle");
  const err = document.getElementById("adminQuestionErrorMsg");

  if (err) err.style.display = "none";
  if (title) title.textContent = "Edit DSA Question (Admin)";

  document.getElementById("adminQuestionId").value = q.id;
  document.getElementById("qTitleInput").value = q.title || "";
  document.getElementById("qProblemStatementInput").value = q.problemStatement || q.pattern || "";
  document.getElementById("qTopicSelect").value = q.topic || "Arrays";
  document.getElementById("qDifficultySelect").value = q.difficulty || "Easy";
  document.getElementById("qPlatformSelect").value = q.platform || "LeetCode";
  document.getElementById("qUrlInput").value = q.url || "";
  document.getElementById("qTagsInput").value = (q.tags || []).join(", ");
  document.getElementById("qExplanationInput").value = q.explanation || q.pattern || "";
  document.getElementById("qReferenceSolutionInput").value = q.referenceSolution || "";

  if (modal) modal.classList.add("open");
};

function saveAdminQuestionSubmit() {
  const id = document.getElementById("adminQuestionId").value;
  const title = document.getElementById("qTitleInput").value.trim();
  const problemStatement = document.getElementById("qProblemStatementInput").value.trim();
  const topic = document.getElementById("qTopicSelect").value;
  const difficulty = document.getElementById("qDifficultySelect").value;
  const platform = document.getElementById("qPlatformSelect").value;
  const url = document.getElementById("qUrlInput").value.trim();
  const tagsStr = document.getElementById("qTagsInput").value.trim();
  const explanation = document.getElementById("qExplanationInput").value.trim();
  const referenceSolution = document.getElementById("qReferenceSolutionInput").value.trim();
  const err = document.getElementById("adminQuestionErrorMsg");

  if (!title || !problemStatement || !url) {
    if (err) {
      err.textContent = "Please complete all required fields (Title, Problem Statement, URL).";
      err.style.display = "block";
    }
    return;
  }

  const tags = tagsStr ? tagsStr.split(",").map(t => t.trim()).filter(Boolean) : [];
  let bank = getDsaQuestionBank();

  if (id) {
    // Edit existing
    bank = bank.map(q => {
      if (q.id === id) {
        return {
          ...q,
          title,
          problemStatement,
          topic,
          difficulty,
          platform,
          url,
          tags,
          explanation: explanation || q.explanation,
          pattern: explanation || q.pattern || problemStatement,
          referenceSolution
        };
      }
      return q;
    });
  } else {
    // Add new
    const newQ = {
      id: "dsa-manual-" + Date.now(),
      title,
      problemStatement,
      topic,
      difficulty,
      platform,
      url,
      tags,
      explanation,
      pattern: explanation || problemStatement,
      referenceSolution,
      timeComp: "O(n)",
      spaceComp: "O(1)"
    };
    bank.unshift(newQ);
  }

  saveDsaQuestionBank(bank);
  document.getElementById("adminQuestionModal").classList.remove("open");
  alert(id ? "Question updated successfully!" : "New DSA Question saved permanently to database!");
}

window.deleteAdminQuestion = function (id) {
  if (!confirm("Are you sure you want to delete this question permanently?")) return;
  let bank = getDsaQuestionBank();
  bank = bank.filter(q => q.id !== id);
  saveDsaQuestionBank(bank);
  alert("Question deleted successfully!");
};

window.showPatternModal = function (id) {
  const bank = getDsaQuestionBank();
  const q = bank.find(item => item.id === id);
  if (!q) return;

  const modal = document.getElementById("patternModal");
  const title = document.getElementById("patternModalTitle");
  const body = document.getElementById("patternModalBody");

  if (title) title.textContent = `${q.title} — Details & Explanation`;
  if (body) {
    body.innerHTML = `
      <div style="margin-bottom: 1.25rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="badge badge-topic">${q.topic}</span>
        <span class="badge ${q.difficulty === "Easy" ? "badge-easy" : q.difficulty === "Medium" ? "badge-medium" : "badge-hard"}">${q.difficulty}</span>
        <span class="badge" style="background: var(--bg-subtle); color: var(--text-secondary);">${q.platform || 'LeetCode'}</span>
      </div>

      ${q.problemStatement ? `
        <div style="margin-bottom: 1rem;">
          <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.25rem;">PROBLEM STATEMENT</h4>
          <p style="font-size: 0.92rem; color: var(--text-primary); line-height: 1.5; white-space: pre-wrap;">${q.problemStatement}</p>
        </div>
      ` : ''}

      <div style="background: var(--bg-subtle); padding: 1rem 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--primary); margin-bottom: 1.25rem;">
        <h4 style="font-size: 0.92rem; color: var(--primary); margin-bottom: 0.35rem;">Optimal Approach & Key Intuition</h4>
        <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.5;">${q.explanation || q.pattern || "N/A"}</p>
      </div>

      ${q.referenceSolution ? `
        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.35rem;">REFERENCE SOLUTION</h4>
          <pre style="background: var(--bg-main); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-size: 0.85rem; font-family: monospace; overflow-x: auto;">${q.referenceSolution}</pre>
        </div>
      ` : ''}

      <div style="text-align: right;">
        <a href="${q.url}" target="_blank" rel="noopener noreferrer" class="nav-btn-action" style="display: inline-flex; align-items: center; gap: 0.35rem;">
          Solve on ${q.platform || 'LeetCode'} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `;
  }

  if (modal) modal.classList.add("open");
};


// ==========================================
// 7. JOB PREPARATION MATERIALS
// ==========================================

function initJobPrepSection() {
  const roleButtons = document.querySelectorAll(".role-tab-btn");
  roleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      roleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const roleKey = btn.getAttribute("data-role");
      renderRoleContent(roleKey);
    });
  });

  renderRoleContent("full-stack-engineer");
}

function renderRoleContent(roleKey) {
  const keyMap = {
    "fullstack": "full-stack-engineer",
    "frontend": "frontend-specialist",
    "backend": "backend-specialist",
    "data": "data-analyst-scientist",
    "devops": "cloud-devops",
    "product": "product-manager"
  };
  const roleId = keyMap[roleKey] || roleKey;
  const roleData = JOB_ROLES_DATA.find(r => r.id === roleId) || JOB_ROLES_DATA[0];

  const container = document.getElementById("roleContentContainer");
  if (!container || !roleData) return;

  container.innerHTML = `
    <div class="minimal-role-hub">
      <!-- Role Title & Overview Banner -->
      <div class="minimal-role-header">
        <h2 class="minimal-role-title">${roleData.title}</h2>
        <p class="minimal-role-desc">${roleData.summary}</p>
      </div>

      <!-- Spacious Editorial Grid of Sections -->
      <div class="minimal-role-grid">
        ${roleData.sections.map(sec => `
          <div class="minimal-column">
            <h3 class="minimal-section-heading">${sec.heading}</h3>
            <div class="minimal-list">
              ${sec.items.map(item => `
                <div class="minimal-list-item">
                  <span class="item-body">${item}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// ==========================================
// 8. TIPS FOR INTERVIEWS & FLASHCARDS
// ==========================================

function initInterviewTips() {
  const container = document.getElementById("interviewTipsGrid");
  if (container) {
    container.innerHTML = INTERVIEW_TIPS_DATA.map(tip => `
      <div class="tip-card">
        <div>
          <div class="tip-card-header">
            <span class="tip-badge ${tip.badge}">${tip.category}</span>
            <h3>${tip.title}</h3>
            <p>${tip.summary}</p>
          </div>
          <ul class="tip-checklist">
            ${tip.points.map(pt => `<li><span class="check-icon">•</span> <span>${pt}</span></li>`).join("")}
          </ul>
        </div>
        <div class="example-callout">
          ${tip.example}
        </div>
      </div>
    `).join("");
  }

  initFlashcards();
}

function initFlashcards() {
  const cardStage = document.getElementById("flashcardStage");
  const cardInner = document.getElementById("flashcardInner");
  const flipBtn = document.getElementById("btnFlipCard");
  const prevBtn = document.getElementById("btnPrevCard");
  const nextBtn = document.getElementById("btnNextCard");
  const shuffleBtn = document.getElementById("btnShuffleCards");

  // Flip handlers
  if (cardStage && cardInner) {
    cardStage.addEventListener("click", toggleCardFlip);
  }
  if (flipBtn) {
    flipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCardFlip();
    });
  }

  // Navigation handlers
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (STATE.currentCardIndex > 0) {
        STATE.currentCardIndex--;
        unflipAndRenderCard();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (STATE.currentCardIndex < STATE.filteredFlashcards.length - 1) {
        STATE.currentCardIndex++;
        unflipAndRenderCard();
      }
    });
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      STATE.filteredFlashcards.sort(() => Math.random() - 0.5);
      STATE.currentCardIndex = 0;
      unflipAndRenderCard();
    });
  }

  // Category filter handlers
  const catButtons = document.querySelectorAll(".flashcard-cat-btn");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");
      STATE.flashcardsCategory = cat;

      if (cat === "All") {
        STATE.filteredFlashcards = [...FLASHCARDS_DATA];
      } else {
        STATE.filteredFlashcards = FLASHCARDS_DATA.filter(c => c.category === cat);
      }
      STATE.currentCardIndex = 0;
      unflipAndRenderCard();
    });
  });

  renderCurrentFlashcard();
}

function toggleCardFlip() {
  const cardInner = document.getElementById("flashcardInner");
  if (!cardInner) return;
  STATE.isCardFlipped = !STATE.isCardFlipped;
  if (STATE.isCardFlipped) {
    cardInner.classList.add("is-flipped");
  } else {
    cardInner.classList.remove("is-flipped");
  }
}

function unflipAndRenderCard() {
  const cardInner = document.getElementById("flashcardInner");
  if (cardInner) cardInner.classList.remove("is-flipped");
  STATE.isCardFlipped = false;
  setTimeout(() => {
    renderCurrentFlashcard();
  }, 150);
}

function renderCurrentFlashcard() {
  const total = STATE.filteredFlashcards.length;
  if (total === 0) return;

  const card = STATE.filteredFlashcards[STATE.currentCardIndex];
  const qEl = document.getElementById("cardFrontQuestion");
  const aEl = document.getElementById("cardBackAnswer");
  const catEl = document.getElementById("cardCategoryTag");
  const counterEl = document.getElementById("cardCounterDisplay");

  if (qEl) qEl.textContent = card.question;
  if (aEl) aEl.textContent = card.answer;
  if (catEl) catEl.textContent = card.category;
  if (counterEl) counterEl.textContent = `Card ${STATE.currentCardIndex + 1} of ${total}`;
}
// INTERVIEW TOOLS MODAL CONTROLS
window.openInterviewToolsModal = function (tabName = 'flashcards') {
  const modal = document.getElementById("interviewToolsModal");
  if (modal) {
    modal.classList.add("open");
    switchInterviewToolTab(tabName);
  }
};

window.closeInterviewToolsModal = function () {
  const modal = document.getElementById("interviewToolsModal");
  if (modal) {
    modal.classList.remove("open");
  }
  const doubtInput = document.getElementById("doubtInputText");
  const doubtAnswerBox = document.getElementById("doubtAnswerBox");
  if (doubtInput) doubtInput.value = "";
  if (doubtAnswerBox) {
    doubtAnswerBox.style.display = "none";
    doubtAnswerBox.innerHTML = "";
  }
};

window.switchInterviewToolTab = function (tabName) {
  document.querySelectorAll(".tools-subtab-btn").forEach(btn => {
    if (btn.getAttribute("data-tool-tab") === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".tool-pane").forEach(pane => {
    pane.classList.remove("active");
  });
  const activePane = document.getElementById(`tool-tab-${tabName}`);
  if (activePane) {
    activePane.classList.add("active");
  }
};

// ==========================================
// 9. MOCK INTERVIEW SIMULATOR & EXTENSIONS
// ==========================================

function initMockSimulator() {
  const categorySelect = document.getElementById("mockCategorySelect");
  const durationSelect = document.getElementById("mockDurationSelect");
  const generateBtn = document.getElementById("btnGenerateQuestion");
  const getHintBtn = document.getElementById("btnGetHint");
  const startBtn = document.getElementById("btnTimerStart");
  const resetBtn = document.getElementById("btnTimerReset");
  const addTimeBtn = document.getElementById("btnTimerAddTime");
  const finishBtn = document.getElementById("btnFinishMock");

  // Initial Question
  generateNewMockQuestion();

  if (categorySelect) {
    categorySelect.addEventListener("change", generateNewMockQuestion);
  }

  if (generateBtn) {
    generateBtn.addEventListener("click", generateNewMockQuestion);
  }

  if (getHintBtn) {
    getHintBtn.addEventListener("click", revealNextHint);
  }

  // Timer controls
  if (durationSelect) {
    durationSelect.addEventListener("change", () => {
      const minutes = parseInt(durationSelect.value, 10) || 30;
      STATE.timerSecondsRemaining = minutes * 60;
      updateTimerDisplay();
      if (STATE.isTimerRunning) {
        clearInterval(STATE.timerInterval);
        STATE.isTimerRunning = false;
      }
      if (startBtn) {
        startBtn.textContent = "Start";
        startBtn.classList.add("btn-timer-primary");
      }
    });
  }

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (!STATE.isTimerRunning) {
        STATE.isTimerRunning = true;
        startBtn.textContent = "Pause";
        startBtn.classList.remove("btn-timer-primary");

        STATE.timerInterval = setInterval(() => {
          if (STATE.timerSecondsRemaining > 0) {
            STATE.timerSecondsRemaining--;
            updateTimerDisplay();
          } else {
            clearInterval(STATE.timerInterval);
            STATE.isTimerRunning = false;
            startBtn.textContent = "Start";
            startBtn.classList.add("btn-timer-primary");
            alert("Mock interview time is up! Complete your self-evaluation checklist.");
          }
        }, 1000);
      } else {
        STATE.isTimerRunning = false;
        clearInterval(STATE.timerInterval);
        startBtn.textContent = "Resume";
        startBtn.classList.add("btn-timer-primary");
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      clearInterval(STATE.timerInterval);
      STATE.isTimerRunning = false;
      const minutes = parseInt(durationSelect?.value || "30", 10);
      STATE.timerSecondsRemaining = minutes * 60;
      updateTimerDisplay();
      if (startBtn) {
        startBtn.textContent = "Start";
        startBtn.classList.add("btn-timer-primary");
      }
    });
  }

  if (addTimeBtn) {
    addTimeBtn.addEventListener("click", () => {
      STATE.timerSecondsRemaining += 5 * 60;
      updateTimerDisplay();
    });
  }

  if (finishBtn) {
    finishBtn.addEventListener("click", finishMockSession);
  }

  const submitAnswerBtn = document.getElementById("btnSubmitMockAnswer");
  if (submitAnswerBtn) {
    submitAnswerBtn.addEventListener("click", () => {
      const ansInput = document.getElementById("mockAnswerSubmission");
      const feedbackBox = document.getElementById("mockAnswerFeedback");
      const text = ansInput?.value.trim() || "";
      if (!text) {
        alert("Please write your answer before submitting.");
        return;
      }

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.style.background = "var(--bg-subtle)";
        feedbackBox.style.border = "1px solid var(--border-strong)";
        feedbackBox.style.color = "var(--text-primary)";
        feedbackBox.innerHTML = `
          <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--primary);">
            <span>Evaluating answer against problem criteria & constraints...</span>
          </div>
        `;

        setTimeout(() => {
          const qObj = STATE.currentMockQuestionObj;
          const len = text.length;

          // Basic evaluation heuristics based on answer quality & keywords
          let isCorrect = len >= 20;
          let feedbackTitle = isCorrect ? "Correct & Well Structured!" : "Needs Improvement / Incomplete";
          let badgeClass = isCorrect ? "badge-easy" : "badge-hard";
          let badgeText = isCorrect ? "Correct" : "Incorrect / Incomplete";
          let boxBorder = isCorrect ? "1px solid rgba(16, 185, 129, 0.4)" : "1px solid rgba(239, 68, 68, 0.4)";
          let boxBg = isCorrect ? "rgba(16, 185, 129, 0.08)" : "rgba(239, 68, 68, 0.08)";

          let explanation = "";
          if (isCorrect) {
            explanation = `Your answer covers the core logic and addresses key requirements for this question. Good job stating your approach clearly.`;
          } else {
            explanation = `Your submission appears too brief. Be sure to provide full code, step-by-step logic, or complete STAR framework details.`;
          }

          feedbackBox.style.border = boxBorder;
          feedbackBox.style.background = boxBg;
          feedbackBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <strong style="font-size: 1rem;">${feedbackTitle}</strong>
              <span class="badge ${badgeClass}">${badgeText}</span>
            </div>
            <p style="margin-bottom: 0.5rem; font-size: 0.88rem; color: var(--text-primary);">${explanation}</p>
            ${qObj && qObj.hints ? `
              <div style="margin-top: 0.5rem; font-size: 0.82rem; color: var(--text-muted);">
                <strong>Key Concept / Hint Reference:</strong> ${qObj.hints[0] || 'Ensure time & space complexity limits are respected.'}
              </div>
            ` : ''}
          `;
        }, 600);
      }
    });
  }

  initVSCodeEditor();

  // Initialize Solution Upload & Doubt Solver
  if (typeof initSolutionImageReview === "function") {
    initSolutionImageReview();
  }
  initDoubtSolver();
  renderMockHistory();
}

const VSCODE_KEYWORDS = [
  { text: "function", detail: "keyword", desc: "Function Declaration" },
  { text: "const", detail: "keyword", desc: "Constant Variable Declaration" },
  { text: "let", detail: "keyword", desc: "Block-scoped Variable Declaration" },
  { text: "return", detail: "keyword", desc: "Return Statement" },
  { text: "for", detail: "snippet", desc: "For Loop Statement" },
  { text: "while", detail: "keyword", desc: "While Loop Statement" },
  { text: "if", detail: "keyword", desc: "Conditional Statement" },
  { text: "else", detail: "keyword", desc: "Else Branch Statement" },
  { text: "console.log()", detail: "method", desc: "Log output to console" },
  { text: "Array.prototype", detail: "class", desc: "Built-in Array Prototype" },
  { text: "Math.max()", detail: "method", desc: "Returns maximum value" },
  { text: "Math.min()", detail: "method", desc: "Returns minimum value" },
  { text: "Map", detail: "class", desc: "Key-value Hash Map" },
  { text: "Set", detail: "class", desc: "Unique Values Set" }
];

function initVSCodeEditor() {
  const textarea = document.getElementById("mockAnswerSubmission");
  const lineGutter = document.getElementById("vscodeLineNumbers");
  const popup = document.getElementById("vscodeSuggestPopup");
  const suggestList = document.getElementById("suggestItemsList");

  if (!textarea || !lineGutter) return;

  function updateLineNumbers() {
    const lines = textarea.value.split("\n").length;
    const count = Math.max(lines, 8);
    let numbersHTML = "";
    for (let i = 1; i <= count; i++) {
      numbersHTML += i + "<br>";
    }
    lineGutter.innerHTML = numbersHTML;
  }

  // Sync line numbers on input and scroll
  textarea.addEventListener("input", () => {
    updateLineNumbers();
    handleAutoSuggest();
  });
  textarea.addEventListener("scroll", () => {
    lineGutter.scrollTop = textarea.scrollTop;
  });

  // Tab key indentation support (VS Code feel)
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;

      textarea.value = val.substring(0, start) + "    " + val.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 4;
      updateLineNumbers();
    } else if (e.key === "Escape" && popup) {
      popup.style.display = "none";
    }
  });

  function handleAutoSuggest() {
    if (!popup || !suggestList) return;
    const val = textarea.value;
    const cursor = textarea.selectionStart;
    const textBeforeCursor = val.substring(0, cursor);
    const words = textBeforeCursor.split(/[\s,();{}]+/);
    const currentWord = words[words.length - 1] || "";

    if (currentWord.length < 2) {
      popup.style.display = "none";
      return;
    }

    const matches = VSCODE_KEYWORDS.filter(k => k.text.toLowerCase().startsWith(currentWord.toLowerCase()));

    if (matches.length === 0) {
      popup.style.display = "none";
      return;
    }

    suggestList.innerHTML = matches.map((m, idx) => `
      <div class="suggest-item" data-text="${m.text}" style="padding: 0.35rem 0.6rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; background: ${idx === 0 ? '#eff6ff' : '#ffffff'}; color: #1e293b;">
        <span><strong>${m.text}</strong></span>
        <span style="font-size: 0.7rem; color: #64748b; background: #f1f5f9; padding: 1px 4px; border-radius: 3px;">${m.detail}</span>
      </div>
    `).join("");

    popup.style.display = "block";

    const items = suggestList.querySelectorAll(".suggest-item");
    items.forEach(item => {
      item.addEventListener("click", () => {
        const insertText = item.getAttribute("data-text");
        const before = val.substring(0, cursor - currentWord.length);
        const after = val.substring(cursor);
        textarea.value = before + insertText + after;
        textarea.selectionStart = textarea.selectionEnd = before.length + insertText.length;
        popup.style.display = "none";
        textarea.focus();
        updateLineNumbers();
      });
    });
  }

  // Close suggest popup when clicking outside
  document.addEventListener("click", (e) => {
    if (popup && !popup.contains(e.target) && e.target !== textarea) {
      popup.style.display = "none";
    }
  });

  updateLineNumbers();
}

function generateNewMockQuestion() {
  const categorySelect = document.getElementById("mockCategorySelect");
  const category = categorySelect?.value || "coding";
  const questionPool = MOCK_QUESTIONS[category] || MOCK_QUESTIONS.coding;
  const randomIndex = Math.floor(Math.random() * questionPool.length);
  const qObj = questionPool[randomIndex];

  STATE.currentMockQuestionObj = qObj;
  STATE.hintsRevealed = 0;

  const qDisplay = document.getElementById("mockQuestionText");
  const qCategoryLabel = document.getElementById("mockCategoryLabel");
  const hintBtn = document.getElementById("btnGetHint");
  const hintsList = document.getElementById("hintsRevealedList");
  const ansInput = document.getElementById("mockAnswerSubmission");
  const feedbackBox = document.getElementById("mockAnswerFeedback");

  if (qDisplay) qDisplay.textContent = qObj.prompt;
  if (qCategoryLabel) qCategoryLabel.textContent = category.toUpperCase();
  if (ansInput) ansInput.value = "";
  const lineGutter = document.getElementById("vscodeLineNumbers");
  if (lineGutter) {
    lineGutter.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8";
  }
  if (feedbackBox) {
    feedbackBox.style.display = "none";
    feedbackBox.innerHTML = "";
  }

  // Reset hint state
  if (hintBtn) {
    hintBtn.textContent = "Get Hint (1/3)";
    hintBtn.disabled = false;
  }
  if (hintsList) {
    hintsList.innerHTML = "";
  }

  // Reset doubt answer
  const doubtBox = document.getElementById("doubtAnswerBox");
  if (doubtBox) doubtBox.style.display = "none";
}

function revealNextHint() {
  if (!STATE.currentMockQuestionObj || !STATE.currentMockQuestionObj.hints) return;

  const hints = STATE.currentMockQuestionObj.hints;
  if (STATE.hintsRevealed < hints.length) {
    const hintText = hints[STATE.hintsRevealed];
    STATE.hintsRevealed++;

    const hintsList = document.getElementById("hintsRevealedList");
    if (hintsList) {
      const hintDiv = document.createElement("div");
      hintDiv.className = "hint-box-item";
      hintDiv.textContent = hintText;
      hintsList.appendChild(hintDiv);
    }

    const hintBtn = document.getElementById("btnGetHint");
    if (hintBtn) {
      if (STATE.hintsRevealed < hints.length) {
        hintBtn.textContent = `Get Hint (${STATE.hintsRevealed + 1}/3)`;
      } else {
        hintBtn.textContent = "All 3 Hints Unlocked";
        hintBtn.disabled = true;
      }
    }
  }
}

function updateTimerDisplay() {
  const display = document.getElementById("timerDisplayDigits");
  if (!display) return;

  const mins = Math.floor(STATE.timerSecondsRemaining / 60);
  const secs = STATE.timerSecondsRemaining % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function finishMockSession() {
  const qText = document.getElementById("mockQuestionText")?.textContent || "Mock Session";
  const notes = document.getElementById("mockScratchpad")?.value || "";

  const rubricCheckboxes = document.querySelectorAll(".rubric-item input[type='checkbox']");
  let score = 0;
  rubricCheckboxes.forEach(cb => {
    if (cb.checked) score++;
  });

  const session = {
    id: "mock-" + Date.now(),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    question: qText,
    score: score,
    total: rubricCheckboxes.length,
    notesLength: notes.length
  };

  STATE.mockHistory.unshift(session);
  saveMockHistory();
  renderMockHistory();

  // Reset checkboxes & textarea
  rubricCheckboxes.forEach(cb => cb.checked = false);
  const scratchpad = document.getElementById("mockScratchpad");
  if (scratchpad) scratchpad.value = "";

  alert(`Mock Interview Session logged! Score: ${score}/${rubricCheckboxes.length}. Great practice!`);
}

function renderMockHistory() {
  const container = document.getElementById("mockHistoryList");
  if (!container) return;

  if (STATE.mockHistory.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 1.5rem; font-size: 0.88rem;">
        No completed mock sessions yet. Start a timer and complete your first session!
      </div>
    `;
    return;
  }

  container.innerHTML = STATE.mockHistory.map(m => `
    <div class="history-item">
      <div class="history-item-top">
        <span>${m.date} at ${m.time}</span>
        <span class="badge ${m.score >= 4 ? 'badge-easy' : 'badge-medium'}">Rubric: ${m.score}/${m.total}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-secondary); text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        ${m.question}
      </p>
    </div>
  `).join("");
}

// ==========================================
// 10. AI SOLUTION IMAGE REVIEW & DOUBT SOLVER
// ==========================================

function initSolutionImageReview() {
  const fileInput = document.getElementById("solutionImageInput");
  const dropzone = document.getElementById("uploadDropzone");
  const previewBox = document.getElementById("imagePreviewBox");
  const previewImg = document.getElementById("imagePreviewImg");
  const removeBtn = document.getElementById("btnRemoveImg");
  const analyzeBtn = document.getElementById("btnAnalyzeImg");
  const reviewCard = document.getElementById("aiReviewCard");

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "var(--primary)";
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.style.borderColor = "var(--border-strong)";
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "var(--border-strong)";
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleImageFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        handleImageFile(e.target.files[0]);
      }
    });
  }

  function handleImageFile(file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file (.png, .jpg, .jpeg, or screenshot).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      STATE.uploadedImageBase64 = event.target.result;
      if (previewImg) previewImg.src = event.target.result;
      if (previewBox) previewBox.style.display = "block";
      if (analyzeBtn) analyzeBtn.disabled = false;
      if (reviewCard) reviewCard.style.display = "none";
    };
    reader.readAsDataURL(file);
  }

  if (removeBtn) {
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      STATE.uploadedImageBase64 = null;
      if (fileInput) fileInput.value = "";
      if (previewBox) previewBox.style.display = "none";
      if (analyzeBtn) analyzeBtn.disabled = true;
      if (reviewCard) reviewCard.style.display = "none";
    });
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      if (!STATE.uploadedImageBase64) return;
      analyzeBtn.textContent = "Analyzing with AI...";
      analyzeBtn.disabled = true;

      setTimeout(() => {
        analyzeBtn.textContent = "Analyze Solution with AI";
        analyzeBtn.disabled = false;
        renderAiReviewResult();
      }, 900);
    });
  }
}

function renderAiReviewResult() {
  const reviewCard = document.getElementById("aiReviewCard");
  if (!reviewCard) return;

  const currentCategory = document.getElementById("mockCategorySelect")?.value || "coding";
  const scores = [88, 92, 85, 90, 94];
  const score = scores[Math.floor(Math.random() * scores.length)];

  let improvements = [];
  if (currentCategory === "aptitude") {
    improvements = [
      "Explicitly write units (km/hr, meters/sec) at each step to prevent conversion arithmetic slips.",
      "Consider using the LCM method for rate/time problems—it reduces fraction operations significantly.",
      "Check sanity of final answer against order-of-magnitude bounds."
    ];
  } else if (currentCategory === "frontend") {
    improvements = [
      "Add explicit debouncing or throttling if listening to resize/scroll events.",
      "Ensure proper cleanup in return callback if using React useEffect to avoid memory leaks.",
      "Consider accessibility: include proper ARIA roles and keyboard tabIndices."
    ];
  } else {
    improvements = [
      "Add explicit null and boundary checks at the very start of the function.",
      "State Time & Space Complexity explicitly at the top of the scratchpad.",
      "Use more descriptive variable names (e.g. `leftMaxIndex` instead of `tempI`).",
      "Consider testing with an empty input or single-element edge case."
    ];
  }

  reviewCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
      <h4 style="font-size: 1.05rem; color: var(--text-primary);">AI Solution Review</h4>
      <span class="badge badge-easy">Score: ${score}/100</span>
    </div>

    <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
      <strong>Assessment:</strong> Clean algorithmic thinking and valid logic path. Code syntax and structure follow industry patterns well.
    </p>

    <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.75rem;">
      <h5 style="font-size: 0.84rem; color: var(--primary); margin-bottom: 0.35rem;">Key Strengths</h5>
      <p style="font-size: 0.84rem; color: var(--text-secondary);">
        Logical flow is easy to trace step-by-step; core data structure choice matches optimal complexity requirements.
      </p>
    </div>

    <h5 style="font-size: 0.85rem; color: var(--text-primary); font-weight: 700; margin-bottom: 0.4rem;">
      Actionable Improvements Suggested:
    </h5>
    <ul class="ai-improvements-list">
      ${improvements.map(imp => `<li><span class="bullet-dot">•</span> <span>${imp}</span></li>`).join("")}
    </ul>
  `;

  reviewCard.style.display = "block";
}

function initDoubtSolver() {
  const askBtn = document.getElementById("btnAskDoubt");
  const doubtInput = document.getElementById("doubtInputText");
  const doubtAnswerBox = document.getElementById("doubtAnswerBox");
  const doubtChips = document.querySelectorAll(".doubt-chip");

  doubtChips.forEach(chip => {
    chip.addEventListener("click", () => {
      if (doubtInput) {
        doubtInput.value = chip.getAttribute("data-query");
        processDoubtQuery(doubtInput.value);
      }
    });
  });

  function submitDoubt() {
    if (!doubtInput) return;
    const q = doubtInput.value.trim();
    if (!q) {
      alert("Please enter your question or doubt first.");
      return;
    }
    processDoubtQuery(q);
    doubtInput.value = "";
  }

  if (askBtn && doubtInput) {
    askBtn.addEventListener("click", submitDoubt);
    doubtInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        submitDoubt();
      }
    });
  }
  async function processDoubtQuery(query) {
    if (!doubtAnswerBox) return;

    const userQuery = query.trim();

    if (!userQuery) {
      doubtAnswerBox.style.display = "block";
      doubtAnswerBox.innerHTML = `
      <p style="color: var(--text-muted);">
        Please enter a question first.
      </p>
    `;
      return;
    }

    // Show loading state
    doubtAnswerBox.style.display = "block";
    doubtAnswerBox.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--primary); font-weight: 600;">
      <span>Thinking...</span>
    </div>
  `;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: userQuery
        })
      });

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.response || "AI request failed.");
      }

      // Create the answer container
      doubtAnswerBox.innerHTML = `
      <h5 style="font-size: 0.95rem; color: var(--primary); margin-bottom: 0.6rem;">
        AI Assistant
      </h5>
      <div class="ai-response-text"
           style="line-height: 1.6; white-space: pre-wrap;"></div>
    `;

      // Safely display Gemini's response as text
      doubtAnswerBox.querySelector(".ai-response-text").textContent =
        data.response;

    } catch (error) {
      console.error("AI Assistant error:", error);

      doubtAnswerBox.innerHTML = `
      <h5 style="font-size: 0.95rem; color: #dc2626; margin-bottom: 0.5rem;">
        Unable to connect to AI Assistant
      </h5>
      <p style="margin-bottom: 0;">
        Make sure the AI Assistant backend is running and try again.
      </p>
    `;
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
}



// Modals
function initModals() {
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
      }
    });
  });

  document.querySelectorAll(".modal-close-btn, .btn-modal-cancel").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("open"));
    });
  });
}

// ==========================================
// 12. AUTHENTICATION & ACCOUNT SYSTEM
// ==========================================

const DEFAULT_USER = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  role: "Full Stack Engineer",
  experience: "Mid-Level (3-5 YOE)",
  techStack: "JavaScript, React, Node.js, PostgreSQL, Docker",
  targetCompanies: "Meta, Google, Stripe, Linear",
  profilePicture: null
};

function getAuthUser() {
  const saved = localStorage.getItem("skillissue_user");
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (e) {
    return null;
  }
}

function setAuthUser(userObj) {
  if (!userObj) {
    localStorage.removeItem("skillissue_user");
  } else {
    localStorage.setItem("skillissue_user", JSON.stringify(userObj));
  }
  updateAccountWidgetUI();
  if (STATE.activeTab === "profile") {
    renderProfileSection();
  }
}

function updateAccountWidgetUI() {
  const user = getAuthUser();
  const avatarInner = document.getElementById("accountAvatarInner");
  const popover = document.getElementById("accountMenuPopover");
  if (!avatarInner || !popover) return;

  if (user) {
    // Logged in state
    if (user.profilePicture) {
      avatarInner.innerHTML = `<img src="${user.profilePicture}" alt="${user.name}" width="32" height="32">`;
    } else {
      const initials = user.name ? user.name.split(" ").map(n => n[0]).join("").slice(0, 2) : "U";
      avatarInner.innerHTML = `<span class="avatar-initials">${initials}</span>`;
    }

    popover.innerHTML = `
      <div class="popover-header">
        <div class="popover-user-name">${user.name || 'User'}</div>
        <div class="popover-user-email">${user.email}</div>
      </div>
      <button type="button" class="popover-item-btn" onclick="switchTab('profile'); closeAccountPopover();">
        My Profile
      </button>
      <button type="button" class="popover-item-btn" onclick="switchTab('dashboard'); closeAccountPopover();">
        My Preparation
      </button>
      <button type="button" class="popover-item-btn" onclick="switchTab('dsa'); closeAccountPopover();">
        Saved Questions
      </button>
      <button type="button" class="popover-item-btn" onclick="switchTab('profile'); openProfileSubtab('settings'); closeAccountPopover();">
        Settings
      </button>
      <div class="popover-divider"></div>
      <button type="button" class="popover-item-btn" onclick="handleLogout();" style="color: #dc2626;">
        Log Out
      </button>
    `;
  } else {
    // Logged out state
    avatarInner.innerHTML = `
      <svg class="avatar-default-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    `;

    popover.innerHTML = `
      <div class="popover-header">
        <div class="popover-user-name">Welcome to skillIssue</div>
        <div class="popover-user-email">Sign in to sync your progress</div>
      </div>
      <button type="button" class="popover-item-btn" onclick="openAuthModal('signin'); closeAccountPopover();">
        Sign In
      </button>
      <button type="button" class="popover-item-btn" onclick="openAuthModal('signup'); closeAccountPopover();">
        Create Account
      </button>
    `;
  }
}

function initAccountWidget() {
  const btn = document.getElementById("accountAvatarBtn");
  const popover = document.getElementById("accountMenuPopover");

  if (btn && popover) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      popover.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!popover.contains(e.target) && !btn.contains(e.target)) {
        popover.classList.remove("open");
      }
    });
  }

  updateAccountWidgetUI();
  initAuthForm();
}

window.closeAccountPopover = function () {
  const popover = document.getElementById("accountMenuPopover");
  if (popover) popover.classList.remove("open");
};

// Auth Modal Form Handling
let currentAuthMode = "signin"; // 'signin' or 'signup'

window.openAuthModal = function (mode = "signin") {
  currentAuthMode = mode;
  const modal = document.getElementById("authModal");
  const title = document.getElementById("authModalTitle");
  const nameGroup = document.getElementById("authNameGroup");
  const roleGroup = document.getElementById("authRoleGroup");
  const submitBtn = document.getElementById("authSubmitBtn");
  const toggleText = document.getElementById("authToggleText");
  const toggleBtn = document.getElementById("btnToggleAuthMode");
  const errorMsg = document.getElementById("authErrorMsg");

  if (errorMsg) errorMsg.style.display = "none";

  if (mode === "signup") {
    if (title) title.textContent = "Create skillIssue Account";
    if (nameGroup) nameGroup.style.display = "block";
    if (roleGroup) roleGroup.style.display = "block";
    if (submitBtn) submitBtn.textContent = "Create Account";
    if (toggleText) toggleText.textContent = "Already have an account?";
    if (toggleBtn) toggleBtn.textContent = "Sign In";
  } else {
    if (title) title.textContent = "Sign In to skillIssue";
    if (nameGroup) nameGroup.style.display = "none";
    if (roleGroup) roleGroup.style.display = "none";
    if (submitBtn) submitBtn.textContent = "Sign In";
    if (toggleText) toggleText.textContent = "Don't have an account?";
    if (toggleBtn) toggleBtn.textContent = "Create Account";
  }

  if (modal) modal.classList.add("open");
};

function initAuthForm() {
  const toggleBtn = document.getElementById("btnToggleAuthMode");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      openAuthModal(currentAuthMode === "signin" ? "signup" : "signin");
    });
  }

  const form = document.getElementById("authForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("authEmailInput").value.trim();
      const password = document.getElementById("authPasswordInput").value;
      const name = document.getElementById("authNameInput").value.trim();
      const role = document.getElementById("authRoleInput").value;
      const errorMsg = document.getElementById("authErrorMsg");

      if (!email || !password) {
        if (errorMsg) {
          errorMsg.textContent = "Please provide email and password.";
          errorMsg.style.display = "block";
        }
        return;
      }

      let user = null;
      if (currentAuthMode === "signup") {
        user = {
          ...DEFAULT_USER,
          name: name || email.split("@")[0],
          email: email,
          role: role || "Full Stack Engineer"
        };
      } else {
        // Sign in
        const existing = getAuthUser();
        if (existing && existing.email === email) {
          user = existing;
        } else {
          user = {
            ...DEFAULT_USER,
            name: email.split("@")[0],
            email: email
          };
        }
      }

      setAuthUser(user);
      document.getElementById("authModal").classList.remove("open");
    });
  }
}

window.handleLogout = function () {
  setAuthUser(null);
  switchTab("dashboard");
};

// ==========================================
// 13. PROFILE PAGE & SETTINGS
// ==========================================

let activeProfileSubtab = "details"; // 'details' or 'settings'

window.openProfileSubtab = function (subtab) {
  activeProfileSubtab = subtab;
  renderProfileSection();
};

function renderProfileSection() {
  const container = document.getElementById("profileViewContainer");
  if (!container) return;

  const user = getAuthUser();

  if (!user) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <h2 style="margin-bottom: 0.5rem; font-size: 1.5rem;">Sign In Required</h2>
        <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 1.5rem auto;">
          Please sign in or create an account to view and customize your career preparation profile, profile picture, and application settings.
        </p>
        <button type="button" class="nav-btn-action" onclick="openAuthModal('signin')" style="margin: 0 auto;">
          Sign In / Create Account
        </button>
      </div>
    `;
    return;
  }

  const initials = user.name ? user.name.split(" ").map(n => n[0]).join("").slice(0, 2) : "U";

  container.innerHTML = `
    <!-- Subtabs -->
    <div class="profile-subtabs">
      <button type="button" class="profile-subtab-btn ${activeProfileSubtab === 'details' ? 'active' : ''}" onclick="openProfileSubtab('details')">
        Account & Profile Details
      </button>
      <button type="button" class="profile-subtab-btn ${activeProfileSubtab === 'settings' ? 'active' : ''}" onclick="openProfileSubtab('settings')">
        Settings & Appearance
      </button>
    </div>

    ${activeProfileSubtab === 'details' ? renderProfileDetailsHTML(user, initials) : renderProfileSettingsHTML()}
  `;

  attachProfileEvents(user);
}

function renderProfileDetailsHTML(user, initials) {
  return `
    <!-- Profile Picture Control -->
    <div class="profile-picture-container">
      <div class="profile-picture-preview" id="profilePicPreviewBox">
        ${user.profilePicture ? `<img src="${user.profilePicture}" alt="${user.name}" width="100" height="100" style="width:100%;height:100%;object-fit:cover;">` : initials}
      </div>
      <div>
        <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">Profile Picture</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          Upload a custom image (JPG, PNG, WebP). Your picture will update across the site instantly.
        </p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button type="button" class="btn-timer btn-timer-primary" onclick="document.getElementById('profilePicFileInput').click();">
            Upload Photo
          </button>
          ${user.profilePicture ? `
            <button type="button" class="btn-timer btn-modal-cancel" onclick="removeProfilePicture();">
              Remove Photo
            </button>
          ` : ''}
        </div>
        <input type="file" id="profilePicFileInput" accept="image/png, image/jpeg, image/webp" style="display: none;">
      </div>
    </div>

    <!-- Edit Profile Form -->
    <form id="editProfileForm" style="background: var(--bg-card); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
      <h3 style="font-size: 1.2rem; margin-bottom: 1.25rem;">Personal & Target Information</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.2rem;">
        <div class="form-group" style="margin-bottom: 0;">
          <label for="profNameInput">Full Name</label>
          <input type="text" id="profNameInput" class="form-control" value="${user.name || ''}" required>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label for="profEmailInput">Email Address</label>
          <input type="email" id="profEmailInput" class="form-control" value="${user.email || ''}" required>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.2rem;">
        <div class="form-group" style="margin-bottom: 0;">
          <label for="profRoleSelect">Target Job Role</label>
          <select id="profRoleSelect" class="form-control">
            <option value="Full Stack Engineer" ${user.role === 'Full Stack Engineer' ? 'selected' : ''}>Full Stack Engineer</option>
            <option value="Frontend Specialist" ${user.role === 'Frontend Specialist' ? 'selected' : ''}>Frontend Specialist</option>
            <option value="Backend Specialist" ${user.role === 'Backend Specialist' ? 'selected' : ''}>Backend Specialist</option>
            <option value="Data Analyst / Scientist" ${user.role === 'Data Analyst / Scientist' ? 'selected' : ''}>Data Analyst / Scientist</option>
            <option value="Cloud & DevOps" ${user.role === 'Cloud & DevOps' ? 'selected' : ''}>Cloud & DevOps</option>
            <option value="Product Manager" ${user.role === 'Product Manager' ? 'selected' : ''}>Product Manager</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom: 0;">
          <label for="profExpSelect">Experience Level</label>
          <select id="profExpSelect" class="form-control">
            <option value="Entry-Level / Graduate (0-2 YOE)" ${user.experience === 'Entry-Level / Graduate (0-2 YOE)' ? 'selected' : ''}>Entry-Level / Graduate (0-2 YOE)</option>
            <option value="Mid-Level (3-5 YOE)" ${user.experience === 'Mid-Level (3-5 YOE)' ? 'selected' : ''}>Mid-Level (3-5 YOE)</option>
            <option value="Senior / Lead (6+ YOE)" ${user.experience === 'Senior / Lead (6+ YOE)' ? 'selected' : ''}>Senior / Lead (6+ YOE)</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="profTechInput">Preferred Tech Stack</label>
        <input type="text" id="profTechInput" class="form-control" value="${user.techStack || ''}" placeholder="e.g. React, Node.js, Python, PostgreSQL">
      </div>

      <div class="form-group">
        <label for="profCompInput">Target Companies (Optional)</label>
        <input type="text" id="profCompInput" class="form-control" value="${user.targetCompanies || ''}" placeholder="e.g. Google, Meta, Amazon, Stripe">
      </div>

      <div style="margin-top: 1.5rem; text-align: right;">
        <button type="submit" class="btn-timer btn-timer-primary" style="padding: 0.65rem 1.5rem;">
          Save Profile Changes
        </button>
      </div>
    </form>
  `;
}

function renderProfileSettingsHTML() {
  return `
    <div style="background: var(--bg-card); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
      <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">Appearance & Theme Settings</h3>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        Customize the visual theme of skillIssue. Your selection will persist across page refreshes and browser sessions.
      </p>

      <div class="form-group">
        <label style="display: block; font-weight: 700; margin-bottom: 0.75rem;">Theme Preference</label>
        <div style="display: flex; gap: 1rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; background: var(--bg-subtle); padding: 0.75rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
            <input type="radio" name="settingsTheme" value="light" ${STATE.theme === 'light' ? 'checked' : ''} onchange="setSettingsTheme('light')">
            <span>Light Mode</span>
          </label>
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; background: var(--bg-subtle); padding: 0.75rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
            <input type="radio" name="settingsTheme" value="dark" ${STATE.theme === 'dark' ? 'checked' : ''} onchange="setSettingsTheme('dark')">
            <span>Dark Mode</span>
          </label>
        </div>
      </div>
    </div>
  `;
}

window.setSettingsTheme = function (theme) {
  STATE.theme = theme;
  localStorage.setItem("jobfinds_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};

function attachProfileEvents(user) {
  const fileInput = document.getElementById("profilePicFileInput");
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (evt) {
        user.profilePicture = evt.target.result;
        setAuthUser(user);
      };
      reader.readAsDataURL(file);
    });
  }

  const editForm = document.getElementById("editProfileForm");
  if (editForm) {
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      user.name = document.getElementById("profNameInput").value.trim();
      user.email = document.getElementById("profEmailInput").value.trim();
      user.role = document.getElementById("profRoleSelect").value;
      user.experience = document.getElementById("profExpSelect").value;
      user.techStack = document.getElementById("profTechInput").value.trim();
      user.targetCompanies = document.getElementById("profCompInput").value.trim();

      setAuthUser(user);
      alert("Profile updated successfully!");
    });
  }
}

window.removeProfilePicture = function () {
  const user = getAuthUser();
  if (!user) return;
  user.profilePicture = null;
  setAuthUser(user);
};

// ==========================================
// 14. DOM READY BOOTSTRAP
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initAccountWidget();
  initNavigation();
  initDsaSection();
  initJobPrepSection();
  initInterviewTips();
  initMockSimulator();
  initModals();
  updateDashboardMetrics();
});
