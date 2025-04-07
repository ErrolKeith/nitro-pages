export const tags = [
  "a",
  "body",
  "div",
  "footer",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "html",
  "main",
  "meta",
  "p",
  "section",
  "title",
] as const;

export type Tag = (typeof tags)[number];
