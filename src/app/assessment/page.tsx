import { AssessmentForm } from "@/components/assessment-form";
import { GiscusComments } from "@/components/giscus-comments";

export default function AssessmentPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 max-w-3xl space-y-3">
        <h1 className="text-4xl font-semibold">先评估你的 AI 水平</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          这不是考试，而是帮你判断从哪条路线开始。自测结果会先保存在本机浏览器里。
        </p>
      </div>
      <AssessmentForm />
      <GiscusComments />
    </main>
  );
}
