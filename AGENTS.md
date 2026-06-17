# AGENTS.md

## 本项目上下文入口

开始任务前按最小必要原则读取：

- `docs/CURRENT_STATUS.md`：当前真实状态、问题、风险和下一步。
- `docs/PROJECT_CONTEXT.md`：项目定位、内容资产、边界和发布上下文。
- `docs/PROJECT_DOC.md`：PRD + 技术文档合并基线。
- `docs/CHANGELOG.md`：用户可见或项目状态变化记录。
- `docs/changes/*.md`：新增需求或变更说明；当前目录不存在时按任务需要创建。

根目录旧版 `PROJECT_CONTEXT.md` 和 `CURRENT_STATUS.md` 只作为历史参考；新任务优先使用 `docs/` 下的标准文档。

## 项目命令

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
npm run generate:qr
```

## 项目目录结构

- `src/app/`：Next App Router 页面、布局和全局样式。
- `src/components/`：业务组件和本地 UI 组件。
- `src/config/site.ts`：站点配置、giscus、留资和 base path。
- `src/lib/resources.ts`：资源类型、年级目录和资源读取校验。
- `src/content/resources.json`：Next 应用资源数据源。
- `data/resources.json`：旧静态站资源数据镜像。
- `docs/`：项目文档、课程内容和资源规划。
- `assets/`：旧静态站资源。
- `public/`：公开静态资源。
- `scripts/`：辅助脚本。
- `tests/`：结构和内容校验。
- `.github/workflows/pages.yml`：GitHub Pages 发布工作流。

## 项目开发约定

- 资源数据变更优先改 `src/content/resources.json`，并同步 `data/resources.json`。
- 资源详情页依赖 `generateStaticParams()` 静态生成，新增资源后必须跑测试和构建。
- giscus 只在环境变量完整时启用；缺配置时应保持可读的待连接状态。
- 自测功能当前只写浏览器 `localStorage`，不要在未确认需求前新增服务端存储。
- 留资入口由环境变量或默认链接承接，项目只展示入口。
- 发布到 GitHub Pages 时生产 base path 为 `/doai`。

## 验证要求

- 仅改文档：检查 Markdown 结构、事实来源和不确定项标注。
- 改资源数据：运行 `npm run test` 和 `npm run build`。
- 改 TypeScript/React：运行 `npm run typecheck`、`npm run lint`、`npm run test`、`npm run build`。
- 改前端页面：除命令验证外，检查桌面和移动端视口、核心交互、空状态/错误状态和控制台错误。
- 改发布配置：确认 `.github/workflows/pages.yml`、base path、构建产物 `out/` 和回滚方式。

## 项目禁止事项

- 不要臆造资源已上线、评论已启用、留资已接入或 Pages 已发布成功。
- 不要在未确认需求前引入数据库、登录、支付或后台管理系统。
- 不要只更新 `src/content/resources.json` 而忘记旧静态站镜像 `data/resources.json`。
- 不要把内部过程解释写进用户可见页面文案。

