import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "我的简历",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "研究方向",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "论文/著作",
    icon: "chart-line",
    link: "/publications/",
  },
  {
    text: "课程教学",
    icon: "book",
    link: "/courses/",
  },
  {
    text: "获奖",
    icon: "flask",
    link: "/awards/",
  },
  {
    text: "人才需求",
    icon: "puzzle-piece",
    link: "/position/",
  },
  {
    text: "学习笔记",
    icon: "share-nodes",
    link: "/mynotes/",
  },
  {
    text: "媒体报道",
    icon: "newspaper",
    link: "/onmedia/",
  },
  {
    text: "联系我们",
    icon: "trophy",
    link: "/contactus/",
  },
]);
