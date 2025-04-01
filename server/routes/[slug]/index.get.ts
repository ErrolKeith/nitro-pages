import { clientGlobals } from "~/test-data";
import { render } from "~/utils/page-renderer/page";

export default defineEventHandler((event) => {
  const pathname = getRequestURL(event).pathname;
  switch (pathname) {
    case "/":
      return render({
        type: "page",
        clientGlobals,
        pageContext: {
          slug: "",
          title: clientGlobals.companyName,
          heroText: "Product you need right now",
        },
      });
    case "/about":
      return render({
        type: "page",
        clientGlobals,
        pageContext: {
          slug: "about",
          title: "About",
          heroText: `About ${clientGlobals.companyName}`,
        },
      });
    case "/contact":
      return render({
        type: "page",
        clientGlobals,
        pageContext: {
          slug: "contact",
          title: "Contact",
          heroText: `Contact ${clientGlobals.companyName}`,
        },
      });
    default:
      return render({
        type: "404",
        clientGlobals,
      });
  }
});
