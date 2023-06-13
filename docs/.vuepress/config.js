import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  // logo: "/image/logo.svg",
  lang: "zh-CN", // 语言设置
  title: "Hello Lin-Note-v2", // 主页标题
  description: "艮山的个人博客 v2", // 主页描述
  base: "/Lin-Note-v2/", // 基础路径
  // 默认主题
  theme: defaultTheme({
    // 导航栏配置
    navbar: [
      // 主页
      {
        text: "主页",
        link: "/",
      },
      // 基础/进阶
      {
        text: "基础/进阶",
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
            children: [
              { text: "Vue3 进阶", link: "/基础入门/Vue3 进阶.md" },
              { text: "Vue3 基础", link: "/Vue3/周边工具.md" },
            ],
          },
        ],
      },
      // 优质面试题
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
      // 工具
      {
        text: "工具",
        children: [
          {
            text: "vscode",
            children: [
              {
                text: "vscode 版本管理",
                link: "/vscode使用心得/vscode 版本管理.md",
              },
              {
                text: "vscode 插件篇",
                link: "/vscode使用心得/vscode 插件篇.md",
              },
              {
                text: "vscode 常用快捷键",
                link: "/vscode使用心得/vscode 常用快捷键.md",
              },
            ],
          },
          {
            text: "npm",
            children: [
              {
                text: "npm 常用插件",
                link: "/npm/管理相关的插件.md",
              },
            ],
          },
        ],
      },
      // 开发心得
      {
        text: "开发心得",
        link: "/devExp/编程基础知识.md",
      },
      // GitHub 博客地址
      {
        text: "GitHub",
        link: "https://github.com/Jackie-Lin/Lin-Note-v2",
      },
      // Npm UI 组件库地址
      {
        text: "Npm",
        link: "https://www.npmjs.com/package/lin-ui2",
      },
    ],
    // 侧边栏配置
    sidebar: {
      // [注] 主要的一点是 这个路径配置 需要英文名，不能是中文名
      // 配置了，侧边栏，就会显示，没有配置就走默认自动生成侧边栏
      // 开发心得
      "/devExp/": [
        {
          text: "开发心得",
          collapsable: true,
          children: [
            {
              text: "编程基础知识",
              link: "/devExp/编程基础知识.md",
            },
            {
              text: "产品相关的东西",
              link: "/devExp/产品相关的东西.md",
            },
            {
              text: "变量设置默认值",
              link: "/devExp/变量设置默认值.md",
            },
            {
              text: "关于学习",
              link: "/devExp/关于学习.md",
            },
            {
              text: "机械键盘快捷键",
              link: "/devExp/机械键盘快捷键.md",
            },
            {
              text: "架构层面",
              link: "/devExp/架构层面.md",
            },
            {
              text: "浏览器控制的操作技巧",
              link: "/devExp/浏览器控制的操作技巧.md",
            },
            {
              text: "模块化如何封装",
              link: "/devExp/模块化如何封装.md",
            },
            {
              text: "目录树生成",
              link: "/devExp/目录树生成.md",
            },
            {
              text: "请求错误处理",
              link: "/devExp/请求错误处理.md",
            },
            {
              text: "提问技巧",
              link: "/devExp/提问技巧.md",
            },
            {
              text: "为什么要去了解新技术的原理",
              link: "/devExp/为什么要去了解新技术的原理.md",
            },
            {
              text: "性能优化",
              link: "/devExp/性能优化.md",
            },
            {
              text: "支付专题",
              link: "/devExp/支付专题.md",
            },
            {
              text: "重构心得",
              link: "/devExp/重构心得.md",
            },
            {
              text: "chrome调试工具",
              link: "/devExp/chrome调试工具.md",
            },
            {
              text: "CMD 简单操作",
              link: "/devExp/CMD 简单操作.md",
            },
            {
              text: "js的巧妙写法",
              link: "/devExp/js的巧妙写法.md",
            },
            {
              text: "Typora 使用技巧",
              link: "/devExp/Typora 使用技巧.md",
            },
            {
              text: "window11去除图标小箭头",
              link: "/devExp/window11去除图标小箭头.md",
            },
          ],
        },
      ],
      // Vue3 基础
      "/Vue3/": [
        {
          text: "Vue3 基础",
          collapsable: true,
          children: [
            {
              text: "周边工具",
              link: "/Vue3/周边工具.md",
            },
            {
              text: "Composition API",
              link: "/Vue3/Composition API.md",
            },
            {
              text: "Vue3 开发环境搭建",
              link: "/Vue3/Vue3 开发环境搭建.md",
            },
            {
              text: "Vue3 vs Vue2",
              link: "/Vue3/Vue3 vs Vue2.md",
            },
          ],
        },
      ],
      // npm 插件
      "/npm/": [
        {
          text: "npm 常用插件",
          collapsable: true,
          children: [
            {
              text: "管理相关的插件",
              link: "/npm/管理相关的插件.md",
            },
            {
              text: "业务相关的插件",
              link: "/npm/业务相关的插件.md",
            },
            {
              text: "npm 基础知识",
              link: "/npm/npm 基础知识.md",
            },
          ],
        },
      ],
      // 默认配置 为每个路径都增加默认侧边栏，没有这个配置，其他没有配置的路径的侧边栏都为空
      "/": [""],
    },
  }),
  // 搜索框配置
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  sidebarDepth: 2,
  lastUpdated: "Last Updated",
});
