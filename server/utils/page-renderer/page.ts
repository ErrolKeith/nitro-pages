import { RenderConfig } from "../../types";
import Handlebars from "handlebars";

const pageTemplate = Handlebars.compile(`
  <head>
    <title>{{ title }}</title>
  </head>
  <body data-site-id='{{ siteId }}'>
    <h1>{{ heading }}</h1>
    <main>
    <div class="hero">{{ heroText }}</div>
    <div>
      <p>
        Content
      </p>
    </div>
    </main>
  </body>
`);

const pageNotFoundTemplate = Handlebars.compile(`
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

function render(config: RenderConfig) {
  if (config.type === "page") {
    return pageTemplate({
      siteId: config.clientGlobals.siteId,
      title: `${config.clientGlobals.companyName} | ${config.pageContext.title}`,
      heading: config.clientGlobals.companyName,
      heroText: config.pageContext.heroText,
    });
  }

  if (config.type === "service") {
    return pageTemplate({
      siteId: config.clientGlobals.siteId,
      title: `${config.clientGlobals.companyName} | ${config.pageContext.title}`,
      heading: config.pageContext.title,
      heroText: config.pageContext.heroText,
    });
  }

  return pageNotFoundTemplate({
    siteId: config.clientGlobals.siteId,
    companyName: config.clientGlobals.companyName,
  });
}

export { render };
