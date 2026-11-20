import Link from "next/link";
import { Icon } from "./icon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="footer-brand">
          <Icon name="leaf" size={22} /> GuruDev
        </Link>
        <p>Rooted in wisdom. Built for what comes next.</p>
        <nav aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/glossary">Glossary</Link>
          <Link href="/me">My learning</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>Learn. Build. Practice. Your developer Gurukul.</span>
        <span className="preview-mark">
          <span /> Design preview · 2026
        </span>
      </div>
    </footer>
  );
}
