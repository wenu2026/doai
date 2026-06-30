import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { gradeCatalog } from "@/lib/resources";

export default function ResourcesPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:py-14 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start animate-fade-up">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">资源库</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            资源内容仍由 GitHub 文件维护，当前页面只保留五个年级的路线入口。
          </p>
        </div>
        <nav className="grid gap-2">
          {gradeCatalog.map((grade) => (
            <Link
              key={grade.key}
              href={`#grade-${grade.key}`}
              className="rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-all hover:border-primary/30 hover:bg-primary-light/10 hover:text-primary"
            >
              <span className="font-bold">{grade.shortName}</span>
              <span className="block leading-snug text-muted-foreground">{grade.theme}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <section className="space-y-8">
        {gradeCatalog.map((grade) => (
          <section
            key={grade.key}
            id={`grade-${grade.key}`}
            className="scroll-mt-24 rounded-xl border border-border bg-surface p-6 shadow-sm"
          >
            <Badge variant="primary">{grade.shortName}</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight">{grade.name}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{grade.goal}</p>
          </section>
        ))}
      </section>
    </main>
  );
}