import { makeJsx } from "./makeJsx";

export interface FooterConfig {
  props: { className?: string };
  children: React.ReactElement[];
}

export function makeFooter(config: FooterConfig) {
  return makeJsx("footer", config.props, config.children);
}
