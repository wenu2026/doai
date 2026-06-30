# 当前状态

最后更新：2026-06-30

## 当前状态

- 当前工作目录是 `D:\PMP\doai`。
- 项目是 Next.js App Router 静态导出应用，GitHub Pages 生产 base path 为 `/doai`，腾讯云备用部署使用站点根路径。
- PR #1 `[codex] 优化首页并调整资源展示` 已合并到 `main`。
- GitHub Pages 主站已部署成功：`https://wenu2026.github.io/doai/`。
- 腾讯云备用站已部署成功：`http://124.221.141.173/`。
- 首页精选资源区已恢复，留资二维码卡仍不展示。
- 资源库列表已恢复，只隐藏截图中明确出现的资源卡片。
- 页面评论待连接块仍不展示。

## 已完成

- 合并 `ui-redesign` 到 `main`，解决与 `main` 的冲突。
- 保留 `main` 已新增的腾讯云部署配置和 `g2-quant-for-beginners` 资源。
- 修复合并后的 Badge variant 类型不匹配问题。
- 更新旧静态站测试中的资源数量断言为 14 条。
- GitHub Actions `Deploy Next site to GitHub Pages` 已成功完成。
- GitHub Actions `Deploy to Tencent Lighthouse` 已成功完成。

## 当前隐藏资源

- `g1-seven-day-ai-task-pack`
- `g2-personal-ai-workbench-checklist`
- `g2-role-workflow-review-template`
- `g3-idea-to-demo-ai-project`
- `g4-team-ai-enablement-canvas`
- `g4-organization-ai-use-case-inventory`
- `g4-ai-pilot-retrospective-template`
- `g5-ai-frontier-reading-framework`

## 验证结果

- `npm run typecheck`：通过。
- `npm run lint`：通过。
- `npm run test`：通过。
- `npm run build`：通过，静态生成 22 个页面。
- GitHub Pages workflow：通过，run `28427535004`。
- 腾讯云 workflow：通过，run `28427534963`。
- 线上访问检查：
  - `https://wenu2026.github.io/doai/` 返回 200，`Last-Modified: Tue, 30 Jun 2026 07:24:22 GMT`。
  - `http://124.221.141.173/` 返回 200，`Last-Modified: Tue, 30 Jun 2026 07:24:27 GMT`。
  - 首页线上内容包含 `14 条首批资源`、`开源 AI 学习路线图`、`精选资源`、`Easy-Vibe：用 AI 做出第一个可演示应用`。

## 当前问题

- GitHub Actions 提示 Node.js 20 action 被平台强制运行在 Node.js 24；本次部署成功，不影响当前访问，但后续可升级相关 actions 版本或运行环境配置。
- 当前主工作区仍有本次开始前已存在的未提交样式/组件改动；本次不回退这些改动。
- `.playwright-cli/` 和 `output/` 是本地 Playwright 验证产物，默认不作为业务代码提交。

## 下一步

- 手工验收主站：打开 `https://wenu2026.github.io/doai/`，重点检查首页和资源库展示。
- 如需继续压缩首页高度或调整隐藏资源范围，再基于 `main` 新开小分支处理。
