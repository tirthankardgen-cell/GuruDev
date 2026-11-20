import Link from "next/link";
import { Icon } from "./icon";
import type { Gurukul } from "@/lib/gurukuls";

export function PageHeading({ hut }: { hut: Gurukul }) {
  return (
    <div className="page-heading">
      <Link href="/" className="back-link">
        <Icon name="back" size={16} /> Back to campus
      </Link>
      <div className="eyebrow">
        <Icon name={hut.icon} size={16} /> {hut.purpose}
      </div>
      <h1>
        {hut.name}
        {hut.slug !== "sabha" && " Gurukul"}
        <span className="sanskrit-heading" lang="hi">
          {hut.sanskrit}
        </span>
      </h1>
      <p>{hut.intro}</p>
    </div>
  );
}
