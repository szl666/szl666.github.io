// ─────────────────────────────────────────────────────────────────────────────
// config.zh.js — Chinese content for Zhilong Song's academic homepage.
// Only the keys that differ from config.js are listed; script.js shallow-merges
// this object over USER_CONFIG, so publications, links and emails are inherited.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG_ZH = {
  name:       "宋志龙 (Zhilong Song)",
  role:       "博士后研究员",
  university: "香港科技大学",

  bio: `我的研究处在<strong class="highlight">人工智能</strong>与<strong class="highlight">材料科学</strong>的交叉前沿。这一领域的核心挑战，在于跳出已知结构的范围，创造出全新且性能优异的材料。为此，我发展用于新型稳定材料结构逆向设计的生成模型，构建引导生成模型在广阔性质空间中定向搜索的优化框架，开发能够自主模拟真实工况下催化剂、并判断预测结构能否被合成的多智能体系统，以及揭示材料性能微观机理的可解释机器学习方法。`,

  bioExtra: `这些工作已形成 22 篇论文，h 因子为 <strong id="h_index_intro" class="highlight">12</strong>，累计<strong id="total_citations_bio" class="highlight">引用</strong>。其中 9 篇为第一作者，包括 <strong class="highlight">3 篇 Nature Communications</strong>、<strong class="highlight">1 篇 Materials Horizons</strong>、<strong class="highlight">1 篇 Advanced Functional Materials</strong> 和 <strong class="highlight">1 篇 The Journal of Physical Chemistry Letters</strong>，另有 3 篇第一作者预印本正在审稿中。`,

  bioExtra2: `这些研究构成了一套彼此衔接的框架：<strong><a href="https://arxiv.org/abs/2606.05050">CatDT</a></strong> 仅凭一个体相晶体和一句话描述，即可构建可自我演化、感知工况的催化剂数字孪生；<strong><a href="https://arxiv.org/abs/2507.19307">SCGEN</a></strong> 生成兼具本征稳定性、新颖性与精确可控性的晶体结构；<strong><a href="https://www.nature.com/articles/s41467-024-55613-z">MAGECS</a></strong> 引导生成模型在全局化学空间中高效搜索具备目标性质的材料；<strong><a href="https://www.nature.com/articles/s41467-025-61778-y">CSLLM</a></strong> 预测任意晶体结构的可合成性并推荐合成路线；<strong><a href="https://arxiv.org/abs/2503.06512">FormulaAgent</a></strong> 从数据与领域知识中提炼可解释的科学公式。它们串联起从结构生成、性质优化、可合成性评估、催化过程模拟到机理理解的完整链条，为更高效的计算材料发现提供了一条可行路径。`,

  stats: [
    { value: "22",  label: "论文",   id: "stat-pubs" },
    { value: "---", label: "引用",   id: "stat-citations" },
    { value: "---", label: "h 因子", id: "stat-hindex" },
  ],

  // ── 荣誉与奖励 ────────────────────────────────────────────────────────────
  honors: [
    {
      date: "2020.01",
      title: '第十六届中国研究生数学建模竞赛（“华为杯”）一等奖',
      detail: "获奖比例 1.3%（14,014 支参赛队伍中的 188 支）",
    },
  ],

  // ── 学术报告 ──────────────────────────────────────────────────────────────
  talks: [
    {
      date:     "2024.06",
      title:    "中国化学会第 34 届学术年会 口头报告",
      location: "中国广州",
      photo:    "images/f9be59b9d29bae9d60bbb2e4a898867b.jpg",
      abstract: "https://www.chemsoc.org.cn/meeting/34th/home/viewpaper.php?id=102458",
    },
    {
      date:     "2025.03",
      title:    "美国化学会 2025 年春季会议 口头报告",
      location: "美国圣迭戈",
      photo:    "images/7b46b29e4ff6e14fd8ecad309b504d2a.jpg",
      abstract: "https://acs.digitellinc.com/live/34/session/551145",
    },
    {
      date:     "2026.04",
      title:    "首届中国“AI+新材料”大会 邀请报告",
      location: "中国广州南沙",
      topic:    "新型稳定材料结构的逆向设计和可合成性预测",
      photo:    "images/ai-new-materials-2026.jpg",
    },
    {
      date:     "2026.07",
      title:    "中国材料大会 2026 邀请报告",
      location: "中国武汉",
      topic:    "CatDT：基于自演化多智能体数字孪生的自主多相催化剂发现",
      photo:    "images/cmc-2026.jpg",
    },
  ],

  // ── 教育经历 ──────────────────────────────────────────────────────────────
  education: [
    { period: "2021.09 – 2025.06", degree: "物理学 博士",             institution: "东南大学物理学院，南京" },
    { period: "2018.09 – 2021.06", degree: "物理学 硕士",             institution: "苏州大学能源与材料创新研究院，苏州" },
    { period: "2014.09 – 2018.06", degree: "新能源科学与工程 学士",   institution: "南京理工大学，南京" },
    { period: "2011.09 – 2014.06", degree: "高中",                     institution: "苏州市第十中学，苏州" },
    { period: "2008.09 – 2011.06", degree: "初中",                     institution: "苏州振华中学，苏州" },
  ],

  // ── 工作经历 ──────────────────────────────────────────────────────────────
  experience: [
    { period: "2026.01 – 至今",     role: "博士后研究员", institution: "香港科技大学化学系，中国香港" },
    { period: "2025.06 – 2026.01", role: "助理研究员",   institution: "苏州实验室前沿材料部，中国苏州" },
    { period: "2024.07 – 2024.09", role: "研究实习生",   institution: "上海人工智能实验室前沿基础研究部，中国上海" },
    { period: "2019.10 – 2020.01", role: "研究实习生",   institution: "日本国立材料科学研究所（NIMS）材料数据平台中心，日本筑波" },
  ],

  // ── 代表性研究工作 ────────────────────────────────────────────────────────
  keyResearch: [
    {
      badge:   "arXiv: 2606.05050",
      image:   "images/catdt.png",
      title:   "基于自演化多智能体数字孪生的自主多相催化剂发现",
      url:     "https://arxiv.org/abs/2606.05050",
      authors: "<strong>宋志龙</strong>、张宗民、程立雪",
      abstract: "理论催化有望大幅加速催化剂的发现，但机器学习的预测结果往往与实验存在偏差，且局限于少数材料体系，根本原因在于缺乏一个忠实、能感知工况的模拟器。我们提出 CatDT（Catalysis Digital Twin），一个可自我演化的多智能体系统，能够为真实工作状态下的催化剂构建自主数字孪生。仅需一个体相晶体和一句自然语言的反应描述，8 个智能体与 27 个工具便可在单张 GPU 上于 5–30 分钟内完成晶面预测、表面重构、路径排序、过渡态搜索与动力学计算。其中两项创新起到决定性作用：UniMech 能够针对任意表面上的任意反应构建并剪枝反应网络，以低于穷举枚举 10³ 倍以上的代价找到主导路径；记忆增强的强化学习回路则实现了能垒计算的自动化，通过从每一次 NEB 的成功与失败中学习，将成功率从 41% 提升到 84%。在 7 个基准体系上，所有预测结果均落在实验值的 0.5–2 倍以内，而实验值本身跨越四个数量级。作为设计引擎使用时，CatDT 提出了可与铂基工业催化剂媲美的非贵金属丙烷脱氢催化剂，其中 Ni@ZrO₂ 覆盖层的模拟丙烯转换频率达 1.63 s⁻¹，选择性接近 100%。CatDT 由此表明，科学计算的可靠性并非来自模型本身的能力，而是来自围绕模型构建的工程化框架：确定性工具、持久化记忆，以及经过验证的自我改进。",
    },
    {
      badge:   "Nat. Commun. 6, 1, 6530 (2025)",
      image:   "images/csllm.png",
      title:   "基于大语言模型的三维晶体结构可合成性与前驱体精准预测",
      url:     "https://www.nature.com/articles/s41467-025-61778-y",
      authors: "<strong>宋志龙</strong>、陆帅华、巨明刚、周跫桦、王金兰",
      abstract: "评估晶体结构的可合成性，是将理论材料转化为实际应用的关键一步。然而，常用于筛选可合成结构的热力学或动力学稳定性，与真实的可合成性之间存在显著差距。为此，我们发展了晶体合成大语言模型框架（CSLLM），利用三个专用大语言模型分别预测任意三维晶体结构的可合成性、可能的合成方法与合适的前驱体。我们构建了包含可合成／不可合成晶体结构的完整数据集，并设计了一种高效的晶体结构文本表示方法用于微调大语言模型。可合成性模型达到了 98.6% 的最高准确率，显著优于基于热力学与动力学稳定性的传统筛选方法，并在复杂度远超训练数据的实验结构上展现出出色的泛化能力。此外，方法模型与前驱体模型在常见二元、三元化合物上的合成方法分类与固相合成前驱体识别准确率均超过 90%。借助 CSLLM，我们成功识别出数万个可合成的理论结构，并用高精度图神经网络模型预测了它们的 23 项关键性质。",
    },
    {
      badge:   "Nat. Commun. 6, 1, 1053 (2025)",
      image:   "images/bsa.png",
      title:   "基于生成模型与鸟群算法的 CO₂ 还原电催化剂逆向设计",
      url:     "https://www.nature.com/articles/s41467-024-55613-z",
      authors: "<strong>宋志龙</strong>、范林丰、陆帅华、凌崇益、周跫桦、王金兰",
      abstract: "直接生成具有最优性能的材料结构，是材料设计领域长期追求的目标。传统生成模型往往难以高效探索全局化学空间，其作用范围被局限在局部区域。为此，我们提出了 MAGECS 框架（Material Generation with Efficient Global Chemical Space Search），通过将鸟群算法与有监督图神经网络相结合，使生成模型能够在广阔的化学空间中有效导航，定向搜索具有目标性质的材料。将其应用于 CO₂ 还原（CO₂RR）合金电催化剂的设计，MAGECS 生成了超过 25 万个结构，高活性结构的比例达到 35%，相比随机生成提升了 2.5 倍。我们合成并表征了预测得到的五种合金——CuAl、AlPd、Sn₂Pd₅、Sn₉Pd₇ 和 CuAlSe₂，其中两种的 CO₂RR 法拉第效率接近 90%。这项工作展示了 MAGECS 在功能材料开发中的潜力，为完全自动化、人工智能驱动的材料设计铺平了道路。",
    },
    {
      badge:   "arXiv: 2507.19307",
      image:   "images/scgen.png",
      title:   "本征稳定、新颖且可控晶体结构的物理约束生成式设计",
      url:     "https://arxiv.org/abs/2507.19307",
      authors: "<strong>宋志龙</strong>、周跫桦、凌崇益、李强、程立雪、王金兰",
      abstract: "生成式逆向设计正在重塑功能晶体材料的发现方式。然而，现有生成模型难以在同一个训练好的模型中同时兼顾稳定性、新颖性与精确可控性。我们从一个关键的物理认识出发解决这一难题：晶体的多样性主要由其晶体学信息（CI，即组分、空间群与晶格）决定，而一旦 CI 固定，稳定的原子构型就只剩下少数几种。基于这一认识，我们提出了 SCGEN（stable and controllable crystal structure generation），一个包含两个部分的物理约束生成模型：变分自编码器负责采样多样且物理合理的 CI，受对称性与 Wyckoff 位置约束的优化器则借助通用机器学习势寻找稳定的原子位置。在约两百万个结构上的基准测试表明，SCGEN 在保持相当新颖性的同时达到了最优的稳定性，并能以 100% 的成功率满足任意指定的组分、空间群、晶格或它们的联合约束，且无需针对任务重新训练。应用于光催化全解水时，基于 SCGEN 的性质导向优化生成了 20 万个候选结构，并从中筛选出 22 个兼具稳定性、活性与可合成性的光催化剂。通过将 CI 生成与坐标优化解耦，SCGEN 建立了一种物理约束的逆向设计范式，能够按需给出可直接合成的晶体，而非需要事后修补、弛豫或重新训练的结构。",
    },
    {
      badge:   "arXiv: 2503.06512",
      image:   "images/formulaagent.png",
      title:   "FormulaAgent：面向自主科学公式发现的模型无关自优化智能体",
      url:     "https://arxiv.org/abs/2503.06512",
      authors: "<strong>宋志龙</strong>、周跫桦、任春锦、曹志鹏、巨明刚、张秀云、凌崇益、王金兰",
      abstract: "大语言模型已成为跨学科知识整合与预测的有力工具，但受幻觉和领域知识融入不足的限制，它们推导具有物理内涵公式的能力仍然有限。为此，我们发展了 FormulaAgent，一个模型无关的智能体，它利用领域知识进行迭代自评估，并将打过分的公式累积为记忆，从而驱动科学公式的自优化发现。消融实验表明，FormulaAgent 能够抑制幻觉，并在准确性与简洁性上同时优于传统符号回归。我们在覆盖二维与体相体系的 20 种材料性质上验证了其广泛适用性，R² 值介于 0.72 至 0.96 之间，同时保持完全的解析可解释性。尤其在二维材料可合成性任务上，该智能体发现了一个紧凑且可解释的公式（S = −HG·ER + MV + C），预测准确率达 93%，远高于基于热力学稳定性的方法（60%）。通过以物理认识引导优化、而非单纯拟合数据，这项工作为紧凑、可迁移且具有物理意义的科学公式的自动化发现建立了一种可扩展的范式。",
    },
    {
      badge:   "Acta Phys. Chim. Sin. 42, 100213 (2026)",
      image:   "images/t2mat.png",
      title:   "T2MAT：从一句话生成目标性质材料结构的通用智能体",
      url:     "https://www.sciencedirect.com/science/article/pii/S1000681825001699",
      authors: "<strong>宋志龙</strong>、陆帅华、周跫桦、王金兰",
      abstract: "人工智能生成内容（AIGC）——即无需人工干预、由人工智能系统自主产生的内容——已在多个领域显著提升了效率。然而，材料科学中的 AIGC 仍面临两方面挑战：既要高效发现超越现有数据库的新材料，又要保证晶体结构的不变性与稳定性。为此，我们开发了端到端智能体 T2MAT（text-to-material），它能够将用户输入的文本转化为超越现有数据库、具有目标性质的新材料结构逆向设计，并通过对化学空间的充分探索和全自动第一性原理验证加以保障。我们还提出了专门用于捕捉长程相互作用的图神经网络 CGTNet（Crystal Graph Transformer NETwork），大幅提升了性质预测的精度与数据效率，从而增强了逆向设计的可靠性。凭借这些工作，T2MAT 降低了对人类专业经验的依赖，加速了高性能功能材料的发现，为真正自主的材料设计开辟了道路。",
    },
    {
      badge:   "Nat. Commun. 11, 1, 3513 (2020)",
      image:   "images/miut.png",
      title:   "符号回归导出的简单描述符加速新型钙钛矿催化剂的发现",
      url:     "http://www.nature.com/articles/s41467-020-17263-9",
      authors: 'Baicheng Weng<sup>#</sup>、<strong>宋志龙<sup>#</sup></strong>、Rilong Zhu、Qingyu Yan、Qingde Sun、Corey G Grice、Yanfa Yan、尹万健',
      abstract: "符号回归（SR）是一种可解释机器学习方法，用于构建最能拟合给定数据的数学公式。在这项工作中，我们用符号回归指导具有更高析氧反应（OER）活性的新型氧化物钙钛矿催化剂的设计，并识别出一个简单的描述符 μ/t，其中 μ 与 t 分别为八面体因子与容忍因子。借助该描述符，我们加速发现了一系列 OER 活性更优的新型氧化物钙钛矿催化剂，成功合成了五种新的氧化物钙钛矿并表征了它们的 OER 活性。其中四种位列本征活性最高的氧化物钙钛矿催化剂之中。这一结果表明，符号回归在数据驱动的新材料设计与发现中具有重要潜力。",
    },
    {
      badge:   "Mater. Horiz. 10, 5, 1651-1660 (2023)",
      image:   "images/mtsr.png",
      title:   "基于多任务符号回归从多源数据中提炼钙钛矿催化剂的普适活性描述符",
      url:     "https://pubs.rsc.org/en/content/articlehtml/2023/mh/d3mh00157a",
      authors: "<strong>宋志龙</strong>、王潇、刘芳廷、周跫桦、尹万健、吴浩、邓桥伟、王金兰",
      abstract: "通过数据驱动的机器学习方法建立活性描述符，可以加速高活性、低成本电催化剂的设计。尽管文献中已积累了大量电催化剂的活性数据，但由于实验或计算条件各异，来自不同论文的数据往往不可直接比较。在这项工作中，我们采用可解释机器学习方法——多任务符号回归——从多组实验数据中共同学习，构建了无需计算或实验即可评估氧化物钙钛矿析氧反应（OER）性能的普适活性描述符，并取得了很高的精度与泛化能力。结合贝叶斯优化的参数，我们预测了一系列 OER 活性优异的双钙钛矿，并通过第一性原理计算进一步评估。最终，两种机器学习预测的镍基钙钛矿被成功合成并通过实验表征，展现出最佳的 OER 活性。这项工作为利用多源数据拓展机器学习材料设计开辟了新途径。",
    },
    {
      badge:   "J. Phys. Chem. Lett. 14, 14, 3594-3601 (2023)",
      image:   "images/mcts.png",
      title:   "基于强化学习蒙特卡洛树搜索算法的 CO₂ 活化与甲烷化合金自适应设计",
      url:     "https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.3c00242",
      authors: "<strong>宋志龙</strong>、周跫桦、陆帅华、Sae Dieb、凌崇益、王金兰",
      abstract: "数据驱动的机器学习在加速材料设计方面已取得显著成果，但高度依赖高质量数据的获取。在这项工作中，我们发展了一套自适应设计框架，能够从零数据出发、以尽可能少的第一性原理（DFT）计算搜索最优材料。该框架将自动化 DFT 计算与改进的强化学习蒙特卡洛树搜索算法（MCTS-PG）相结合。作为一个成功的应用实例，我们在 200 步 MCTS-PG 之内快速识别出用于 CO₂ 活化与甲烷化的目标合金催化剂，最终筛选出 7 个对 CO₂ 甲烷化兼具高理论活性与选择性的合金表面，并通过完整的自由能计算加以验证。这一自适应设计框架能够以极少的 DFT 计算快速探索具有目标性质的材料。",
    },
  ],

  // ── 专业技能 ──────────────────────────────────────────────────────────────
  expertise: [
    {
      category: "理论基础",
      items: [
        { label: "物理与化学", desc: "在固体物理、量子化学、密度泛函理论（DFT）与理论催化方面有扎实基础" },
        { label: "计算机科学", desc: "对生成模型、图神经网络（GNN）、自回归模型与可解释机器学习有深入理解" },
      ],
    },
    {
      category: "编程",
      items: [
        { label: "编程语言", desc: "使用 Python、Bash/Zsh、Julia、MATLAB 与 Fortran 进行科学计算、流程自动化与科研软件开发" },
        { label: "AI 辅助编程", desc: "深度使用 Claude Code、Codex、Cursor、OpenCode 与 OpenClaw 进行代码开发" },
      ],
    },
    {
      category: "机器学习与智能体系统",
      items: [
        { label: "核心工具栈", desc: "使用 PyTorch、TensorFlow 以及 GitHub 与 Hugging Face 生态进行模型开发、训练、微调与部署" },
        { label: "生成式建模", desc: "使用 GAN、VAE、扩散模型、流模型与自回归模型进行晶体结构生成" },
        { label: "智能体开发", desc: "自演化多智能体系统构建、零参数智能体强化学习微调，以及传统的全参数／LoRA／OLoRA 大模型微调" },
        { label: "可解释机器学习", desc: "利用符号回归与因果机器学习提取科学公式与机理认识" },
      ],
    },
    {
      category: "计算材料科学",
      items: [
        { label: "第一性原理计算", desc: "使用 VASP、CP2K 与 Quantum ESPRESSO 进行结构、稳定性与性质计算" },
        { label: "机器学习势", desc: "使用 GPUMD、DeePMD-kit 与通用机器学习势进行原子尺度模拟与力场开发" },
        { label: "科研工具", desc: "使用 Pymatgen、ASE 与高通量材料工作流进行数据生成、筛选与分析" },
        { label: "科研基础设施", desc: "材料数据库搭建、流程自动化、可复现实验与模型服务部署" },
      ],
    },
  ],

  // ── 兴趣爱好 ──────────────────────────────────────────────────────────────
  hobbies: [
    {
      name: "驾驶",
      icon: "car",
      description: `我很喜欢开车，高中毕业后就拿到了驾照。本科期间完成了两次横跨中国的长途自驾：
<ul>
<li><strong>2015 年夏</strong>：15 天约 5,500 公里，穿越华中与华南 11 个省份</li>
<li><strong>2016 年夏</strong>：23 天约 9,100 公里，穿越华北、西部与华中 15 个省份</li>
</ul>
这份热情也延伸到了虚拟世界——我曾是一名模拟赛车玩家，拥有完整的模拟器装备，包括力反馈方向盘、换挡器、手刹和三踏板系统。高中期间，我创下了：
<ul>
<li><a href="https://en.wikipedia.org/wiki/Dirt_3" target="_blank">尘埃 3（DiRT 3）</a>中的 <strong>7 项赛道世界纪录</strong></li>
<li><a href="https://en.wikipedia.org/wiki/WRC_3:_FIA_World_Rally_Championship" target="_blank">WRC 3</a> 中的 <strong>20 项赛道世界纪录</strong></li>
</ul>
本科期间，我把 <a href="https://assettocorsa.gg/" target="_blank">神力科莎（Assetto Corsa）</a>和 <a href="https://forza.net/" target="_blank">极限竞速（Forza Motorsport）</a>这类模拟赛车当作放松方式，读研之后便从竞技模拟赛车中<strong>退役</strong>了。这些经历让我学会毫无畏惧地面对竞争——即便面对激烈的角逐和压力，我依然保持十足的信心，全力以赴地争取机会，而不去纠结结果。`,
    },
    {
      name: "台球",
      icon: "cue",
      description: `我是一名业余台球爱好者，尤其偏爱斯诺克和中式八球：
<ul>
<li><strong>斯诺克</strong>：个人最高单杆 48 分</li>
<li><strong>中式八球</strong>：偶尔能打出清台</li>
</ul>
高中和本科期间我每周都会打球，读研和读博之后频率降到了最多每月一次。这项运动让我体会到精准、策略与耐心的重要性，这些品质在科研中同样受用。`,
    },
    {
      name: "羽毛球",
      icon: "badminton",
      description: `我打羽毛球属于休闲水平，能应付高远球、网前小球和扣杀这些基本技术，但步法不规范，移动速度也偏慢。高中时常和朋友一起打，本科之后就不太规律了。读研和读博期间我仍会偶尔打上一场，作为一种既能活动身体、又能从科研中稍作放松的方式。`,
    },
  ],
};
