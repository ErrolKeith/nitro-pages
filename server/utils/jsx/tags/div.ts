import { makeJsx } from "./makeJsx";

export interface DivConfig {
  props: { className?: string; [x: string]: string };
  children: React.ReactElement[];
}

export function makeDiv(config: DivConfig) {
  return makeJsx("div", config.props, config.children);
}
