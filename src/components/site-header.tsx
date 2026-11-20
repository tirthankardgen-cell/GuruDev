"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./icon";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/", label: "The campus" },
    { href: "/about", label: "Our philosophy" },
    { href: "/gurukul/grantha", label: "The library" },
  ];
  return (
    <header className="site-header">
      <Link
        href="/"
        className="brand"
        aria-label="GuruDev home"
        onClick={() => setMenuOpen(false)}
      >
        <span className="brand-mark">
          <Icon name="leaf" size={27} />
        </span>
        <span>
          Guru<span className="brand-dev">Dev</span>
          <small>A GURUKUL FOR DEVELOPERS</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="button button-outline header-cta" href="/gurukul/prayog">
        Open playground <Icon name="arrow" size={16} />
      </Link>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Icon name={menuOpen ? "close" : "menu"} />
      </button>
      {menuOpen && (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {[
            ...links,
            { href: "/gurukul/prayog", label: "Open playground" },
            { href: "/me", label: "My learning" },
          ].map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <Icon name="arrow" size={16} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
