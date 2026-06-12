import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const requiredFiles = [
  "index.html",
  "routes.html",
  "resources.html",
  "services.html",
  "assessment.html",
  "cases.html",
  "assets/styles.css",
  "assets/app.js",
  "data/resources.json",
  "README.md",
  ".github/workflows/pages.yml",
];

for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(root, file)), `Missing required file: ${file}`);
}

const pages = [
  "index.html",
  "routes.html",
  "resources.html",
  "services.html",
  "assessment.html",
  "cases.html",
];

for (const page of pages) {
  const html = read(page);
  assert(html.includes('href="assets/styles.css"'), `${page} must include shared stylesheet`);
  assert(html.includes('href="index.html"'), `${page} must link back to home`);
  assert(html.includes("doai"), `${page} must contain project name`);
}

for (const page of pages) {
  const html = read(page);
  const navMatch = html.match(/<nav class="links"[\s\S]*?<\/nav>/);
  assert(navMatch, `${page} must include top navigation`);
  const nav = navMatch[0];
  for (const text of ["首页", "AI 水平自测", "五个年级"]) {
    assert(nav.includes(text), `${page} top navigation missing: ${text}`);
  }
  for (const text of ["资源库", "首期内测", "案例"]) {
    assert(!nav.includes(text), `${page} top navigation must not include: ${text}`);
  }
}

const home = read("index.html");
for (const text of [
  "小试牛刀",
  "岗位重构",
  "AI 工程师",
  "组织/行业赋能",
  "创造新时代",
  "2026 年 6-8 月首期内测",
  "建议价 99 元",
  "建议价 699 元",
]) {
  assert(home.includes(text), `index.html missing required text: ${text}`);
}
for (const grade of ["1", "2", "3", "4", "5"]) {
  assert(home.includes(`resources.html?grade=${grade}`), `index.html must link grade ${grade} to the grade resource library`);
}
assert(home.includes("resources.html?resource=g3-easy-vibe"), "index.html must link project users to the Easy-Vibe resource");

const resources = JSON.parse(read("data/resources.json"));
assert(Array.isArray(resources), "data/resources.json must be an array");
assert(resources.length >= 1, "data/resources.json must contain at least one resource");

for (const item of resources) {
  for (const key of [
    "id",
    "grade",
    "title",
    "type",
    "audience",
    "problem",
    "reason",
    "outcome",
    "duration",
    "pricing",
    "url",
    "mainRoute",
  ]) {
    assert(Object.hasOwn(item, key), `resource ${item.id ?? "(unknown)"} missing ${key}`);
  }
  assert(item.url, `resource ${item.id ?? "(unknown)"} must provide an original link`);
}
assert(resources.length === 4, "data/resources.json should currently contain the four approved third-grade resources");
assert(resources.some((item) => item.id === "g3-easy-vibe"), "Easy-Vibe resource is required");
assert(resources.some((item) => item.id === "g3-tencent-codebuddy-architect"), "Tencent CodeBuddy resource is required");
assert(resources.some((item) => item.id === "g3-vibe-coding-core"), "Vibe Coding resource is required");
assert(resources.some((item) => item.id === "g3-vibe-vibe-ai-creation"), "Vibe Vibe resource is required");

const app = read("assets/app.js");
assert(app.includes("resource-grade-link"), "resource page must render grade menu links");
assert(!app.includes("resource-menu-link"), "resource page must not render a separate resource menu module");
assert(app.includes("redirectFilePreviewToLocalServer"), "app.js must redirect file previews to the local HTTP server");
assert(app.includes("http://127.0.0.1:8000/"), "file preview redirect must target the local HTTP server");

for (const deletedTitle of [
  "高频任务提示词模板",
  "个人 AI 工作台搭建清单",
  "上下文工程入门项目",
  "团队 AI 赋能方案画布",
  "AI 前沿观点阅读框架",
]) {
  assert(!resources.some((item) => item.title === deletedTitle), `deleted resource still exists: ${deletedTitle}`);
}

const workflow = read(".github/workflows/pages.yml");
assert(workflow.includes("actions/deploy-pages"), "Pages workflow must deploy to GitHub Pages");

console.log("site skeleton checks passed");
