export const gurukuls = [
  {
    slug: "vidya",
    name: "Vidya",
    sanskrit: "विद्या",
    purpose: "Coding Foundations",
    description: "Understand the ideas behind your code.",
    intro:
      "Every great builder starts with a little curiosity. Learn the fundamentals, one thoughtful lesson at a time.",
    icon: "book",
    color: "leaf",
    x: 25,
    y: 18,
  },
  {
    slug: "shilpa",
    name: "Shilpa",
    sanskrit: "शिल्प",
    purpose: "Vibe Coding & Projects",
    description: "Build with AI. Understand what you create.",
    intro:
      "Turn a small idea into something you can use. Learn to guide AI, read its code, and build with intention.",
    icon: "spark",
    color: "clay",
    x: 74,
    y: 17,
  },
  {
    slug: "prayog",
    name: "Prayog",
    sanskrit: "प्रयोग",
    purpose: "Compiler & Playground",
    description: "Write, run, and explore.",
    intro:
      "A little space for big experiments. Try an idea, change a line, and see what you discover.",
    icon: "code",
    color: "clay",
    x: 15,
    y: 55,
  },
  {
    slug: "abhyas",
    name: "Abhyas",
    sanskrit: "अभ्यास",
    purpose: "Coding Problems",
    description: "Learn through deliberate practice.",
    intro:
      "Understanding grows with practice. Work through a problem, reflect on your approach, and try again.",
    icon: "brackets",
    color: "leaf",
    x: 83,
    y: 54,
  },
  {
    slug: "grantha",
    name: "Grantha",
    sanskrit: "ग्रन्थ",
    purpose: "Reference Library",
    description: "Keep useful knowledge close.",
    intro:
      "A well-kept shelf for a curious mind. Find clear explanations, useful patterns, and original documentation.",
    icon: "library",
    color: "leaf",
    x: 33,
    y: 83,
  },
  {
    slug: "sabha",
    name: "Sabha",
    sanskrit: "सभा",
    purpose: "Developer Community",
    description: "Ask, explain, and learn together.",
    intro:
      "Good questions bring us together. A future gathering place for sharing work and learning from one another.",
    icon: "users",
    color: "clay",
    x: 66,
    y: 84,
    comingSoon: true,
  },
] as const;

export type Gurukul = (typeof gurukuls)[number];
export type GurukulSlug = Gurukul["slug"];
export const getGurukul = (slug: string) =>
  gurukuls.find((hut) => hut.slug === slug);

export const problems = [
  {
    slug: "two-sum",
    title: "Two sum",
    difficulty: "Easy",
    topic: "Arrays",
    description: "Find two numbers in an array that add up to a target.",
    input: "nums = [2, 7, 11, 15], target = 9",
    output: "[0, 1]",
    explanation:
      "The numbers at indices 0 and 1 are 2 and 7. Together, they make 9.",
    hint: "For each number, ask: which number would complete the target? A map can help you remember what you have seen.",
    constraint: "2 ≤ nums.length ≤ 10,000; exactly one valid pair exists.",
  },
  {
    slug: "reverse-a-string",
    title: "Reverse a string",
    difficulty: "Easy",
    topic: "Strings",
    description: "Return the characters of a string in reverse order.",
    input: 'text = "gurukul"',
    output: '"lukurug"',
    explanation:
      "The last character becomes the first, and the first becomes the last.",
    hint: "Try starting at the last character and moving toward the first.",
    constraint:
      "0 ≤ text.length ≤ 10,000; input contains lowercase English letters.",
  },
  {
    slug: "balanced-brackets",
    title: "Balanced brackets",
    difficulty: "Medium",
    topic: "Stacks",
    description:
      "Decide whether every opening bracket has a matching closing bracket in the correct order.",
    input: 'text = "({[]})"',
    output: "true",
    explanation: "Each pair closes in the reverse order that it opened.",
    hint: "Keep the opening brackets in a stack. Compare each closing bracket with the most recent opening bracket.",
    constraint: "0 ≤ text.length ≤ 10,000; input contains only ()[]{}.",
  },
  {
    slug: "first-unique-character",
    title: "First unique character",
    difficulty: "Medium",
    topic: "Maps",
    description:
      "Find the index of the first character that appears only once. Return -1 if none exists.",
    input: 'text = "learning"',
    output: "0",
    explanation: "The character l appears once and is the first character.",
    hint: "First count each character, then walk through the string in its original order.",
    constraint:
      "1 ≤ text.length ≤ 100,000; input contains lowercase English letters.",
  },
] as const;

export const references = [
  {
    title: "Variables & constants",
    category: "JavaScript",
    description: "Give values a name. Know when to use let and const.",
    code: 'const campus = "GuruDev";\nlet lessonsCompleted = 0;',
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types",
  },
  {
    title: "Lists & dictionaries",
    category: "Python",
    description: "Collect, organise, and look up your data.",
    code: 'subjects = ["code", "build", "practise"]\nlearner = {"name": "Asha", "level": 1}',
    href: "https://docs.python.org/3/tutorial/datastructures.html",
  },
  {
    title: "Thinking in components",
    category: "React",
    description: "Break an interface into small, reusable pieces.",
    code: "function Greeting({ name }) {\n  return <h1>Welcome, {name}</h1>;\n}",
    href: "https://react.dev/learn/thinking-in-react",
  },
  {
    title: "Arrays & iteration",
    category: "JavaScript",
    description: "Transform a collection, one value at a time.",
    code: "const squares = [1, 2, 3].map(n => n * n);\n// [1, 4, 9]",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  },
  {
    title: "Writing a useful prompt",
    category: "AI & Building",
    description: "Describe the goal, constraints, and the result you expect.",
    code: "Goal: Build a habit tracker.\nConstraint: Keep data on this device.\nCheck: Empty habits cannot be added.",
    href: "/projects/habit-tracker",
  },
  {
    title: "Debugging with intention",
    category: "Foundations",
    description: "Reproduce, observe, narrow down, and verify.",
    code: "1. Reproduce the issue\n2. Inspect the smallest example\n3. Test one change at a time",
    href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong",
  },
] as const;
