import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { ProjectGuide } from "@/components/project-guide";
export const metadata = { title: "Build a habit tracker — A guided project" };
export function generateStaticParams() {
  return [{ projectId: "habit-tracker" }];
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  if ((await params).projectId !== "habit-tracker") notFound();
  return (
    <div className="section-container destination-page">
      <div className="page-heading">
        <Link className="back-link" href="/gurukul/shilpa">
          <Icon name="back" size={16} /> Back to Shilpa Gurukul
        </Link>
        <div className="eyebrow">
          <Icon name="spark" size={16} /> VIBE CODING · GUIDED BUILD
        </div>
        <h1>Build a daily habit tracker.</h1>
        <p>
          Make something small and useful. Learn to describe, build, and verify
          it with AI, while understanding the code you create.
        </p>
      </div>
      <ProjectGuide />
    </div>
  );
}
