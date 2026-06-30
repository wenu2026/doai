# 更新日志

## 2026-06-30

### Changed

- 优化首页信息架构：首页从全量资源铺陈改为路线入口、问题入口、路线速览、精选资源和留资入口。
- 首页精选资源收敛为 4 条主路线资源，完整内容继续通过 `/resources` 查看。
- 移动端导航改为可直接点击的换行导航，移除不可用的菜单占位按钮。
- 增加 favicon，避免本地浏览器请求 favicon 时出现 404。

### Verified

- `npm run typecheck` 通过。
- `npm run lint` 通过。
- `npm run test` 通过。
- `npm run build` 通过。
- Playwright 复测桌面端和移动端首页：无页面级横向溢出，控制台错误为 0。

## 2026-06-17

### Added

- 补齐项目上下文文档体系：
  - `docs/PROJECT_CONTEXT.md`
  - `docs/PROJECT_DOC.md`
  - `docs/CURRENT_STATUS.md`
  - `docs/CHANGELOG.md`
  - `AGENTS.md`

### Notes

- 本次只补文档和项目协作规则，不改业务代码。
- 历史版本记录不倒推；本文件从 2026-06-17 开始记录。