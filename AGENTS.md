# AGENTS.md

## 本项目上下文入口

开始任务前按最小必要原则读取：

- `docs/CURRENT_STATUS.md`：当前真实状态、问题、风险和下一步。
- `docs/PROJECT_CONTEXT.md`：项目定位、内容资产、边界和发布上下文。
- `docs/PROJECT_DOC.md`：PRD + 技术文档合并基线。
- `docs/CHANGELOG.md`：用户可见或项目状态变化记录。
- `docs/changes/*.md`：新增需求或变更说明；当前目录不存在时按任务需要创建。

根目录旧版 `PROJECT_CONTEXT.md` 和 `CURRENT_STATUS.md` 只作为历史参考；新任务优先使用 `docs/` 下的标准文档。

## 项目协作原则

本项目按三处协作管理：

1. GitHub 是唯一源码事实源。
2. 腾讯云只作为部署目标。
3. Codex 是开发协作助手。

主仓库：

```text
https://github.com/wenu2026/doai
```

不要把腾讯云服务器当作源码编辑位置。服务器只运行由 GitHub Actions 上传或部署的构建产物。

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

## 标准本地流程

新电脑初始化：

```bash
git clone https://github.com/wenu2026/doai.git
cd doai
npm install
npm run dev
```

开始工作前：

```bash
git pull origin main
```

改动后：

```bash
npm run test
npm run build
git status
git add .
git commit -m "描述本次变更"
git push origin main
```

推送到 `main` 会触发 GitHub Actions 部署。主要公开访问地址是 GitHub Pages：

```text
https://wenu2026.github.io/doai/
```

腾讯云作为备用部署目标：

```text
http://124.221.141.173/
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
- 发布到腾讯云根路径时，不使用 `/doai` base path。
- 大型改版使用分支，验收后再通过 GitHub 合并。
- 如果部署失败，先看 GitHub Actions 日志；如果网站不可访问，再检查腾讯云容器日志。

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
- 不要直接在腾讯云服务器上修改源码。
- 不要把一台电脑的 SSH 私钥复制到另一台电脑；每台电脑应生成自己的 SSH key，只绑定公钥。
