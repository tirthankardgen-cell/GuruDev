import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { problems } from "@/lib/gurukuls";
import { Icon } from "@/components/icon";
import { Playground } from "@/components/playground";

export function generateStaticParams() {
  return problems.map((problem) => ({ problemSlug: problem.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ problemSlug: string }>;
}): Promise<Metadata> {
  const { problemSlug } = await params;
  return {
    title:
      problems.find((problem) => problem.slug === problemSlug)?.title ??
      "Coding problem",
  };
}
const starters: Record<string, string> = {
  "two-sum":
    "// Find two indices whose values sum to target.\nfunction twoSum(nums, target) {\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const needed = target - nums[i];\n    if (seen.has(needed)) {\n      return [seen.get(needed), i];\n    }\n    seen.set(nums[i], i);\n  }\n}\n\nconsole.log(twoSum([2, 7, 11, 15], 9));",
  "reverse-a-string":
    'function reverseString(text) {\n  return text.split("").reverse().join("");\n}\n\nconsole.log(reverseString("gurukul"));',
  "balanced-brackets":
    'function balanced(text) {\n  const stack = [];\n  const pairs = { ")": "(", "]": "[", "}": "{" };\n  for (const char of text) {\n    if ("([{".includes(char)) stack.push(char);\n    else if (stack.pop() !== pairs[char]) return false;\n  }\n  return stack.length === 0;\n}\n\nconsole.log(balanced("({[]})"));',
  "first-unique-character":
    'function firstUnique(text) {\n  const counts = new Map();\n  for (const char of text) {\n    counts.set(char, (counts.get(char) || 0) + 1);\n  }\n  return [...text].findIndex(char => counts.get(char) === 1);\n}\n\nconsole.log(firstUnique("learning"));',
};
export default async function ProblemPage({
  params,
}: {
  params: Promise<{ problemSlug: string }>;
}) {
  const slug = (await params).problemSlug;
  const selected = problems.find((item) => item.slug === slug);
  if (!selected) notFound();
  return (
    <div className="section-container reading-page">
      <Link className="back-link" href="/gurukul/abhyas">
        <Icon name="back" size={16} /> Back to Abhyas Gurukul
      </Link>
      <div className="problem-layout">
        <article className="problem-description">
          <div className="eyebrow">A LITTLE DELIBERATE PRACTICE</div>
          <h1>{selected.title}</h1>
          <div className="project-tags">
            <span className={`difficulty ${selected.difficulty.toLowerCase()}`}>
              {selected.difficulty}
            </span>
            <span>{selected.topic}</span>
          </div>
          <p>{selected.description}</p>
          <h2>A small example</h2>
          <pre>
            Input: {selected.input}
            {"\n"}Output: {selected.output}
          </pre>
          <p className="problem-explanation">{selected.explanation}</p>
          <h2>Constraints</h2>
          <p className="problem-explanation">{selected.constraint}</p>
          <details>
            <summary>A gentle hint</summary>
            <p>{selected.hint}</p>
          </details>
          <details>
            <summary>Reflect on the approach</summary>
            <p>
              How much work does your solution do as the input grows? Can you
              explain why the sample solution works, and which edge cases you
              would check?
            </p>
          </details>
          <p className="collection-note">
            The editor contains a worked example for this preview.
          </p>
        </article>
        <div className="problem-editor">
          <Playground starter={starters[slug]} sampleOutput={selected.output} />
          <div className="submission-preview">
            <button className="button button-outline" disabled>
              Submit solution
            </button>
            <p>
              Graded submissions and private test cases will be available with
              the full release.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
