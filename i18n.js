// ─────────────────────────────────────────────────────────────────────────────
// i18n.js — Interface strings for the English and Chinese versions of the site.
// Content (bio, research, talks, ...) lives in config.js / config.zh.js.
// ─────────────────────────────────────────────────────────────────────────────

const I18N = {
  en: {
    htmlLang:      "en",
    langToggle:    "中文",
    langToggleAria: "Switch to Chinese",

    skipLink:      "Skip to main content",
    menu:          "Menu",
    themeToDark:   "Dark",
    themeToLight:  "Light",

    navAbout:        "About",
    navKeyResearch:  "Research",
    navExperience:   "Experience",
    navPublications: "Publications",
    navHonors:       "Honors",
    navTalks:        "Talks",
    navExpertise:    "Expertise",
    navHobbies:      "Hobbies",
    navContact:      "Contact",

    heroGreeting:   "Hello, I'm",
    ctaPublications: "View Publications",
    ctaContact:      "Get in Touch",

    titleKeyResearch:  "Key Research Contributions",
    titleExperience:   "Experience",
    titlePublications: "Publications",
    titleHonors:       "Honors and Awards",
    titleTalks:        "Talks",
    titleExpertise:    "Technical Expertise",
    titleHobbies:      "Hobbies",
    titleContact:      "Contact",

    contactIntro: "Thank you for taking the time to learn about my work and interests! I'm always open to discussions, collaborations, and new connections. Feel free to reach out - I look forward to hearing from you!",
    footer:       "© 2026 Zhilong Song. Deployed with Vercel.",

    pageTitleSuffix: "Academic Homepage",
    roleUniversity:  (role, university) => `${role} at ${university}`,

    awardBadge: "Award",

    pubTotal:       (n) => `Total: <strong>${n} papers</strong>`,
    scholarProfile: "Google Scholar Profile",
    citationsLabel: "Citations",
    hIndexLabel:    "h-index",
    citationsInline: (n) => `${n} citations`,

    groupFirstAuthor:   "First Author Papers",
    groupCoFirstAuthor: "Co-first Author Papers",
    groupCoAuthor:      "Co-author Papers",
    groupConference:    "Conference Papers",
    firstAuthorCount:   (published, preprints) => `${published} published + ${preprints} preprints`,

    abstract:        "Abstract",
    talkPhotoLink:   "Photo",
    talkAbstractLink: "Abstract",

    workExperience: "Work Experience",
    education:      "Education",
  },

  zh: {
    htmlLang:      "zh-CN",
    langToggle:    "EN",
    langToggleAria: "切换到英文",

    skipLink:      "跳转到主要内容",
    menu:          "菜单",
    themeToDark:   "深色",
    themeToLight:  "浅色",

    navAbout:        "关于",
    navKeyResearch:  "研究",
    navExperience:   "经历",
    navPublications: "论著",
    navHonors:       "荣誉",
    navTalks:        "报告",
    navExpertise:    "专长",
    navHobbies:      "爱好",
    navContact:      "联系",

    heroGreeting:   "你好，我是",
    ctaPublications: "查看论著",
    ctaContact:      "联系我",

    titleKeyResearch:  "代表性研究工作",
    titleExperience:   "教育与工作经历",
    titlePublications: "论著目录",
    titleHonors:       "荣誉与奖励",
    titleTalks:        "学术报告",
    titleExpertise:    "专业技能",
    titleHobbies:      "兴趣爱好",
    titleContact:      "联系方式",

    contactIntro: "感谢您花时间了解我的研究与生活！我随时欢迎交流、合作与结识新朋友，欢迎随时与我联系，期待您的来信！",
    footer:       "© 2026 宋志龙。由 Vercel 部署。",

    pageTitleSuffix: "个人主页",
    roleUniversity:  (role, university) => `${university}${role}`,

    awardBadge: "奖项",

    pubTotal:       (n) => `共 <strong>${n} 篇</strong>`,
    scholarProfile: "Google Scholar 主页",
    citationsLabel: "引用",
    hIndexLabel:    "h 因子",
    citationsInline: (n) => `${n} 次引用`,

    groupFirstAuthor:   "第一作者论文",
    groupCoFirstAuthor: "共同第一作者论文",
    groupCoAuthor:      "合作者论文",
    groupConference:    "会议论文",
    firstAuthorCount:   (published, preprints) => `${published} 篇已发表 + ${preprints} 篇预印本`,

    abstract:        "摘要",
    talkPhotoLink:   "照片",
    talkAbstractLink: "摘要",

    workExperience: "工作经历",
    education:      "教育经历",
  },
};
