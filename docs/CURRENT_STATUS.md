# 当前状态

最后更新：2026-06-30

## 当前状态

- 当前工作目录是 `D:\PMP\doai`。
- 项目是 Next.js App Router 静态导出应用，生产 base path 为 `/doai`。
- 本次修正了上一轮删除过度的问题：资源库列表已恢复，只隐藏截图中明确出现的资源卡片。
- 首页精选资源区已恢复，留资二维码卡仍不展示。
- 页面评论待连接块仍不展示。

## 已完成

- `src/app/resources/page.tsx`：恢复资源卡片列表，通过 `hiddenResourceIds` 精确隐藏截图中出现的资源。
- `src/app/page.tsx`：恢复首页精选资源预览区，不恢复留资卡。
- `tests/check-next-app.mjs`：同步为验证资源页读取资源数据，并只隐藏指定资源卡。
- `docs/changes/2026-06-30-remove-visual-blocks.md`：补充说明本次修正边界。

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
- `npm run build`：通过，静态生成 21 个页面。
- Playwright 复查 `/resources`：
  - 已恢复显示 `Easy-Vibe`、`腾讯 CodeBuddy`、`Vibe Coding`、`Codex AI 编程工作流总览`、`Vibe Vibe`。
  - 仍隐藏截图中的 `三年级：从想法到可演示应用`、一年级 7 天任务包、二年级两条资源。

## 当前问题

- 如果二年级也需要保留内容，需要从隐藏列表移除对应资源；当前隐藏是严格按截图中出现的卡片执行。
- 当前工作区仍有本次开始前已存在的未提交样式/组件改动；本次不回退这些改动。
- `.playwright-cli/` 和 `output/` 是本地 Playwright 验证产物，默认不作为业务代码提交。

## 下一步

- 本地验收重点检查 `/resources`：三年级未截图资源应恢复显示；截图中指定卡片应不显示。
- 发布前再次执行 `npm run typecheck`、`npm run lint`、`npm run test`、`npm run build`。