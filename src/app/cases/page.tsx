import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cases = [
  {
    title: "从收藏资料到做出第一个应用原型",
    desc: "先选一个真实想法，再用 AI 辅助拆需求、画页面、实现功能和准备演示。",
  },
  {
    title: "把 AI 接入岗位任务",
    desc: "围绕固定工作流沉淀提示词、模板和检查清单，让 AI 输出进入可复用流程。",
  },
];

export default function CasesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 max-w-3xl space-y-3">
        <Badge variant="primary">案例故事</Badge>
        <h1 className="text-4xl font-semibold">真实成果比资料数量更重要</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          案例页用于沉淀学习路线、咨询和陪跑中出现的可复用路径。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">{item.desc}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
