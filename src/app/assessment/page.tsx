import { AssessmentForm } from "@/components/assessment-form";
import { Badge } from "@/components/ui/badge";

export default function AssessmentPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="mb-10 max-w-3xl space-y-4 animate-fade-up">
        <Badge variant="sage">不限定标准</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">先评估你的 AI 水平</h1>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          这不是考试，而是帮你判断从哪条路线开始。自测结果会先保存在本机浏览器里。
        </p>
      </div>
      <AssessmentForm />
    </main>
  );
}
