import {
  getGlobalsByBusinessId,
  getHomePage,
  randomBusinessClient,
} from "~/seed-data";
import { renderHome } from "~/utils/renderer/renderer";

export default defineEventHandler((event) => {
  const clientGlobals = getGlobalsByBusinessId(randomBusinessClient.businessId);
  const pageContext = getHomePage();

  if (!pageContext) {
    return sendRedirect(event, "/404", 307);
  }

  return renderHome({
    clientGlobals,
    pageContext,
  });
});
