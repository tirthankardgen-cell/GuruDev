import Link from "next/link";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <div className="empty-page">
      <Icon name="leaf" size={48} />
      <div className="eyebrow">A small detour</div>
      <h1>This path hasn’t been drawn yet.</h1>
      <p>Let’s find our way back to the learning grove.</p>
      <Link className="button button-primary" href="/">
        Back to campus <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}
