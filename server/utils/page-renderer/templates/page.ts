import Handlebars from "handlebars";

export const pageTemplate = Handlebars.compile(`
  <head>
    <title>{{ seoTitle }}</title>
  </head>
  <body data-site-id='{{ siteId }}'>
    <h1>{{ title }}</h1>
    <main>
    <div>
      <p>
        Content
      </p>
    </div>
    </main>
  </body>
`);
