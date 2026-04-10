// ─── Profile ────────────────────────────────────────────
export const profile = {
  name: { zh: '康鑫', en: 'Kang Xin' },
  label: {
    zh: '增长实践者',
    en: 'Growth Practitioner',
  },
  tagline: {
    zh: 'Building PostMem · 公开写方法论',
    en: 'Building PostMem · Writing the playbook',
  },
  heroTitle: {
    zh: '在真实产品上做增长，把过程写成方法论',
    en: 'Doing growth on a real product, writing the playbook along the way',
  },
  bio: {
    zh: '我是 Bruce，正在全职做 PostMem——一个用老照片帮家庭留住故事的 AI 产品。从 0 到 1 的增长过程中，我把 SEO 体系、投放策略、用户研究沉淀成了公开的方法论。不是理论总结，是正在执行的东西。',
    en: "I'm Bruce, building PostMem full-time — an AI product that turns old family photos into family stories. Along the way, I'm writing down everything I learn about growth: SEO systems, ad strategies, user research. Not theory — things I'm actually doing.",
  },
  siteUrl: 'https://kangxin.me',
};

// ─── Growth Metrics (current practice) ─────────────────
export const metrics = [
  {
    value: '13',
    label: { zh: '篇增长方法论', en: 'Growth essays' },
    detail: { zh: '框架、案例拆解、对话精华', en: 'Frameworks, teardowns, dialogues' },
  },
  {
    value: '13',
    label: { zh: '篇 SEO 内容资产', en: 'SEO content assets' },
    detail: { zh: '从关键词到内容到技术的完整体系', en: 'Full system from keywords to content to tech' },
  },
  {
    value: '40+',
    label: { zh: '个增长主题标签', en: 'Growth topic tags' },
    detail: { zh: '覆盖留存、PMF、竞品、渠道等', en: 'Retention, PMF, competitive, channels' },
  },
  {
    value: '1',
    label: { zh: '套 SEO 七层体系', en: 'SEO 7-layer system' },
    detail: { zh: '从目标到数据验证的闭环', en: 'Closed loop from goals to data validation' },
  },
];

// ─── Now (current growth practice) ─────────────────────
export const now = {
  title: 'PostMem',
  tagline: {
    zh: '用老照片帮家庭留住故事的 AI 产品',
    en: 'AI product that turns old family photos into family stories',
  },
  href: 'https://www.postmem.com',
  practices: {
    zh: [
      '搭建了一套 13 篇文章的 SEO/GEO 内容体系，覆盖竞品拦截、品类定义、问题感知三层关键词',
      '从 0 开始做 Facebook 视频广告，用 Remotion 搭建自动化视频生产线',
      '基于 21 款竞品分析做产品定位，用 April Dunford 方法论梳理差异化',
      '设计用户研究框架，完成多轮目标用户访谈（40-65 岁家庭记忆保存者）',
    ],
    en: [
      'Built a 13-article SEO/GEO content system covering competitor intercept, category definition, and problem awareness keywords',
      'Running Facebook video ads from scratch, built automated video pipeline with Remotion',
      'Product positioning based on 21-competitor analysis using April Dunford methodology',
      'Designed user research framework, conducted multiple rounds of interviews (40-65 age group)',
    ],
  },
};

// ─── Two Public Assets ─────────────────────────────────
export const methodAssets = [
  {
    title: 'Growth Lab',
    subtitle: {
      zh: '增长怎么想',
      en: 'How to think about growth',
    },
    tagline: {
      zh: '把增长拆成结构，再把结构变成执行。框架、案例拆解、对话精华、工作笔记。',
      en: 'Break growth into structure, then turn structure into execution. Frameworks, teardowns, dialogues, working notes.',
    },
    count: '13',
    href: '/lab/',
  },
  {
    title: 'PostMem SEO',
    subtitle: {
      zh: '增长怎么做',
      en: 'How to do growth',
    },
    tagline: {
      zh: '围绕真实用户需求搭建的 SEO/GEO 内容体系，把产品叙事转化为搜索增长资产。',
      en: 'SEO/GEO content system built from real user problems, turning product narrative into search-driven growth assets.',
    },
    count: '13',
    href: '/postmem/',
  },
];

// ─── Experience (collapsed on homepage) ────────────────
export const experienceSummary = {
  zh: '在做 PostMem 之前，我在新华网、VIPKID 等公司做了 5 年 B 端产品。',
  en: 'Before PostMem, I spent 5 years in B2B product at Xinhua, VIPKID, and others.',
};

export const experiences = [
  {
    period: '2023.09 — 2025.04',
    company: { zh: '新华网 · 学术中国', en: 'Xinhua · Academic China' },
    role: { zh: '产品经理', en: 'Product Manager' },
    description: {
      zh: '主导国内首个国家级知识产权综合智能服务平台建设。获人民日报、科学网、国家知识产权局等媒体报道。',
      en: "Led China's first national-level IP service platform. Covered by People's Daily, ScienceNet, CNIPA.",
    },
    highlights: {
      zh: [
        '主导学术基础能力建设：学术资源检索、查重、AIGC 检测、专利检测与评估',
        '成果发表转化率 +57%，版权确权效率 +90%，累计 5000+ 电子证书',
      ],
      en: [
        'Built core academic capabilities: search, plagiarism check, AIGC detection, patent evaluation',
        '+57% publication conversion, +90% copyright efficiency, 5000+ certificates',
      ],
    },
    pressLinks: [
      { label: { zh: '人民日报', en: "People's Daily" }, href: 'http://finance.people.com.cn/n1/2024/0701/c1004-40267526.html' },
      { label: { zh: '科学网', en: 'ScienceNet' }, href: 'https://news.sciencenet.cn/htmlnews/2024/7/525665.shtm' },
      { label: { zh: '国家知识产权局', en: 'CNIPA' }, href: 'https://www.cnipa.gov.cn/art/2024/7/3/art_55_193493.html' },
      { label: { zh: '新华网', en: 'Xinhua' }, href: 'http://www.news.cn/digital/20241023/3f67d12befa540a59fc087c82ce7da84/c.html' },
    ],
  },
  {
    period: '2023.03 — 2023.07',
    company: { zh: '装小蜜', en: 'Zhuangxiaomi' },
    role: { zh: '产品经理', en: 'Product Manager' },
    description: {
      zh: '聚焦监理业务服务完成率偏低问题，通过流失归因定位关键节点。',
      en: 'Focused on low service completion rates, identified churn points through attribution.',
    },
    highlights: {
      zh: ['监理用户服务完成率 +17%'],
      en: ['+17% service completion rate'],
    },
  },
  {
    period: '2018.03 — 2020.09',
    company: { zh: 'VIPKID', en: 'VIPKID' },
    role: { zh: '产品经理', en: 'Product Manager' },
    description: {
      zh: '负责电商交易系统售后重构，围绕订单暴增后的人效和完单时效推进平台能力升级。',
      en: 'Led after-sales rebuild as orders surged, improving efficiency and completion time.',
    },
    highlights: {
      zh: ['整体售后完单时效 72h → 48h'],
      en: ['Completion time 72h → 48h'],
    },
  },
  {
    period: '2016.08 — 2018.01',
    company: { zh: '招商银行', en: 'China Merchants Bank' },
    role: { zh: '产品运营', en: 'Product Operations' },
    description: {
      zh: '负责零售信贷对外合作类贷款业务的产品研发与业务运营。',
      en: 'Led partnership lending product development and business operations.',
    },
    highlights: {
      zh: ['合作类贷款发放笔数 10+，单场营销新增客户 700+'],
      en: ['10+ loan disbursements, 700+ new clients from single campaign'],
    },
  },
];

// ─── Contact ────────────────────────────────────────────
export const contact = {
  email: 'bruce@motiful.ai',
  github: 'https://github.com/Bruce-Kang1994',
  cta: {
    zh: '想聊增长、产品、SEO、方法论，或者想合作——直接发邮件。',
    en: "Want to talk growth, product, SEO, methodology, or collaborate — just email me.",
  },
};
