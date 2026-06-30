# 更新日志

## 2026-06-30

### Changed

- 修正资源库删除范围：恢复资源列表，只隐藏截图中明确出现的资源卡片。
- 恢复首页精选资源预览区，留资二维码卡仍不展示。
- 页面评论待连接块仍不展示。
- 更新测试规则，使其验证资源库读取资源数据并只隐藏指定资源。

### Verified

- `npm run typecheck` 通过。
- `npm run lint` 通过。
- `npm run test` 通过。
- `npm run build` 通过。
- Playwright 复查资源库：三年级未截图资源已恢复，截图中指定资源仍隐藏。

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