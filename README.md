# GuruDev

A Vercel-ready design preview based on [PROJECT.md](PROJECT.md) and [GURUKUL_RESEARCH.md](GURUKUL_RESEARCH.md). Warm paper, hand-drawn SVG huts, a central learning grove, Lora headings, Inter UI, and JetBrains Mono in the editor.

## Run locally

Install **Node.js 26 LTS** (the version selected for Vercel), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or service accounts are required.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The existing system Node was 20.16.0 during scaffolding; a portable Node 26.13.1 runtime is available in the ignored `output/tools/` folder for this workspace. Install Node 26 normally for ongoing development. Do not commit the portable runtime.

## Deploy to Vercel

1. Push the project to a Git repository, including `package-lock.json`.
2. Import that repository in Vercel. Set the root directory to the folder containing this `package.json`.
3. Select the **Next.js** preset and **Node.js 26.x**. The included `vercel.json` configures `npm ci` and `npm run build`. Leave the output directory at the Next.js default.
4. Deploy. All preview routes render without Firebase, compiler, or AI credentials.

You can also run `npx vercel` from the project directory with your Vercel account. This scaffold has been built locally; it has not been published to a Vercel account.

## Preview scope

| Route                                                                           | Preview                                                                                       |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `/`                                                                             | Illustrated, clickable campus and equivalent text entrances                                   |
| `/gurukul/vidya`                                                                | Course cards and JavaScript/Python sample lessons                                             |
| `/gurukul/shilpa`                                                               | Guided AI-assisted project introduction                                                       |
| `/gurukul/prayog`                                                               | Editable code, language selection, standard input, reset/copy, clearly labelled sample output |
| `/gurukul/abhyas`                                                               | Search/filter a starter problem collection                                                    |
| `/gurukul/grantha`                                                              | Search/filter notes, expand references, open original documentation                           |
| `/gurukul/sabha`                                                                | Community coming-soon page                                                                    |
| `/learn/{javascript-foundations,python-foundations}/variables`                  | Sample explanation and reflection question                                                    |
| `/problems/{two-sum,reverse-a-string,balanced-brackets,first-unique-character}` | Statements, constraints, hints, worked code and sample output                                 |
| `/projects/habit-tracker`                                                       | Three guided steps and sample AI guidance                                                     |
| `/me`                                                                           | Clearly labelled sample dashboard                                                             |
| `/glossary`, `/about`                                                           | Researched terminology and project philosophy                                                 |
| `/admin`                                                                        | Content studio placeholder; no editing or privileged access                                   |

This release demonstrates the design. Accounts, saved progress, remote compilation, genuine grading, live AI, and community posting remain for implementation. Code is never evaluated in the preview. The Run sample action displays curated output only for the unchanged example and empty standard input. Changed source or input shows an explicit preview message. There is no persistence or account impersonation.

## Structure and next integrations

- `src/app/`: Next.js App Router pages, metadata, theme, and not-found screen.
- `src/components/`: reusable illustrations, navigation, and interactive preview tools. The campus uses server-rendered SVG/native links; heavier editor UI loads on its destination.
- `src/lib/gurukuls.ts`: typed campus, problem, and reference sample data.
- `src/lib/firebase/client.ts`: opt-in Firebase initialisation, returning `null` when unconfigured. It is not imported by preview pages.
- `src/lib/services/contracts.ts`: starting types for runs, guidance, and learner progress.
- `firebase/`: deny-by-default starter rules. Review and implement collection/owner rules before enabling live services. Do not deploy these over an existing live Firebase project without reviewing the impact.
- `.env.example`: optional Firebase configuration and server-only integration placeholders.

When implementing the backend, follow PROJECT.md sections 9–11: Firebase token verification and ownership checks, persistent asynchronous jobs on an isolated runner, private tests on the server, bounded results, usage limits, and server-only AI credentials. The preview intentionally has no stub APIs that report false successful runs or grades.

## Versions

React 19.3.1, Next.js 16.4.6, Node 26.13.1 LTS, and Firebase 13.4.0 were checked against the live registries/release index at scaffolding time. Vercel lists Node 26.x as supported. TypeScript 6.0.3 and ESLint 9.39.5 are pinned for compatibility with the Next.js lint tooling; TypeScript 7 is not yet supported by its parser. Fonts are bundled locally, so deployment does not depend on Google Fonts being reachable during a build.

Original project/research files and browser research artifacts are preserved. Generated dependencies, build output, local environments, and QA screenshots are ignored.
