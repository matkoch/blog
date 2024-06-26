import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3960a23ecd5645b4a1718f62f93f8240',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ShinyCodes.NET',
  domain: 'ShinyCodes.NET',
  author: 'Matthias Koch',

  // open graph metadata (optional)
  description: 'Adventures in .NET, OSS, and automation',

  // social usernames (optional)
  twitter: 'matkoch87',
  github: 'matkoch',
  linkedin: 'matthias-koch-jb',
  mastodon: 'https://dotnet.social/@matkoch', // optional mastodon profile URL, provides link verification
  discord: '376491402768416798',
  rss: 'https://shinycodes.net/feed', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  isSearchEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Talks',
      pageId: '24e24372e8bb465a802148a47cec2404'
    }
  ],

  // uncomment gisucs config to enable gisucs, get these keys from https://giscus.app/
  giscusRepo: 'matkoch/blog',
  giscusRepoId: 'R_kgDOKpuyfQ',
  giscusCategory: 'Comments',
  giscusCategoryId: 'DIC_kwDOKpuyfc4Catcs'
})
