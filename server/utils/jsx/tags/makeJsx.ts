import { jsx } from "react/jsx-runtime";

// TODO: relevance of the key in this setup isn't fully clear yet. Sorry, but when/if this matters...it will become apparent :).
const randomKey = Math.random();

export function makeJsx<T extends object>(
  type: React.ElementType,
  props: T,
  children: React.ReactElement[] | string
) {
  return jsx(type, { ...props, children }, randomKey);
}
