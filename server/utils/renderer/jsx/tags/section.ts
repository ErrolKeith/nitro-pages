import { makeJsx } from "./makeJsx";

export interface SectionConfig {
  props: { className?: string };
  children: React.ReactElement[];
}

export function makeSection(config: SectionConfig) {
  return makeJsx("section", config.props, config.children);
}
