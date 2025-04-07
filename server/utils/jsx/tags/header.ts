import { makeJsx } from "./makeJsx";

export interface HeaderConfig {
  props: { className?: string };
  children: React.ReactElement[];
}

export function makeHeader(config: HeaderConfig) {
  return makeJsx("header", config.props, config.children);
}
