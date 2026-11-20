import Link from "next/link";
import { Icon } from "@/components/icon";
export const metadata = { title: "Our philosophy" };
export default function AboutPage() {
  return (
    <div className="reading-page section-container">
      <Link href="/" className="back-link">
        <Icon name="back" size={16} /> Back to campus
      </Link>
      <header className="reading-header">
        <div className="eyebrow">THE THOUGHT BEHIND THE GROVE</div>
        <h1>
          Old roots.
          <br />
          <em>New possibilities.</em>
        </h1>
        <p>
          GuruDev is a learning home for developers. A place to build a
          foundation, ask better questions, and turn what you know into
          something useful.
        </p>
      </header>
      <article className="reading-body">
        <h2>A tradition of thoughtful learning.</h2>
        <p>
          The word Gurukul comes from <em>guru-kula</em>, the house of a
          teacher. Its meaning evokes a learning community shaped by guidance,
          sustained study, and questions that lead to understanding.
        </p>
        <p>
          Ancient Indian teaching traditions give us a starting point: the value
          of inquiry, reflection, careful explanation, and continued practice.
          GuruDev brings these ideas into a contemporary coding environment,
          welcoming learners from every background.
        </p>
        <blockquote>
          Don’t just make the code work.
          <br />
          Understand why it works.
        </blockquote>
        <h2>A grove for modern builders.</h2>
        <p>
          Each hut gives a part of your learning journey a home. Vidya holds the
          foundations. Prayog makes room for experiments. Abhyas builds
          understanding through practice. Shilpa turns ideas into projects, with
          AI as a tool you learn to guide and verify.
        </p>
        <div className="about-values">
          {[
            {
              icon: "book",
              title: "Learn with clarity",
              text: "Small explanations, worked examples, and a useful next step.",
            },
            {
              icon: "leaf",
              title: "Reflect with care",
              text: "Predict what happens. Ask why. Explain it in your own words.",
            },
            {
              icon: "code",
              title: "Practise with purpose",
              text: "Try, observe, and revise. Progress comes from useful work.",
            },
            {
              icon: "users",
              title: "Grow together",
              text: "Share what you discover and help someone else understand.",
            },
          ].map((value) => (
            <article key={value.title}>
              <Icon name={value.icon} size={24} />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
        <h2>Inspiration, carefully interpreted.</h2>
        <p>
          The illustrated huts, central tree, and six-step learning cycle are
          GuruDev’s modern design choices. They are inspired by a grove and
          teacher-household atmosphere; they do not reconstruct a universal
          ancient campus or curriculum.
        </p>
        <p>
          Our project research draws on passages from the Chandogya, Taittiriya,
          and Brihadaranyaka Upanishads, the Bhagavad Gita, UNESCO’s account of
          Vedic chanting, and the Monier-Williams Sanskrit-English Dictionary.
        </p>
        <Link className="text-link" href="/glossary">
          Meet the words behind the signboards <Icon name="arrow" size={16} />
        </Link>
        <div className="lesson-next">
          <Link className="button button-primary" href="/gurukul/vidya">
            Find your first lesson <Icon name="arrow" size={16} />
          </Link>
        </div>
      </article>
    </div>
  );
}
