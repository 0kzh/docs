import { MetadataRoute } from 'next'
import fs from 'fs'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const getAllMdxRoutes = (dirPath = './src/app', routes: MetadataRoute.Sitemap = [])  => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    entries.forEach(entry => {
      const fullPath = `${dirPath}/${entry.name}`;
      if (entry.isDirectory()) {
        getAllMdxRoutes(fullPath, routes);
      } else if (entry.isFile() && entry.name.endsWith('page.mdx')) {
        const route = fullPath.replace('./src/app', '').replace('/page.mdx', '');
        routes.push({
          url: `https://htmldocs.com/docs${route}`,
          lastModified: new Date(fs.statSync(fullPath).mtime),
        });
      }
    });

    return routes;
  };

  const mdxRoutes = getAllMdxRoutes();
  
  return mdxRoutes;
}