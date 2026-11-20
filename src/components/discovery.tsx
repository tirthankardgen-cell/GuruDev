"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./icon";
import { problems, references } from "@/lib/gurukuls";

export function ProblemCollection() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All problems");
  const filtered = problems.filter(
    (problem) =>
      (difficulty === "All problems" || problem.difficulty === difficulty) &&
      `${problem.title} ${problem.topic}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="collection-toolbar">
        <div className="filter-tabs" aria-label="Filter problems">
          {["All problems", "Easy", "Medium"].map((filter) => (
            <button
              key={filter}
              aria-pressed={difficulty === filter}
              className={difficulty === filter ? "active" : ""}
              onClick={() => setDifficulty(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Icon name="search" size={17} />
          <input
            aria-label="Search problems"
            placeholder="Find a problem…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="problem-table">
        <div className="problem-table-head">
          <span>PROBLEM</span>
          <span>TOPIC</span>
          <span>DIFFICULTY</span>
          <span />
        </div>
        {filtered.map((problem, i) => (
          <Link
            className="problem-row"
            href={`/problems/${problem.slug}`}
            key={problem.slug}
          >
            <span>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {problem.title}
            </span>
            <span className="topic-tag">{problem.topic}</span>
            <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
              {problem.difficulty}
            </span>
            <Icon name="arrow" size={17} />
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="empty-results">
            No problems found. Try another topic or clear your filters.
          </div>
        )}
      </div>
      <p className="collection-note">
        A small starter collection. Take your time; understanding is the goal.
      </p>
    </>
  );
}

export function ReferenceLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All notes");
  const filtered = references.filter(
    (ref) =>
      (category === "All notes" || ref.category === category) &&
      `${ref.title} ${ref.category} ${ref.description}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <label className="search-field library-search">
        <Icon name="search" size={21} />
        <input
          aria-label="Search the library"
          placeholder="What would you like to understand?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <span>Find a little clarity</span>
      </label>
      <div className="filter-tabs library-tabs" aria-label="Filter references">
        {[
          "All notes",
          "JavaScript",
          "Python",
          "React",
          "AI & Building",
          "Foundations",
        ].map((filter) => (
          <button
            key={filter}
            aria-pressed={category === filter}
            className={category === filter ? "active" : ""}
            onClick={() => setCategory(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="reference-grid">
        {filtered.map((ref) => (
          <details className="reference-card" key={ref.title}>
            <summary>
              <span className="eyebrow">{ref.category}</span>
              <h3>{ref.title}</h3>
              <p>{ref.description}</p>
              <span className="text-link">
                Open note <Icon name="arrow" size={16} />
              </span>
            </summary>
            <div className="reference-detail">
              <pre>{ref.code}</pre>
              {ref.href.startsWith("/") ? (
                <Link className="text-link" href={ref.href}>
                  Explore the guided build <Icon name="arrow" size={14} />
                </Link>
              ) : (
                <a
                  className="text-link"
                  href={ref.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the original documentation{" "}
                  <Icon name="arrow" size={14} />
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-results">
          No notes found. Try a broader search or another subject.
        </div>
      )}
    </>
  );
}
