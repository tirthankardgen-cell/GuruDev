import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gurukuls, getGurukul } from "@/lib/gurukuls";
import { PageHeading } from "@/components/page-heading";
import { Playground } from "@/components/playground";
import { ProblemCollection, ReferenceLibrary } from "@/components/discovery";
import { HutIllustration } from "@/components/campus-art";
import { Icon } from "@/components/icon";

export function generateStaticParams() {
  return gurukuls.map((hut) => ({ slug: hut.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const hut = getGurukul((await params).slug);
  return { title: hut ? `${hut.name} — ${hut.purpose}` : "Gurukul" };
}

export default async function GurukulPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hut = getGurukul(slug);
  if (!hut) notFound();
  return (
    <div className={`destination-page section-container destination-${slug}`}>
      <PageHeading hut={hut} />
      {slug === "vidya" && (
        <>
          <div className="section-subheading">
            <h2>Start with strong roots.</h2>
            <span>Beginner-friendly learning paths</span>
          </div>
          <div className="course-grid">
            {[
              {
                title: "JavaScript foundations",
                label: "YOUR FIRST LINES OF CODE",
                icon: "code",
                color: "clay",
                description:
                  "From your first variable to functions that do something useful. A gentle introduction to the language of the web.",
                lessons: "8 planned lessons",
                time: "Self-paced",
                href: "/learn/javascript-foundations/variables",
                code: "const curiosity = true;\n\nif (curiosity) {\n  begin();\n}",
              },
              {
                title: "Python foundations",
                label: "SMALL STEPS, CLEAR THINKING",
                icon: "leaf",
                color: "leaf",
                description:
                  "Learn to think in code with a language that reads a little like English. Build confidence through simple exercises.",
                lessons: "8 planned lessons",
                time: "Self-paced",
                href: "/learn/python-foundations/variables",
                code: "curiosity = True\n\nif curiosity:\n    begin()",
              },
              {
                title: "The web, piece by piece",
                label: "UNDERSTAND WHAT YOU BUILD",
                icon: "brackets",
                color: "sand",
                description:
                  "Discover how structure, style, and behaviour come together. Start with a few useful notes from the library.",
                lessons: "Curated references",
                time: "At your pace",
                href: "/gurukul/grantha",
                code: "<main>\n  <h1>Hello, world.</h1>\n  <p>A small beginning.</p>\n</main>",
              },
            ].map((course) => (
              <article className="course-card" key={course.title}>
                <div className={`course-visual ${course.color}`}>
                  <span className="course-symbol">
                    <Icon name={course.icon} size={27} />
                  </span>
                  <pre>{course.code}</pre>
                  <span className="visual-leaf">
                    <Icon name="leaf" size={65} />
                  </span>
                </div>
                <div className="course-content">
                  <div className="eyebrow">{course.label}</div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span>
                      <Icon name="book" size={14} />
                      {course.lessons}
                    </span>
                    <span>
                      <Icon name="clock" size={14} />
                      {course.time}
                    </span>
                  </div>
                  <Link className="text-link" href={course.href}>
                    {course.href.includes("learn")
                      ? "Preview first lesson"
                      : "Explore the references"}
                    <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="thought-strip">
            <Icon name="leaf" size={24} />
            <p>
              Don’t rush to know everything. Start by understanding one thing
              well.
            </p>
            <Link href="/about">
              Our philosophy <Icon name="arrow" size={15} />
            </Link>
          </div>
        </>
      )}
      {slug === "shilpa" && (
        <>
          <div className="featured-project">
            <div className="project-intro">
              <div className="eyebrow">YOUR FIRST GUIDED BUILD</div>
              <h2>
                Small habits.
                <br />
                Thoughtful software.
              </h2>
              <p>
                Build a habit tracker with AI, from a clear requirement to a
                carefully reviewed result. Understand every step along the way.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>AI-assisted</span>
                <span>Beginner</span>
              </div>
              <Link
                className="button button-primary"
                href="/projects/habit-tracker"
              >
                Explore the guided build <Icon name="arrow" size={16} />
              </Link>
            </div>
            <div className="habit-preview">
              <span className="mini-eyebrow">A LITTLE BETTER, EVERY DAY</span>
              <h3>
                My daily practice <Icon name="leaf" size={23} />
              </h3>
              {[
                "Read a few pages",
                "Write a little code",
                "Take a quiet walk",
              ].map((habit, i) => (
                <div className="habit-item" key={habit}>
                  <span
                    className={i < 2 ? "habit-check checked" : "habit-check"}
                  >
                    {i < 2 && <Icon name="check" size={12} />}
                  </span>
                  {habit}
                  <span className="habit-days">
                    {i < 2 ? "Today ✓" : "Your next small step"}
                  </span>
                </div>
              ))}
              <div className="habit-bottom">
                Progress, a little at a time.<span>✳</span>
              </div>
            </div>
          </div>
          <div className="section-subheading">
            <h2>Build with intention.</h2>
            <span>The craft behind the prompt</span>
          </div>
          <div className="principle-grid">
            {[
              {
                title: "Describe it clearly",
                text: "Give your idea an outcome, a few constraints, and an example.",
              },
              {
                title: "Understand the code",
                text: "Ask questions. Read the change. Know why it works.",
              },
              {
                title: "Test what you build",
                text: "Try the happy path, the empty input, and the unexpected.",
              },
            ].map((item, i) => (
              <article key={item.title}>
                <span className="entry-number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </>
      )}
      {slug === "prayog" && (
        <>
          <Playground />
          <div className="playground-below">
            <p>
              <Icon name="leaf" size={18} /> Experiment freely. Every mistake
              has something to teach.
            </p>
            <Link className="text-link" href="/gurukul/abhyas">
              Find a problem to practise <Icon name="arrow" size={16} />
            </Link>
          </div>
        </>
      )}
      {slug === "abhyas" && (
        <>
          <div className="practice-banner">
            <Icon name="brackets" size={30} />
            <div>
              <h3>One problem. A deeper understanding.</h3>
              <p>
                Read, reason, and explain your approach before reaching for a
                solution.
              </p>
            </div>
            <span className="small-badge">4 sample problems</span>
          </div>
          <ProblemCollection />
        </>
      )}
      {slug === "grantha" && (
        <>
          <ReferenceLibrary />
          <div className="thought-strip">
            <Icon name="book" size={22} />
            <p>Curious about the names on our signboards?</p>
            <Link href="/glossary">
              Explore the glossary <Icon name="arrow" size={15} />
            </Link>
          </div>
        </>
      )}
      {slug === "sabha" && (
        <div className="community-preview">
          <div className="community-illustration">
            <HutIllustration variant={5} />
          </div>
          <span className="small-badge">A future gathering place</span>
          <h2>
            Better questions.
            <br />
            <em>Shared discoveries.</em>
          </h2>
          <p>
            Soon, this courtyard will be a place to share your builds, ask for a
            second pair of eyes, and help another developer find their way.
          </p>
          <div className="community-topics">
            <span>
              <Icon name="users" size={17} /> Thoughtful discussions
            </span>
            <span>
              <Icon name="code" size={17} /> Peer code reviews
            </span>
            <span>
              <Icon name="spark" size={17} /> Project sharing
            </span>
          </div>
          <Link className="button button-outline" href="/gurukul/shilpa">
            Build something to share <Icon name="arrow" size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
