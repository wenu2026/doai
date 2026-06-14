# CURRENT_STATUS

## 2026-06-14 课程内容接入与部署准备

### 当前状态
- 已将 8 个用户版自建内容接入 `src/content/resources.json`，覆盖一年级到五年级资源库。
- 已同步 `data/resources.json`，保持旧静态资源页和 Next 资源数据一致。
- 已更新 `tests/check-site.mjs`，资源数量断言从 4 条调整为 12 条，并校验 8 个自建资源 ID。

### 本次完成
- 一年级新增主路线资源：7 天 AI 日常任务包。
- 二年级新增主路线资源：个人 AI 工作台搭建清单；扩展资源：岗位流程复盘模板。
- 三年级新增主路线资源：从想法到可演示应用。
- 四年级新增主路线资源：团队 AI 赋能方案画布；扩展资源：组织 AI 用例盘点表、AI 试点复盘模板。
- 五年级新增主路线资源：AI 前沿观点阅读框架。

### 发布路径
- 本地构建命令：`npm.cmd run build`。
- 线上发布路径：推送到 `main` 或 `master` 后由 `.github/workflows/pages.yml` 发布到 GitHub Pages。
- 回滚策略：如部署后发现问题，回退到上一个已确认可用 commit 并重新推送触发 Pages 部署。

### 验证结果
- `npm.cmd run test` 已通过。
- `npm.cmd run typecheck` 已通过。
- `npm.cmd run lint` 已通过。
- `npm.cmd run build` 已通过，静态页面生成完成。
- 已抽查 `out/resources/g1-seven-day-ai-task-pack/index.html`、`out/resources/g4-team-ai-enablement-canvas/index.html`、`out/resources/g5-ai-frontier-reading-framework/index.html`，确认标题和完整 Markdown 文档入口已生成。

### 未验证风险
- 尚未在浏览器中人工检查各年级资源列表和详情页排版。
- 资源详情页当前显示导读和完整 Markdown 链接，尚未把 Markdown 全文内嵌渲染到站内。

## 2026-06-14 五个年级课程内容

### 当前状态
- 已新增 6 个可直接使用的课程/模板文档，覆盖一年级到五年级的主线练习和结业型产出。
- 本次仍只维护 `docs/` 内容源，未改动前端页面和资源 JSON。

### 本次完成
- 一年级：新增 `docs/grade-1-seven-day-ai-task-pack.md`，提供 7 天 AI 日常任务包。
- 二年级：新增 `docs/grade-2-personal-ai-workbench-checklist.md`，提供个人 AI 工作台搭建清单。
- 二年级：新增 `docs/grade-2-role-workflow-review-template.md`，提供岗位流程复盘模板。
- 三年级：新增 `docs/grade-3-idea-to-demo-ai-project.md`，提供从想法到可演示应用的项目实践流程。
- 四年级：新增 `docs/grade-4-ai-pilot-retrospective-template.md`，提供 AI 试点复盘模板。
- 五年级：新增 `docs/grade-5-ai-frontier-reading-framework.md`，提供 AI 前沿观点阅读框架。
- 更新 `PROJECT_CONTEXT.md`，记录这些课程内容源。

### 验证结果
- 已按“适合谁、你会得到什么、步骤、模板、验收标准”的用户视角组织内容。
- 每份文档都包含可复制模板或结业任务，用户读完知道下一步怎么做。

### 未验证风险
- 尚未接入资源库详情页或 `resources.json`。
- 尚未在浏览器中检查 Markdown 转网页后的排版。

### 下一步
- 将这些文档转成资源库条目，并按年级挂到对应资源列表。
- 如果需要正式上线，可先把 6 个文档做成静态详情页，再逐步补评论和案例。

## 2026-06-14 四年级自建资源

### 当前状态
- 已新增 `docs/team-ai-enablement-canvas.md`，面向用户说明如何填写团队 AI 赋能方案画布。
- 已新增 `docs/organization-ai-use-case-inventory.md`，面向用户说明如何盘点、评分和筛选组织 AI 用例。
- 已更新 `PROJECT_CONTEXT.md`，记录四年级两个自建资源文件的位置和用途。

### 本次完成
- 将“团队 AI 赋能方案画布”从概念扩展为可直接填写的 11 格模板，包含填写示例、开会流程、自检问题和常见错误。
- 将“组织 AI 用例盘点表”扩展为可执行盘点流程，包含访谈问题、表格模板、评分规则、分类方法和示例。

### 验证结果
- 已确认两个文件都直接面向用户，不使用内部过程解释式文案。
- 已确认两个文件之间的关系清楚：用例盘点表回答“先做哪个场景”，方案画布回答“这个场景具体怎么做”。

### 未验证风险
- 尚未接入资源库页面或 `resources.json`。
- 尚未在浏览器中验证 Markdown 转网页后的排版效果。

### 下一步
- 将这两个文件拆成正式资源条目，放入四年级资源库。
- 如需上线展示，可新增对应详情页或将 Markdown 内容转入 `src/content/resources.json`。

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
