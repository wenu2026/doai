import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="mb-10 max-w-3xl space-y-4 animate-fade-up">
        <Badge variant="primary">2026 年 6-8 月首期内测</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">先体验，后付费。</h1>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          先交付价值，再由用户按建议价后付费。名额小，是为了保证每个用户都有真实输出。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 stagger-1">
        <div className="group rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg hover:border-primary/30">
          <Badge variant="primary" className="mb-4">限 15 位</Badge>
          <h2 className="text-2xl font-extrabold mb-3">AI 学习路线咨询</h2>
          <p className="text-3xl font-black text-primary mb-5">建议价 99 元</p>
          <p className="text-muted-foreground leading-relaxed">
            交付个人 AI 学习/应用路线图，帮助你判断从哪里开始、先做什么。
          </p>
        </div>

        <div className="group rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg hover:border-primary/30">
          <Badge variant="primary" className="mb-4">限 5 位</Badge>
          <h2 className="text-2xl font-extrabold mb-3">一对一 AI 赋能陪跑</h2>
          <p className="text-3xl font-black text-primary mb-5">建议价 699 元</p>
          <p className="text-muted-foreground leading-relaxed">
            4 周完成 1 个主项目 + 3 个小工具，按你的真实场景定制。
          </p>
        </div>
      </div>
    </main>
  );
}
