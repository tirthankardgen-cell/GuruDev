import Link from "next/link";
import { Icon } from "@/components/icon";
export const metadata = {
  title: "Content studio",
  robots: { index: false, follow: false },
};
export default function AdminPreview() {
  return (
    <div className="empty-page">
      <Icon name="book" size={40} />
      <div className="eyebrow">CONTENT STUDIO</div>
      <h1>A place to nurture the curriculum.</h1>
      <p>The authoring studio will open with protected editor accounts.</p>
      <Link className="button button-outline" href="/">
        Back to campus <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}
