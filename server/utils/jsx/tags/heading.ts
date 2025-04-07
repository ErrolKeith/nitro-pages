import { makeJsx } from "./makeJsx";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  level: HeadingLevel;
  text: string;
}

export function makeHeading(config: HeadingProps) {
  return makeJsx(`h${config.level}`, {}, config.text);
}