import {
  getBlogIndex,
  getGlobalsByBusinessId,
  randomBusinessClient,
} from "~/seed-data";
import { renderPage } from "~/utils/renderer/renderer";

export default defineEventHandler((event) => {
  const posts = getBlogIndex();

  if (!posts) {
    return sendRedirect(event, "/404", 307);
  }

  const clientGlobals = getGlobalsByBusinessId(randomBusinessClient.businessId);

  // TODO: make accessible to more than blog posts.
  const renderIndex = () => {
    renderPage({
      template: "index",
      clientGlobals,
      pageContext: {
        template: "index",
        slug: "",
        title: clientGlobals.blogSettings.blogTitle,
        head: [],
        content: posts.map((post) => {
          return {
            type: "hero",
            title: post.title,
            callout: "index hero callout",
          };
        }),
      },
    });
  };

  return renderIndex();
});
