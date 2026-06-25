# doai

doai 的含义是“做 AI”。这是一个面向 AI 小白和职场人士的开源 AI 学习路线图项目，目标是帮助用户找到适合自己的学习路径，并把 AI 用到真实工作和生活里。

## 当前形态

项目已从纯静态 HTML 迁移为 Next.js 静态导出应用：

- 公开内容无需登录即可查阅和使用。
- 每篇内容可以接入 giscus 评论，用户通过 GitHub 登录评论。
- 咨询/陪跑线索通过二维码或链接留资。
- AI 水平自测已做成可交互问卷，并先保存在用户本机浏览器。
- 资源后台不单独做管理页面，继续在 GitHub 文件里维护。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui 风格的本地组件
- giscus / GitHub Discussions 评论
- GitHub Pages 静态发布

## 本地开发

```bash
npm install
npm run dev
```

本地校验：

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

兼容旧静态站骨架的校验仍保留：

```bash
node tests/check-site.mjs
```

新的 Next 应用能力校验：

```bash
node tests/check-next-app.mjs
```

## giscus 评论配置

giscus 使用 GitHub Discussions 存储评论，不需要自建数据库。启用前需要：

1. 仓库为 public。
2. 仓库开启 GitHub Discussions。
3. 安装 giscus GitHub app。
4. 在 <https://giscus.app/> 生成仓库和分类参数。

复制 `.env.example` 为 `.env.local`，填写：

```bash
NEXT_PUBLIC_GISCUS_REPO=owner/repo
NEXT_PUBLIC_GISCUS_REPO_ID=...
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=...
```

当前实现使用 `pathname` 映射评论。资源详情页是独立 URL，因此每篇资源内容会对应独立 discussion。

## 咨询/陪跑二维码

默认二维码由 `scripts/generate-lead-qr.mjs` 根据 `NEXT_PUBLIC_LEAD_FORM_URL` 生成到 `public/lead-qr.svg`。

```bash
NEXT_PUBLIC_LEAD_FORM_URL=https://example.com/your-form
npm run generate:qr
```

二维码适合指向企微活码、腾讯问卷、飞书表单、金数据或其他留资入口。网站只负责展示入口，线索管理留在外部工具里。

## 资源维护方式

资源数据源在：

```text
src/content/resources.json
```

每条资源至少维护：

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

修改资源后运行：

```bash
npm run test
npm run build
```

## 发布

`.github/workflows/pages.yml` 会在推送到 `main` 或 `master` 后：

1. 安装 npm 依赖。
2. 运行 `npm run build`。
3. 发布 Next 静态导出的 `out/` 目录到 GitHub Pages。

如果不是发布到 `https://<owner>.github.io/doai/` 这种仓库路径，需要调整 workflow 里的：

```yaml
NEXT_PUBLIC_BASE_PATH: /doai
```

自定义域名通常应设为空。

## 线上访问地址

当前对外使用 GitHub Pages 免费地址：

```text
https://wenu2026.github.io/doai/
```

腾讯云 Lighthouse 继续作为备用部署目标，使用站点根路径：

```text
http://124.221.141.173/
```

如果后续要使用自定义域名，需要先拥有这个域名，再把 DNS A 记录指向腾讯云服务器：

```text
124.221.141.173
```
