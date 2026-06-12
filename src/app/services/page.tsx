import { LeadCapture } from "@/components/lead-capture";
import { GiscusComments } from "@/components/giscus-comments";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 max-w-3xl space-y-3">
        <Badge variant="primary">2026 年 6-8 月首期内测</Badge>
        <h1 className="text-4xl font-semibold">先体验，后付费。</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          先交付价值，再由用户按建议价后付费。名额小，是为了保证每个用户都有真实输出。
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>AI 学习路线咨询</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p className="text-2xl font-semibold text-foreground">建议价 99 元</p>
            <p>限 15 位。交付个人 AI 学习/应用路线图，帮助你判断从哪里开始、先做什么。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>一对一 AI 赋能陪跑</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p className="text-2xl font-semibold text-foreground">建议价 699 元</p>
            <p>限 5 位。4 周完成 1 个主项目 + 3 个小工具，按你的真实场景定制。</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <LeadCapture />
      </div>
      <GiscusComments />
    </main>
  );
}
