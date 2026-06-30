# PROJECT_CONTEXT

## 项目定位

doai 是一个面向 AI 小白和职场人士的开源 AI 学习路线图项目，目标是帮助用户找到适合自己的学习路径，并把 AI 用到真实工作和生活里。

项目内容组织为五个年级：

- 一年级：小试牛刀。会选工具、会用模板，先完成可见的小成果。
- 二年级：岗位重构。把 AI 接入真实任务，重构个人工作模式。
- 三年级：AI 工程师。用 AI 做项目、搭工作流、组织上下文。
- 四年级：组织/行业赋能。面向团队、部门或行业设计 AI 赋能方案。
- 五年级：创造新时代。跟踪前沿人物、论文和产业观点，形成自己的判断框架。

## 资源库原则

资源库不做大而全导航，采用“主路线严选 + 扩展资源池”的方式维护。每条资源都应说明适合谁、解决什么问题、为什么放在该年级、最终产出是什么。

中文资源优先；英文资源仅在权威性、前沿性或实践质量明显更强时放入，并在 doai 页面提供中文导读。

## 当前资源规划

完整的 1-5 年级资源规划见 `docs/resource-plan-grades-1-5.md`。

## 四年级自建资源

- `docs/team-ai-enablement-canvas.md`：团队 AI 赋能方案画布，帮助用户把一个团队 AI 试点写成范围、责任、工具、风险和验收标准都清楚的方案。
- `docs/organization-ai-use-case-inventory.md`：组织 AI 用例盘点表，帮助用户收集、评分、筛选和排序团队内适合先做的 AI 用例。

## 课程内容源

- `docs/grade-1-seven-day-ai-task-pack.md`：一年级 7 天 AI 日常任务包。
- `docs/grade-2-personal-ai-workbench-checklist.md`：二年级个人 AI 工作台搭建清单。
- `docs/grade-2-role-workflow-review-template.md`：二年级岗位流程复盘模板。
- `docs/grade-3-codex-ai-programming-workflow.md`：三年级 Codex AI 编程工作流总览。
- `docs/grade-3-idea-to-demo-ai-project.md`：三年级从想法到可演示应用。
- `docs/grade-4-ai-pilot-retrospective-template.md`：四年级 AI 试点复盘模板。
- `docs/grade-5-ai-frontier-reading-framework.md`：五年级 AI 前沿观点阅读框架。

## 发布路径

资源库线上内容由 `src/content/resources.json` 驱动，旧静态页同步使用 `data/resources.json`。GitHub Pages 工作流在 `main` 或 `master` 分支推送后运行 `npm run build` 并发布 `out/`。
