import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "我的简历",
    icon: "book",
    link: "/cv/",
  },
  {
    text: "研究方向",
    icon: "book",
    link: "/research/",
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
    link: "/positions/",
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
