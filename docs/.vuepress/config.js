import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Hello Lin-Note-v2",
  description: "艮山的个人博客 v2",
  base: "/Lin-Note-v2/",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "基础入门",
        children: [
          { text: "TypeScript 入门", link: "/基础入门/TypeScript 入门.md" },
          { text: "sass 入门", link: "/基础入门/sass 入门.md" },
          { text: "React 入门", link: "/基础入门/React 入门.md" },
          { text: "Nestjs 入门", link: "/基础入门/Nestjs 入门.md" },
          { text: "Vue3 进阶", link: "/基础入门/Vue3 进阶.md" },
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
