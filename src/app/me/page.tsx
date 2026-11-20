import Link from "next/link";
import { Icon } from "@/components/icon";
export const metadata = { title: "My learning — Preview" };
export default function MyLearningPage() {
  return (
    <div className="section-container destination-page">
      <div className="page-heading">
        <Link className="back-link" href="/">
          <Icon name="back" size={16} /> Back to campus
        </Link>
        <div className="eyebrow">
          <Icon name="leaf" size={16} /> YOUR OWN LITTLE LEARNING JOURNEY
        </div>
        <h1>A little further, every day.</h1>
        <p>
          A place to return to your lessons, revisit your work, and see how your
          understanding is growing.
        </p>
      </div>
      <div className="dashboard-notice">
        <Icon name="leaf" size={17} /> Example learner dashboard. These are
        sample records; accounts and saved progress will be available in the
        full release.
      </div>
      <div className="dashboard-stats">
        {[
          {
            label: "Lessons explored",
            value: "03",
            text: "A few strong roots",
          },
          {
            label: "Problems practised",
            value: "02",
            text: "A little more understanding",
          },
          {
            label: "Projects in progress",
            value: "01",
            text: "An idea taking shape",
          },
        ].map((stat) => (
          <div className="dashboard-stat" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
      <div className="resume-card">
        <Icon name="book" size={35} />
        <div>
          <div className="eyebrow">PICK UP A LITTLE KNOWLEDGE</div>
          <h2>JavaScript foundations</h2>
          <p>Your first variables · A sample learning path</p>
        </div>
        <Link
          className="button button-primary"
          href="/learn/javascript-foundations/variables"
        >
          Open lesson <Icon name="arrow" size={16} />
        </Link>
      </div>
      <div className="section-subheading">
        <h2>Your work, close at hand.</h2>
        <span>Sample saved work</span>
      </div>
      <div className="dashboard-saved">
        <article className="saved-card">
          <div className="eyebrow">GUIDED PROJECT</div>
          <h3>Daily habit tracker</h3>
          <p>A small, useful build to understand and make your own.</p>
          <Link className="text-link" href="/projects/habit-tracker">
            Explore the project <Icon name="arrow" size={15} />
          </Link>
        </article>
        <article className="saved-card">
          <div className="eyebrow">PRACTICE PROBLEM</div>
          <h3>Two sum</h3>
          <p>Arrays, a target, and a thoughtful approach.</p>
          <Link className="text-link" href="/problems/two-sum">
            Revisit the example <Icon name="arrow" size={15} />
          </Link>
        </article>
      </div>
    </div>
  );
}
