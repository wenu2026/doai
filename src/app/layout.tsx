import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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
        <header className="sticky top-0 z-20 border-b border-border bg-background/92 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-foreground text-sm text-background">
                do
              </span>
              <span>doai</span>
            </Link>
            <nav className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 transition hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <span>doai：做 AI，真正用起来。</span>
            <span>内容在 GitHub 维护，评论由 giscus / GitHub Discussions 支持。</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
