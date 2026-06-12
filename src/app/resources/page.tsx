import Link from "next/link";
import { GiscusComments } from "@/components/giscus-comments";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getResourcesByGrade, gradeCatalog } from "@/lib/resources";

export default function ResourcesPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[280px_1fr]">
      <aside className="space-y-3 lg:sticky lg:top-20 lg:self-start">
        <h1 className="text-2xl font-semibold">资源库</h1>
        <p className="text-sm leading-6 text-muted-foreground">资源继续用 GitHub 文件维护，页面只负责读取和展示。</p>
        <nav className="grid gap-2">
          {gradeCatalog.map((grade) => (
            <Link
              key={grade.key}
              href={`#grade-${grade.key}`}
              className="rounded-md border border-border px-3 py-3 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <span className="font-semibold">{grade.name}</span>
              <span className="block leading-6">{grade.theme}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <section className="space-y-10">
        {gradeCatalog.map((grade) => {
          const resources = getResourcesByGrade(grade.name);
          return (
            <section key={grade.key} id={`grade-${grade.key}`} className="scroll-mt-24">
              <div className="mb-6 space-y-2">
                <Badge variant="primary">{grade.shortName}</Badge>
                <h2 className="text-3xl font-semibold">{grade.name}</h2>
                <p className="text-muted-foreground">{grade.goal}</p>
              </div>
              <div className="grid gap-4">
                {resources.length > 0 ? (
                  resources.map((resource) => (
                    <Card key={resource.id}>
                      <CardHeader>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant={resource.mainRoute ? "primary" : "outline"}>
                            {resource.mainRoute ? "主路线" : "扩展资源"}
                          </Badge>
                          <Badge variant="outline">
                            {resource.duration} / {resource.pricing}
                          </Badge>
                        </div>
                        <CardTitle>{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm leading-6 text-muted-foreground">{resource.summary || resource.reason}</p>
                        <ButtonLink href={`/resources/${resource.id}`} variant="secondary">
                          打开内容页
                        </ButtonLink>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>{grade.shortName}资源正在整理</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      后续会按“主路线严选 + 扩展资源池”的方式补充，每条资源都会提供清晰说明和可点击链接。
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>
          );
        })}
        <GiscusComments />
      </section>
    </main>
  );
}
