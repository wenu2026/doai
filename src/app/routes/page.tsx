import { BriefcaseBusiness, Code2, Network, Telescope, WandSparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
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
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="mb-10 max-w-3xl space-y-4 animate-fade-up">
        <Badge variant="primary">路线图</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">五个年级，不是资料堆砌</h1>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          每个年级对应一个阶段成果。你可以从当前水平进入，也可以按目标倒推需要补的能力。
        </p>
      </div>
      <div className="grid gap-5 stagger-1">
        {gradeCatalog.map((grade, index) => {
          const visual = stageVisuals[index];
          return (
            <div
              key={grade.key}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-x-0.5 hover:shadow-md hover:border-primary/25 md:p-7"
            >
              <div className="grid gap-5 md:grid-cols-[auto_1fr_1fr_auto] md:items-center">
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${visual.color} shadow-lg group-hover:scale-105 transition-transform`}>
                  <visual.Icon className="h-7 w-7 text-white" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="outline">{grade.shortName}</Badge>
                    <Badge variant="warm">{visual.label}</Badge>
                  </div>
                  <h2 className="text-xl font-bold">{grade.name}</h2>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{grade.goal}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">阶段成果：</span>
                    {outcomes[index]}
                  </p>
                </div>
                <ButtonLink href={`/resources#grade-${grade.key}`} variant="secondary" size="sm">
                  查看资源 →
                </ButtonLink>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12">
      </div>
    </main>
  );
}
