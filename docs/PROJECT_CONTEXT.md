# doai 项目上下文

最后更新：2026-06-17

## 项目定位

doai 是一个面向 AI 新手和职场人士的 AI 学习路线图项目，目标是帮助用户找到适合自己的学习路径，并把 AI 用到真实工作和生活里。

项目采用“五个年级”的内容组织方式：

- 一年级：小试牛刀，先用 AI 工具完成日常任务。
- 二年级：岗位重构，把 AI 接入真实岗位流程。
- 三年级：AI 工程师，用 AI 做项目、搭工作流、组织上下文。
- 四年级：组织/行业赋能，面向团队、部门或行业设计 AI 赋能方案。
- 五年级：创造新时代，跟踪前沿人物、论文和产业观点，形成判断框架。

## 当前产品形态

- 项目已从纯静态 HTML 迁移为 Next.js App Router 静态导出应用。
- 旧静态站骨架仍保留在根目录 HTML 文件和 `assets/`、`data/` 中，并由 `tests/check-site.mjs` 做兼容校验。
- Next 应用公开页面无需登录即可访问。
- 资源详情页通过 `src/content/resources.json` 生成静态路由。
- 评论能力接入 giscus，实际启用依赖环境变量和 GitHub Discussions 配置。
- 咨询/陪跑留资入口通过链接和二维码展示，二维码由 `scripts/generate-lead-qr.mjs` 生成到 `public/lead-qr.svg`。
- AI 水平自测为前端交互表单，答案优先保存在浏览器 `localStorage`。

## 内容资产

当前资源数据源：

- Next 应用：`src/content/resources.json`
- 旧静态站兼容数据：`data/resources.json`

当前确认资源数量：13 条。

按年级分布：

- 一年级：1 条
- 二年级：2 条
- 三年级：6 条
- 四年级：3 条
- 五年级：1 条

当前 `docs/` 下可确认的内容文档：

- `docs/resource-plan-grades-1-5.md`
- `docs/grade-1-seven-day-ai-task-pack.md`
- `docs/grade-2-personal-ai-workbench-checklist.md`
- `docs/grade-2-role-workflow-review-template.md`
- `docs/grade-3-idea-to-demo-ai-project.md`
- `docs/grade-3-codex-ai-programming-workflow.md`
- `docs/grade-4-ai-pilot-retrospective-template.md`
- `docs/team-ai-enablement-canvas.md`
- `docs/organization-ai-use-case-inventory.md`
- `docs/grade-5-ai-frontier-reading-framework.md`

## 技术与发布上下文

- 框架：Next.js App Router
- 语言：TypeScript
- 样式：Tailwind CSS 4
- UI 组件：本地组件，包含 shadcn/ui 风格的 `button`、`card`、`badge`
- 图标：`lucide-react`
- 评论：`@giscus/react`
- 二维码生成：`qrcode`
- 发布方式：GitHub Pages
- 构建产物：`out/`
- 生产仓库路径 base path：`/doai`

GitHub Pages 工作流位于 `.github/workflows/pages.yml`，在 `main` 或 `master` 推送后运行 `npm ci` 和 `npm run build`，并发布 `out/`。

## 已知项目边界

- 项目当前未发现后端 API 路由。
- 项目当前未发现数据库、ORM 或服务端持久化配置。
- 资源维护方式仍以 GitHub 文件为主，未发现单独后台管理页面。
- giscus 是否已在当前线上环境真实可用：待确认。
- 当前线上 Pages 是否与本地分支 `ui-redesign` 内容一致：待确认。
