import { SitemapStream, streamToPromise } from "sitemap";

import type { NextApiRequest, NextApiResponse } from "next";
import { PUBLIC_URL } from "../../config";
import { routes } from "../../routes";
import { notebookToolIds, notebookTools } from "../../notebookTools";
import type { NotebookTool } from "../../NotebookTool";

async function sitemapApiHandler(req: NextApiRequest, res: NextApiResponse) {
  const sitemapStream = new SitemapStream({ hostname: PUBLIC_URL });

  const sitemap = await createSitemap(sitemapStream, (stream) => {
    stream.write({
      url: routes.home(),
      changefreq: "daily",
      priority: 0.7,
      lastmod: findLastUpdated(Object.values(notebookTools)),
    });

    for (const toolId of notebookToolIds) {
      stream.write({
        url: routes.tool({ tool: toolId }),
        changefreq: "weekly",
        priority: 0.8,
        lastmod: findLastUpdated([notebookTools[toolId]]),
      });

      for (const toolCompareId of notebookToolIds) {
        if (toolCompareId === toolId) {
          continue;
        }

        stream.write({
          url: routes.compare({ tool1: toolId, tool2: toolCompareId }),
          changefreq: "weekly",
          priority: 0.9,
          lastmod: findLastUpdated([
            notebookTools[toolId],
            notebookTools[toolCompareId],
          ]),
        });
      }
    }

    stream.end();
  });

  res.setHeader("Content-Type", "application/xml");
  res.send(sitemap);
}

async function createSitemap(
  stream: SitemapStream,
  factory: (stream: SitemapStream) => Promise<void> | void
) {
  const [sitemap] = await Promise.all([
    streamToPromise(stream),
    factory(stream),
  ]);

  return sitemap;
}

function findLastUpdated(tools: NotebookTool[]) {
  if (tools.length === 0) {
    return null;
  }

  return tools.sort(
    (fst, snd) =>
      new Date(snd.lastUpdatedAt).getTime() -
      new Date(fst.lastUpdatedAt).getTime()
  )[0].lastUpdatedAt;
}

export default sitemapApiHandler;
