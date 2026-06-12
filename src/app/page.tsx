import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ClipboardCheck,
  Code2,
  Network,
  Sparkles,
  Telescope,
  WandSparkles,
} from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getResources, gradeCatalog } from "@/lib/resources";

export default function HomePage() {
  const resources = getResources();
  const stageVisuals = [
    { Icon: WandSparkles, color: "bg-stage-1", ring: "ring-stage-1/25", label: "工具启蒙" },
    { Icon: BriefcaseBusiness, color: "bg-stage-2", ring: "ring-stage-2/25", label: "岗位落地" },
    { Icon: Code2, color: "bg-stage-3", ring: "ring-stage-3/25", label: "项目实践" },
    { Icon: Network, color: "bg-stage-4", ring: "ring-stage-4/25", label: "组织赋能" },
    { Icon: Telescope, color: "bg-stage-5", ring: "ring-stage-5/25", label: "前沿判断" },
  ];

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="flex flex-col justify-center gap-6">
          <Badge variant="primary" className="w-fit">
            开源 AI 学习路线图
          </Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              从 AI 小白开始，把 AI 用到真实问题里。
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              doai 帮你找到适合自己的学习路径，并通过工具、模板和项目，把 AI 能力落到工作与生活场景中。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/assessment" size="lg" variant="primary">
              先评估 AI 水平
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/resources" size="lg" variant="secondary">
              查看资源库
            </ButtonLink>
          </div>
        </div>
        <Card className="self-start overflow-hidden border-primary/18 bg-white/88">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle>五个年级成长路线</CardTitle>
              <Badge variant="warm">成长地图</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-3">
            {gradeCatalog.map((grade, index) => {
              const visual = stageVisuals[index];
              const resourceCount = resources.filter((resource) => resource.grade === grade.name).length;
              return (
              <ButtonLink
                key={grade.key}
                href={`/resources#grade-${grade.key}`}
                variant="ghost"
                className="group h-auto justify-start overflow-hidden border border-border bg-white/70 p-0 text-left shadow-sm shadow-border/20 hover:border-primary/35 hover:bg-white"
              >
                <span className={`flex min-h-24 w-20 shrink-0 items-center justify-center ${visual.color}`}>
                  <visual.Icon className="h-7 w-7 text-white" />
                </span>
                <span className="grid flex-1 gap-1 p-4">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold">{grade.name}</span>
                    <span className={`rounded-full bg-white px-2 py-0.5 text-xs text-muted-foreground ring-1 ${visual.ring}`}>
                      {visual.label}
                    </span>
                  </span>
                  <span className="block text-sm font-normal leading-6 text-muted-foreground">{grade.goal}</span>
                  <span className="text-xs font-normal text-primary">
                    {resourceCount > 0 ? `${resourceCount} 条资源可读` : "资源正在整理"}
                  </span>
                </span>
              </ButtonLink>
              );
            })}
          </CardContent>
        </Card>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-3">
          {[
            ["不知道怎么开始学 AI", "从一年级主线开始，先做出可见的小成果。", BookOpen],
            ["收藏很多资料但用不起来", "每条资源都写清适合谁、解决什么问题和最终产出。", ClipboardCheck],
            ["想把 AI 变成真实成果", "从岗位任务或小项目切入，形成可复用工作流。", Sparkles],
          ].map(([title, desc, Icon]) => (
            <Card key={title as string}>
              <CardHeader>
                <Icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{title as string}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">{desc as string}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1fr_420px]">
        <div className="space-y-5">
          <div>
            <Badge variant="warm">首批资源</Badge>
            <h2 className="mt-3 text-3xl font-semibold">少而精，先跑通主路线</h2>
          </div>
          <div className="grid gap-4">
            {resources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant={resource.mainRoute ? "primary" : "outline"}>
                      {resource.mainRoute ? "主路线" : "扩展资源"}
                    </Badge>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-muted-foreground">{resource.summary || resource.reason}</p>
                  <ButtonLink href={`/resources/${resource.id}`} variant="secondary">
                    查看使用建议
                  </ButtonLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <LeadCapture />
      </section>
    </main>
  );
}
