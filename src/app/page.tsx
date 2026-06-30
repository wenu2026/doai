import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Compass,
  Network,
  Sparkles,
  Telescope,
  WandSparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getResources, gradeCatalog } from "@/lib/resources";

const stageVisuals = [
  { Icon: WandSparkles, color: "bg-stage-1", label: "工具启蒙" },
  { Icon: BriefcaseBusiness, color: "bg-stage-2", label: "岗位落地" },
  { Icon: Code2, color: "bg-stage-3", label: "项目实践" },
  { Icon: Network, color: "bg-stage-4", label: "组织赋能" },
  { Icon: Telescope, color: "bg-stage-5", label: "前沿判断" },
];

const problemEntries = [
  { q: "不知道怎么学 AI", href: "/routes#grade-1", hint: "从一年级主线开始" },
  { q: "收藏很多资料但用不起来", href: "/resources?resource=g3-easy-vibe", hint: "先筛出一条主线" },
  { q: "想把 AI 用到工作/生活", href: "/routes#grade-2", hint: "从岗位流程切入" },
  { q: "想做出一个 AI 项目", href: "/resources?resource=g3-easy-vibe", hint: "进入项目实践" },
  { q: "想长期跟上 AI", href: "/routes#grade-5", hint: "建立判断框架" },
];

const outcomes = [
  {
    title: "先做出小成果",
    desc: "从日常任务开始，先把 AI 从会聊天变成能帮忙。",
    Icon: BookOpen,
    color: "bg-stage-1",
  },
  {
    title: "再改造真实流程",
    desc: "把提示词、模板和工具沉淀到岗位任务里。",
    Icon: ClipboardCheck,
    color: "bg-stage-2",
  },
  {
    title: "最后形成作品",
    desc: "用项目、试点或画布验证 AI 能力是否真的落地。",
    Icon: Sparkles,
    color: "bg-stage-3",
  },
];

export default function HomePage() {
  const resources = getResources();
  const mainRouteResources = resources.filter((resource) => resource.mainRoute);
  const featuredResources = (mainRouteResources.length >= 4 ? mainRouteResources : resources).slice(0, 4);

  return (
    <main className="overflow-x-hidden">
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <Badge variant="primary" className="w-fit">
              开源 AI 学习路线图
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
                从 AI 小白开始，把 AI 用到真实问题里。
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                doai 帮你按阶段选择工具、模板和项目，不把学习变成资料堆砌，而是一步步形成可见成果。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/assessment" size="lg" variant="primary">
                先评估 AI 水平
                <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/resources" size="lg" variant="secondary">
                浏览资源库
              </ButtonLink>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {["五个年级路线", `${resources.length} 条首批资源`].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-sage" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-4 shadow-sm md:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">成长地图</p>
                <h2 className="text-xl font-extrabold tracking-tight">五个年级，一条主线</h2>
              </div>
              <Compass className="h-6 w-6 text-primary" />
            </div>
            <div className="grid gap-2">
              {gradeCatalog.map((grade, index) => {
                const visual = stageVisuals[index];
                const resourceCount = resources.filter((resource) => resource.grade === grade.name).length;
                return (
                  <ButtonLink
                    key={grade.key}
                    href={`/resources#grade-${grade.key}`}
                    variant="ghost"
                    className="group h-auto justify-start gap-3 rounded-lg border border-border/70 bg-background p-3 text-left hover:border-primary/30 hover:bg-primary-light/25"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${visual.color} shadow-sm`}
                    >
                      <visual.Icon className="h-5 w-5 text-white" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold">
                        {grade.shortName}
                        <span className="text-xs font-semibold text-muted-foreground">{visual.label}</span>
                      </span>
                      <span className="line-clamp-2 text-sm leading-6 text-muted-foreground">{grade.goal}</span>
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-primary">{resourceCount} 条</span>
                  </ButtonLink>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/45">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge variant="warm" className="mb-3">
                从问题进入
              </Badge>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">不用先理解完整体系</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">
              先选一个最接近的卡点，进入对应路线，再按资源建议行动。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            {problemEntries.map(({ q, href, hint }) => (
              <a
                key={q}
                href={href}
                className="group flex min-h-28 flex-col justify-between rounded-lg border border-border bg-surface p-3 shadow-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-md sm:p-4"
              >
                <strong className="text-base leading-7">{q}</strong>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {hint}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge variant="primary" className="mb-3">
                路线速览
              </Badge>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">每个年级对应一个阶段成果</h2>
            </div>
            <ButtonLink href="/routes" variant="secondary" size="sm">
              查看完整路线
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
            {gradeCatalog.map((grade, index) => {
              const visual = stageVisuals[index];
              return (
                <a
                  key={grade.key}
                  href={`/routes#grade-${grade.key}`}
                  className="rounded-lg border border-border bg-surface p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                >
                  <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${visual.color}`}>
                    <visual.Icon className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="text-base font-extrabold">{grade.shortName}</h3>
                  <p className="mt-1 text-sm font-semibold text-foreground">{grade.theme}</p>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{grade.goal}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/35">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-3 md:py-12">
          {outcomes.map(({ title, desc, Icon, color }) => (
            <div key={title} className="rounded-lg border border-border bg-surface p-5 shadow-sm">
              <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
                <Icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge variant="warm" className="mb-3">
                精选资源
              </Badge>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">先看几条主路线资源</h2>
            </div>
            <ButtonLink href="/resources" variant="secondary" size="sm">
              查看资源库
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredResources.map((resource) => (
              <article
                key={resource.id}
                className="flex min-h-56 flex-col rounded-lg border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  <Badge variant={resource.mainRoute ? "primary" : "outline"}>
                    {resource.mainRoute ? "主路线" : "扩展资源"}
                  </Badge>
                  <Badge variant="outline">{resource.type}</Badge>
                </div>
                <h3 className="text-lg font-bold leading-7">{resource.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted-foreground">
                  {resource.summary || resource.reason}
                </p>
                <div className="mt-auto pt-5">
                  <ButtonLink href={`/resources/${resource.id}`} variant="secondary" size="sm">
                    查看使用建议
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
