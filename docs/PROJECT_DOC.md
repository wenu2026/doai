# doai 项目文档

最后更新：2026-06-17

本文采用 PRD + 技术文档合并格式，只记录从现有代码、README、配置、页面、测试和资源文件中能确认的事实。

## 1. PRD

### 1.1 产品名称

doai。

### 1.2 产品目标

帮助 AI 新手和职场人士找到适合自己的 AI 学习路径，并把 AI 用到真实工作和生活里。

### 1.3 目标用户

已确认：

- AI 新手
- 职场人士
- 需要咨询或陪跑建议的用户
- 希望把 AI 用到岗位任务、项目实践或组织赋能中的用户

待确认：

- 是否有明确付费用户画像。
- 是否有企业客户、个人客户或课程学员的优先级区分。
- 咨询/陪跑的正式服务交付方式和价格。

### 1.4 核心用户路径

已确认页面路径：

- `/`：首页，展示项目定位、五个年级路线、问题入口、首批资源和留资入口。
- `/assessment`：AI 水平自测页，渲染 `AssessmentForm` 并接入评论区。
- `/routes`：五个年级路线页，展示阶段目标并引导到资源库对应年级。
- `/resources`：资源库页，按五个年级展示资源。
- `/resources/[id]`：资源详情页，基于资源 ID 静态生成。
- `/services`：咨询/陪跑页，展示服务方向和留资入口。
- `/cases`：案例页，展示可确认的案例卡片并接入评论区。

### 1.5 内容结构

资源字段由 `src/lib/resources.ts` 中 `Resource` 类型确认：

- `id`
- `grade`
- `title`
- `type`
- `audience`
- `problem`
- `reason`
- `outcome`
- `duration`
- `pricing`
- `url`
- `mainRoute`
- `summary`
- `details`
- `links`

资源分级由 `gradeCatalog` 确认：

- 一年级：小试牛刀
- 二年级：岗位重构
- 三年级：AI 工程师
- 四年级：组织/行业赋能
- 五年级：创造新时代

### 1.6 当前功能

- 首页展示五个年级成长路线和资源预览。
- 资源库按年级展示资源。
- 资源详情页展示适合人群、解决问题、推荐原因、学习产出、使用建议和外部链接。
- AI 水平自测表单在浏览器本地保存答案，稳定 key 为 `doai-assessment`。
- giscus 评论组件按 pathname 映射 discussion，并在缺少配置时展示待连接状态。
- 留资组件展示二维码、外部留资入口和咨询/陪跑说明。
- 构建前自动生成留资二维码。

### 1.7 当前不做或未发现

- 未发现后端 API。
- 未发现数据库。
- 未发现登录系统。
- 未发现资源后台管理页面。
- 未发现线上支付、订单或 CRM 集成。
- giscus 仓库参数、分类 ID 和线上 Discussions 是否已配置：待确认。

## 2. 技术文档

### 2.1 技术栈

- Next.js `16.2.9`
- React `19.2.7`
- TypeScript `6.0.3`
- Tailwind CSS `4.3.0`
- ESLint `9.39.4`
- `@giscus/react` `3.1.0`
- `lucide-react` `1.17.0`
- `qrcode` `1.5.4`

### 2.2 目录结构

- `src/app/`：Next App Router 页面、布局和全局样式。
- `src/components/`：业务组件和本地 UI 组件。
- `src/config/site.ts`：站点配置、giscus 配置、留资配置和 base path 工具。
- `src/lib/resources.ts`：资源类型、年级目录、资源读取与校验方法。
- `src/content/resources.json`：Next 应用资源数据源。
- `docs/`：课程内容、资源规划和项目上下文文档。
- `data/resources.json`：旧静态站资源数据镜像。
- `assets/`：旧静态站样式和脚本。
- `public/`：公开静态资源，包含留资二维码。
- `scripts/`：辅助脚本。
- `tests/`：结构与内容校验脚本。
- `.github/workflows/pages.yml`：GitHub Pages 发布工作流。

### 2.3 运行命令

从 `package.json` 确认：

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
npm run generate:qr
```

### 2.4 构建与静态导出

`next.config.ts` 确认：

- `output: "export"`
- `trailingSlash: true`
- `basePath` 来自 `NEXT_PUBLIC_BASE_PATH`
- `assetPrefix` 跟随 `basePath`
- `images.unoptimized: true`

GitHub Pages workflow 确认生产构建环境变量：

```text
NEXT_PUBLIC_BASE_PATH=/doai
```

### 2.5 环境变量

`.env.example` 确认：

- `NEXT_PUBLIC_BASE_PATH`
- `NEXT_PUBLIC_GISCUS_REPO`
- `NEXT_PUBLIC_GISCUS_REPO_ID`
- `NEXT_PUBLIC_GISCUS_CATEGORY`
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID`
- `NEXT_PUBLIC_LEAD_FORM_URL`
- `NEXT_PUBLIC_LEAD_QR_IMAGE`
- `NEXT_PUBLIC_LEAD_WECHAT_LABEL`

### 2.6 数据与状态

- 资源数据是 JSON 文件，不是数据库。
- 自测答案保存在浏览器本地 `localStorage`，未发现上传到服务端的逻辑。
- giscus 评论数据存储在 GitHub Discussions，前提是环境变量和 GitHub 仓库侧配置完成。
- 留资数据由外部链接承接，项目只负责展示入口。

### 2.7 验证方式

当前测试脚本：

- `tests/check-next-app.mjs`：校验 Next 应用结构、依赖、giscus、留资、自测、资源读取、主题和页面关键结构。
- `tests/check-site.mjs`：校验旧静态站骨架、导航、资源 JSON、旧脚本行为和 Pages workflow。

推荐修改后验证：

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

涉及前端显示时，还应手工或自动检查：

- 首页
- 自测页
- 五个年级页
- 资源库页
- 至少一个资源详情页
- 服务页
- 案例页
- 桌面与移动端视口
- 浏览器控制台错误

### 2.8 发布与回滚

发布路径已确认：

- 推送到 `main` 或 `master`
- GitHub Actions 执行 Pages workflow
- 发布 `out/`

回滚方式：待确认。现有文档曾提到可回退到上一个可用 commit 后重新推送触发 Pages 部署，但本次未执行线上回滚验证。

