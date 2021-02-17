/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a18ea44af37335a643cbb98f957d3394"
  },
  {
    "url": "assets/css/0.styles.4522ba09.css",
    "revision": "5550ee1e6646330a0e001669505cabb9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/e46f9dc2d0bc9e5f62ab688e1675b616.e46f9dc2.png",
    "revision": "e46f9dc2d0bc9e5f62ab688e1675b616"
  },
  {
    "url": "assets/js/1.738a1e79.js",
    "revision": "428cb7969ee9e4f4e4d50ea7aa3b7101"
  },
  {
    "url": "assets/js/10.851bf250.js",
    "revision": "55567e157924abf14bed3f9bf2db5461"
  },
  {
    "url": "assets/js/11.f5c3d59a.js",
    "revision": "3d0e882b841b9d53af9040c9939dbc55"
  },
  {
    "url": "assets/js/12.e7644d1e.js",
    "revision": "3d40146c45ca77a65694b33f40c47572"
  },
  {
    "url": "assets/js/13.8b9c0517.js",
    "revision": "59b9bedd305136e171b10b2d95b50eae"
  },
  {
    "url": "assets/js/14.e927d067.js",
    "revision": "455fcbe0cc7538d3640eface2c24925a"
  },
  {
    "url": "assets/js/15.e72d06b8.js",
    "revision": "d5bf7deba565b8d88242949a602cba34"
  },
  {
    "url": "assets/js/16.9fe2f265.js",
    "revision": "d1dc66dd30e93a707a88a5c4bf89a5d1"
  },
  {
    "url": "assets/js/3.364e7f26.js",
    "revision": "f4db067d4b1ff41583a5d79a669b8ea1"
  },
  {
    "url": "assets/js/4.ca62047c.js",
    "revision": "6b535fdb7a43793d2f2b397a65d07e73"
  },
  {
    "url": "assets/js/5.644c1060.js",
    "revision": "2db0569d2acbb21cfb8463eef05d92ba"
  },
  {
    "url": "assets/js/6.1ecf8bc9.js",
    "revision": "b169d154d100cf9505374677d3d710d2"
  },
  {
    "url": "assets/js/7.b7b70b29.js",
    "revision": "f699235d05a5bc9fae83268e959ca601"
  },
  {
    "url": "assets/js/8.2e9efc42.js",
    "revision": "cc8f1fdf371e6db415edaf6ad675600f"
  },
  {
    "url": "assets/js/9.2794c8e8.js",
    "revision": "1ad43d3efa493911d3158347937dac76"
  },
  {
    "url": "assets/js/app.e478ef7c.js",
    "revision": "1b637e2cc1aad0dbedf0b3625aacbd45"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "89762d92b696f0f8e250fcc8753b5854"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "928c1f15767e4c68dce2422328c02c06"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "3508a28f53ecddfd903fa251a2559ac2"
  },
  {
    "url": "categories/index.html",
    "revision": "7ee474cc2a3256a00d316f8702e8eb0c"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "86ae56b5565ee1ca42cada772ceb9ab8"
  },
  {
    "url": "index.html",
    "revision": "9c3e7cb0ea0b0aaa5d0cb4a200ad2513"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "c95e1316b0f26240c628de7cc0de52f0"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "e430a01705486cbe7559f5e68e13a4d3"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "6d3aba5d1ec43df0bcb580f37de0a7cf"
  },
  {
    "url": "tag/index.html",
    "revision": "d1b4a3776172c0f1161db45c5ecd5e99"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "09130a218aeee63df54542294bee7f9e"
  },
  {
    "url": "timeline/index.html",
    "revision": "922a754a59ffb3de6ce3a9c6ae57f79f"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "cabf7c9f794b06eb48482d4781e4207f"
  },
  {
    "url": "web-scraper.html",
    "revision": "d6f22213c178ce9f559c82d325ac0bf6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
