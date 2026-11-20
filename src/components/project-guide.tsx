"use client";
import { useState } from "react";
import { Icon } from "./icon";

const steps = [
  {
    title: "Describe your idea",
    eyebrow: "01 · DEFINE THE OUTCOME",
    text: "Start with a small, clear goal. A good requirement makes your build easier to understand, review, and test.",
    checks: [
      "Add a habit with a short, readable name.",
      "Mark a habit complete for today.",
      "Keep this first version on a single screen.",
    ],
    code: "Build a simple daily habit tracker in React.\nUse a text input and an Add habit button.\nShow each habit with a completion checkbox.\nReject empty names and keep the interface accessible.",
    question: "How can I keep my first AI-assisted build manageable?",
    answer:
      "Choose one useful outcome and describe how you will check it. Ask for a small interface first, review the code, and add one feature at a time. Saving data can be a separate step.",
  },
  {
    title: "Build the interface",
    eyebrow: "02 · MAKE A SMALL CHANGE",
    text: "Ask for the simplest interface that meets your requirement. Read the generated component before you apply the change.",
    checks: [
      "Find where the list of habits is stored.",
      "Explain how the input value changes.",
      "Check that each checkbox has a visible label.",
    ],
    code: 'const [habits, setHabits] = useState([]);\nconst [name, setName] = useState("");\n\n// Before adding a habit, trim the name.\nif (!name.trim()) return;',
    question: "Why do we trim the habit name?",
    answer:
      "A name made only of spaces should count as empty. Trimming removes spaces from the ends, so validation works for both an empty string and a string full of spaces.",
  },
  {
    title: "Review & test",
    eyebrow: "03 · UNDERSTAND THE RESULT",
    text: "A working screen is a starting point. Test a few real interactions, read the changes, and explain the important code in your own words.",
    checks: [
      "An empty habit cannot be added.",
      "Toggling one habit leaves the others unchanged.",
      "You can use every control with the keyboard.",
    ],
    code: "Review checklist\n✓ Clear state and event handlers\n✓ Validation for empty names\n✓ Stable keys for list items\n✓ Labels and visible keyboard focus",
    question: "What should I test after the happy path?",
    answer:
      "Try empty input, repeated clicks, long names, and keyboard navigation. Then check that updating one item does not accidentally change another. Each check should match a specific requirement.",
  },
];

export function ProjectGuide() {
  const [selected, setSelected] = useState(0);
  const step = steps[selected];
  return (
    <>
      <div className="filter-tabs" aria-label="Guided project steps">
        {steps.map((item, i) => (
          <button
            key={item.title}
            aria-pressed={selected === i}
            className={selected === i ? "active" : ""}
            onClick={() => setSelected(i)}
          >
            0{i + 1} {item.title}
          </button>
        ))}
      </div>
      <div className="project-workspace">
        <section className="project-step-panel">
          <div className="eyebrow">{step.eyebrow}</div>
          <h2>{step.title}</h2>
          <p>{step.text}</p>
          <ul>
            {step.checks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
          <pre className="code-example">{step.code}</pre>
          <p className="lesson-note">
            A sample guided build. Your project and AI conversations will be
            saved when accounts become available.
          </p>
        </section>
        <aside className="project-side">
          <div className="ai-guide">
            <h3>
              <Icon name="spark" size={21} /> AI Guide
            </h3>
            <span>Sample guidance · AI assistance preview</span>
            <div className="ai-question">{step.question}</div>
            <p>{step.answer}</p>
            <span>Read. Question. Verify.</span>
          </div>
          <div className="habit-preview">
            <span className="mini-eyebrow">
              THE RESULT YOU’RE WORKING TOWARD
            </span>
            <h3>
              My daily practice <Icon name="leaf" size={23} />
            </h3>
            {["Read a few pages", "Write a little code"].map((habit) => (
              <div className="habit-item" key={habit}>
                <span className="habit-check checked">
                  <Icon name="check" size={12} />
                </span>
                {habit}
              </div>
            ))}
            <div className="habit-bottom">
              Small steps make a practice.<span>✳</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
