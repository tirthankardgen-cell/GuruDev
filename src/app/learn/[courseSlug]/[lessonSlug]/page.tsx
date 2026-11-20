import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { LessonReflection } from "@/components/lesson-reflection";

export function generateStaticParams() {
  return ["javascript-foundations", "python-foundations"].map((courseSlug) => ({
    courseSlug,
    lessonSlug: "variables",
  }));
}
export const metadata: Metadata = {
  title: "Your first variables — A foundation lesson",
};
export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}) {
  const { courseSlug, lessonSlug } = await params;
  if (
    !["javascript-foundations", "python-foundations"].includes(courseSlug) ||
    lessonSlug !== "variables"
  )
    notFound();
  const python = courseSlug.startsWith("python");
  return (
    <div className="section-container reading-page">
      <Link className="back-link" href="/gurukul/vidya">
        <Icon name="back" size={16} /> Back to Vidya Gurukul
      </Link>
      <div className="lesson-layout">
        <aside className="lesson-sidebar">
          <div className="eyebrow">A BEGINNER’S LEARNING PATH</div>
          <h3>
            {python ? "Python" : "JavaScript"}
            <br />
            foundations
          </h3>
          <nav className="lesson-chapters" aria-label="Course chapters">
            {[
              "Your first variables",
              "Making decisions",
              "Loops & repetition",
              "Useful little functions",
            ].map((chapter, i) =>
              i === 0 ? (
                <a
                  className="current"
                  href="#lesson"
                  aria-current="page"
                  key={chapter}
                >
                  <span className="chapter-number">01</span>
                  {chapter}
                </a>
              ) : (
                <span key={chapter}>
                  <span className="chapter-number">0{i + 1}</span>
                  {chapter}
                </span>
              ),
            )}
          </nav>
          <p>Preview lesson · The complete learning path is growing.</p>
        </aside>
        <article className="lesson-content" id="lesson">
          <div className="eyebrow">LESSON 01 · LEARN & REFLECT</div>
          <h1>
            A name for a little piece
            <br />
            of knowledge.
          </h1>
          <p>
            A variable gives a value a name. Instead of repeating a piece of
            information, you can keep it somewhere and refer to it when you need
            it.
          </p>
          <h2>Your first variable</h2>
          <p>
            Imagine welcoming a learner to the campus. We store their name,
            create a greeting, and display it.
          </p>
          <pre className="code-example">
            {python
              ? 'learner = "Asha"\ngreeting = f"Hello, {learner}!"\n\nprint(greeting)'
              : 'const learner = "Asha";\nconst greeting = `Hello, ${learner}!`;\n\nconsole.log(greeting);'}
          </pre>
          <p>
            {python
              ? "Python assigns values with an equals sign. The f before the string lets you place a variable’s value inside curly braces."
              : "Use const for a variable that you won’t reassign. The backticks make a template string, and ${learner} puts the value of learner inside it."}
          </p>
          <LessonReflection python={python} />
          <h2>Now make it your own.</h2>
          <p>
            Open the playground and try writing a greeting with your own name.
            Before you run it, predict exactly what you expect to see.
          </p>
          <p className="lesson-note">
            This lesson is a preview. Your answers stay on this screen; saved
            progress will arrive with accounts.
          </p>
          <div className="lesson-next">
            <Link className="text-link" href="/gurukul/vidya">
              <Icon name="back" size={15} /> Back to the learning path
            </Link>
            <Link className="button button-primary" href="/gurukul/prayog">
              Open playground <Icon name="arrow" size={16} />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
