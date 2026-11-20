import Link from "next/link";
import { Icon } from "@/components/icon";
export const metadata = { title: "The words of our Gurukul" };
const terms = [
  [
    "Gurukul",
    "गुरुकुल",
    "The house of a teacher",
    "The name for our campus and its subject learning spaces.",
  ],
  [
    "Vidya",
    "विद्या",
    "Knowledge and learning",
    "Our home for coding foundations and clear explanations.",
  ],
  [
    "Shilpa",
    "शिल्प",
    "Craft and skill in making",
    "A modern craft metaphor for building software and working with AI.",
  ],
  [
    "Prayog",
    "प्रयोग",
    "Application and experiment",
    "The playground: a space to run, observe, and explore your ideas.",
  ],
  [
    "Abhyas",
    "अभ्यास",
    "Repeated practice",
    "The problems you work through to strengthen your understanding.",
  ],
  [
    "Grantha",
    "ग्रन्थ",
    "A text or book",
    "Our reference library, keeping useful knowledge within reach.",
  ],
  [
    "Sabha",
    "सभा",
    "An assembly or gathering",
    "A future home for thoughtful developer discussions and peer learning.",
  ],
  [
    "Acharya",
    "आचार्य",
    "A teacher or guide",
    "A name for human instructors and mentors. AI assistance is labelled AI Guide.",
  ],
  [
    "Kutir",
    "कुटीर",
    "A cottage or hut",
    "The modest dwellings that give each learning space its entrance.",
  ],
  [
    "Aangan",
    "अङ्गण",
    "A yard or courtyard",
    "The shared open space at the centre of our illustrated grove.",
  ],
  [
    "Manana",
    "मनन",
    "Thinking and reflection",
    "An inspiration for prediction, explanation, and reasoning about code.",
  ],
  [
    "Parampara",
    "परम्परा",
    "Continuity and tradition",
    "Knowledge passed on through teaching, adapted for today’s builders.",
  ],
];
export default function GlossaryPage() {
  return (
    <div className="section-container reading-page">
      <Link className="back-link" href="/">
        <Icon name="back" size={16} /> Back to campus
      </Link>
      <header className="glossary-intro">
        <div className="eyebrow">A LITTLE CONTEXT FOR THE JOURNEY</div>
        <h1>The words of our Gurukul.</h1>
        <p>
          Researched Indian terms, paired with their everyday meanings. Our hut
          names apply this vocabulary to modern coding spaces; the collection is
          GuruDev’s own naming system.
        </p>
      </header>
      <div className="glossary-grid">
        {terms.map(([name, sanskrit, meaning, use]) => (
          <article className="glossary-card" key={name}>
            <h2>
              {name}
              <span lang="hi">{sanskrit}</span>
            </h2>
            <p className="meaning">{meaning}</p>
            <p>{use}</p>
          </article>
        ))}
      </div>
      <div className="thought-strip">
        <Icon name="leaf" size={23} />
        <p>Curious about the history behind the grove?</p>
        <Link href="/about">
          Read our philosophy <Icon name="arrow" size={15} />
        </Link>
      </div>
    </div>
  );
}
