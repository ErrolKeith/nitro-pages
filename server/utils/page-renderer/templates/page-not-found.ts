import Handlebars from "handlebars";

export const pageNotFoundTemplate = Handlebars.compile(`
  <head>
    <title>Page Not Found | {{ companyName }}</title>
  </head>
  <body data-site-id='{{ siteId }}'>
    <h1>Page Not Found</h1>
    <main>
    <div>404</div>
    </main>
  </body>
`);
