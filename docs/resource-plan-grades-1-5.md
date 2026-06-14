# doai 1-5 年级资源规划

更新时间：2026-06-14

## 规划前提

doai 的目标不是做“大而全的 AI 资料导航”，而是帮助 AI 小白和职场人士找到适合自己的路径，并把 AI 用到真实工作和生活里。资源库应坚持“主路线严选 + 扩展资源池”：每个年级先放 1 条主路线资源，再配 3-6 条补充资源；每条资源都要回答适合谁、解决什么问题、最终产出是什么。

中文资源优先；英文资源只有在内容质量、权威性或前沿性明显更强时才放入，并为用户提供中文导读。

## 资源筛选标准

- 可执行：用户看完能完成一个任务、模板、工作流、项目或判断框架。
- 可维护：链接稳定，优先官方文档、开源课程、长期更新的报告或社区。
- 少而精：每个年级首批不超过 6 条，避免让用户再次陷入资料焦虑。
- 外部可用，内部消化：外部资源只作为原始材料，doai 页面需要写清楚学习顺序、取舍和产出。
- 中文优先：国内工具、中文教程、中文案例优先；英文资料需配中文摘要和阅读重点。

## 一年级：小试牛刀

目标：会选工具、会用模板，先完成可见的小成果。

首批建议放 5 条资源：

| 资源 | 类型 | 是否主路线 | 放入内容 | 最优获取路径 |
| --- | --- | --- | --- | --- |
| doai 7 天 AI 日常任务包 | 自建模板包 | 是 | 每天一个任务：问答、改写、总结、表格整理、长文档提炼、图片理解、学习计划。每个任务提供“输入材料、提示词、验收标准”。 | doai 自建 Markdown/页面；外部工具只作为执行入口。 |
| 常用 AI 助手入门清单 | 工具入口 | 否 | ChatGPT、千问、豆包、Kimi、腾讯元宝、DeepSeek、秘塔 AI 搜索分别适合什么任务。重点是“什么时候用哪个”，不是功能罗列。 | 官方入口：千问 https://www.qianwen.com/；Kimi https://www.kimi.com/；腾讯元宝 https://yuanbao.tencent.com/；秘塔 https://metaso.cn/。 |
| 提示词基础：目标、上下文、格式、例子 | 中文教程 | 否 | 只摘取提示词要素、通用技巧、示例三部分，适合零基础用户。 | Prompt Engineering Guide 中文版：https://www.promptingguide.ai/zh。 |
| OpenAI Prompt Engineering 官方指南 | 英文/官方 | 否 | 作为“权威补充”，只引用清晰指令、分解任务、提供示例、用外部工具四类原则。 | OpenAI 官方文档：https://platform.openai.com/docs/guides/prompt-engineering。 |
| AI 搜索与事实核验入门 | 工具实践 | 否 | 用秘塔/Perplexity/普通搜索对比同一问题，教用户保留来源、交叉验证、区分事实与建议。 | 中文优先用秘塔 AI 搜索 https://metaso.cn/；英文补充 Perplexity https://www.perplexity.ai/。 |

一年级页面应避免“模型原理”“大模型发展史”“复杂 Prompt 技巧”。用户第一周只需要形成 3 个习惯：说清目标、给足上下文、检查输出。

## 二年级：岗位重构

目标：把 AI 接入真实任务，重构个人工作模式。

首批建议放 6 条资源：

| 资源 | 类型 | 是否主路线 | 放入内容 | 最优获取路径 |
| --- | --- | --- | --- | --- |
| 个人 AI 工作台搭建清单 | 自建清单 | 是 | 围绕一个岗位任务建立“资料入口、提示词模板、输出格式、复核清单、沉淀位置”。适合运营、销售、市场、行政、学习型用户。 | doai 自建页面，配可复制模板。 |
| 长文档阅读与资料整理：Kimi 实战 | 工具实践 | 否 | 合同、报告、会议纪要、课程资料的上传、提问、提纲、对比、待办提取。 | Kimi 官方入口：https://www.kimi.com/。 |
| AI 搜索做调研：从问题到结论 | 工具实践 | 否 | 用 AI 搜索做竞品调研、学习资料整理、事实核验和来源追踪。 | 秘塔 AI 搜索：https://metaso.cn/；Perplexity 作为英文补充。 |
| 扣子 Coze：做第一个岗位助手 | 智能体工具 | 否 | 创建一个简单 Agent：角色设定、知识库、插件/工作流、测试问题、发布边界。 | 扣子官方文档：https://www.coze.cn/open/docs/guides/welcome。 |
| Microsoft Generative AI for Beginners 01-05 | 英文/开源课程 | 否 | 只选前 5 课：生成式 AI、模型选择、负责任使用、Prompt 基础、高级提示。 | GitHub 课程，含简体中文翻译：https://github.com/microsoft/generative-ai-for-beginners。 |
| 岗位流程复盘模板 | 自建模板 | 否 | 把“每周重复 3 次以上”的任务拆成输入、步骤、AI 可替代部分、人工复核点、风险。 | doai 自建模板，后续可让用户上传案例。 |

二年级重点不是“学更多工具”，而是把 AI 嵌入固定流程。每条资源都应要求用户交付一个岗位成果，例如一份周报模板、一套客户跟进话术、一个会议纪要流程、一份调研 SOP。

## 三年级：AI 工程师

目标：用 AI 做项目、搭工作流、组织上下文。

当前项目已放入 Easy-Vibe、腾讯 CodeBuddy、Vibe Coding、Vibe Vibe，方向正确。建议补齐为 6 条资源：

| 资源 | 类型 | 是否主路线 | 放入内容 | 最优获取路径 |
| --- | --- | --- | --- | --- |
| Vibe Coding：用自然语言驱动项目 | 理念文章 | 是 | 放在三年级入口，解释从“写代码”转为“描述意图、体验结果、持续迭代”。 | 现有资源保留；原始概念入口可继续引用 Karpathy 原帖。 |
| Easy-Vibe：第一个可演示应用 | 开源课程 | 是 | 从想法到需求、页面、功能、部署，适合作为项目实践主线。 | GitHub：https://github.com/datawhalechina/easy-vibe；在线文档：https://datawhalechina.github.io/easy-vibe/。 |
| Vibe Vibe：从想法到作品 | 在线课程 | 是 | 补充产品、MVP、上线、反馈迭代视角。 | 官网：https://www.vibevibe.cn/。 |
| LLM Universe：动手学大模型应用开发 | 中文开源课程 | 否 | 适合开始做 RAG、知识库、LLM API、应用评估的人。 | Datawhale GitHub：https://github.com/datawhalechina/llm-universe；在线文档：https://datawhalechina.github.io/llm-universe/。 |
| 腾讯 CodeBuddy 工程化用法 | 视频课程 | 否 | 上下文、Rules、MCP、Agent、CI/CD，用于补工程化协作视角。 | 腾讯云课程：https://cloud.tencent.com/edu/learning/course-4663-83022。 |
| Hugging Face Agents Course | 英文/免费课程 | 否 | Agent 基础、smolagents、LlamaIndex、LangGraph、Agentic RAG、最终项目。 | 官方课程，含中文翻译入口：https://huggingface.co/learn/agents-course/。 |

三年级资源顺序应是：先做出项目，再补工程化；先会用 AI 交付，再理解 RAG、Agent、评估和上下文管理。

## 四年级：组织/行业赋能

目标：面向团队、部门或行业设计 AI 赋能方案。

首批建议放 5 条资源：

| 资源 | 类型 | 是否主路线 | 放入内容 | 最优获取路径 |
| --- | --- | --- | --- | --- |
| 团队 AI 赋能方案画布 | 自建画布 | 是 | 业务目标、用户角色、任务清单、数据来源、工具边界、权限、验收指标、风险控制。 | doai 自建页面，适合作为咨询/陪跑交付物。 |
| 组织 AI 用例盘点表 | 自建模板 | 否 | 让团队按“高频、耗时、低风险、可验证”筛选 AI 场景，避免从炫技开始。 | doai 自建表格模板。 |
| Microsoft Generative AI for Beginners 12-17 | 英文/开源课程 | 否 | AI UX、应用安全、生命周期、RAG、开源模型、Agent，适合作为团队方案的技术边界补课。 | GitHub 课程：https://github.com/microsoft/generative-ai-for-beginners。 |
| OpenAI 生产与评估文档 | 英文/官方 | 否 | Prompting、工具、Agent、评估、安全、上线检查。只选与团队方案相关的部分。 | OpenAI Docs：https://platform.openai.com/docs。 |
| Anthropic Economic Index | 英文/研究数据 | 否 | 观察 AI 对岗位、任务和经济活动的影响，用于组织赋能方案中的“业务影响”部分。 | Anthropic 官方：https://www.anthropic.com/economic-index。 |

四年级不要直接变成“企业 AI 战略课”。它应该服务于中小团队的落地：先选 1 个部门、3 个任务、1 套工具链、2 周试点周期，再决定是否扩大。

## 五年级：创造新时代

目标：跟踪前沿人物、论文和产业观点，形成自己的判断框架。

首批建议放 6 条资源：

| 资源 | 类型 | 是否主路线 | 放入内容 | 最优获取路径 |
| --- | --- | --- | --- | --- |
| AI 前沿观点阅读框架 | 自建框架 | 是 | 每周按“模型能力、产品形态、产业采用、风险治理、个人机会”记录 5 类判断。 | doai 自建页面，配阅读笔记模板。 |
| State of AI Report | 英文/年度报告 | 否 | 用来建立年度产业地图：研究、行业、政治、安全、预测。 | 官方网站：https://www.stateof.ai/。 |
| Stanford AI Index | 英文/年度报告 | 否 | 用来校准宏观判断：研发、产业、政策、教育、公众态度。 | 官方入口：https://aiindex.stanford.edu/report/；论文页：https://arxiv.org/abs/2504.07139。 |
| Latent Space | 英文/播客与通讯 | 否 | 适合跟踪 AI 工程、Agent、模型、基础设施和 AI for Science。 | 官网：https://www.latent.space/。 |
| Hugging Face Daily Papers / Papers | 英文/论文入口 | 否 | 不是让用户读全部论文，而是训练“标题、摘要、代码、复现、产品影响”的判断能力。 | Hugging Face Papers：https://huggingface.co/papers。 |
| 中文 AI 资讯精选池 | 中文资讯 | 否 | 机器之心、量子位、AI 科技评论等用于快速扫中文动态，但不作为唯一事实来源。 | 建议 doai 后续维护“本周中文观察”页面，避免只放信息流入口。 |

五年级的资源不应该追求“最新链接最多”，而应该教用户形成判断：这项进展改变了什么能力边界，能否进入产品，谁会受益，风险是什么，自己是否需要行动。

## 上架优先级

第一批建议只上架 15 条：

1. 一年级：doai 7 天 AI 日常任务包、常用 AI 助手入门清单、提示词基础。
2. 二年级：个人 AI 工作台搭建清单、Kimi 长文档实战、扣子岗位助手。
3. 三年级：保留现有 4 条，再补 LLM Universe。
4. 四年级：团队 AI 赋能方案画布、组织 AI 用例盘点表。
5. 五年级：AI 前沿观点阅读框架、State of AI Report、Stanford AI Index。

第二批再补 Microsoft Generative AI for Beginners、Hugging Face Agents Course、OpenAI 官方文档、Anthropic Economic Index、Latent Space、Hugging Face Papers。

## 不建议首批放入

- 零散 Prompt 大合集：容易让用户收藏但不用。
- 过时模型排行榜：变化太快，维护成本高。
- 纯营销型工具文章：用户学不到可迁移能力。
- 高价闭源课程：除非能明确验证课程质量、交付物和适配人群。
- 太学术的论文清单：五年级可以放论文入口，但需要 doai 自己提供阅读框架。

## 后续落地建议

资源 JSON 上架时，每条资源保持现有字段结构，并新增中文导读：

- `audience`：适合谁。
- `problem`：解决什么卡点。
- `reason`：为什么放在这个年级。
- `outcome`：学完要交付什么。
- `details`：只写学习顺序和取舍，不写内部整理过程。

建议先把自建资源做成 5 个“主路线”页面，再把外部链接作为扩展资源挂在对应年级下。这样 doai 的价值是路线和判断，不是复制互联网链接。
