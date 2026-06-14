# CURRENT_STATUS

## 2026-06-14 资源规划

### 当前状态
- 已完成 1-5 年级资源体系规划，新增 `docs/resource-plan-grades-1-5.md`。
- 新增 `PROJECT_CONTEXT.md`，明确 doai 的项目定位、五个年级目标和资源库原则。
- 本次只做规划文档，不直接修改 `src/content/resources.json` 或 `data/resources.json`，避免把尚未确认的候选资源直接上架。

### 本次完成
- 梳理每个年级应放的主路线资源、扩展资源、资源内容和最优获取路径。
- 明确首批上架优先级：先做自建主路线资源，再补外部权威资源。
- 明确不建议首批放入的资源类型：零散 Prompt 大合集、过时模型排行榜、纯营销文章、高价闭源课程、缺少导读的论文清单。

### 验证结果
- 已根据项目现有 README、资源结构和年级目标制定规划。
- 已联网核对主要外部资源入口，包括 Datawhale、Microsoft、OpenAI、Hugging Face、Anthropic、State of AI、Kimi、千问、秘塔、扣子等。

### 未验证风险
- 外部资源链接可能随产品改版变化，正式上架前仍需逐条打开确认。
- 自建主路线资源尚未写成可展示页面或 `resources.json` 条目。

### 下一步
- 将第一批 15 条资源拆成正式 `resources.json` 条目。
- 优先制作一年级“7 天 AI 日常任务包”、二年级“个人 AI 工作台搭建清单”、四年级“团队 AI 赋能方案画布”、五年级“AI 前沿观点阅读框架”。

## 当前状态

- 三年级资源库已包含 Easy-Vibe、腾讯 CodeBuddy、Vibe Coding 核心理念和 Vibe Vibe 四个资源。
- 资源内容源为 `src/content/resources.json`，旧静态页面数据同步在 `data/resources.json`。
- 本地 Git 仓库已初始化，当前主分支为 `main`。
- 首次提交已完成：`4f421ed Initial doai site`。
- GitHub 远端仓库已创建：`https://github.com/wenu2026/doai`。
- 本地 `main` 已推送并跟踪 `origin/main`。
- GitHub Pages 已启用并部署成功：`https://wenu2026.github.io/doai/`。

## 本次完成

- 将 `https://www.vibevibe.cn/` 作为三年级资源加入资源库。
- 资源定位为“在线课程/项目实践”，强调从想法到作品的 AI 创造工作流、MVP 思维、上线部署和工程化视角。
- 同步更新旧静态数据与资源数量测试断言。
- 初始化本地 Git 仓库并完成首次提交，准备同步到 GitHub。
- 通过 GitHub CLI 创建 public 仓库 `wenu2026/doai`，并推送 `main` 分支。
- 通过 GitHub API 启用 Pages 的 workflow 发布模式，并手动触发首次成功部署。

## 验证结果

- 已通过：`npm.cmd run test`
- 已通过：`npm.cmd run typecheck`
- 已通过：`npm.cmd run lint`
- 已通过：`npm.cmd run build`
- 构建输出已包含 `/resources/g3-vibe-vibe-ai-creation` 静态详情页。
- 已通过 GitHub Actions 成功部署到 GitHub Pages。
- 已通过 `curl.exe -I https://wenu2026.github.io/doai/` 确认首页返回 `200 OK`。

## 未验证风险

- 需在浏览器中手工确认三年级资源列表与资源详情页显示正常。
- 目前仅加入 Vibe Vibe 首页链接，未强行猜测站内章节 URL。
- 未在浏览器中进行完整页面交互验收。

## 下一步

- 如果需要更强的学习路径引导，可以后续为 Vibe Vibe 增加“基础篇”和“进阶篇”的精确章节链接。
- 按需配置 giscus 仓库参数，让资源详情页评论使用 `wenu2026/doai` 的 Discussions。
