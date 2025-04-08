import { makeJsx } from "./makeJsx";

export interface AnchorProps {
  href: string;
  target: "_blank" | "_parent" | "_self" | "_top";
  className?: string;
}

export interface AnchorConfig {
  props: AnchorProps;
  children: React.ReactElement[] | string;
}
export interface AnchorProps {
  href: string;
  target: "_blank" | "_parent" | "_self" | "_top";
  className?: string;
}

export interface AnchorConfig {
  props: AnchorProps;
  children: React.ReactElement[] | string;
}

export function makeAnchor(config: AnchorConfig) {
  return makeJsx("a", config.props, config.children);
}
