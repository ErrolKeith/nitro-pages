import { makeJsx } from "./makeJsx";

export interface HtmlConfig {
  props: HtmlProps;
  children: React.ReactElement[];
}

export interface HtmlProps {
  className?: string;
  ["data-site-id"]: string;
}

export function makeHtml(config: HtmlConfig) {
  return makeJsx(`html`, config.props, config.children);
}
