// ─── Profile ────────────────────────────────────────────
export const profile = {
  name: { zh: '康鑫', en: 'Kang Xin' },
  tagline: {
    zh: '产品经理，独立在做一个 AI 产品。',
    en: 'Product manager, building an AI product solo.',
  },
  heroTitle: {
    zh: '做产品的人，也自己从零做产品。',
    en: 'A product person who also builds from scratch.',
  },
  bio: {
    zh: '5 年 B 端产品经验，独立负责过 3 条产品线从 0 到 1。现在全职做 PostMem——用老照片帮家庭留住故事的 AI 产品，一个人跑产品、增长、投放全链路。',
    en: 'Five years of B2B product experience, having independently led three product lines from zero to one. Now building PostMem full-time — an AI product that turns old family photos into stories. Running product, growth, and ads end-to-end solo.',
  },
  siteUrl: 'https://bruce-kang1994.github.io',
};

// ─── Metrics ────────────────────────────────────────────
export const metrics = [
  {
    value: '+57%',
    label: { zh: '成果发表转化率', en: 'Publication conversion' },
    detail: { zh: '新华网学术中国知识产权服务平台', en: 'Xinhua Academic China IP Platform' },
  },
  {
    value: '-33%',
    label: { zh: '售后完单时效', en: 'After-sales cycle time' },
    detail: { zh: 'VIPKID 电商售后交易系统重构', en: 'VIPKID after-sales system rebuild' },
  },
  {
    value: '+17%',
    label: { zh: '服务完成率', en: 'Service completion rate' },
    detail: { zh: '装小蜜监理业务优化', en: 'Zhuangxiaomi service optimization' },
  },
  {
    value: '5000+',
    label: { zh: '国版链电子证书', en: 'Blockchain certificates' },
    detail: { zh: '版权确权效率提升 90%', en: '+90% copyright efficiency' },
  },
];

// ─── Now ────────────────────────────────────────────────
export const now = {
  title: 'PostMem',
  role: { zh: 'Co-Founder', en: 'Co-Founder' },
  tagline: {
    zh: '用老照片帮家庭留住故事的 AI 产品。',
    en: 'An AI product that turns old family photos into family stories.',
  },
  description: {
    zh: '负责产品设计、增长策略、SEO/GEO 内容体系、视频广告投放全链路。从用户研究到 Remotion 视频生产线到 Facebook Ads 闭环，全栈自己跑。',
    en: 'Responsible for product design, growth strategy, SEO/GEO content system, and video ad pipeline end-to-end. From user research to Remotion video production to Facebook Ads closed loop.',
  },
  href: 'https://www.postmem.com',
};

export const endorsements = [
  {
    label: { zh: '新华网学术中国平台 · 产品 Owner', en: 'Xinhua Academic China · Product Owner' },
  },
  {
    label: { zh: '人民日报报道', en: "People's Daily" },
    href: 'http://finance.people.com.cn/n1/2024/0701/c1004-40267526.html',
  },
  {
    label: { zh: '科学网报道', en: 'ScienceNet' },
    href: 'https://news.sciencenet.cn/htmlnews/2024/7/525665.shtm',
  },
  {
    label: { zh: '国家知识产权局', en: 'CNIPA' },
    href: 'https://www.cnipa.gov.cn/art/2024/7/3/art_55_193493.html',
  },
  {
    label: { zh: '新华网报道', en: 'Xinhua' },
    href: 'http://www.news.cn/digital/20241023/3f67d12befa540a59fc087c82ce7da84/c.html',
  },
];

export const education = [
  {
    school: { zh: '天津大学', en: 'Tianjin University' },
    degree: { zh: '软件工程 · 本科', en: 'Software Engineering · B.Eng.' },
  },
  {
    school: { zh: '马来西亚理科大学', en: 'Universiti Sains Malaysia' },
    degree: { zh: '计算机科学 · 硕士', en: 'Computer Science · M.Sc.' },
  },
];

// ─── Selected Work ──────────────────────────────────────
export const sideProjects = [
  {
    title: 'Caliber',
    tagline: {
      zh: 'PM 能力诊断工具 — AI 驱动的 16 维度产品经理能力评估，定位短板，给出角色匹配建议。',
      en: 'PM capability assessment — AI-powered 16-dimension evaluation with role-specific guidance.',
    },
    stack: 'Next.js · DeepSeek · Supabase · Stripe',
    status: { zh: '已上线', en: 'Live' },
    statusType: 'live' as const,
    href: 'https://caliber-nine.vercel.app/zh',
  },
  {
    title: 'Parla',
    tagline: {
      zh: 'macOS 语音转文字工具 — 说话即得整洁文本，6 天完整交付，主动归档（判断无护城河）。',
      en: 'macOS voice-to-text — speak naturally, get polished text. Built in 6 days, intentionally archived.',
    },
    stack: 'Electron · React · Groq Whisper · LLaMA 3.3',
    status: { zh: '已归档', en: 'Archived' },
    statusType: 'archived' as const,
    href: 'https://github.com/Bruce-Kang1994/parla',
  },
];

export const methodAssets = [
  {
    title: 'PostMem SEO System',
    tagline: {
      zh: '围绕真实需求场景搭建的 SEO/GEO 内容体系，把产品叙事转成增长资产。',
      en: 'SEO/GEO content system built from real user problems, turning product narrative into growth assets.',
    },
    status: { zh: '已发布', en: 'Published' },
    href: 'https://bruce-kang1994.github.io/postmem-seo-preview/index.html',
  },
  {
    title: 'Bruce Growth Lab',
    tagline: {
      zh: '持续迭代的增长研究站——框架、案例拆解、工作判断。',
      en: 'An evolving growth research archive — frameworks, case studies, and operating judgments.',
    },
    status: { zh: '已发布', en: 'Published' },
    href: 'https://bruce-kang1994.github.io/bruce-growth-lab/',
  },
];

// ─── Experience ─────────────────────────────────────────
export const experiences = [
  {
    period: '2023.09 — 2025.04',
    company: { zh: '新华网 · 学术中国', en: 'Xinhua · Academic China' },
    role: { zh: '产品经理', en: 'Product Manager' },
    description: {
      zh: '主导国内首个国家级知识产权综合智能服务平台建设，覆盖学术基础能力、成果传播与后台管理系统。',
      en: 'Led China\'s first national-level IP service platform, covering core capabilities, publication, and back-office systems.',
    },
    highlights: {
      zh: [
        '主导学术基础能力建设：学术资源检索、查重、AIGC 检测、专利检测与评估',
        '负责学者成果传播模块从 0 到 1 搭建，覆盖发表、授权、转化三大场景',
        '成果发表转化率 +57%，版权确权效率 +90%，累计 5000+ 电子证书',
      ],
      en: [
        'Built core academic capabilities: search, plagiarism check, AIGC detection, patent evaluation',
        'Led publication module from 0→1 across publishing, licensing, and commercialization',
        '+57% publication conversion, +90% copyright efficiency, 5000+ certificates',
      ],
    },
  },
  {
    period: '2023.03 — 2023.07',
    company: { zh: '装小蜜', en: 'Zhuangxiaomi' },
    role: { zh: '产品经理', en: 'Product Manager' },
    description: {
      zh: '聚焦监理业务服务完成率偏低问题，通过流失归因定位关键节点，落地用户侧和监理侧双边能力建设方案。',
      en: 'Focused on low service completion rates, identified churn points through attribution, and shipped bilateral improvements for both users and supervisors.',
    },
    highlights: {
      zh: [
        '设计并落地服务进度可视化、监理专属沟通和监理工作台',
        '通过流失归因发现 61% 流失发生在签约后首次服务',
        '监理用户服务完成率 +17%',
      ],
      en: [
        'Shipped progress visibility, dedicated communication, and supervisor workstation',
        'Attribution revealed 61% churn at first post-signup service touchpoint',
        '+17% service completion rate',
      ],
    },
  },
  {
    period: '2018.03 — 2020.09',
    company: { zh: 'VIPKID', en: 'VIPKID' },
    role: { zh: '产品经理', en: 'Product Manager' },
    description: {
      zh: '负责电商交易系统售后重构，围绕订单暴增后的人效、信息流转和完单时效推进平台能力升级。',
      en: 'Led after-sales rebuild as orders surged, improving efficiency, information flow, and completion time.',
    },
    highlights: {
      zh: [
        '搭建自助申请 + 自动审核 + 工单可视化 + 客服工作台体系',
        '打通仓储协同与财务数据校验链路',
        '整体售后完单时效 72h → 48h',
      ],
      en: [
        'Built self-service + auto-review + ticket visibility + CS workstation',
        'Integrated warehouse and finance data pipelines',
        'Completion time 72h → 48h',
      ],
    },
  },
  {
    period: '2016.08 — 2018.01',
    company: { zh: '招商银行', en: 'China Merchants Bank' },
    role: { zh: '产品运营', en: 'Product Operations' },
    description: {
      zh: '负责零售信贷对外合作类贷款业务的产品研发、落地推动与业务运营。',
      en: 'Led partnership lending product development, implementation, and business operations.',
    },
    highlights: {
      zh: [
        '参与合作类贷款业务的产品研发和落地推动',
        '持续跟踪同业动态和制度规范，调整业务策略',
        '合作类贷款发放笔数 10+，单场营销新增客户 700+',
      ],
      en: [
        'Led partnership lending product development and implementation',
        'Tracked industry dynamics and regulations, adjusted strategy',
        '10+ loan disbursements, 700+ new clients from single campaign',
      ],
    },
  },
];

// ─── Contact ────────────────────────────────────────────
export const contact = {
  email: 'bruce@motiful.ai',
  github: 'https://github.com/Bruce-Kang1994',
  cta: {
    zh: '如果你想聊产品、增长、SEO、方法论资产，或者想更系统地了解我做过的项目和思考方式，欢迎交流。',
    en: "If you're interested in product, growth, SEO, methodology, or want a deeper look at my work and thinking, let's connect.",
  },
};
