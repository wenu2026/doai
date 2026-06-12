"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { CheckCircle2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const storageKey = "doai-assessment";

type Answers = {
  role: string;
  currentUse: string;
  goal: string;
  bottleneck: string;
  weeklyTime: string;
};

const defaultAnswers: Answers = {
  role: "",
  currentUse: "",
  goal: "",
  bottleneck: "",
  weeklyTime: "",
};

type SavedAssessment = {
  answers: Answers;
  savedAt: string;
};

function getStorageSnapshot() {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(storageKey) || "";
}

function parseSavedAssessment(snapshot: string): SavedAssessment | null {
  if (!snapshot) return null;
  try {
    const parsed = JSON.parse(snapshot) as { answers?: Answers; savedAt?: string };
    return {
      answers: { ...defaultAnswers, ...parsed.answers },
      savedAt: parsed.savedAt || "",
    };
  } catch {
    return null;
  }
}

function subscribeToAssessment(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("doai-assessment-saved", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("doai-assessment-saved", callback);
  };
}

const options = {
  role: ["职场新人", "业务骨干", "产品/运营", "技术/数据", "管理者", "自由职业者"],
  currentUse: ["基本没用过", "偶尔问答", "能完成日常任务", "已经接入工作流", "能做项目或自动化"],
  goal: ["开始系统学习", "提升岗位效率", "做出 AI 小工具", "设计团队方案", "跟踪前沿趋势"],
  bottleneck: ["不知道从哪里开始", "资料太多用不起来", "缺少真实项目", "缺少工程化方法", "缺少复盘和陪跑"],
  weeklyTime: ["每周 1 小时以内", "每周 2-3 小时", "每周 4-6 小时", "每周 7 小时以上"],
};

function scoreAnswer(answers: Answers) {
  const useScore = Math.max(options.currentUse.indexOf(answers.currentUse), 0);
  const goalScore = Math.max(options.goal.indexOf(answers.goal), 0);
  const timeScore = Math.max(options.weeklyTime.indexOf(answers.weeklyTime), 0);
  return useScore * 2 + goalScore + timeScore;
}

function getRecommendation(answers: Answers) {
  const score = scoreAnswer(answers);
  if (!answers.currentUse || !answers.goal) {
    return {
      level: "先完成自测",
      route: "选完当前状态和目标后，会生成建议路线。",
    };
  }
  if (score <= 4) {
    return {
      level: "一年级：小试牛刀",
      route: "先用少量工具和模板完成可见的小成果，不急着追求完整体系。",
    };
  }
  if (score <= 8) {
    return {
      level: "二年级：岗位重构",
      route: "围绕一个真实岗位任务，把 AI 接入资料整理、写作、分析或复盘流程。",
    };
  }
  if (score <= 12) {
    return {
      level: "三年级：AI 工程师",
      route: "选一个具体想法，用 AI 辅助完成需求、页面、数据和部署的完整链路。",
    };
  }
  if (score <= 15) {
    return {
      level: "四年级：组织/行业赋能",
      route: "把个人经验整理成团队可复用流程，设计角色分工、工具边界和验收标准。",
    };
  }
  return {
    level: "五年级：创造新时代",
    route: "建立前沿跟踪和判断框架，形成自己的行业观点与长期研究主题。",
  };
}

export function AssessmentForm() {
  const [answers, setAnswers] = useState<Answers>(defaultAnswers);
  const [savedAt, setSavedAt] = useState<string>("");
  const savedSnapshot = useSyncExternalStore(subscribeToAssessment, getStorageSnapshot, () => "");
  const savedAssessment = parseSavedAssessment(savedSnapshot);
  const visibleAnswers = Object.values(answers).some(Boolean) ? answers : savedAssessment?.answers || answers;
  const visibleSavedAt = savedAt || savedAssessment?.savedAt || "";

  const recommendation = useMemo(() => getRecommendation(visibleAnswers), [visibleAnswers]);

  function updateAnswer(key: keyof Answers, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function saveAssessment() {
    const timestamp = new Date().toLocaleString("zh-CN", { hour12: false });
    window.localStorage.setItem(storageKey, JSON.stringify({ answers, savedAt: timestamp }));
    window.dispatchEvent(new Event("doai-assessment-saved"));
    setSavedAt(timestamp);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <Card>
        <CardHeader>
          <CardTitle>AI 水平自测</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5">
          {([
            ["role", "你现在更接近哪类角色？"],
            ["currentUse", "你目前怎样使用 AI？"],
            ["goal", "你接下来最想达成什么？"],
            ["bottleneck", "你现在最卡在哪里？"],
            ["weeklyTime", "你每周能投入多少时间？"],
          ] as Array<[keyof Answers, string]>).map(([key, label]) => (
            <label key={key} className="grid gap-2 text-sm font-medium">
              {label}
              <select
                value={answers[key]}
                onChange={(event) => updateAnswer(key, event.target.value)}
                className="min-h-11 rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-foreground"
              >
                <option value="">请选择</option>
                {options[key].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <Button onClick={saveAssessment} variant="primary" className="justify-self-start">
            <Save className="h-4 w-4" />
            保存自测信息
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{recommendation.level}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
          <p>{recommendation.route}</p>
          <div className="rounded-md bg-muted p-4">
            <p className="font-medium text-foreground">当前保存方式</p>
            <p>自测信息会先保存在这台设备的浏览器里，后续可升级为登录后跨设备保存。</p>
          </div>
          {visibleSavedAt ? (
            <p className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="h-4 w-4" />
              已保存：{visibleSavedAt}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
