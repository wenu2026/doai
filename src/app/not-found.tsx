import { ButtonLink } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">页面不存在</h1>
      <p className="mt-3 text-muted-foreground">这条内容可能还没有整理进资源库。</p>
      <ButtonLink href="/resources" className="mt-6" variant="primary">
        返回资源库
      </ButtonLink>
    </main>
  );
}
