import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getResourcesByGrade, gradeCatalog } from "@/lib/resources";

const hiddenResourceIds = new Set([
  "g1-seven-day-ai-task-pack",
  "g2-personal-ai-workbench-checklist",
  "g2-role-workflow-review-template",
  "g3-idea-to-demo-ai-project",
  "g4-team-ai-enablement-canvas",
  "g4-organization-ai-use-case-inventory",
  "g4-ai-pilot-retrospective-template",
  "g5-ai-frontier-reading-framework",
]);

export default function ResourcesPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:py-14 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start animate-fade-up">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">资源库</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            资源继续由 GitHub 文件维护，当前页面隐藏截图中指定的资源卡片。
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
      <section className="space-y-12">
        {gradeCatalog.map((grade) => {
          const resources = getResourcesByGrade(grade.name).filter((resource) => !hiddenResourceIds.has(resource.id));
          return (
            <section key={grade.key} id={`grade-${grade.key}`} className="scroll-mt-24">
              <div className="mb-6 space-y-2">
                <Badge variant="primary">{grade.shortName}</Badge>
                <h2 className="text-3xl font-extrabold tracking-tight">{grade.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{grade.goal}</p>
              </div>
              <div className="grid gap-4 stagger-1">
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
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {resource.summary || resource.reason}
                        </p>
                        <ButtonLink href={`/resources/${resource.id}`} variant="secondary" size="sm">
                          打开内容页
                          <ArrowRight className="h-4 w-4" />
                        </ButtonLink>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>{grade.shortName}资源暂不展示</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm leading-relaxed text-muted-foreground">
                      该年级当前可见资源已按截图要求隐藏，后续补充新资源后会继续展示。
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}