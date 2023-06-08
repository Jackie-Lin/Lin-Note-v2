import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  base: "/",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "基础入门",
        children: [
          { text: "TypeScript", link: "/基础入门/TypeScript 入门.md" },
        ],
      },
      {
        text: "菜单2",
        children: [
          { text: "菜单3", link: "/web3" },
          { text: "菜单4", link: "/web4" },
        ],
      },
    ],
  }),
});
