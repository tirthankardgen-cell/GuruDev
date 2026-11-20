import Link from "next/link";
import { gurukuls } from "@/lib/gurukuls";
import { Icon } from "./icon";

function Grass({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill="none"
      stroke="#7c8864"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M0 0q-2-9-6-12M0 0q0-12 4-18M1 0q3-8 9-10m-12 9h10" />
    </g>
  );
}

function Tree({
  x,
  y,
  scale = 1,
  light = false,
}: {
  x: number;
  y: number;
  scale?: number;
  light?: boolean;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      stroke={light ? "#939b7f" : "#657159"}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse
        cx="0"
        cy="9"
        rx="52"
        ry="11"
        fill="#b5bb98"
        opacity=".15"
        stroke="none"
      />
      <path
        d="M-9 0q9-34 3-74l-23-36 10-3 22 24 18-34 8 5-18 42q-8 37 2 75l16 7-30-1-21 4Z"
        fill="#c6b391"
      />
      <path d="M-3-71q7 29 1 66m9-48 0 29m-27-60 20 20" fill="none" />
      <path
        d="M-48-87c-28 0-49-28-30-51-10-23 9-48 34-43 6-31 43-37 60-20 22-19 53-5 55 16 31 0 48 30 34 52 22 30-4 55-30 53-6 20-35 20-47 9-24 18-56 11-61-16-10 6-21 5-26 0Z"
        fill={light ? "#dce0c9" : "#ccd2b1"}
      />
      <path
        d="M-66-138q9-18 27-10m-7-28q14-14 27-1m37-17q13 0 16 12m23 19q21 2 22 20m-9 28q-7 10-17 7m-20 13q-5 12-20 8m-37-16q-13 9-25-1m18-23q9-10 20-3m28-21q16-10 29 3m-70 5q6-9 15-4"
        fill="none"
        opacity=".6"
      />
      {[
        [-57, -152],
        [-27, -184],
        [10, -180],
        [52, -147],
        [-37, -110],
        [16, -110],
        [62, -112],
        [-8, -146],
        [35, -163],
      ].map(([lx, ly], i) => (
        <path
          key={i}
          d={`M${lx} ${ly}q4-9 9-5m-8 5q-5-7-9-5`}
          fill="none"
          strokeWidth="1"
          opacity=".65"
        />
      ))}
    </g>
  );
}

function Banyan() {
  return (
    <g
      transform="translate(600 315)"
      stroke="#68705a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse
        cy="15"
        rx="98"
        ry="22"
        fill="#bbc3a3"
        opacity=".23"
        stroke="none"
      />
      <path
        d="M-17 4q14-44 1-118l-44-49 14-7 37 38 9-55 13-2 3 55 44-39 11 8-44 48q-13 69 7 121l24 12-37-1-23-4-32 5Z"
        fill="#c5b08c"
      />
      <path
        d="M-6-111q12 68 2 115m20-82q-8 30 2 53m-51-107 25 21M2-87l5-45"
        fill="none"
      />
      <path
        d="M-107-111c-29 6-52-9-45-34-28-18-16-52 8-61-6-30 25-46 48-34 13-29 46-27 60-13 22-30 61-25 76-1 34-14 65 5 64 28 28-4 56 23 43 47 31 17 25 48-4 58 9 26-23 44-46 36-8 24-44 25-60 5-20 18-53 15-64-8-32 15-65 6-66-23-16 10-26 9-14 0Z"
        fill="#ccd3b3"
      />
      <path
        d="M-135-178q17-17 33-5m-23 42q9-11 25-6m14-66q11-13 27-7m24-29q21-12 36 1m35 11q22-6 31 8m37 12q19 3 24 17m7 34q18 7 20 19m-7 29q-16 10-27-1m-32 17q-9 13-28 4m-42-1q-15 12-29 0m-52-8q-15 7-26-7M-66-159q13-9 26-1m31-36q15-10 28-1m25 41q16-7 29 4"
        fill="none"
        opacity=".6"
      />
      <path
        d="M-83-119q-3 24 0 62m11-67-2 60m149-63q-6 35-2 72m-10-75 1 66m-122-51 1 18"
        fill="none"
        stroke="#939375"
        strokeWidth="1"
      />
      {Array.from({ length: 25 }, (_, i) => {
        const x = -115 + ((i * 53) % 240);
        const y = -226 + ((i * 37) % 120);
        return (
          <path
            key={i}
            d={`M${x} ${y}q5-9 11-4m-11 4q-3-7-8-5`}
            fill="none"
            strokeWidth=".9"
            opacity=".65"
          />
        );
      })}
      <path
        d="M-61 16q57-21 123 0l-3 11q-62-11-121 1Z"
        fill="#d4c6ac"
        stroke="#988970"
      />
      <path
        d="M-58 28v9m111-10v10m-103-13q48-9 92-1"
        fill="none"
        stroke="#988970"
      />
    </g>
  );
}

export function HutIllustration({ variant = 0 }: { variant?: number }) {
  const clay = variant === 1 || variant === 2 || variant === 5;
  const roof = clay ? "#ccb291" : "#c2c2a0";
  return (
    <svg
      viewBox="0 0 240 160"
      fill="none"
      aria-hidden="true"
      className="hut-art"
    >
      <ellipse cx="122" cy="141" rx="93" ry="12" fill="#bfb598" opacity=".18" />
      <g
        stroke="#6f6756"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m58 66 121 0-1 70-116 3Z" fill="#e8dbc0" />
        <path d="m179 66 25-17-3 74-23 13Z" fill="#d2c2a4" />
        <path d="m28 75 61-59 94 3 35 40-39 22-87-7-64 1Z" fill={roof} />
        <path
          d="m29 75 61-58 94 3-5 62m-88-65 7 55m-63-8q43-4 77 0t88 0m-143-11q52-3 124 4m-110-16q37-5 98 6m-89-18q27-3 80 5m-65-16q27 0 52 4"
          opacity=".65"
        />
        <path
          d="m46 67 45-44m-27 45 26-43m-11 44 12-38m20 35-7-38m22 39-13-39m27 39-16-35m32 36-21-34m37 35-24-33m40 34-26-34m38 27-24-26"
          opacity=".35"
          strokeWidth="1"
        />
        <path
          d="m57 80 121 1m-119 50 117-2M64 89l1 41m103-42v38"
          stroke="#b5a484"
          strokeWidth="1"
        />
        <path
          d="M97 136V99c0-22 31-22 31-1v38Z"
          fill={clay ? "#9b6650" : "#747c5a"}
        />
        <path
          d="M100 135v-35q0-17 13-17m0 5v47m9-40v39"
          stroke="#e0c5a0"
          opacity=".5"
          strokeWidth="1"
        />
        <circle cx="119" cy="116" r="1.3" fill="#e0c5a0" stroke="none" />
        <path d="M145 89h20v23h-20z" fill="#867f63" />
        <path d="m155 90 0 21m-9-12h17" stroke="#e8dbc0" />
        <path d="M74 89h12v18H74z" fill="#bdb38e" />
        <path d="m76 92 8 12m0-12-8 12" stroke="#e8dbc0" />
        <path d="M89 137h47l5 5H83Z" fill="#cbbda3" />
        <path d="M86 143h53l4 5H82Z" fill="#dacdb3" />
        <path d="M44 127q-6 14 2 17h9q9-8 0-17Z" fill="#b47d61" />
        <path
          d="M46 126h8m-4-1q-8-10-12-10m12 10q0-18 4-20m-4 20q5-10 12-11"
          stroke="#768462"
        />
        <path d="m184 99 11-6m-11 19 10-6m-11 16 11-6" opacity=".35" />
        {variant === 4 && (
          <>
            <path d="m155 124 17-3 13 6-17 4Z" fill="#f7f1e7" />
            <path d="m156 128 13 5 17-5m-17-1v6" />
          </>
        )}
        {variant === 5 && (
          <>
            <path d="M18 133h25m-22 0-1 10m20-10 1 10" />
            <path d="M22 124h17v8H22z" fill="#cfbfa0" />
          </>
        )}
      </g>
      <Grass x={204} y={143} scale={0.7} />
      <Grass x={30} y={146} scale={0.6} />
    </svg>
  );
}

export function CampusArt() {
  return (
    <div className="campus-map" aria-label="Illustrated Gurukul campus">
      <svg
        className="campus-landscape"
        viewBox="0 0 1200 600"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ground">
            <stop stopColor="#e7e4ce" stopOpacity=".7" />
            <stop offset="1" stopColor="#f7f1e7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="600" cy="318" rx="558" ry="255" fill="url(#ground)" />
        <g
          stroke="#dfcfaf"
          strokeWidth="24"
          strokeLinecap="round"
          opacity=".65"
        >
          <path d="M598 568q50-69 5-134t-3-102M590 365Q440 404 180 363m423-1q145 47 400-8M579 317Q446 300 329 144m286 182q135-57 266-181M558 435q-73 48-149 70m212-59q72 39 164 65" />
        </g>
        <g stroke="#c6b696" strokeWidth="1" strokeDasharray="3 8" opacity=".5">
          <path d="M608 569q50-76 6-137t-1-99M584 374Q402 413 181 374m435-1q137 43 387-8M569 315Q437 290 319 146m309 181q132-58 263-180" />
        </g>
        <g opacity=".6">
          <Tree x={120} y={230} scale={0.65} light />
          <Tree x={1020} y={219} scale={0.66} light />
          <Tree x={444} y={144} scale={0.42} light />
          <Tree x={750} y={132} scale={0.47} light />
          <Tree x={90} y={452} scale={0.5} light />
          <Tree x={1117} y={413} scale={0.5} light />
        </g>
        <Banyan />
        {[
          [192, 157],
          [362, 230],
          [899, 222],
          [1003, 164],
          [135, 306],
          [246, 440],
          [909, 455],
          [1042, 309],
          [489, 528],
          [698, 535],
          [441, 377],
          [752, 376],
          [336, 554],
          [867, 562],
          [534, 179],
          [699, 177],
          [212, 509],
          [961, 502],
          [384, 114],
          [823, 99],
        ].map(([x, y], i) => (
          <Grass x={x} y={y} scale={0.55 + (i % 3) * 0.15} key={i} />
        ))}
        <g stroke="#aea58b" strokeWidth="1.2" strokeLinecap="round">
          <path d="M211 90q6-7 12 0 6-7 12 0m696-19q5-6 10 0 5-6 10 0m-213 67q4-5 9 0 4-5 9 0" />
          <path
            d="m519 377 13-3 8 4-15 4Zm179 77 13-2 6 4-14 3Zm-466-62 9-2 6 3-8 3Z"
            fill="#ded4bd"
          />
        </g>
        <g
          transform="translate(595 405)"
          stroke="#9b4d35"
          strokeWidth="1.25"
          strokeLinecap="round"
        >
          <path d="M-10-5h26l2 12h-29ZM-7 7v9m20-9v9" fill="#e5d1b9" />
          <path d="m-3-5 1-6h12l1 6" />
        </g>
        <text
          x="600"
          y="366"
          textAnchor="middle"
          fill="#827864"
          fontSize="15"
          fontFamily="Lora, serif"
          fontStyle="italic"
        >
          the aangan
        </text>
        <g transform="translate(1117 525)" stroke="#b1a48a" strokeWidth="1.2">
          <path d="M0-15V15m-15-15h30m-25-10 20 20m0-20-20 20" />
          <path d="m0-20-4 9 4-2 4 2Z" fill="#b1a48a" />
        </g>
        <text
          x="1117"
          y="497"
          textAnchor="middle"
          fill="#8a7b63"
          fontSize="10"
          fontFamily="Inter, sans-serif"
        >
          N
        </text>
      </svg>
      {gurukuls.map((hut, index) => (
        <Link
          key={hut.slug}
          href={`/gurukul/${hut.slug}`}
          className={`campus-hut ${"comingSoon" in hut ? "future-hut" : ""}`}
          style={{ left: `${hut.x}%`, top: `${hut.y}%` }}
          aria-label={`${hut.name}${hut.slug !== "sabha" ? " Gurukul" : ""} — ${hut.purpose}${"comingSoon" in hut ? ", coming soon" : ""}`}
        >
          <HutIllustration variant={index} />
          <span className="hut-sign">
            <span className="hut-name">
              {hut.name} <span lang="hi">{hut.sanskrit}</span>
            </span>
            <span className="hut-purpose">{hut.purpose}</span>
            {"comingSoon" in hut && (
              <span className="coming-soon">Coming soon</span>
            )}
          </span>
          <span className="hut-tooltip">
            {hut.description}
            <Icon name="arrow" size={14} />
          </span>
        </Link>
      ))}
      <span className="campus-note">
        A little grove. A world of possibilities.
      </span>
    </div>
  );
}
