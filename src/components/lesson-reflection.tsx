"use client";
import { useState } from "react";
import { Icon } from "./icon";

export function LessonReflection({ python = false }: { python?: boolean }) {
  const [answer, setAnswer] = useState<string | null>(null);
  return (
    <div className="reflection-box">
      <div className="eyebrow">
        <Icon name="leaf" size={15} /> PAUSE AND REFLECT
      </div>
      <h3>
        What will {python ? "print(greeting)" : "console.log(greeting)"} show?
      </h3>
      <div className="answer-options">
        {["greeting", "Hello, Asha!", "Hello, learner!"].map((option) => (
          <button
            key={option}
            onClick={() => setAnswer(option)}
            aria-pressed={answer === option}
            className={answer === option ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
      {answer && (
        <p className="answer-feedback" aria-live="polite">
          {answer === "Hello, Asha!"
            ? "Exactly. The variable name points to a value. The output uses that value, so learner becomes Asha in the greeting."
            : "Look at the value assigned to learner. The greeting uses that value, rather than the name of the variable. Give it another try."}
        </p>
      )}
    </div>
  );
}
