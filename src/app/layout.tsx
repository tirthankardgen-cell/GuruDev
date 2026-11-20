import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/jetbrains-mono/400.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "GuruDev — Your developer Gurukul",
    template: "%s · GuruDev",
  },
  description:
    "A quiet Gurukul for curious developers. Learn coding foundations, build with AI, practise problems, and explore your craft.",
  applicationName: "GuruDev",
  openGraph: {
    title: "GuruDev — Your developer Gurukul",
    description:
      "Learn. Build. Practice. Find your path in a hand-drawn learning grove.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
