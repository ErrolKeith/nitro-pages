import { makeJsx } from "./makeJsx";

export interface TitleProps {
  title: string;
  className?: string;
}

export function makeTitle(config: TitleProps) {
  return makeJsx("title", { className: config.className }, config.title);
}
