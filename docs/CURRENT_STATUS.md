# 当前状态

最后更新：2026-06-30

## 当前状态

- 当前工作目录是 `D:\PMP\doai`。
- 项目是 Next.js App Router 静态导出应用，生产 base path 为 `/doai`。
- 本次按截图反馈删除了页面中的留资卡、资源列表卡片、评论待连接块和首页精选资源区。
- 资源数据和资源详情页静态路由仍保留，资源库页面当前只展示五个年级路线入口。
- `LeadCapture` 与 `GiscusComments` 组件文件暂时保留，但页面层不再渲染。

## 已完成

- `src/app/page.tsx`：删除首页底部精选资源卡片区和留资侧栏。
- `src/app/resources/page.tsx`：删除资源卡片列表、“打开内容页”按钮和评论区，保留年级入口。
- `src/app/resources/[id]/page.tsx`：删除详情页底部评论区。
- `src/app/services/page.tsx`：删除服务页留资卡和评论区。
- `src/app/assessment/page.tsx`、`src/app/cases/page.tsx`、`src/app/routes/page.tsx`：删除页面底部评论区。
- `src/app/layout.tsx`：页脚不再提示 giscus / Discussions 评论能力。
- `tests/check-next-app.mjs`：同步当前资源库页面的验证规则。
- 新增 `docs/changes/2026-06-30-remove-visual-blocks.md` 记录本次变更。

## 验证结果

- `npm run typecheck`：通过。
- `npm run lint`：通过。
- `npm run test`：通过，`next app checks passed`，`site skeleton checks passed`。
- `npm run build`：通过，静态生成 21 个页面。
- Playwright 复查：
  - `/`：未发现“精选资源”“首页只放入口，全量内容进资源库”“打开留资入口”等截图文案。
  - `/resources`：未发现“打开内容页”“评论区待连接”等截图文案。
  - `/services`：未发现“扫码填写”“打开留资入口”等截图文案。
  - `/resources/g5-ai-frontier-reading-framework`：未发现“评论区待连接”“NEXT_PUBLIC_GISCUS”等截图文案。
  - 控制台错误为 0。

## 当前问题

- 当前工作区仍有本次开始前已存在的未提交 UI/源码改动；本次不回退这些改动。
- `.playwright-cli/` 和 `output/` 是本地 Playwright 验证产物，默认不作为业务代码提交。
- 如果后续确认留资和评论能力彻底下线，可再删除未挂载组件、依赖和配置。

## 下一步

- 本地验收重点检查：首页、资源库、服务页、任意资源详情页中，截图里的卡片和评论提示是否已消失。
- 发布前再次执行 `npm run typecheck`、`npm run lint`、`npm run test`、`npm run build`。