import Handlebars from "handlebars";

export const pageNotFoundTemplate = Handlebars.compile(`
  <head>
    <title>Page Not Found | {{ companyName }}</title>
  </head>
  <body data-site-id='{{ siteId }}'>
    <h1>404</h1>
    <main>
    <div class="hero">Page Not Found</div>
    <div>
      <p>
        Content
      </p>
    </div>
    </main>
  </body>
`);
