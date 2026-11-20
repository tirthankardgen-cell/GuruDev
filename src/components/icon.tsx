import type { CSSProperties } from "react";

export function Icon({
  name,
  size = 20,
  className,
  style,
}: {
  name: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </>
    ),
    back: <path d="M20 12H5m6-6-6 6 6 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    leaf: (
      <>
        <path d="M5 20C4 9 8 3 20 4c1 11-5 15-12 12M5 20 16 9" />
        <path d="m9 16-1-6m5 2 6 1" />
      </>
    ),
    book: (
      <>
        <path d="M12 6C9 4 5 4 3 5v14c4-1 6-1 9 1 3-2 5-2 9-1V5c-2-1-6-1-9 1v14" />
        <path d="M6 8h3m-3 4h3m6-4h3m-3 4h3" />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7L12 3Z" />
        <path d="M20 2v4m-2-2h4" />
      </>
    ),
    brackets: (
      <>
        <path d="M9 3H5v18h4m6-18h4v18h-4M10 12h4m-2-2v4" />
      </>
    ),
    library: (
      <>
        <path d="M4 4h4v16H4zM10 4h4v16h-4zM17 4l4 1-3 15-4-1zM4 8h4m2 8h4" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-3a6 6 0 0 1 12 0v3m2-14a3 3 0 0 1 0 6m2 2a5 5 0 0 1 3 5v1" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6" />
      </>
    ),
    play: <path d="m8 4 12 8-12 8V4Z" />,
    check: <path d="m5 12 4 4L20 5" />,
    reset: (
      <>
        <path d="M4 9a8 8 0 1 1 0 6m0-12v6h6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name] || paths.leaf}
    </svg>
  );
}
