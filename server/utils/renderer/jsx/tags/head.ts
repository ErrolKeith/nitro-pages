import { makeJsx } from "./makeJsx";

export interface HeadProps {
  className?: string;
}

export interface HeadConfig {
  props: HeadProps;
  children: React.ReactElement[];
}

export function makeHead(config: HeadConfig) {
  return makeJsx("head", config.props, config.children);
}
