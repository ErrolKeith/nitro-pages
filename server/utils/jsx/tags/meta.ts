import { makeJsx } from "./makeJsx";

export interface MetaProps {
  name: string;
  content: string;
}

export function makeMeta(props: MetaProps) {
  return makeJsx("meta", props, []);
}
