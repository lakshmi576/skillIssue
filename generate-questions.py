import json

real_questions = {
    "Array": [
        ("Two Sum", "LeetCode", "https://leetcode.com/problems/two-sum/"),
        ("Subarray with Given Sum", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"),
        ("Merge Sort", "CodeChef", "https://www.codechef.com/practice/tags/merge-sort"),
        ("Middle of the Linked List", "Code360", "https://www.naukri.com/code360/problems/middle-of-linked-list_973250"),
        ("Kadane's Algorithm", "HackerRank", "https://www.hackerrank.com/challenges/max-subarray/problem"),
        ("Sort Colors (0s, 1s, 2s)", "LeetCode", "https://leetcode.com/problems/sort-colors/"),
        ("Majority Element", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/majority-element-1587115620/1"),
        ("Move Zeroes", "LeetCode", "https://leetcode.com/problems/move-zeroes/"),
        ("Rotate Array", "Code360", "https://www.naukri.com/code360/problems/rotate-array_1230585"),
        ("Container With Most Water", "LeetCode", "https://leetcode.com/problems/container-with-most-water/")
    ],
    "String": [
        ("Valid Anagram", "LeetCode", "https://leetcode.com/problems/valid-anagram/"),
        ("Reverse Words in a String", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string3547/1"),
        ("Longest Substring Without Repeating", "CodeChef", "https://www.codechef.com/practice"),
        ("Valid Palindrome", "Code360", "https://www.naukri.com/code360/problems/check-if-the-string-is-a-palindrome_1062699"),
        ("Group Anagrams", "LeetCode", "https://leetcode.com/problems/group-anagrams/"),
        ("String to Integer (atoi)", "LeetCode", "https://leetcode.com/problems/string-to-integer-atoi/"),
        ("Longest Common Prefix", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1"),
        ("Count and Say", "HackerRank", "https://www.hackerrank.com/"),
        ("Longest Palindromic Substring", "LeetCode", "https://leetcode.com/problems/longest-palindromic-substring/"),
        ("Find Index of First Occurrence", "LeetCode", "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/")
    ],
    "Hashing": [
        ("Contains Duplicate", "LeetCode", "https://leetcode.com/problems/contains-duplicate/"),
        ("Top K Frequent Elements", "LeetCode", "https://leetcode.com/problems/top-k-frequent-elements/"),
        ("Intersection of Two Arrays", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1"),
        ("Subarray Sum Equals K", "Code360", "https://www.naukri.com/code360/problems/subarrays-with-sum-k_1082554"),
        ("Longest Consecutive Sequence", "LeetCode", "https://leetcode.com/problems/longest-consecutive-sequence/"),
        ("Isomorphic Strings", "LeetCode", "https://leetcode.com/problems/isomorphic-strings/"),
        ("4Sum", "CodeChef", "https://www.codechef.com/"),
        ("Happy Number", "LeetCode", "https://leetcode.com/problems/happy-number/"),
        ("Find All Anagrams in a String", "HackerRank", "https://www.hackerrank.com/"),
        ("First Unique Character in a String", "LeetCode", "https://leetcode.com/problems/first-unique-character-in-a-string/")
    ],
    "Linked List": [
        ("Reverse a Linked List", "LeetCode", "https://leetcode.com/problems/reverse-linked-list/"),
        ("Middle of the Linked List", "Code360", "https://www.naukri.com/code360/problems/middle-of-linked-list_973250"),
        ("Detect Cycle in Linked List", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1"),
        ("Merge Two Sorted Lists", "LeetCode", "https://leetcode.com/problems/merge-two-sorted-lists/"),
        ("Remove Nth Node From End", "LeetCode", "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"),
        ("Add Two Numbers", "LeetCode", "https://leetcode.com/problems/add-two-numbers/"),
        ("Intersection of Two Linked Lists", "HackerRank", "https://www.hackerrank.com/"),
        ("Palindrome Linked List", "CodeChef", "https://www.codechef.com/"),
        ("Linked List Cycle II", "LeetCode", "https://leetcode.com/problems/linked-list-cycle-ii/"),
        ("Copy List with Random Pointer", "LeetCode", "https://leetcode.com/problems/copy-list-with-random-pointer/")
    ],
    "Stack": [
        ("Valid Parentheses", "LeetCode", "https://leetcode.com/problems/valid-parentheses/"),
        ("Min Stack", "LeetCode", "https://leetcode.com/problems/min-stack/"),
        ("Evaluate Reverse Polish Notation", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1"),
        ("Next Greater Element I", "Code360", "https://www.naukri.com/code360/problems/next-greater-element_670312"),
        ("Daily Temperatures", "LeetCode", "https://leetcode.com/problems/daily-temperatures/"),
        ("Largest Rectangle in Histogram", "HackerRank", "https://www.hackerrank.com/"),
        ("Simplify Path", "LeetCode", "https://leetcode.com/problems/simplify-path/"),
        ("Decode String", "CodeChef", "https://www.codechef.com/"),
        ("Asteroid Collision", "LeetCode", "https://leetcode.com/problems/asteroid-collision/"),
        ("Online Stock Span", "LeetCode", "https://leetcode.com/problems/online-stock-span/")
    ],
    "Queue": [
        ("Implement Queue using Stacks", "LeetCode", "https://leetcode.com/problems/implement-queue-using-stacks/"),
        ("Implement Stack using Queues", "LeetCode", "https://leetcode.com/problems/implement-stack-using-queues/"),
        ("Sliding Window Maximum", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1"),
        ("First Non-Repeating Character", "Code360", "https://www.naukri.com/code360/problems/first-non-repeating-character-in-a-stream_975306"),
        ("Rotting Oranges", "LeetCode", "https://leetcode.com/problems/rotting-oranges/"),
        ("Design Circular Queue", "HackerRank", "https://www.hackerrank.com/"),
        ("Number of Recent Calls", "LeetCode", "https://leetcode.com/problems/number-of-recent-calls/"),
        ("Task Scheduler", "LeetCode", "https://leetcode.com/problems/task-scheduler/"),
        ("Dota2 Senate", "CodeChef", "https://www.codechef.com/"),
        ("Moving Average from Data Stream", "LeetCode", "https://leetcode.com/problems/moving-average-from-data-stream/")
    ],
    "Trees": [
        ("Binary Tree Inorder Traversal", "LeetCode", "https://leetcode.com/problems/binary-tree-inorder-traversal/"),
        ("Maximum Depth of Binary Tree", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1"),
        ("Invert Binary Tree", "LeetCode", "https://leetcode.com/problems/invert-binary-tree/"),
        ("Lowest Common Ancestor of BST", "Code360", "https://www.naukri.com/code360/problems/lca-in-a-bst_981280"),
        ("Binary Tree Level Order Traversal", "LeetCode", "https://leetcode.com/problems/binary-tree-level-order-traversal/"),
        ("Same Tree", "HackerRank", "https://www.hackerrank.com/"),
        ("Subtree of Another Tree", "LeetCode", "https://leetcode.com/problems/subtree-of-another-tree/"),
        ("Validate Binary Search Tree", "LeetCode", "https://leetcode.com/problems/validate-binary-search-tree/"),
        ("Kth Smallest Element in a BST", "CodeChef", "https://www.codechef.com/"),
        ("Diameter of Binary Tree", "LeetCode", "https://leetcode.com/problems/diameter-of-binary-tree/")
    ],
    "Graphs": [
        ("Detect Cycle in Undirected Graph", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1"),
        ("Number of Islands", "LeetCode", "https://leetcode.com/problems/number-of-islands/"),
        ("Clone Graph", "Code360", "https://www.naukri.com/code360/problems/clone-graph_1103024"),
        ("Course Schedule", "LeetCode", "https://leetcode.com/problems/course-schedule/"),
        ("Dijkstra's Algorithm", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1"),
        ("Pacific Atlantic Water Flow", "HackerRank", "https://www.hackerrank.com/"),
        ("Surrounded Regions", "LeetCode", "https://leetcode.com/problems/surrounded-regions/"),
        ("Word Ladder", "LeetCode", "https://leetcode.com/problems/word-ladder/"),
        ("Graph Valid Tree", "CodeChef", "https://www.codechef.com/"),
        ("Network Delay Time", "LeetCode", "https://leetcode.com/problems/network-delay-time/")
    ],
    "Recursion": [
        ("Tower of Hanoi", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1"),
        ("Fibonacci Number", "LeetCode", "https://leetcode.com/problems/fibonacci-number/"),
        ("Subsets", "Code360", "https://www.naukri.com/code360/problems/subsets_3844372"),
        ("Permutations", "LeetCode", "https://leetcode.com/problems/permutations/"),
        ("Combination Sum", "LeetCode", "https://leetcode.com/problems/combination-sum/"),
        ("Word Search", "HackerRank", "https://www.hackerrank.com/"),
        ("N-Queens", "LeetCode", "https://leetcode.com/problems/n-queens/"),
        ("Palindrome Partitioning", "CodeChef", "https://www.codechef.com/"),
        ("Generate Parentheses", "LeetCode", "https://leetcode.com/problems/generate-parentheses/"),
        ("Power of Three", "LeetCode", "https://leetcode.com/problems/power-of-three/")
    ],
    "Sorting": [
        ("Merge Sort", "CodeChef", "https://www.codechef.com/practice/tags/merge-sort"),
        ("Quick Sort", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/quick-sort/1"),
        ("Insertion Sort", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/insertion-sort/1"),
        ("Sort an Array", "LeetCode", "https://leetcode.com/problems/sort-an-array/"),
        ("Largest Number", "Code360", "https://www.naukri.com/code360/problems/largest-number_1082552"),
        ("Kth Largest Element in an Array", "LeetCode", "https://leetcode.com/problems/kth-largest-element-in-an-array/"),
        ("Top K Frequent Words", "HackerRank", "https://www.hackerrank.com/"),
        ("Sort Colors", "LeetCode", "https://leetcode.com/problems/sort-colors/"),
        ("Custom Sort String", "LeetCode", "https://leetcode.com/problems/custom-sort-string/"),
        ("Sort List", "LeetCode", "https://leetcode.com/problems/sort-list/")
    ],
    "Searching": [
        ("Binary Search", "LeetCode", "https://leetcode.com/problems/binary-search/"),
        ("Search in Rotated Sorted Array", "Code360", "https://www.naukri.com/code360/problems/search-in-rotated-sorted-array_1082554"),
        ("First Bad Version", "LeetCode", "https://leetcode.com/problems/first-bad-version/"),
        ("Find First and Last Position", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1"),
        ("Search a 2D Matrix", "LeetCode", "https://leetcode.com/problems/search-a-2d-matrix/"),
        ("Find Minimum in Rotated Sorted Array", "HackerRank", "https://www.hackerrank.com/"),
        ("Peak Index in a Mountain Array", "LeetCode", "https://leetcode.com/problems/peak-index-in-a-mountain-array/"),
        ("Capacity To Ship Packages", "CodeChef", "https://www.codechef.com/"),
        ("Koko Eating Bananas", "LeetCode", "https://leetcode.com/problems/koko-eating-bananas/"),
        ("Median of Two Sorted Arrays", "LeetCode", "https://leetcode.com/problems/median-of-two-sorted-arrays/")
    ],
    "Dynamic Programming": [
        ("Climbing Stairs", "LeetCode", "https://leetcode.com/problems/climbing-stairs/"),
        ("Coin Change", "LeetCode", "https://leetcode.com/problems/coin-change/"),
        ("Longest Increasing Subsequence", "Code360", "https://www.naukri.com/code360/problems/longest-increasing-subsequence_630459"),
        ("0 - 1 Knapsack Problem", "GeeksforGeeks", "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0917/1"),
        ("House Robber", "LeetCode", "https://leetcode.com/problems/house-robber/"),
        ("Word Break", "HackerRank", "https://www.hackerrank.com/"),
        ("Partition Equal Subset Sum", "LeetCode", "https://leetcode.com/problems/partition-equal-subset-sum/"),
        ("Longest Common Subsequence", "CodeChef", "https://www.codechef.com/"),
        ("Edit Distance", "LeetCode", "https://leetcode.com/problems/edit-distance/"),
        ("Target Sum", "LeetCode", "https://leetcode.com/problems/target-sum/")
    ]
}

questions = []
counter = 1
difficulties = ["Easy", "Medium", "Hard"]

for topic, items in real_questions.items():
    for idx, (title, platform, url) in enumerate(items):
        q = {
            "id": f"q-{counter:03d}",
            "title": title,
            "topic": topic,
            "difficulty": difficulties[idx % len(difficulties)],
            "platform": platform,
            "problemUrl": url,
            "solved": False
        }
        questions.append(q)
        counter += 1

with open("questions.json", "w") as f:
    json.dump({"questions": questions}, f, indent=2)

print(f"Updated questions.json successfully with {len(questions)} items across all 12 topics!")