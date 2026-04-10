---
title: "产品增长通用框架：8 维度分析 + 六步执行"
description: "这是整个增长方法论体系的第一篇——先用 8 个维度看清产品本质，再用 6 步找到增长杠杆。后续所有案例拆解都建立在这个框架之上。"
category: "frameworks"
tags: ["增长框架", "方法论", "维度分析", "增长杠杆"]
date: 2026-03-27
featured: true
draft: false
sortOrder: 1
dataVerified: 2026-04-10
---

> **阅读定位**：这是增长方法论体系的**起点**，建议第一篇阅读。本文建立的"维度分析→杠杆选择→实验闭环"思维方式，贯穿后续所有文章。

---

## 一个常见的错误

做增长最常见的错误，是上来就抄别人的打法。

"美团靠补贴拉新，我们也补贴。""Dropbox 做裂变，我们也做裂变。"

**问题在于：不同产品的增长逻辑根本不同。** 美团能靠补贴，是因为外卖的消费频率极高（每天都吃饭），补贴养成习惯后复购能把获客成本摊薄。你的产品如果一年用一次，补贴就是纯亏损。

所以在选策略之前，必须先做一件事：**看清自己的产品"长什么样"。**

这就是本文要解决的问题——给你一个通用的分析工具，让你面对任何产品，都能系统地推导出"应该怎么增长"，而不是拍脑袋。

---

## 第一步：8 维度画像

用 8 个维度给产品画像。不同维度组合，决定了增长引擎应该长什么样。

| 维度 | 核心问题 | 两端 |
|------|---------|------|
| 使用频率 | 用户多久用一次？ | 日活型 ↔ 年度型 |
| 决策成本 | 买单需要多少决策？ | 冲动购买 ↔ 深度考虑 |
| 供给侧 | 需要谁来提供服务？ | 纯软件 ↔ 重供给 |
| 网络效应 | 用户越多产品越好用吗？ | 强网络效应 ↔ 单机产品 |
| 付费模式 | 怎么收钱？ | 订阅 ↔ 单次交易 |
| 竞争格局 | 市场里有谁？ | 蓝海 ↔ 红海 |
| 传播性 | 使用过程天然可传播吗？ | 社交产品 ↔ 私密工具 |
| Aha Moment 速度 | 用户多快能感受到价值？ | 秒级 ↔ 周/月级 |

### 维度怎么用：两个对比案例

**案例 A：美团外卖**

| 维度 | 判断 | 说明 |
|------|------|------|
| 使用频率 | 极高 | 每天都要吃饭 |
| 决策成本 | 低 | 点一份外卖不需要开会讨论 |
| 供给侧 | 重 | 没有商家和骑手就没有产品 |
| 网络效应 | 强（双边） | 商家越多用户越多，反之亦然 |
| 付费模式 | 单次交易 | 每单抽佣 |
| 竞争格局 | 红海 | 饿了么激烈对抗 |
| 传播性 | 中等 | 拼单有传播性 |
| Aha Moment | 快 | 下单到收餐 30 分钟 |

**维度组合推导**：高频 + 低决策成本 + 强网络效应 → **补贴养习惯 + 供给侧扩张**是最优策略。（详见 [美团增长杠杆拆解](/lab/posts/meituan-growth-levers/)）

**案例 B：一个低频高客单产品**

假设一个 AI 家族记忆保存产品：

| 维度 | 判断 | 说明 |
|------|------|------|
| 使用频率 | 低 | 不是每天都想整理照片 |
| 决策成本 | 中等 | 涉及隐私和情感，需要信任 |
| 供给侧 | 轻 | 纯 AI |
| 网络效应 | 弱到中 | 家庭内有，不跨家庭 |
| 付费模式 | 订阅 + 实体 | 混合模式 |
| 竞争格局 | 蓝海 | 品类无领导者 |
| 传播性 | 潜在强 | 产出物可分享 |
| Aha Moment | 可以很快 | 上传照片 → 60 秒出故事 |

**维度组合推导**：低频 + 蓝海 + 可传播 → **内容营销 + 产品即传播 + 品类定义**是最优策略。补贴拉新对这个产品完全无效——低频产品补贴一次，用户三个月后才回来第二次。

### 关键结论

同样的 8 个问题，不同产品的答案组合完全不同，推导出的增长引擎也完全不同。**这就是为什么"抄别人的增长策略"通常不管用。**

---

## 从维度到杠杆：决策映射

8 个维度不是平等的。真正决定增长结构的，分两层：

<div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin:2rem 0">
<div style="background:linear-gradient(135deg, rgba(37,99,235,0.08), rgba(99,102,241,0.06)); border:1px solid rgba(37,99,235,0.2); border-radius:12px; padding:1.5rem">
<div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#2563EB; margin-bottom:1rem">🎯 主导约束 — 决定增长引擎</div>
<div style="display:flex; flex-direction:column; gap:0.6rem">
<div style="background:white; border-radius:8px; padding:0.6rem 0.8rem; font-size:14px; border-left:3px solid #2563EB"><strong>使用频率</strong><br><span style="color:#6B7280; font-size:13px">能不能靠复购摊薄获客成本</span></div>
<div style="background:white; border-radius:8px; padding:0.6rem 0.8rem; font-size:14px; border-left:3px solid #2563EB"><strong>决策成本</strong><br><span style="color:#6B7280; font-size:13px">转化链路长短，是否需要强教育</span></div>
<div style="background:white; border-radius:8px; padding:0.6rem 0.8rem; font-size:14px; border-left:3px solid #2563EB"><strong>供给侧复杂度</strong><br><span style="color:#6B7280; font-size:13px">增长是否需要先做供给</span></div>
<div style="background:white; border-radius:8px; padding:0.6rem 0.8rem; font-size:14px; border-left:3px solid #2563EB"><strong>Aha Moment 速度</strong><br><span style="color:#6B7280; font-size:13px">产品能不能快速自证价值</span></div>
</div>
</div>
<div style="background:linear-gradient(135deg, rgba(14,165,233,0.08), rgba(6,182,212,0.06)); border:1px solid rgba(14,165,233,0.2); border-radius:12px; padding:1.5rem">
<div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#0EA5E9; margin-bottom:1rem">🔄 放大因素 — 决定增长天花板</div>
<div style="display:flex; flex-direction:column; gap:0.6rem">
<div style="background:white; border-radius:8px; padding:0.6rem 0.8rem; font-size:14px; border-left:3px solid #0EA5E9"><strong>网络效应</strong><br><span style="color:#6B7280; font-size:13px">产品会不会越用越强</span></div>
<div style="background:white; border-radius:8px; padding:0.6rem 0.8rem; font-size:14px; border-left:3px solid #0EA5E9"><strong>传播性</strong><br><span style="color:#6B7280; font-size:13px">使用过程会不会天然外溢</span></div>
<div style="background:white; border-radius:8px; padding:0.6rem 0.8rem; font-size:14px; border-left:3px solid #0EA5E9"><strong>付费模式</strong><br><span style="color:#6B7280; font-size:13px">收入模型是否支撑长期投入</span></div>
<div style="background:white; border-radius:8px; padding:0.6rem 0.8rem; font-size:14px; border-left:3px solid #0EA5E9"><strong>竞争格局</strong><br><span style="color:#6B7280; font-size:13px">在抢存量，还是先做市场教育</span></div>
</div>
</div>
</div>

先看主导约束确定引擎类型，再看放大因素判断天花板。具体怎么映射：

<div style="display:flex; flex-direction:column; gap:0.75rem; margin:2rem 0">
<div style="display:flex; align-items:stretch; border-radius:10px; overflow:hidden; border:1px solid rgba(37,99,235,0.15)">
<div style="background:linear-gradient(135deg,#2563EB,#4F46E5); color:white; padding:0.8rem 1rem; min-width:180px; display:flex; align-items:center; font-size:13px; font-weight:600; line-height:1.4">高频 + 低决策<br>+ 快 Aha</div>
<div style="flex:1; padding:0.8rem 1rem; background:rgba(37,99,235,0.04); display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
<span style="background:#2563EB; color:white; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">运营驱动</span>
<span style="background:#DBEAFE; color:#2563EB; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">产品驱动</span>
<span style="color:#9CA3AF; font-size:12px; margin-left:0.5rem">✗ 销售驱动</span>
</div>
</div>
<div style="display:flex; align-items:stretch; border-radius:10px; overflow:hidden; border:1px solid rgba(37,99,235,0.15)">
<div style="background:linear-gradient(135deg,#2563EB,#4F46E5); color:white; padding:0.8rem 1rem; min-width:180px; display:flex; align-items:center; font-size:13px; font-weight:600; line-height:1.4">重供给<br>+ 双边网络效应</div>
<div style="flex:1; padding:0.8rem 1rem; background:rgba(37,99,235,0.04); display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
<span style="background:#2563EB; color:white; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">供给驱动</span>
<span style="background:#DBEAFE; color:#2563EB; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">运营驱动</span>
<span style="color:#9CA3AF; font-size:12px; margin-left:0.5rem">✗ 纯内容营销</span>
</div>
</div>
<div style="display:flex; align-items:stretch; border-radius:10px; overflow:hidden; border:1px solid rgba(37,99,235,0.15)">
<div style="background:linear-gradient(135deg,#2563EB,#4F46E5); color:white; padding:0.8rem 1rem; min-width:180px; display:flex; align-items:center; font-size:13px; font-weight:600; line-height:1.4">低频 + 蓝海<br>+ 需要教育市场</div>
<div style="flex:1; padding:0.8rem 1rem; background:rgba(37,99,235,0.04); display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
<span style="background:#2563EB; color:white; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">营销驱动</span>
<span style="background:#DBEAFE; color:#2563EB; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">产品驱动</span>
<span style="color:#9CA3AF; font-size:12px; margin-left:0.5rem">✗ 补贴拉新</span>
</div>
</div>
<div style="display:flex; align-items:stretch; border-radius:10px; overflow:hidden; border:1px solid rgba(37,99,235,0.15)">
<div style="background:linear-gradient(135deg,#2563EB,#4F46E5); color:white; padding:0.8rem 1rem; min-width:180px; display:flex; align-items:center; font-size:13px; font-weight:600; line-height:1.4">高客单价<br>+ 长决策链</div>
<div style="flex:1; padding:0.8rem 1rem; background:rgba(37,99,235,0.04); display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
<span style="background:#2563EB; color:white; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">销售驱动</span>
<span style="background:#DBEAFE; color:#2563EB; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">营销驱动</span>
<span style="color:#9CA3AF; font-size:12px; margin-left:0.5rem">✗ 病毒传播</span>
</div>
</div>
<div style="display:flex; align-items:stretch; border-radius:10px; overflow:hidden; border:1px solid rgba(37,99,235,0.15)">
<div style="background:linear-gradient(135deg,#2563EB,#4F46E5); color:white; padding:0.8rem 1rem; min-width:180px; display:flex; align-items:center; font-size:13px; font-weight:600; line-height:1.4">强传播性<br>+ 使用即展示</div>
<div style="flex:1; padding:0.8rem 1rem; background:rgba(37,99,235,0.04); display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
<span style="background:#2563EB; color:white; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">产品驱动</span>
<span style="background:#DBEAFE; color:#2563EB; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">病毒驱动</span>
<span style="color:#9CA3AF; font-size:12px; margin-left:0.5rem">✗ 重销售</span>
</div>
</div>
<div style="display:flex; align-items:stretch; border-radius:10px; overflow:hidden; border:1px solid rgba(37,99,235,0.15)">
<div style="background:linear-gradient(135deg,#2563EB,#4F46E5); color:white; padding:0.8rem 1rem; min-width:180px; display:flex; align-items:center; font-size:13px; font-weight:600; line-height:1.4">订阅制 + 中高频<br>+ 价值可持续验证</div>
<div style="flex:1; padding:0.8rem 1rem; background:rgba(37,99,235,0.04); display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap">
<span style="background:#2563EB; color:white; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">产品驱动</span>
<span style="background:#DBEAFE; color:#2563EB; padding:0.25rem 0.6rem; border-radius:5px; font-size:12px; font-weight:600">营销驱动</span>
<span style="color:#9CA3AF; font-size:12px; margin-left:0.5rem">✗ 一次性促销</span>
</div>
</div>
</div>

> 这张图不是替你生成答案，而是帮你先排除掉明显不适合的方向。增长不是先问"别人怎么做"，而是先问"我的产品结构允许什么成立"。

维度分析解决了"看清产品"的问题。接下来要解决"怎么做"——这就是六步执行框架。

---

## 第二步：六步执行框架

维度分析告诉你产品长什么样，六步框架告诉你怎么一步步落地增长策略。

### Step 1: 用户研究 — 谁在用，为什么用

> 不做用户研究就做增长 = 蒙眼开车

- **定性访谈**（5-15 人）：理解动机、障碍、使用场景
- **定量验证**：问卷验证访谈中的假设
- **JTBD（Jobs To Be Done）**：用户"雇佣"你的产品来完成什么任务？

输出物：用户画像 + 使用场景地图。

### Step 2: 竞品拆解 — 别人怎么做的

不是抄策略，而是理解策略背后的逻辑。对每个竞品问四个问题：

| 维度 | 问什么 |
|------|--------|
| 产品定位 | 他解决的核心问题是什么 |
| 增长引擎 | 主要获客渠道和模式 |
| 定价策略 | 如何定价、锚点在哪 |
| 弱点 | 用户抱怨最多的是什么 |

> 拆竞品最重要的产出不是"他做了什么"，而是"他为什么这样做"以及"他漏了什么"。更系统的拆解方法，见 [业务拆解方法论](/lab/posts/business-teardown-methodology/)。

### Step 3: 定位 — 你是谁

基于前两步确定差异化定位：

- **品类定义**：你在什么品类里竞争？能不能定义一个新品类？
- **核心信息**：一句话说清你是谁、为什么选你
- **受众精确化**：缩小到最有可能买单的人群

### Step 4: 增长杠杆选择 — 撬动哪个点

产品增长有六种驱动模式。根据维度分析的结果选择最适合的 1-2 种：

| 驱动模式 | 特征 | 适合什么产品 |
|---------|------|-------------|
| **销售驱动** | BD 团队 + 大客户 | 高客单价 B2B |
| **营销驱动** | 付费广告 + 内容 | 有明确 ICP 的 consumer |
| **产品驱动（PLG）** | 产品自带获客能力 | 使用即传播的工具 |
| **运营驱动** | 活动 + 社群 + 推送 | 需要培养习惯的产品 |
| **供给驱动** | 供给侧扩张带动需求 | 平台/marketplace |
| **病毒驱动** | 用户带用户 | 社交产品 + 强网络效应 |

**美团外卖**的答案是供给驱动 + 运营驱动。**案例 B** 的答案是营销驱动 + 产品驱动。

> 这个六类模型在后续案例中会反复出现：美团的"供给+运营"见 [美团增长杠杆拆解](/lab/posts/meituan-growth-levers/)，ElevenLabs 的"产品+营销"见 [ElevenLabs 增长策略拆解](/lab/posts/elevenlabs-growth-teardown/)。

### Step 5: 策略执行 — 怎么做

把增长杠杆翻译成具体执行计划：

- **营销驱动**：渠道选择 → 内容策略 → 广告投放 → 着陆页优化。搜索渠道的系统做法见 [SEO 七层框架](/lab/posts/seo-seven-layer-framework/)
- **产品驱动**：Onboarding 优化 → Aha Moment 前置 → 分享机制 → 邀请机制
- **供给驱动**：供给端获取 → 品质控制 → 密度管理
- **运营驱动**：活动设计 → 用户分层 → 推送策略 → 留存机制
- **销售驱动**：线索获取 → 决策链识别 → 销售流程 → 成交效率
- **病毒驱动**：邀请设计 → 激励结构 → 分享触发点 → 转化链路

每个动作都必须服务于主杠杆，不是列越多越好。

### Step 6: 实验闭环 — 验证和迭代

> 增长不是一次性的策略，是持续的实验系统。

核心原则：
- **每个策略都是假设**，不是结论
- **用实验验证**，不用直觉判断
- **看数据决策**，不看老板脸色

实验流程：

```
假设 → 设计实验 → 设定成功标准 → 执行 → 看数据 → 学到什么 → 下一个实验
```

好的增长团队不是"策略牛"，是**实验速度快**。每周跑 2-3 个小实验，一个季度就积累了足够的数据来做大决策。美团的实验体系（S/A/B/C 四级分级）是这个思想的极致应用，详见 [美团增长杠杆拆解](/lab/posts/meituan-growth-levers/)。

---

## 整体知识地图

这篇文章建立的框架，是理解后续所有内容的基础：

| 后续文章 | 用到了本文的什么 |
|---------|----------------|
| [业务拆解方法论](/lab/posts/business-teardown-methodology/) | 在维度分析之前，先搞清楚"我在做什么业务" |
| [SEO 七层框架](/lab/posts/seo-seven-layer-framework/) | 把"营销驱动"这个杠杆在搜索渠道上的系统化展开 |
| [美团增长杠杆拆解](/lab/posts/meituan-growth-levers/) | 高频+低决策+双边网络 → 供给+运营驱动的实战案例 |
| [ElevenLabs 增长策略拆解](/lab/posts/elevenlabs-growth-teardown/) | 快Aha+PLG → 产品+营销驱动的实战案例 |

> **先记住框架，再在实操中填血肉。框架记住了，细节遇到时自然会想起来。**

---

## 接下来

如果你觉得这篇有用，下面三件事任选一个继续：

- **想看更多框架？** → 回到 [Growth Lab 首页](/lab/) 浏览全部 14 篇增长方法论
- **想看实战？** → 看 [PostMem SEO 内容体系](/postmem/) 是怎么把方法论落地成 13 篇内容资产的
- **想直接聊？** → 发邮件 [bruce@motiful.ai](mailto:bruce@motiful.ai)

如果你对这篇文章有不同的判断，或者你正在做的事印证/反驳了这里的观点——**我都想听**。
