import { makeJsx } from "./makeJsx";

export interface MainConfig {
  props: { className?: string };
  children: React.ReactElement[];
}

export function makeMain(config: MainConfig) {
  return makeJsx("main", config.props, config.children);
}
