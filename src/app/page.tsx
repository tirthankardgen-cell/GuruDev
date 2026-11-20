import Link from "next/link";
import { CampusArt } from "@/components/campus-art";
import { Icon } from "@/components/icon";
import { gurukuls } from "@/lib/gurukuls";

export default function Home() {
  return (
    <>
      <section className="campus-section" aria-labelledby="campus-title">
        <div className="campus-intro">
          <div className="eyebrow">
            <span className="tiny-sun">✳</span> ANCIENT WISDOM. MODERN CRAFT.
          </div>
          <h1 id="campus-title">
            A place to learn.
            <br />A space to <em>become.</em>
          </h1>
          <p>
            Welcome to your developer Gurukul.
            <br />
            Learn to code, build with AI, and grow through practice.
          </p>
          <a className="campus-explore" href="#explore">
            Choose a hut. Find your path.<span>↓</span>
          </a>
        </div>
        <CampusArt />
        <div className="campus-caption">
          <span>
            <span className="status-dot" /> Every path begins with curiosity
          </span>
          <a href="#explore">
            <Icon name="menu" size={14} /> Explore as a list
          </a>
        </div>
      </section>
      <section
        className="explore-section section-container"
        id="explore"
        aria-labelledby="explore-title"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">SIX SPACES. ONE LEARNING JOURNEY.</div>
            <h2 id="explore-title">Where will curiosity take you?</h2>
          </div>
          <p>
            No perfect starting point needed.
            <br /> Just a willingness to begin.
          </p>
        </div>
        <div className="gurukul-grid">
          {gurukuls.map((hut, i) => (
            <Link
              className="gurukul-entry"
              href={`/gurukul/${hut.slug}`}
              key={hut.slug}
            >
              <div className={`entry-icon ${hut.color}`}>
                <Icon name={hut.icon} size={25} />
              </div>
              <span className="entry-number">0{i + 1}</span>
              <h3>
                {hut.name}
                {hut.slug !== "sabha" && " Gurukul"}
                {"comingSoon" in hut && (
                  <span className="small-badge">Soon</span>
                )}
              </h3>
              <span className="entry-purpose">{hut.purpose}</span>
              <p>{hut.description}</p>
              <span className="entry-action">
                {"comingSoon" in hut ? "Take a look" : "Enter Gurukul"}
                <Icon name="arrow" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section
        className="philosophy-section section-container"
        aria-labelledby="philosophy-title"
      >
        <div className="philosophy-art">
          <Icon name="leaf" size={48} />
          <span className="philosophy-orbit" />
          <small>ROOTS TO REACH FURTHER</small>
        </div>
        <div className="philosophy-copy">
          <div className="eyebrow">A THOUGHTFUL WAY TO GROW</div>
          <h2 id="philosophy-title">
            Knowledge takes root
            <br />
            when you put it into practice.
          </h2>
          <p>
            Inspired by the Gurukul tradition of guidance, inquiry, and shared
            learning. Made for a new generation of builders.
          </p>
          <div className="learning-cycle">
            {[
              "Learn",
              "Reflect",
              "Practise",
              "Apply",
              "Discuss",
              "Demonstrate",
            ].map((step, i) => (
              <span key={step}>
                {step}
                {i !== 5 && <Icon name="chevron" size={11} />}
              </span>
            ))}
          </div>
          <Link className="text-link" href="/about">
            The thought behind GuruDev <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>
      <section className="begin-section section-container">
        <span className="eyebrow">YOUR FIRST STEP CAN BE SMALL.</span>
        <h2>
          A little learning, every day.
          <br />
          <em>A little further, every time.</em>
        </h2>
        <Link className="button button-primary" href="/gurukul/vidya">
          Begin with the foundations <Icon name="arrow" size={17} />
        </Link>
        <p>No account needed to explore. Come as you are.</p>
      </section>
    </>
  );
}
