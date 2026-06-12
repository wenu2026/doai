import rawResources from "../content/resources.json";

export type GradeKey = "1" | "2" | "3" | "4" | "5";

export type Resource = {
  id: string;
  grade: string;
  title: string;
  type: string;
  audience: string;
  problem: string;
  reason: string;
  outcome: string;
  duration: string;
  pricing: string;
  url: string;
  mainRoute: boolean;
  summary?: string;
  details?: string[];
  links?: Array<{
    label: string;
    url: string;
  }>;
};

export const gradeCatalog: Array<{
  key: GradeKey;
  name: string;
  shortName: string;
  theme: string;
  goal: string;
}> = [
  {
    key: "1",
    name: "一年级：小试牛刀",
    shortName: "一年级",
    theme: "小试牛刀",
    goal: "会选工具、会用模板，先完成可见的小成果。",
  },
  {
    key: "2",
    name: "二年级：岗位重构",
    shortName: "二年级",
    theme: "岗位重构",
    goal: "把 AI 接入真实任务，重构个人工作模式。",
  },
  {
    key: "3",
    name: "三年级：AI 工程师",
    shortName: "三年级",
    theme: "AI 工程师",
    goal: "用 AI 做项目、搭工作流、组织上下文。",
  },
  {
    key: "4",
    name: "四年级：组织/行业赋能",
    shortName: "四年级",
    theme: "组织/行业赋能",
    goal: "面向团队、部门或行业设计 AI 赋能方案。",
  },
  {
    key: "5",
    name: "五年级：创造新时代",
    shortName: "五年级",
    theme: "创造新时代",
    goal: "跟踪前沿人物、论文和产业观点，形成判断框架。",
  },
];

function isResource(value: unknown): value is Resource {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<Record<keyof Resource, unknown>>;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.grade === "string" &&
    typeof candidate.title === "string" &&
    typeof candidate.type === "string" &&
    typeof candidate.audience === "string" &&
    typeof candidate.problem === "string" &&
    typeof candidate.reason === "string" &&
    typeof candidate.outcome === "string" &&
    typeof candidate.duration === "string" &&
    typeof candidate.pricing === "string" &&
    typeof candidate.url === "string" &&
    typeof candidate.mainRoute === "boolean"
  );
}

export function getResources(): Resource[] {
  if (!Array.isArray(rawResources)) {
    throw new Error("src/content/resources.json must export an array");
  }

  return rawResources.map((resource, index) => {
    if (!isResource(resource)) {
      throw new Error(`Invalid resource at index ${index}`);
    }
    return resource;
  });
}

export function getResource(id: string) {
  return getResources().find((resource) => resource.id === id);
}

export function getResourcesByGrade(gradeName: string) {
  return getResources().filter((resource) => resource.grade === gradeName);
}
