// ─────────────────────────────────────────────────────────────────────────────
// config.js — All content data for Zhilong Song's academic homepage.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Zhilong Song (\u5b8b\u5fd7\u9f99)",
  initials:   "ZS",
  role:       "Postdoctoral Fellow",
  university: "The Hong Kong University of Science and Technology",
  email:      "zhilong@ust.hk",
  photo:      "images/android-chrome-512x512.png",

  bio: `My research lies at the intersection of <span class="highlight">artificial intelligence</span> and <span class="highlight">materials science</span>, focusing on developing innovative methods and agents for <span class="highlight">automated materials discovery</span>. I have contributed to research on three main topics: (1) generative models for the inverse design of functional materials, (2) agents based on large language models for synthesis prediction of crystal structures and scientific formula discovery, and (3) interpretable machine learning for catalyst design.`,

  bioExtra: `I have published 19 peer-reviewed SCI papers with total <span id="total_citations_bio" class="highlight">citations</span> and an h-index of <span id="h_index_intro" class="highlight">12</span>. Among these, I am the first author on 8 papers, including 3 in Nature Communications, 1 in Materials Horizons, 1 in Advanced Functional Materials, and 1 in The Journal of Physical Chemistry Letters. Additionally, I have two important first-authored manuscripts currently under review, available as preprints.`,

  bioExtra2: `My interdisciplinary work has led to the development of several innovative frameworks including MAGECS (Material Generation with Efficient Global Chemical Space Search) for guiding generative models to globally explore chemical space, SSAGEN (Stability and Symmetry-Assured GENerative framework) for crystal structure generation with inherent stability and symmetry, CSLLM (Crystal Synthesis Large Language Models) for accurate synthesizability prediction of crystal structures, and LLM-Feynman for universal scientific formula and theory discovery. My research has substantially improved discovery efficiency and success rates for novel functional materials.`,

  stats: [
    { value: "21",  label: "Publications", id: "stat-pubs" },
    { value: "---", label: "Citations",    id: "stat-citations" },
    { value: "---", label: "h-index",      id: "stat-hindex" },
  ],

  scholarId: "3MkXEhUAAAAJ",
  scholarStatsUrl: "https://raw.githubusercontent.com/szl666/szl666.github.io/google-scholar-stats/gs_data.json",

  links: {
    scholar:      "https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl",
    github:       "https://github.com/szl666",
    researchgate: "https://www.researchgate.net/profile/Zhilong-Song-2#/",
    orcid:        "https://orcid.org/0000-0003-3735-4366",
    steam:        "https://steamcommunity.com/id/zhilong666",
  },

  emails: [
    "zhilong@ust.hk",
    "zhilong@seu.edu.cn",
    "zhilong@email.cn",
    "songzl@szlab.ac.cn",
  ],

  // ── Honors and Awards ────────────────────────────────────────────────────
  honors: [
    {
      date: "2020.01",
      title: 'Top Prize in "HUAWEI Cup" The 16th Chinese Post-Graduate Mathematical Contest in Modeling',
      detail: "Award ratio: 1.3% (188 teams out of 14,014)",
    },
  ],

  // ── Talks ────────────────────────────────────────────────────────────────
  talks: [
    {
      date:     "2024.06",
      title:    "Oral Presentation at the 34th Academic Meeting of the Chinese Chemical Society",
      location: "Guangzhou, China",
      photo:    "images/f9be59b9d29bae9d60bbb2e4a898867b.jpg",
      abstract: "https://www.chemsoc.org.cn/meeting/34th/home/viewpaper.php?id=102458",
    },
    {
      date:     "2025.03",
      title:    "Oral Presentation at the American Chemical Society Spring 2025 Meeting",
      location: "San Diego, USA",
      photo:    "images/7b46b29e4ff6e14fd8ecad309b504d2a.jpg",
      abstract: "https://acs.digitellinc.com/live/34/session/551145",
    },
  ],

  // ── Education ────────────────────────────────────────────────────────────
  education: [
    { period: "2021.09 \u2013 2025.06", degree: "Ph.D. in Physics",                       institution: "School of Physics, Southeast University, Nanjing" },
    { period: "2018.09 \u2013 2021.06", degree: "Master in Physics",                      institution: "Soochow Institute for Energy and Materials InnovationS, Soochow University, Suzhou" },
    { period: "2014.09 \u2013 2018.06", degree: "Bachelor in New Energy Science and Technology", institution: "Nanjing University of Science and Technology, Nanjing" },
    { period: "2011.09 \u2013 2014.06", degree: "High School",                            institution: "Suzhou No.10 High School, Suzhou" },
    { period: "2008.09 \u2013 2011.06", degree: "Middle School",                          institution: "Suzhou Zhenhua Middle School, Suzhou" },
  ],

  // ── Work Experience ──────────────────────────────────────────────────────
  experience: [
    { period: "2026.01 \u2013 present", role: "Postdoctoral Fellow",   institution: "Department of Chemistry, The Hong Kong University of Science and Technology, Hong Kong, China" },
    { period: "2025.06 \u2013 2026.01", role: "Junior Research Fellow", institution: "Department of Advanced Materials, Suzhou National Laboratory, Suzhou, China" },
    { period: "2024.07 \u2013 2024.09", role: "Research Intern",       institution: "Department of Frontier Basic Research, Shanghai Artificial Intelligence Laboratory, Shanghai, China" },
    { period: "2019.10 \u2013 2020.01", role: "Research Intern",       institution: "Materials Data Platform Center, National Institute for Materials Science (NIMS), Tsukuba, Japan" },
  ],

  // ── Key Research Contributions ───────────────────────────────────────────
  keyResearch: [
    {
      badge:   "Nat. Commun. 6, 1, 6530 (2025)",
      image:   "images/csllm.png",
      title:   "Accurate prediction of synthesizability and precursors of 3D crystal structures via large language models",
      url:     "https://www.nature.com/articles/s41467-025-61778-y",
      authors: "<strong>Zhilong Song</strong>, Shuaihua Lu, Minggang Ju, Qionghua Zhou, Jinlan Wang",
      abstract: "Accessing the synthesizability of crystal structures is crucial for transforming theoretical materials into real-world applications. Nevertheless, there is a significant gap between actual synthesizability and thermodynamic or kinetic stability commonly used to screen synthesizable structures. Herein, we develop the Crystal Synthesis Large Language Models (CSLLM) framework, which utilizes three specialized LLMs to predict the synthesizability of arbitrary 3D crystal structures, possible synthetic methods, and suitable precursors, respectively. We construct a comprehensive dataset including synthesizable/non-synthesizable crystal structures and develop an efficient text representation for crystal structures to fine-tune LLMs. Our Synthesizability LLM achieves state-of-the-art accuracy (98.6%), significantly outperforming traditional synthesizability screening based on thermodynamic and kinetic stability. Its outstanding generalization ability is further demonstrated in experimental structures with complexity considerably exceeding that of the training data. Furthermore, both the Method and Precursor LLMs exceed 90% accuracy in classifying possible synthetic methods and identifying solid-state synthetic precursors for common binary and ternary compounds, respectively. Leveraging CSLLM, tens of thousands of synthesizable theoretical structures are successfully identified, with their 23 key properties predicted using accurate graph neural network models.",
    },
    {
      badge:   "Nat. Commun. 6, 1, 1053 (2025)",
      image:   "images/bsa.png",
      title:   "Inverse design of promising electrocatalysts for CO\u2082 reduction via generative models and bird swarm algorithm",
      url:     "https://www.nature.com/articles/s41467-024-55613-z",
      authors: "<strong>Zhilong Song</strong>, Linfeng Fan, Shuaihua Lu, Chongyi Ling, Qionghua Zhou, Jinlan Wang",
      abstract: "Directly generating material structures with optimal properties is a long-standing goal in material design. Traditional generative models often struggle to efficiently explore the global chemical space, limiting their utility to localized space. Here, we present a framework named Material Generation with Efficient Global Chemical Space Search (MAGECS) that addresses this challenge by integrating the bird swarm algorithm and supervised graph neural networks, enabling effective navigation of generative models in the immense chemical space towards materials with target properties. Applied to the design of alloy electrocatalysts for CO\u2082 reduction (CO\u2082RR), MAGECS generates over 250,000 structures, achieving a 2.5-fold increase in high-activity structures (35%) compared to random generation. Five predicted alloys\u2014 CuAl, AlPd, Sn\u2082Pd\u2085, Sn\u2089Pd\u2087, and CuAlSe\u2082 are synthesized and characterized, with two showing around 90% Faraday efficiency for CO\u2082RR. This work highlights the potential of MAGECS to revolutionize functional material development, paving the way for fully automated, artificial intelligence-driven material design.",
    },
    {
      badge:   "arXiv: 2507.19307",
      image:   "images/ssagen.png",
      title:   "Stability and Symmetry-Assured Crystal Structure Generation for Inverse Design of Photocatalysts in Water Splitting",
      url:     "https://arxiv.org/abs/2507.19307",
      authors: "<strong>Zhilong Song</strong>, Chongyi Ling, Qiang Li, Qionghua Zhou, Jinlan Wang",
      abstract: "Generative models are revolutionizing materials discovery by enabling inverse design-direct generation of structures from desired properties. However, existing approaches often struggle to ensure inherent stability and symmetry while precisely generating structures with target compositions, space groups, and lattices without fine-tuning. Here, we present SSAGEN (Stability and Symmetry-Assured GENerative framework), which overcomes these limitations by decoupling structure generation into two distinct stages: crystal information (lattice, composition, and space group) generation and coordinate optimization. SSAGEN first generates diverse yet physically plausible crystal information, then derives stable and metastable atomic positions through universal machine learning potentials, combined global and local optimization with symmetry and Wyckoff position constraints, and dynamically refined search spaces. Compared to prior generative models such as CDVAE, SSAGEN improves the thermodynamic and kinetic stability of generated structures by 148% and 180%, respectively, while inherently satisfying target compositions, space groups, and lattices. Applied to photocatalytic water splitting (PWS), SSAGEN generates 200,000 structures-81.2% novel-with 3,318 meeting all stability and band gap criteria. Density functional theory (DFT) validation confirms 95.6% structures satisfy PWS requirements, with 24 optimal candidates identified through comprehensive screening based on electronic structure, thermodynamic, kinetic, and aqueous stability criteria. SSAGEN not only precisely generates materials with desired crystal information but also ensures inherent stability and symmetry, establishing a new paradigm for targeted inverse design of functional materials.",
    },
    {
      badge:   "arXiv: 2503.06512",
      image:   "images/feynman.png",
      title:   "LLM-Feynman: Leveraging Large Language Models for Universal Scientific Formula and Theory Discovery",
      url:     "https://arxiv.org/abs/2503.06512",
      authors: "<strong>Zhilong Song</strong>, Minggang Ju, Chunjin Ren, Qiang Li, Chongyi Li, Qionghua Zhou, Jinlan Wang",
      abstract: "Distilling underlying principles from data has historically driven scientific breakthroughs. However, conventional data\u2010driven machine learning often produces complex models that lack interpretability and generalization due to insufficient domain expertise. Here, we present LLM-Feynman, a novel agent that leverages large language models (LLMs) alongside systematic optimization to derive concise, interpretable formulas from data and domain knowledge. Our method integrates automated feature engineering, LLM-guided symbolic regression with self-evaluation, and Monte Carlo tree search to reduce LLM hallucination, thereby enhancing formula discovery. The embedding of domain knowledge simplifies the formula, while self-evaluation based on this knowledge further minimizes prediction errors, surpassing conventional symbolic regression in accuracy and interpretability. Validation on datasets from Feynman physics lectures confirms that LLM-Feynman can rediscover over 90% real physical formulas. Moreover, when applied to four key materials science tasks -- from classifying the synthesizability of 2D and perovskite structures to predicting ionic conductivity in lithium solid-state electrolytes and GW bandgaps in 2D materials -- LLM-Feynman consistently yields interpretable formula with accuracy exceeding 90% and R2 values above 0.8. By transcending mere data fitting through the integration of deep domain knowledge, LLM-Feynman establishes a new paradigm for the automated discovery of generalizable scientific formula and theory across disciplines.",
    },
    {
      badge:   "Acta Phys. Chim. Sin., 100213 (2025)",
      image:   "images/t2mat.png",
      title:   "T2MAT (text-to-materials): A universal agent for generating material structures with goal properties from a single sentence",
      url:     "https://www.sciencedirect.com/science/article/pii/S1000681825001699",
      authors: "<strong>Zhilong Song</strong>, Shuaihua Lu, Qionghua Zhou, Jinlan Wang",
      abstract: "Artificial Intelligence-Generated Content (AIGC)\u2014content autonomously produced by AI systems without human intervention\u2014has significantly boosted efficiency across various fields. However, AIGC in material science faces challenges in efficiently discovering novel materials that surpass existing databases, while ensuring the invariance and stability of crystal structures. To address these challenges, we develop T2MAT (text-to-material), an end-to-end agent that transforms user-input text into the inverse design of novel material structures with target properties beyond existing database, enabled by comprehensive exploration of chemical space and fully automated first-principles validation. Furthermore, we propose CGTNet (Crystal Graph Transformer NETwork), a graph neural network specifically designed to capture long-range interactions, which dramatically improves the accuracy and data efficiency of property predictions and thereby strengthens the reliability of inverse design. Through these contributions, T2MAT reduces the reliance on human expertise and accelerates the discovery of high-performance functional materials, paving the way for truly autonomous material design.",
    },
    {
      badge:   "Nat. Commun. 11, 1, 3513 (2020)",
      image:   "images/miut.png",
      title:   "Simple descriptor derived from symbolic regression accelerating the discovery of new perovskite catalysts",
      url:     "http://www.nature.com/articles/s41467-020-17263-9",
      authors: 'Baicheng Weng<sup>#</sup>, <strong>Zhilong Song<sup>#</sup></strong>, Rilong Zhu, Qingyu Yan, Qingde Sun, Corey G Grice, Yanfa Yan, Wan-Jian Yin',
      abstract: "Symbolic regression (SR) is an approach of interpretable machine learning for building mathematical formulas that best fit certain datasets. In this work, SR is used to guide the design of new oxide perovskite catalysts with improved oxygen evolution reaction (OER) activities. A simple descriptor, \u03bc/t, where \u03bc and t are the octahedral and tolerance factors, respectively, is identified, which accelerates the discovery of a series of new oxide perovskite catalysts with improved OER activity. We successfully synthesise five new oxide perovskites and characterise their OER activities. Remarkably, four of them are among the oxide perovskite catalysts with the highest intrinsic activities. Our results demonstrate the potential of SR for accelerating the data-driven design and discovery of new materials with improved properties.",
    },
    {
      badge:   "Mater. Horiz. 10, 5, 1651-1660 (2023)",
      image:   "images/mtsr.png",
      title:   "Distilling universal activity descriptors for perovskite catalysts from multiple data sources via multi-task symbolic regression",
      url:     "https://pubs.rsc.org/en/content/articlehtml/2023/mh/d3mh00157a",
      authors: "<strong>Zhilong Song</strong>, Xiao Wang, Fangting Liu, Qionghua Zhou, Wan-Jian Yin, Hao Wu, Weiqiao Deng, Jinlan Wang",
      abstract: "Developing activity descriptors via data-driven machine learning (ML) methods can speed up the design of highly active and low-cost electrocatalysts. Despite the fact that a large amount of activity data for electrocatalysts is stored in the literature, data from different publications are not comparable due to different experimental or computational conditions. In this work, an interpretable ML method, multi-task symbolic regression, was adopted to learn from data in multiple experiments. A universal activity descriptor to evaluate the oxygen evolution reaction (OER) performance of oxide perovskites free of calculations or experiments was constructed and reached high accuracy and generalization ability. Utilizing this descriptor with Bayesian-optimized parameters, a series of compelling double perovskites with excellent OER activity were predicted and further evaluated using first-principles calculations. Finally, the two ML-predicted nickel-based perovskites with the best OER activity were successfully synthesized and characterized experimentally. This work opens a new way to extend machine-learning material design by utilizing multiple data sources.",
    },
    {
      badge:   "J. Phys. Chem. Lett. 14, 14, 3594-3601 (2023)",
      image:   "images/mcts.png",
      title:   "Adaptive Design of Alloys for CO\u2082 Activation and Methanation via Reinforcement Learning Monte Carlo Tree Search Algorithm",
      url:     "https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.3c00242",
      authors: "<strong>Zhilong Song</strong>, Qionghua Zhou, Shuaihua Lu, Sae Dieb, Chongyi Ling, Jinlan Wang",
      abstract: "Data-driven machine learning (ML) has earned remarkable achievements in accelerating materials design, while it heavily relies on high-quality data acquisition. In this work, we develop an adaptive design framework for searching for optimal materials starting from zero data and with as few DFT calculations as possible. This framework integrates automatic density functional theory (DFT) calculations with an improved Monte Carlo tree search via reinforcement learning algorithm (MCTS-PG). As a successful example, we apply it to rapidly identify the desired alloy catalysts for CO\u2082 activation and methanation within 200 MCTS-PG steps. To this end, seven alloy surfaces with high theoretical activity and selectivity for CO\u2082 methanation are screened out and further validated by comprehensive free energy calculations. Our adaptive design framework enables the fast computational exploration of materials with desired properties via minimal DFT calculations.",
    },
  ],

  // ── Publications (full list, grouped) ────────────────────────────────────
  publications: {
    firstAuthor: [
      {
        num: 1, year: 2025,
        text: '<strong>Z. Song</strong>, S. Lu, M. Ju, et al. "Accurate prediction of synthesizability and precursors of 3D crystal structures via large language models."',
        venue: "Nature Communications",
        venueDetail: "2025, 16(1): 6530",
        url: "https://www.nature.com/articles/s41467-025-61778-y",
      },
      {
        num: 2, year: 2025,
        text: '<strong>Z. Song</strong>, L. Fan, S. Lu, et al. "Inverse design of promising alloys for electrocatalytic CO\u2082 reduction via generative graph neural networks combined with bird swarm algorithm."',
        venue: "Nature Communications",
        venueDetail: "2025, 16(1): 1053",
        url: "https://www.nature.com/articles/s41467-024-55613-z",
      },
      {
        num: 3, year: 2023,
        text: '<strong>Z. Song</strong>, X. Wang, F. Liu, et al. "Distilling universal activity descriptors for perovskite catalysts from multiple data sources via multi-task symbolic regression."',
        venue: "Materials Horizons",
        venueDetail: "2023, 10(5): 1651-1660",
        url: "https://pubs.rsc.org/en/content/articlehtml/2023/mh/d3mh00157a",
      },
      {
        num: 4, year: 2023,
        text: '<strong>Z. Song</strong>, Q. Zhou, S. Lu, et al. "Adaptive design of alloys for CO\u2082 activation and methanation via reinforcement learning Monte Carlo tree search algorithm."',
        venue: "The Journal of Physical Chemistry Letters",
        venueDetail: "2023, 14(14): 3594-3601",
        url: "https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.3c00242",
      },
      {
        num: 5, year: 2025,
        text: '<strong>Z. Song</strong>, C. Ling, Q. Li, et al. "Stability and Symmetry-Assured Crystal Structure Generation for Inverse Design of Photocatalysts in Water Splitting."',
        venue: "arXiv:2507.19307",
        venueDetail: "2025 (Under review)",
        url: "https://arxiv.org/abs/2507.19307",
      },
      {
        num: 6, year: 2025,
        text: '<strong>Z. Song</strong>, M. Ju, C. Ren, et al. "LLM-Feynman: Leveraging Large Language Models for Universal Scientific Formula and Theory Discovery."',
        venue: "arXiv:2503.06512",
        venueDetail: "2025 (Under review)",
        url: "https://arxiv.org/abs/2503.06512",
      },
      {
        num: 7, year: 2025,
        text: '<strong>Z. Song</strong>, S. Lu, Q. Zhou, et al. "T2MAT (text-to-materials): A universal agent for generating material structures with goal properties from a single sentence."',
        venue: "Acta Physico-Chimica Sinica",
        venueDetail: "2025: 100213",
        url: "https://www.sciencedirect.com/science/article/pii/S1000681825001699",
      },
      {
        num: 8, year: 2020,
        text: '<strong>Z. Song</strong>, X. Chen, F. Meng, et al. "Machine learning in materials design: Algorithm and application."',
        venue: "Chinese Physics B",
        venueDetail: "2020, 29(11): 116103",
        url: "https://iopscience.iop.org/article/10.1088/1674-1056/abc0e3",
      },
    ],
    coFirstAuthor: [
      {
        num: 9, year: 2020,
        text: 'B. Weng<sup>#</sup>, <strong>Z. Song<sup>#</sup></strong>, R. Zhu, et al. "Simple descriptor derived from symbolic regression accelerating the discovery of new perovskite catalysts."',
        venue: "Nature Communications",
        venueDetail: "2020, 11(1): 3513",
        url: "http://www.nature.com/articles/s41467-020-17263-9",
        note: "Equal contribution",
      },
      {
        num: 10, year: 2024,
        text: 'M. Wu<sup>#</sup>, <strong>Z. Song<sup>#</sup></strong>, Y. Cui, et al. "Machine learning-assisted design of nitrogen-rich covalent triazine frameworks photocatalysts."',
        venue: "Advanced Functional Materials",
        venueDetail: "2024: 2413453",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/adfm.202413453",
        note: "Equal contribution",
      },
    ],
    coAuthor: [
      {
        num: 11, year: 2026,
        text: 'X. Chen, <strong>Z. Song</strong>, S. Lu, et al. "Continuous discovery of novel 2D materials via dual active learning-driven generative models."',
        venue: "National Science Review",
        venueDetail: "2026: nwag101",
        url: "https://academic.oup.com/nsr/advance-article-abstract/doi/10.1093/nsr/nwag101/8475385",
      },
      {
        num: 12, year: 2020,
        text: 'Y. Su, <strong>Z. Song</strong>, W. Zhu, et al. "Visible-light photocatalytic CO\u2082 reduction using metal-organic framework derived Ni(OH)\u2082 nanocages: a synergy from multiple light reflection, static charge transfer, and oxygen vacancies."',
        venue: "ACS Catalysis",
        venueDetail: "2020, 11(1): 345-354",
        url: "https://pubs.acs.org/doi/10.1021/acscatal.0c04020",
      },
      {
        num: 13, year: 2022,
        text: 'Z. Sun, <strong>Z. Song</strong>, W.J. Yin. "Going beyond the d-band center to describe CO\u2082 activation on single-atom alloys."',
        venue: "Advanced Energy and Sustainability Research",
        venueDetail: "2022, 3(2): 2100152",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/aesr.202100152",
      },
      {
        num: 14, year: 2020,
        text: 'S. Dieb, <strong>Z. Song</strong>, W.J. Yin, et al. "Optimization of depth-graded multilayer structure for x-ray optics using machine learning."',
        venue: "Journal of Applied Physics",
        venueDetail: "2020, 128(7): 074901",
        url: "http://aip.scitation.org/doi/10.1063/5.0012351",
      },
      {
        num: 15, year: 2025,
        text: 'X. Chen, <strong>Z. Song</strong>, S. Lu, et al. "AI-driven materials design: paradigm shift from small data to big data."',
        venue: "SCIENTIA SINICA Chimica",
        venueDetail: "2025, 55(6): 1648-1659",
        url: "https://doi.org/10.1360/SSC-2025-0048",
      },
      {
        num: 16, year: 2025,
        text: 'W. Lin, F. Liu, <strong>Z. Song</strong>, et al. "Feature-Extended Descriptor Construction for Prediction of Consecutive Elementary Reaction Energies in Methane Oxidation."',
        venue: "Chemistry of Materials",
        venueDetail: "2025, 37(12): 4499\u20134510",
        url: "https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.5c00930",
      },
      {
        num: 17, year: 2022,
        text: 'S. Lu, Q. Zhou, X. Chen, <strong>Z. Song</strong>, et al. "Inverse design with deep generative models: next step in materials discovery."',
        venue: "National Science Review",
        venueDetail: "2022, 9(8): nwac111",
        url: "https://academic.oup.com/nsr/article/doi/10.1093/nsr/nwac111/6605930",
      },
      {
        num: 18, year: 2019,
        text: 'H. Lin, J. Mao, M. Qin, <strong>Z. Song</strong>, et al. "Single-phase alkylammonium cesium lead iodide quasi-2D perovskites for color-tunable and spectrum-stable red LED."',
        venue: "Nanoscale",
        venueDetail: "2019, 11(36): 16907-16918",
        url: "https://xlink.rsc.org/?DOI=C9NR02706H",
      },
      {
        num: 19, year: 2019,
        text: 'H.L. Zhu, H. Lin, <strong>Z. Song</strong>, et al. "Achieving high-quality Sn\u2013Pb perovskite films on complementary metal-oxide-semiconductor-compatible metal/silicon substrates for efficient imaging array."',
        venue: "ACS Nano",
        venueDetail: "2019, 13(10): 11800-11808",
        url: "https://pubs.acs.org/doi/10.1021/acsnano.9b05774",
      },
      {
        num: 20, year: 2024,
        text: 'X. Gao, Y. Wu, Y. Zhang, X. Chen, <strong>Z. Song</strong>, et al. "How the spacer influences the stability of 2D perovskites?."',
        venue: "Small Methods",
        venueDetail: "2024: 2401172",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/smtd.202401172",
      },
    ],
    conference: [
      {
        num: 21, year: 2020,
        text: '<strong>Z. Song</strong>, X. Chen, S. Dieb, et al. "Design of thermodynamically stable perovskites using machine learning."',
        venue: "The 67th JSAP Spring Meeting 2020",
        venueDetail: "The Japan Society of Applied Physics, 2020: 3632-3632",
        url: "https://www.jstage.jst.go.jp/article/jsapmeeting/2020.1/0/2020.1_3632/_article/-char/ja/",
      },
    ],
  },

  // ── Technical Expertise ──────────────────────────────────────────────────
  expertise: [
    {
      category: "Theoretical Foundations",
      items: [
        { label: "Physics & Chemistry", desc: "Solid theoretical foundation in solid-state physics, quantum chemistry, density functional theory (DFT), and theoretical catalysis" },
        { label: "Computer Science", desc: "Deep understanding of interpretable models, generative models, graph neural networks (GNNs) and autoregressive models" },
      ],
    },
    {
      category: "Programming",
      items: [
        { label: "Languages", desc: "Proficient in Python, Shell scripting (Bash, Zsh, Perl), Julia, MATLAB and Fortran" },
        { label: "AI-Powered Development", desc: "Proficient in AI-assisted development tools like Cursor and Claude Code to enhance productivity and achieve vibe coding" },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { label: "General Frameworks", desc: "Expert in PyTorch and TensorFlow" },
        { label: "Materials-Specific ML", desc: "Generative models (GAN, VAE, Diffusion, Flow) for materials structure generation; Graph Neural Networks (GNN) for materials property prediction; Universal machine learning potentials" },
        { label: "Large Language Models", desc: "Full parameter and LoRA fine-tuning, agent construction, and reinforcement learning fine-tuning" },
        { label: "Interpretable ML", desc: "Development and application of interpretable ML algorithms such as symbolic regression" },
        { label: "Infrastructure", desc: "Materials database development and deployment" },
      ],
    },
    {
      category: "Computational Materials Science",
      items: [
        { label: "First-Principles Calculations", desc: "Expert in VASP, CP2K, Quantum ESPRESSO for material property calculations" },
        { label: "Machine Learning Potentials", desc: "Proficient in GPUMD and DeePMD-kit for force field training and development" },
        { label: "Specialized Tools", desc: "Expert in Pymatgen and ASE (Atomic Simulation Environment) for general-purpose materials data manipulation" },
      ],
    },
  ],

  // ── Hobbies ──────────────────────────────────────────────────────────────
  hobbies: [
    {
      name: "Driving",
      icon: "car",
      description: `I'm passionate about driving and got my license right after graduating from high school. During my undergraduate years, I completed two long self-driving adventures across China:
<ul>
<li><strong>Summer 2015</strong>: ~5,500 km journey in 15 days, traversing 11 provinces across central and southern China</li>
<li><strong>Summer 2016</strong>: ~9,100 km journey in 23 days, traversing 15 provinces across northern, western, and central China</li>
</ul>
My passion for driving extends to the virtual world - I was once a sim racer with a complete racing simulator setup, including a force feedback steering wheel, shifter, handbrake, and three-pedal system. During high school, I set:
<ul>
<li><strong>7 track world records</strong> in <a href="https://en.wikipedia.org/wiki/Dirt_3" target="_blank">DiRT 3</a></li>
<li><strong>20 track world records</strong> in <a href="https://en.wikipedia.org/wiki/WRC_3:_FIA_World_Rally_Championship" target="_blank">WRC 3</a></li>
</ul>
Throughout my undergraduate years, I enjoyed racing simulators like <a href="https://assettocorsa.gg/" target="_blank">Assetto Corsa</a> and <a href="https://forza.net/" target="_blank">Forza Motorsport</a> for relaxation, and I <strong>retired</strong> from competitive sim racing after starting my master's degree. These experiences have taught me to embrace competition fearlessly - even when facing intense competition and pressure, I maintain 100% confidence and give my all to pursue opportunities, regardless of the outcome.`,
    },
    {
      name: "Cue Sports",
      icon: "cue",
      description: `I'm an amateur billiards player with a particular fondness for snooker and Chinese eight-ball:
<ul>
<li><strong>Snooker</strong>: Personal best break of 48 points</li>
<li><strong>Chinese Eight-ball</strong>: Occasional table clearances</li>
</ul>
During high school and undergraduate years, I played weekly, though this reduced to at most once a month during my master's and Ph.D. studies. These sports taught me the importance of precision, strategy, and patience - qualities that serve me well in research.`,
    },
    {
      name: "Badminton",
      icon: "badminton",
      description: `I enjoy playing badminton at a recreational level. I can manage basic shots like clears, net drops, and smashes, but I can't do proper footwork and my movement speed is slow. During high school, I played frequently with friends, though this became less regular during my undergraduate years. Throughout my master's and PhD studies, I still play occasionally as a fun way to stay active and take a break from research.`,
    },
  ],
};
