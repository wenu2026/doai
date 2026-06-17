# 当前状态

最后更新：2026-06-17

## 当前状态

- 当前工作目录是 `D:\PMP\doai`。
- 当前 Git 分支是 `ui-redesign`。
- 本次开始前工作区已有未提交的 UI/源码改动，涉及 `src/app/`、`src/components/`、`assets/styles.css` 等文件；本次文档补齐不改这些业务代码文件。
- 项目是 Next.js App Router 静态导出应用，同时保留旧静态 HTML 站点骨架。
- 当前资源数据源 `src/content/resources.json` 有 13 条资源。
- `data/resources.json` 作为旧静态站兼容数据源存在。
- GitHub Pages workflow 位于 `.github/workflows/pages.yml`，构建时使用 `/doai` base path。
- 当前 `docs/` 已有课程内容和资源规划文档，本次补齐项目上下文文档体系。

## 已完成

- 创建 `docs/PROJECT_CONTEXT.md`，记录项目定位、产品形态、内容资产、技术与发布上下文、已知边界。
- 创建 `docs/PROJECT_DOC.md`，采用 PRD + 技术文档合并格式，记录页面、功能、数据结构、技术栈、命令、构建、环境变量、验证方式和发布路径。
- 创建 `docs/CURRENT_STATUS.md`，记录当前状态、已完成、当前问题、未验证风险、下一步。
- 创建 `docs/CHANGELOG.md`，从 2026-06-17 开始记录文档体系补齐。
- 创建项目根目录 `AGENTS.md`，只写本项目上下文入口、命令、目录结构、开发约定、验证要求和项目禁止事项。

## 当前问题

- 根目录旧文档 `PROJECT_CONTEXT.md` 和 `CURRENT_STATUS.md` 仍存在，新的标准文档已放到 `docs/` 下；后续应以 `docs/` 为入口。
- README、旧 HTML、部分源码注释或字符串在 PowerShell 输出中出现过编码显示异常；本次未修改业务代码或旧文案。
- giscus 依赖环境变量和 GitHub Discussions 配置，当前仅确认代码支持，未确认线上实际可评论。
- 咨询/陪跑留资入口默认指向 GitHub Discussions，真实业务承接表单或企微活码待确认。
- 当前分支已有未提交的 UI/源码改动，本次未判断这些改动是否可发布。

## 未验证风险

- 未在浏览器中打开页面检查桌面端和移动端视觉表现。
- 未验证当前线上 GitHub Pages 内容是否等于当前本地分支。
- 未验证 giscus 在生产环境是否已完成仓库、分类、App 安装和权限配置。
- 未验证 `NEXT_PUBLIC_LEAD_FORM_URL` 是否已替换为正式留资入口。
- 未验证旧静态站 HTML 是否仍需要继续维护。
- 未验证 `src/content/resources.json` 与 `data/resources.json` 是否在所有字段上完全一致，只确认二者都存在并由测试覆盖关键资源。

## 下一步

- 运行 `npm run test`，确认文档补齐没有破坏现有结构校验。
- 如需要发布，先处理或确认当前分支已有 UI/源码改动，再执行完整验证：`npm run typecheck`、`npm run lint`、`npm run test`、`npm run build`。
- 确认 giscus 的 GitHub Discussions 配置和生产环境变量。
- 确认正式留资入口，并按需更新 `.env` 或部署环境变量。
- 之后新增产品需求时，在 `docs/changes/` 下先写需求变更文档，再改产品或代码。

