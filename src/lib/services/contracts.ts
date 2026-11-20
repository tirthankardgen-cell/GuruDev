// Integration contracts for the future isolated runner. No executable preview APIs.
export type RunStatus = "queued" | "running" | "completed" | "failed";
export type SupportedLanguage = "javascript" | "python";
export interface RunRequest {
  source: string;
  language: SupportedLanguage;
  stdin: string;
}
export interface RunResult {
  id: string;
  status: RunStatus;
  stdout?: string;
  stderr?: string;
  timeMs?: number;
  verdict?: string;
}
export interface GuideRequest {
  question: string;
  context: { lessonId?: string; projectId?: string; source?: string };
}
export interface LearnerProgress {
  uid: string;
  itemId: string;
  resumePosition: number;
  verifiedCompletedAt: string | null;
}
