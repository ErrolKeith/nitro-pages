import { getGlobalsByBusinessId, randomBusinessClient } from "~/seed-data";

export default defineEventHandler((event) => {
  const siteGlobals = getGlobalsByBusinessId(randomBusinessClient.businessId);
  return render404(siteGlobals);
});
