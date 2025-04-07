import { makeJsx } from "./makeJsx";

export interface BodyConfig {
  props: BodyProps;
  children: React.ReactElement[];
}

export interface BodyProps {
  className?: string;
}

export function makeBody(config: BodyConfig) {
  return makeJsx("body", config.props, config.children);
}
