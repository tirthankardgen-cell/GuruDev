"use client";

import { useState } from "react";
import { Icon } from "./icon";

const samples = {
  JavaScript:
    '// A small beginning. A world of possibilities.\nconst name = "Asha";\nconst subjects = ["learn", "build", "practise"];\n\nfunction welcome(learner) {\n  return `Welcome to GuruDev, ${learner}!`;\n}\n\nconsole.log(welcome(name));\nconsole.log(`Let’s ${subjects.join(", ")} together.`);',
  Python:
    '# A small beginning. A world of possibilities.\nname = "Asha"\nsubjects = ["learn", "build", "practise"]\n\ndef welcome(learner):\n    return f"Welcome to GuruDev, {learner}!"\n\nprint(welcome(name))\nprint(f"Let’s {\", \".join(subjects)} together.")',
};

export function Playground({
  starter,
  sampleOutput,
}: {
  starter?: string;
  sampleOutput?: string;
}) {
  const [language, setLanguage] = useState<keyof typeof samples>("JavaScript");
  const original = starter ?? samples[language];
  const [source, setSource] = useState(starter ?? samples.JavaScript);
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("Ready");
  const [copied, setCopied] = useState(false);
  function changeLanguage(next: keyof typeof samples) {
    setLanguage(next);
    setSource(samples[next]);
    setOutput("");
    setStatus("Ready");
    setCopied(false);
  }
  function runSample() {
    if (source !== original || stdin.trim()) {
      setOutput(
        "This design preview only demonstrates the unchanged sample. Reset the code and clear standard input to preview its output. Custom code and input will run when the compiler is connected.",
      );
      setStatus("Preview only");
      return;
    }
    setOutput(
      sampleOutput ??
        "Welcome to GuruDev, Asha!\nLet’s learn, build, practise together.",
    );
    setStatus("Sample output");
  }
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
    } catch {
      setStatus("Select the code to copy it");
    }
  }
  return (
    <section className="playground" aria-label="Code playground preview">
      <div className="workspace-toolbar">
        <div className="workspace-file">
          <Icon name="code" size={17} />
          <span>
            {starter
              ? "solution.js"
              : language === "JavaScript"
                ? "a-small-beginning.js"
                : "a_small_beginning.py"}
          </span>
        </div>
        {!starter && (
          <label className="language-select">
            <span className="sr-only">Programming language</span>
            <select
              value={language}
              onChange={(event) =>
                changeLanguage(event.target.value as keyof typeof samples)
              }
            >
              <option>JavaScript</option>
              <option>Python</option>
            </select>
          </label>
        )}
        <span className="workspace-preview">Preview</span>
      </div>
      <div className="editor-area">
        <div className="line-numbers" aria-hidden="true">
          {source.split("\n").map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <textarea
          className="code-input"
          aria-label="Code editor"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
            setCopied(false);
          }}
        />
      </div>
      <div className="editor-actions">
        <div>
          <button
            className="button button-primary button-small"
            onClick={runSample}
          >
            <Icon name="play" size={14} /> Run sample
          </button>
          <button
            className="editor-reset"
            onClick={() => {
              setSource(original);
              setStdin("");
              setOutput("");
              setStatus("Ready");
              setCopied(false);
            }}
          >
            <Icon name="reset" size={15} /> Reset
          </button>
        </div>
        <button className="editor-reset" onClick={copyCode}>
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <div className="console-panels">
        <label className="stdin-panel">
          <span>
            STANDARD INPUT <small>optional</small>
          </span>
          <textarea
            aria-label="Standard input"
            placeholder="Your input goes here…"
            value={stdin}
            onChange={(event) => setStdin(event.target.value)}
          />
        </label>
        <div className="output-panel">
          <div className="console-label">
            OUTPUT{" "}
            <span className="output-status">
              <span className="status-dot" />
              {status}
            </span>
          </div>
          <pre aria-live="polite">
            {output ||
              "Your next discovery starts with a small experiment.\nRun the sample to preview its output."}
          </pre>
        </div>
      </div>
      <div className="preview-notice">
        <Icon name="leaf" size={15} />
        <span>
          Explore the editor and sample output. Live code execution and saved
          work will arrive with the full release.
        </span>
      </div>
    </section>
  );
}
