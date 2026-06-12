redirectFilePreviewToLocalServer();

const gradeCatalog = [
  {
    key: "1",
    name: "一年级：小试牛刀",
    shortName: "一年级",
    theme: "小试牛刀",
    goal: "会选工具、会用模板，先完成可见的小成果。",
  },
  {
    key: "2",
    name: "二年级：岗位重构",
    shortName: "二年级",
    theme: "岗位重构",
    goal: "把 AI 接入真实任务，重构个人工作模式。",
  },
  {
    key: "3",
    name: "三年级：AI 工程师",
    shortName: "三年级",
    theme: "AI 工程师",
    goal: "用 AI 做项目、搭工作流、组织上下文。",
  },
  {
    key: "4",
    name: "四年级：组织/行业赋能",
    shortName: "四年级",
    theme: "组织/行业赋能",
    goal: "面向团队、部门或行业设计 AI 赋能方案。",
  },
  {
    key: "5",
    name: "五年级：创造新时代",
    shortName: "五年级",
    theme: "创造新时代",
    goal: "跟踪前沿人物、论文和产业观点，形成判断框架。",
  },
];

function redirectFilePreviewToLocalServer() {
  if (window.location.protocol !== "file:") return;

  const pathParts = window.location.pathname.split(/[\\/]/).filter(Boolean);
  const fileName = pathParts[pathParts.length - 1] || "index.html";
  window.location.replace(`http://127.0.0.1:8000/${fileName}${window.location.search}${window.location.hash}`);
}

const localPreviewResources = [
  {
    id: "g3-easy-vibe",
    grade: "三年级：AI 工程师",
    title: "Easy-Vibe：用 AI 做出第一个可演示应用",
    type: "开源课程",
    audience: "已经能用 AI 完成任务，想把一个想法做成应用原型的人",
    problem: "知道 AI 能写代码，但不知道怎样从需求、页面、功能、数据到部署完整走一遍",
    reason: "它把 AI 编程拆成学习地图、交互教程和项目实践，适合从零开始建立一套可复用的做项目流程",
    outcome: "完成一个能演示的应用原型，并理解 AI IDE、需求拆解、前后端、部署和基础 AI 能力接入的完整链路",
    duration: "6-12 小时",
    pricing: "免费",
    url: "https://github.com/datawhalechina/easy-vibe?tab=readme-ov-file",
    mainRoute: true,
    summary: "适合作为三年级的项目实践主线。用户不需要先系统学完编程，而是从一个具体想法开始，跟着路线把需求、原型、页面、功能和部署串起来。",
    details: [
      "先用它建立“AI 做项目”的完整感：不是只让 AI 生成一段代码，而是把想法拆成需求、页面、功能、数据和发布路径。",
      "学习时不要从目录第一章一路泛读，建议先选一个自己真的想做的小应用，按项目目标倒推需要看的章节。",
      "适合放在三年级前半段，作为从“会用 AI 完成任务”进入“能交付一个小项目”的桥梁。",
    ],
    links: [
      {
        label: "GitHub 项目",
        url: "https://github.com/datawhalechina/easy-vibe?tab=readme-ov-file",
      },
      {
        label: "在线文档",
        url: "https://datawhalechina.github.io/easy-vibe/",
      },
    ],
  },
  {
    id: "g3-tencent-codebuddy-architect",
    grade: "三年级：AI 工程师",
    title: "腾讯 CodeBuddy：AI 编程工具的工程化用法",
    type: "视频课程",
    audience: "已经开始用 AI 写代码，想理解上下文、Rules、MCP、Agent 和自动化流程的人",
    problem: "会让 AI 写代码，但项目一复杂就容易失控，不知道怎样组织规则、上下文和工具链",
    reason: "课程用 CodeBuddy 串起 AI 编程工具的深度使用、上下文工程、Skills、MCP、Agent SDK 和 CI/CD，适合补齐工程化协作视角",
    outcome: "能设计一套更稳定的 AI 编程工作流，并知道如何把规则、上下文、工具调用和自动化流程接入项目",
    duration: "6.1 小时",
    pricing: "免费",
    url: "https://cloud.tencent.com/edu/learning/course-4663-83022",
    mainRoute: false,
    summary: "适合作为三年级后半段的工程化补课。它的价值不是“考认证”，而是帮助用户理解 AI 编程工具如何通过规则、上下文、技能、MCP、Agent 和自动化流程变得稳定可控。",
    details: [
      "如果用户已经用 AI 写过小项目，但经常遇到上下文混乱、规则不稳定、工具链接不上、项目越做越乱的问题，可以看这门课。",
      "重点看 CodeBuddy 安装与使用、对话模式深度使用、System Prompt 与 Rules、上下文工程、Skills 技能系统、MCP 集成与工具开发、Agent SDK、多 Agent 协同架构和 CI/CD 自动化流程。",
      "它不适合作为零基础第一课，更适合作为 Easy-Vibe 之后的补充：先做出一个项目，再学习如何把 AI 编程工作流做得更工程化。",
    ],
    links: [
      {
        label: "腾讯云课程页",
        url: "https://cloud.tencent.com/edu/learning/course-4663-83022",
      },
      {
        label: "CodeBuddy 官网",
        url: "https://www.codebuddy.ai/",
      },
    ],
  },
];

async function loadResources() {
  const target = document.querySelector("[data-resource-list]");
  if (!target) return;

  try {
    const response = await fetch("data/resources.json");
    const resources = await response.json();
    renderResourceLibrary(target, resources);
  } catch (error) {
    renderResourceLibrary(target, localPreviewResources);
  }
}

function renderResourceLibrary(target, resources) {
  const selectedGrade = getSelectedGrade(resources);
  const currentResources = resources.filter((resource) => resource.grade === selectedGrade.name);

  target.innerHTML = [
    renderSidebar(resources, selectedGrade),
    renderContent(selectedGrade, currentResources),
  ].join("");
}

function getSelectedGrade(resources) {
  const params = new URLSearchParams(window.location.search);
  const gradeKey = params.get("grade");
  const requestedGrade = gradeCatalog.find((grade) => grade.key === gradeKey);
  if (requestedGrade) return requestedGrade;

  const resourceId = params.get("resource");
  if (resourceId) {
    const selectedResource = resources.find((resource) => resource.id === resourceId);
    const resourceGrade = gradeCatalog.find((grade) => grade.name === selectedResource?.grade);
    if (resourceGrade) return resourceGrade;
  }

  return gradeCatalog[2];
}

function renderSidebar(resources, selectedGrade) {
  const gradeLinks = gradeCatalog.map((grade) => {
    const count = resources.filter((resource) => resource.grade === grade.name).length;
    const active = grade.key === selectedGrade.key ? ' aria-current="page"' : "";
    return [
      `<a class="resource-grade-link"${active} href="resources.html?grade=${grade.key}">`,
      `<span class="num n${grade.key}">${grade.key}</span>`,
      "<span>",
      `<strong>${escapeHtml(grade.shortName)}</strong>`,
      `<small>${escapeHtml(grade.theme)} · ${count} 条资源</small>`,
      "</span>",
      "</a>",
    ].join("");
  });

  return [
    '<aside class="resource-sidebar">',
    "<h2>年级资源库</h2>",
    '<nav class="grade-nav" aria-label="年级资源目录">',
    gradeLinks.join(""),
    "</nav>",
    "</aside>",
  ].join("");
}

function renderContent(grade, resources) {
  return [
    '<article class="resource-content">',
    '<div class="resource-content-head">',
    `<span class="eyebrow">${escapeHtml(grade.shortName)}</span>`,
    `<h2>${escapeHtml(grade.name)}</h2>`,
    `<p>${escapeHtml(grade.goal)}</p>`,
    "</div>",
    resources.length > 0 ? resources.map(renderResourceArticle).join("") : renderEmptyGrade(grade),
    "</article>",
  ].join("");
}

function renderEmptyGrade(grade) {
  return [
    '<section class="resource-article">',
    `<h3>${escapeHtml(grade.shortName)}资源正在整理</h3>`,
    '<p class="muted">这个年级的精选资源还没有放入首批版本。后续会按“主路线严选 + 扩展资源池”的方式补充，每条资源都会提供清晰说明和可点击链接。</p>',
    "</section>",
  ].join("");
}

function renderResourceArticle(item) {
  const route = item.mainRoute ? "主路线" : "扩展资源";
  const details = Array.isArray(item.details) ? item.details : [];
  const links = Array.isArray(item.links) ? item.links : [];

  return [
    `<section class="resource-article" id="${escapeHtml(item.id)}">`,
    '<div class="resource-article-head">',
    "<div>",
    `<span class="tag">${route}</span>`,
    `<h3>${escapeHtml(item.title)}</h3>`,
    "</div>",
    renderPrimaryLink(item),
    "</div>",
    item.summary ? `<p class="resource-summary">${escapeHtml(item.summary)}</p>` : "",
    '<dl class="resource-facts">',
    renderFact("类型", item.type),
    renderFact("适合谁", item.audience),
    renderFact("解决什么问题", item.problem),
    renderFact("为什么推荐", item.reason),
    renderFact("学完得到什么", item.outcome),
    renderFact("耗时/费用", `${item.duration} / ${item.pricing}`),
    "</dl>",
    details.length > 0 ? renderDetailList(details) : "",
    links.length > 0 ? renderLinks(links) : "",
    "</section>",
  ].join("");
}

function renderPrimaryLink(item) {
  if (!item.url) return "";
  return `<a class="button green resource-open" href="${escapeAttribute(item.url)}" target="_blank" rel="noopener">打开资源</a>`;
}

function renderFact(label, value) {
  return [
    "<div>",
    `<dt>${escapeHtml(label)}</dt>`,
    `<dd>${escapeHtml(value)}</dd>`,
    "</div>",
  ].join("");
}

function renderDetailList(details) {
  return [
    '<div class="resource-detail">',
    "<h4>怎么使用这条资源</h4>",
    "<ol>",
    details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join(""),
    "</ol>",
    "</div>",
  ].join("");
}

function renderLinks(links) {
  return [
    '<div class="resource-links">',
    "<h4>相关链接</h4>",
    "<div>",
    links.map((link) => (
      `<a href="${escapeAttribute(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`
    )).join(""),
    "</div>",
    "</div>",
  ].join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

loadResources();
