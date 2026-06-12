export const siteConfig = {
  name: "doai",
  title: "doai - 做 AI，真正用起来",
  description: "面向 AI 小白和职场人士的 AI 学习路线图，帮助用户找到学习路径，并把 AI 用到真实工作和生活里。",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  giscus: {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "",
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "",
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "Announcements",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "",
  },
  leadCapture: {
    formUrl: process.env.NEXT_PUBLIC_LEAD_FORM_URL || "https://github.com/yuhui/doai/discussions",
    qrImage: process.env.NEXT_PUBLIC_LEAD_QR_IMAGE || "/lead-qr.svg",
    label: process.env.NEXT_PUBLIC_LEAD_WECHAT_LABEL || "扫码填写咨询/陪跑需求",
  },
};

export const giscusConfigured = Boolean(
  siteConfig.giscus.repo &&
    siteConfig.giscus.repoId &&
    siteConfig.giscus.category &&
    siteConfig.giscus.categoryId,
);

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${siteConfig.basePath}${path}`;
}
