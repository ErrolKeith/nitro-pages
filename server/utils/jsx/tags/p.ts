import { makeJsx } from "./makeJsx";

export interface ParagraphConfig {
  text: string;
  className?: string;
}

export function makeParagraph(config: ParagraphConfig) {
  const { text, className } = config;
  return makeJsx("p", { className }, text);
}
