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
        text: "基础/进价",
        children: [
          {
            text: "基础",
            children: [
              { text: "TypeScript 入门", link: "/基础入门/TypeScript 入门.md" },
              { text: "sass 入门", link: "/基础入门/sass 入门.md" },
              { text: "React 入门", link: "/基础入门/React 入门.md" },
              { text: "Nestjs 入门", link: "/基础入门/Nestjs 入门.md" },
            ],
          },
          {
            text: "进阶",
            children: [{ text: "Vue3 进阶", link: "/基础入门/Vue3 进阶.md" }],
          },
        ],
      },
      {
        text: "优质面试题",
        children: [
          {
            text: "分类面试题",
            children: [
              {
                text: "基础 面试题",
                link: "/优质面试题/分类面试题/基础 面试题.md",
              },
              {
                text: "软技能-沟通、总结和学习能力",
                link: "/优质面试题/分类面试题/软技能-沟通、总结和学习能力.md",
              },
              {
                text: "实践工作经验-是否做过真实项目",
                link: "/优质面试题/分类面试题/实践工作经验-是否做过真实项目.md",
              },
              {
                text: "项目设计-能否成为项目负责人",
                link: "/优质面试题/分类面试题/项目设计-能否成为项目负责人.md",
              },
              {
                text: "知识广度-从前端到全栈",
                link: "/优质面试题/分类面试题/知识广度-从前端到全栈.md",
              },
              {
                text: "知识深度-原理和源码",
                link: "/优质面试题/分类面试题/知识深度-原理和源码.md",
              },
              {
                text: "编写高质量代码-正确、完整、清晰、鲁棒",
                link: "/优质面试题/分类面试题/编写高质量代码-正确、完整、清晰、鲁棒.md",
              },
              {
                text: "分析和解决问题的思路-可以独立解决问题",
                link: "/优质面试题/分类面试题/分析和解决问题的思路-可以独立解决问题.md",
              },
            ],
          },
          {
            text: "基本面试题",
            children: [
              {
                text: "html-标签",
                link: "/优质面试题/基本面试题/html-标签.md",
              },
              {
                text: "css-样式与布局",
                link: "/优质面试题/基本面试题/css-样式与布局.md",
              },
              {
                text: "http-基本知识",
                link: "/优质面试题/基本面试题/http-基本知识.md",
              },
              {
                text: "javascript-系统知识点",
                link: "/优质面试题/基本面试题/javascript-系统知识点.md",
              },
              {
                text: "javascript-补充知识点",
                link: "/优质面试题/基本面试题/javascript-补充知识点.md",
              },
              {
                text: "Vue-基本使用与原理",
                link: "/优质面试题/基本面试题/Vue-基本使用与原理.md",
              },
              {
                text: "网络相关知识",
                link: "/优质面试题/基本面试题/网络相关知识.md",
              },
              {
                text: "构建工具的使用",
                link: "/优质面试题/基本面试题/构建工具的使用.md",
              },
            ],
          },
        ],
      },
      {
        text: "GitHub",
        link: "https://github.com/Jackie-Lin/Lin-UI/tree/master",
      },
      {
        text: "Npm",
        link: "https://www.npmjs.com/package/lin-ui2",
      },
    ],
  }),
  sidebarDepth: 2,
  lastUpdated: "Last Updated",
});
