# 更新日志

## 2026-06-30

### Changed

- 根据截图反馈，删除首页底部精选资源区、留资二维码卡、资源库资源卡片列表和页面评论待连接块。
- 资源库页面改为只保留五个年级路线入口。
- 页脚不再提示 giscus / GitHub Discussions 评论能力。
- 更新测试规则，使其匹配当前资源库页面展示范围。

### Verified

- `npm run typecheck` 通过。
- `npm run lint` 通过。
- `npm run test` 通过。
- `npm run build` 通过。
- Playwright 复查首页、资源库、服务页和资源详情页，截图中的目标内容均未再出现。

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