const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const config = require("./config.json");

const stream = new SitemapStream({
  hostname: "https://vsem-edu.ru",
  cacheTime: 600000,
});

config.siteMapUrls.map((url) => stream.write(url));

stream.end();

fs.writeFileSync(
  "./static/sitemap.xml",
  streamToPromise(stream).then((data) => data.toString())
);
