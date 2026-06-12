import { BriefcaseBusiness, Code2, Network, Telescope, WandSparkles } from "lucide-react";
import { GiscusComments } from "@/components/giscus-comments";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gradeCatalog } from "@/lib/resources";

const outcomes = [
  "能用 AI 工具完成日常任务。",
  "能把 AI 融入真实工作流程。",
  "能用 AI 完成一个项目或工作流。",
  "能设计团队或行业 AI 赋能方案。",
  "能形成自己的 AI 前沿判断框架。",
];

const stageVisuals = [
  { Icon: WandSparkles, color: "bg-stage-1", label: "工具启蒙" },
  { Icon: BriefcaseBusiness, color: "bg-stage-2", label: "岗位落地" },
  { Icon: Code2, color: "bg-stage-3", label: "项目实践" },
  { Icon: Network, color: "bg-stage-4", label: "组织赋能" },
  { Icon: Telescope, color: "bg-stage-5", label: "前沿判断" },
];

export default function RoutesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 max-w-3xl space-y-3">
        <Badge variant="primary">路线图</Badge>
        <h1 className="text-4xl font-semibold">五个年级，不是资料堆砌</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          每个年级对应一个阶段成果。你可以从当前水平进入，也可以按目标倒推需要补的能力。
        </p>
      </div>
      <div className="grid gap-4">
        {gradeCatalog.map((grade, index) => {
          const visual = stageVisuals[index];
          return (
          <Card key={grade.key} className="overflow-hidden bg-white/88">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-md ${visual.color}`}>
                  <visual.Icon className="h-5 w-5 text-white" />
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{grade.shortName}</Badge>
                  <Badge variant="warm">{visual.label}</Badge>
                </div>
              </div>
              <CardTitle>{grade.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm leading-6 text-muted-foreground md:grid-cols-[1fr_1fr_auto] md:items-center">
              <p>{grade.goal}</p>
              <p>{outcomes[index]}</p>
              <ButtonLink href={`/resources#grade-${grade.key}`} variant="secondary">
                查看资源
              </ButtonLink>
            </CardContent>
          </Card>
          );
        })}
      </div>
      <GiscusComments />
    </main>
  );
}
