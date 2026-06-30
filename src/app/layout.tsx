import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
};

const navItems = [
  { href: "/", label: "首页" },
  { href: "/assessment", label: "AI 水平自测" },
  { href: "/routes", label: "五个年级" },
  { href: "/resources", label: "资源库" },
  { href: "/services", label: "咨询/陪跑" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-20 border-b border-border bg-background/88 backdrop-blur-xl saturate-150">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="group flex items-center gap-3 font-bold text-lg tracking-tight">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background text-sm font-extrabold shadow-lg shadow-foreground/10 transition-all group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/15">
                do
              </span>
              <span className="hidden sm:inline">doai</span>
            </Link>
            <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 transition-all hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-3 text-sm font-medium text-muted-foreground md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg border border-border bg-surface px-3 py-2 transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="border-t border-border bg-muted/50">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-foreground text-background text-xs font-extrabold">
                do
              </span>
              <span>doai：做 AI，真正用起来。</span>
            </div>
            <span>内容由 GitHub 文件维护，页面保持轻量阅读体验。</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
