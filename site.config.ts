export const config = {
  siteMeta: {
    title: "touyou Blog Hub",
    teamName: "touyou",
    description: "RSS based blog hub",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://touyou-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Homepage",
      href: "https://touyou.dev",
    },
    {
      title: "GitHub",
      href: "https://github.com/touyou/team-blog-hub",
    },
  ],
};
