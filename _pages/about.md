---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

My research lies at the intersection of artificial intelligence and materials science, focusing on developing innovative methods and agents for automated materials discovery. I have contributed to research on four main topics: (1) generative models for the inverse design of functional materials, (2) agents based on large language models for synthesis prediction of crystal structures and scientific formula discovery, (3) multi-agent systems that autonomously simulate working catalysts, and (4) interpretable machine learning for catalyst design. 

I have published 22 papers with an h-index of <span id="h_index_intro">12</span>, receiving total <a href='https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>. Among these, I am the first author on 9 papers, including 3 in Nature Communications, 1 in Materials Horizons, 1 in Advanced Functional Materials, and 1 in The Journal of Physical Chemistry Letters. Additionally, I have three important first-authored manuscripts currently under review, available as preprints. 

My interdisciplinary work has led to the development of several innovative frameworks including CatDT (Catalysis Digital Twin), a self-evolving multi-agent system that builds a condition-aware digital twin of a working catalyst from a bulk crystal and a single sentence, MAGECS (Material Generation with Efficient Global Chemical Space Search) for guiding generative models to globally explore chemical space, SCGEN (Stable and Controllable crystal structure GENeration) for physics-grounded generation of inherently stable, novel and controllable crystals, CSLLM (Crystal Synthesis Large Language Models) for accurate synthesizability prediction of crystal structures, and FormulaAgent for universal scientific formula and theory discovery. My research has substantially improved discovery efficiency and success rates for novel functional materials.

# 🎖 Honors and Awards
- *2020.01* Top Prize in "HUAWEI Cup" The 16th Chinese Post-Graduate Mathematical Contest in Modeling, Award ratio: 1.3% (188 teams out of 14,014)

# 📖 Education
- *2021.09 - 2025.06*, Ph.D. in Physics, School of Physics, Southeast University, Nanjing
- *2018.09 - 2021.06*, Master in Physics, Soochow Institute for Energy and Materials InnovationS, Soochow University, Suzhou
- *2014.09 - 2018.06*, Bachelor in New Energy Science and Technology, Nanjing University of Science and Technology, Nanjing
- *2011.09 - 2014.06*, High School, Suzhou No.10 High School, Suzhou
- *2008.09 - 2011.06*, Middle School, Suzhou Zhenhua Middle School, Suzhou

# 💬 Talks
- *2024.06*, Oral Presentation at the 34th Academic Meeting of the Chinese Chemical Society, Guangzhou, China [[Photo]](images/f9be59b9d29bae9d60bbb2e4a898867b.jpg) [[Abstract]](https://www.chemsoc.org.cn/meeting/34th/home/viewpaper.php?id=102458)
- *2025.03*, Oral Presentation at the American Chemical Society Spring 2025 Meeting, San Diego, USA [[Photo]](images/7b46b29e4ff6e14fd8ecad309b504d2a.jpg) [[Abstract]](https://acs.digitellinc.com/live/34/session/551145)
- *2026.04*, Invited Talk at the 1st China "AI + Advanced Materials" Conference, Nansha, Guangzhou, China — *Inverse design and synthesizability prediction of novel stable material structures* [[Photo]](images/ai-new-materials-2026.jpg)
- *2026.07*, Invited Talk at the Chinese Materials Conference 2026, Wuhan, China — *CatDT: Autonomous heterogeneous catalyst discovery with a self-evolving multi-agent digital twin* [[Photo]](images/cmc-2026.jpg)
  
# 💼 Work Experience
- *2026.01 - present*, **Postdoctoral Fellow**, Department of Chemistry, **The Hong Kong University of Science and Technology**, Hong Kong, China
- *2025.06 - 2026.01*, **Junior Research Fellow**, Department of Frontier Materials, **Suzhou National Laboratory**, Suzhou, China
- *2024.07 - 2024.09*, **Research Intern**, Department of Frontier Basic Research, **Shanghai Artificial Intelligence Laboratory**, Shanghai, China
- *2019.10 - 2020.01*, **Research Intern**, Materials Data Platform Center, **National Institute for Materials Science (NIMS)**, Tsukuba, Japan

# 📝 Key Research Contributions

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        arXiv: 2606.05050
      </div>
      <img src='images/catdt.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Autonomous heterogeneous catalyst discovery with a self-evolving multi-agent digital twin](https://arxiv.org/abs/2606.05050)

**Zhilong Song**, Zongmin Zhang, Lixue Cheng

Theoretical catalysis promises rapid catalyst discovery, yet machine-learning predictions often deviate from experiment and stay confined to narrow material families for lack of a faithful, condition-aware simulator. We present CatDT (Catalysis Digital Twin), a self-evolving multi-agent system that builds an autonomous digital twin of a working catalyst. From a bulk crystal and a natural-language reaction description, eight agents and 27 tools predict facets, reconstruct surfaces, rank pathways, locate transition states, and compute kinetics in 5–30 min on one GPU. Two innovations are decisive. UniMech builds and prunes the reaction network for any reaction on any surface, finding dominant pathways at over 10<sup>3</sup>× lower cost than exhaustive enumeration. A memory-augmented reinforcement loop then automates barrier calculation, learning from each NEB success and failure to lift its success rate from 41% to 84% across 600 surfaces. Across seven benchmarks every prediction lies within 0.5–2 times experiment over four orders of magnitude. Deployed as a design engine, CatDT proposes non-precious propane-dehydrogenation catalysts that rival the platinum benchmark, including a Ni@ZrO<sub>2</sub> overlayer at a simulated propylene turnover frequency of 1.63 s<sup>-1</sup> and ~100% selectivity. CatDT thus demonstrates that scientific reliability comes not from raw model capability but from the engineered harness around it: deterministic tools, persistent memory, and verified self-improvement.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        Nat. Commun. 6, 1, 6530 (2025)
      </div>
      <img src='images/csllm.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Accurate prediction of synthesizability and precursors of 3D crystal structures via large language models](https://www.nature.com/articles/s41467-025-61778-y)

**Zhilong Song**, Shuaihua Lu, Minggang Ju, Qionghua Zhou, Jinlan Wang

Accessing the synthesizability of crystal structures is crucial for transforming theoretical materials into real-world applications. Nevertheless, there is a significant gap between actual synthesizability and thermodynamic or kinetic stability commonly used to screen synthesizable structures. Herein, we develop the Crystal Synthesis Large Language Models (CSLLM) framework, which utilizes three specialized LLMs to predict the synthesizability of arbitrary 3D crystal structures, possible synthetic methods, and suitable precursors, respectively. We construct a comprehensive dataset including synthesizable/non-synthesizable crystal structures and develop an efficient text representation for crystal structures to fine-tune LLMs. Our Synthesizability LLM achieves state-of-the-art accuracy (98.6%), significantly outperforming traditional synthesizability screening based on thermodynamic and kinetic stability. Its outstanding generalization ability is further demonstrated in experimental structures with complexity considerably exceeding that of the training data. Furthermore, both the Method and Precursor LLMs exceed 90% accuracy in classifying possible synthetic methods and identifying solid-state synthetic precursors for common binary and ternary compounds, respectively. Leveraging CSLLM, tens of thousands of synthesizable theoretical structures are successfully identified, with their 23 key properties predicted using accurate graph neural network models. 
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        Nat. Commun. 6, 1, 1053 (2025)
      </div>
      <img src='images/bsa.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Inverse design of promising electrocatalysts for CO₂ reduction via generative models and bird swarm algorithm](https://www.nature.com/articles/s41467-024-55613-z)

**Zhilong Song**, Linfeng Fan, Shuaihua Lu, Chongyi Ling, Qionghua Zhou, Jinlan Wang

Directly generating material structures with optimal properties is a long-standing goal in material design. Traditional generative models often struggle to efficiently explore the global chemical space, limiting their utility to localized space. Here, we present a framework named Material Generation with Efficient Global Chemical Space Search (MAGECS) that addresses this challenge by integrating the bird swarm algorithm and supervised graph neural networks, enabling effective navigation of generative models in the immense chemical space towards materials with target properties. Applied to the design of alloy electrocatalysts for CO<sub>2</sub> reduction (CO<sub>2</sub>RR), MAGECS generates over 250,000 structures, achieving a 2.5-fold increase in high-activity structures (35%) compared to random generation. Five predicted alloys— CuAl, AlPd, Sn<sub>2</sub>Pd<sub>5</sub>, Sn<sub>9</sub>Pd<sub>7</sub>, and CuAlSe<sub>2</sub> are synthesized and characterized, with two showing around 90% Faraday efficiency for CO<sub>2</sub>RR. This work highlights the potential of MAGECS to revolutionize functional material development, paving the way for fully automated, artificial intelligence-driven material design.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        arXiv: 2507.19307
      </div>
      <img src='images/scgen.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Physics-grounded generative design of inherently stable, novel and controllable crystal structures](https://arxiv.org/abs/2507.19307)

**Zhilong Song**, Qionghua Zhou, Chongyi Ling, Qiang Li, Lixue Cheng, Jinlan Wang

Generative inverse design is reshaping the discovery of functional crystalline materials. Yet current generative models face challenges in simultaneously achieving stability, novelty, and precise controllability in a single trained model. We address these challenges with a key physical insight: the diversity of crystals is governed by their crystallographic information (CI), namely composition, space group and lattice, whereas only a few stable atomic configurations remain once the CI is fixed. Built on this insight, we introduce SCGEN (stable and controllable crystal structure generation), a physics-grounded generative model with two components. A variational autoencoder samples diverse, physically plausible CI, and a symmetry- and Wyckoff-position-constrained optimizer locates stable atomic positions via universal machine-learning potentials. Benchmarked on roughly two million structures, SCGEN reaches state-of-the-art stability while preserving comparable novelty, and it satisfies any specified composition, space group, lattice or joint constraint with 100% success and no task-specific retraining. Applied to photocatalytic water splitting, property-guided optimization with SCGEN generates 200,000 candidate structures and identifies the top 22 stable, active and synthesizable photocatalysts. By decoupling CI generation from coordinate optimization, SCGEN establishes a physics-grounded inverse-design paradigm that yields synthesis-ready crystals on demand, rather than structures requiring post hoc repair, relaxation, or retraining.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        arXiv: 2503.06512
      </div>
      <img src='images/formulaagent.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[FormulaAgent: A Model-Agnostic Self-Optimizing Agent for Autonomous Scientific Formula Discovery](https://arxiv.org/abs/2503.06512)

**Zhilong Song**, Qionghua Zhou, Chunjin Ren, Zhipeng Cao, Minggang Ju, Xiuyun Zhang, Chongyi Ling, Jinlan Wang

Large Language Models (LLMs) have emerged as powerful tools for knowledge integration and prediction across diverse scientific disciplines. However, their ability to derive physically grounded formulas remains limited by hallucination and insufficient domain expertise integration. Here, we develop FormulaAgent, a model-agnostic agent that leverages domain knowledge for iterative self-evaluation, accumulating scored formulas as memory to drive self-optimizing discovery of scientific formulas. Ablation studies show that FormulaAgent suppresses hallucination while outperforming conventional symbolic regression in both accuracy and simplicity. We demonstrate broad applicability across 20 material properties spanning both 2D and bulk systems, with R<sup>2</sup> values ranging from 0.72 to 0.96 while preserving full analytical interpretability. Notably, for 2D material synthesizability, the agent uncovers a compact, interpretable formula (S = −HG·ER + MV + C) achieving 93% predictive accuracy, substantially outperforming thermodynamic stability-based methods (60%). By prioritizing physically informed optimization over purely data-driven fitting, this work establishes a scalable paradigm for automated discovery of compact, transferable, and physically meaningful scientific formulas.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        Acta Phys. Chim. Sin. 42, 100213 (2026)
      </div>
      <img src='images/t2mat.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[T2MAT (text-to-materials): A universal agent for generating material structures with goal properties from a single sentence](https://www.sciencedirect.com/science/article/pii/S1000681825001699)

**Zhilong Song**, Shuaihua Lu, Qionghua Zhou, Jinlan Wang

Artificial Intelligence-Generated Content (AIGC)—content autonomously produced by AI systems without human intervention—has significantly boosted efficiency across various fields. However, AIGC in material science faces challenges in efficiently discovering novel materials that surpass existing databases, while ensuring the invariance and stability of crystal structures. To address these challenges, we develop T2MAT (text-to-material), an end-to-end agent that transforms user-input text into the inverse design of novel material structures with target properties beyond existing database, enabled by comprehensive exploration of chemical space and fully automated first-principles validation. Furthermore, we propose CGTNet (Crystal Graph Transformer NETwork), a graph neural network specifically designed to capture long-range interactions, which dramatically improves the accuracy and data efficiency of property predictions and thereby strengthens the reliability of inverse design. Through these contributions, T2MAT reduces the reliance on human expertise and accelerates the discovery of high-performance functional materials, paving the way for truly autonomous material design.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        Nat. Commun. 11, 1, 3513 (2020)
      </div>
      <img src='images/miut.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Simple descriptor derived from symbolic regression accelerating the discovery of new perovskite catalysts](http://www.nature.com/articles/s41467-020-17263-9)

Baicheng Weng#, **Zhilong Song#**, Rilong Zhu, Qingyu Yan, Qingde Sun, Corey G Grice, Yanfa Yan, Wan-Jian Yin

Symbolic regression (SR) is an approach of interpretable machine learning for building mathematical formulas that best fit certain datasets. In this work, SR is used to guide the design of new oxide perovskite catalysts with improved oxygen evolution reaction (OER) activities. A simple descriptor, μ/t, where μ and t are the octahedral and tolerance factors, respectively, is identified, which accelerates the discovery of a series of new oxide perovskite catalysts with improved OER activity. We successfully synthesise five new oxide perovskites and characterise their OER activities. Remarkably, four of them, Cs<sub>0.4</sub>La<sub>0.6</sub>Mn<sub>0.25</sub>Co<sub>0.75</sub>O<sub>3</sub>, Cs<sub>0.3</sub>La<sub>0.7</sub>NiO<sub>3</sub>, SrNi<sub>0.75</sub>Co<sub>0.25</sub>O<sub>3</sub>, and Sr<sub>0.25</sub>Ba<sub>0.75</sub>NiO<sub>3</sub>, are among the oxide perovskite catalysts with the highest intrinsic activities. Our results demonstrate the potential of SR for accelerating the data-driven design and discovery of new materials with improved properties.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        Mater. Horiz. 10, 5, 1651-1660 (2023)
      </div>
      <img src='images/mtsr.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Distilling universal activity descriptors for perovskite catalysts from multiple data sources via multi-task symbolic regression](https://pubs.rsc.org/en/content/articlehtml/2023/mh/d3mh00157a)

**Zhilong Song**, Xiao Wang, Fangting Liu, Qionghua Zhou, Wan-Jian Yin, Hao Wu, Weiqiao Deng, Jinlan Wang

Developing activity descriptors via data-driven machine learning (ML) methods can speed up the design of highly active and low-cost electrocatalysts. Despite the fact that a large amount of activity data for electrocatalysts is stored in the literature, data from different publications are not comparable due to different experimental or computational conditions. In this work, an interpretable ML method, multi-task symbolic regression, was adopted to learn from data in multiple experiments. A universal activity descriptor to evaluate the oxygen evolution reaction (OER) performance of oxide perovskites free of calculations or experiments was constructed and reached high accuracy and generalization ability. Utilizing this descriptor with Bayesian-optimized parameters, a series of compelling double perovskites with excellent OER activity were predicted and further evaluated using first-principles calculations. Finally, the two ML-predicted nickel-based perovskites with the best OER activity were successfully synthesized and characterized experimentally. This work opens a new way to extend machine-learning material design by utilizing multiple data sources.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        J. Phys. Chem. Lett. 14, 14, 3594-3601(2023)
      </div>
      <img src='images/mcts.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Adaptive Design of Alloys for CO₂ Activation and Methanation via Reinforcement Learning Monte Carlo Tree Search Algorithm](https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.3c00242)

**Zhilong Song**, Qionghua Zhou, Shuaihua Lu, Sae Dieb, Chongyi Ling, Jinlan Wang

Data-driven machine learning (ML) has earned remarkable achievements in accelerating materials design, while it heavily relies on high-quality data acquisition. In this work, we develop an adaptive design framework for searching for optimal materials starting from zero data and with as few DFT calculations as possible. This framework integrates automatic density functional theory (DFT) calculations with an improved Monte Carlo tree search via reinforcement learning algorithm (MCTS-PG). As a successful example, we apply it to rapidly identify the desired alloy catalysts for CO₂ activation and methanation within 200 MCTS-PG steps. To this end, seven alloy surfaces with high theoretical activity and selectivity for CO₂ methanation are screened out and further validated by comprehensive free energy calculations. Our adaptive design framework enables the fast computational exploration of materials with desired properties via minimal DFT calculations.
</div>
</div>

# 📚 Publications


## Total: 22 papers, <a href='https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl'>Google Scholar Profile</a> | <a href='https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> | h-index: <span id="h_index">12</span>

### First Author Papers (6 published + 3 preprints)

1. **Z. Song**, S. Lu, M. Ju, et al. "Accurate prediction of synthesizability and precursors of 3D crystal structures via large language models." [**_Nature Communications_**, 2025, 16(1): 6530](https://www.nature.com/articles/s41467-025-61778-y).

2. **Z. Song**, L. Fan, S. Lu, et al. "Inverse design of promising alloys for electrocatalytic CO₂ reduction via generative graph neural networks combined with bird swarm algorithm." [**_Nature Communications_**, 2025, 16(1): 1053](https://www.nature.com/articles/s41467-024-55613-z).

3. **Z. Song**, X. Wang, F. Liu, et al. "Distilling universal activity descriptors for perovskite catalysts from multiple data sources via multi-task symbolic regression." [**_Materials Horizons_**, 2023, 10(5): 1651-1660](https://pubs.rsc.org/en/content/articlehtml/2023/mh/d3mh00157a).

4. **Z. Song**, Q. Zhou, S. Lu, et al. "Adaptive design of alloys for CO₂ activation and methanation via reinforcement learning Monte Carlo tree search algorithm." [**_The Journal of Physical Chemistry Letters_**, 2023, 14(14): 3594-3601](https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.3c00242).

5. **Z. Song**, Z. Zhang, L. Cheng. "Autonomous heterogeneous catalyst discovery with a self-evolving multi-agent digital twin." 2026, [**_arXiv:2606.05050_**](https://arxiv.org/abs/2606.05050). (Under review)

6. **Z. Song**, Q. Zhou, C. Ling, et al. "Physics-grounded generative design of inherently stable, novel and controllable crystal structures." 2025, [**_arXiv:2507.19307_**](https://arxiv.org/abs/2507.19307). (Under review)

7. **Z. Song**, Q. Zhou, C. Ren, et al. "FormulaAgent: A Model-Agnostic Self-Optimizing Agent for Autonomous Scientific Formula Discovery." 2025, [**_arXiv:2503.06512_**](https://arxiv.org/abs/2503.06512). (Under review)

8. **Z. Song**, S. Lu, Q. Zhou, et al. "T2MAT (text-to-materials): A universal agent for generating material structures with goal properties from a single sentence." [**_Acta Physico-Chimica Sinica_**, 2026, 42(5): 100213](https://www.sciencedirect.com/science/article/pii/S1000681825001699).

9. **Z. Song**, X. Chen, F. Meng, et al. "Machine learning in materials design: Algorithm and application." [**_Chinese Physics B_**, 2020, 29(11): 116103](https://iopscience.iop.org/article/10.1088/1674-1056/abc0e3). 

### Co-first Author Papers (2 papers)

10. B. Weng#, **Z. Song#**, R. Zhu, et al. "Simple descriptor derived from symbolic regression accelerating the discovery of new perovskite catalysts." [**_Nature Communications_**, 2020, 11(1): 3513](http://www.nature.com/articles/s41467-020-17263-9). (Equal contribution)

11. M. Wu#, **Z. Song#**, Y. Cui, et al. "Machine learning-assisted design of nitrogen-rich covalent triazine frameworks photocatalysts." [**_Advanced Functional Materials_**, 2024: 2413453](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202413453). (Equal contribution)

### Co-author Papers (10 papers)

12. X. Chen, **Z. Song**, S. Lu, et al. "Continuous discovery of novel 2D materials via dual active learning-driven generative models" [**_National Science Review_**, 2026: nwag101](https://academic.oup.com/nsr/advance-article-abstract/doi/10.1093/nsr/nwag101/8475385).

13. Y. Su, **Z. Song**, W. Zhu, et al. "Visible-light photocatalytic CO₂ reduction using metal-organic framework derived Ni(OH)₂ nanocages: a synergy from multiple light reflection, static charge transfer, and oxygen vacancies." [**_ACS Catalysis_**, 2020, 11(1): 345-354](https://pubs.acs.org/doi/10.1021/acscatal.0c04020).

14. Z. Sun, **Z. Song**, W.J. Yin. "Going beyond the d-band center to describe CO₂ activation on single-atom alloys." [**_Advanced Energy and Sustainability Research_**, 2022, 3(2): 2100152](https://onlinelibrary.wiley.com/doi/10.1002/aesr.202100152).

15. S. Dieb, **Z. Song**, W.J. Yin, et al. "Optimization of depth-graded multilayer structure for x-ray optics using machine learning." [**_Journal of Applied Physics_**, 2020, 128(7): 074901](http://aip.scitation.org/doi/10.1063/5.0012351).

16. X. Chen, **Z. Song**, S. Lu, et al. "AI-driven materials design: paradigm shift from small data to big data." [**_SCIENTIA SINICA Chimica_**, 2025, 55(6): 1648-1659](https://doi.org/10.1360/SSC-2025-0048).

17. W. Lin, F. Liu, **Z. Song**, et al. "Feature-Extended Descriptor Construction for Prediction of Consecutive Elementary Reaction Energies in Methane Oxidation." [**_Chemistry of Materials_**, 2025, 37(12): 4499–4510](https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.5c00930).

18. S. Lu, Q. Zhou, X. Chen, **Z. Song**, et al. "Inverse design with deep generative models: next step in materials discovery." [**_National Science Review_**, 2022, 9(8): nwac111](https://academic.oup.com/nsr/article/doi/10.1093/nsr/nwac111/6605930).

19. H. Lin, J. Mao, M. Qin, **Z. Song**, et al. "Single-phase alkylammonium cesium lead iodide quasi-2D perovskites for color-tunable and spectrum-stable red LED." [**_Nanoscale_**, 2019, 11(36): 16907-16918](https://xlink.rsc.org/?DOI=C9NR02706H).

20. H.L. Zhu, H. Lin, **Z. Song**, et al. "Achieving high-quality Sn–Pb perovskite films on complementary metal-oxide-semiconductor-compatible metal/silicon substrates for efficient imaging array." [**_ACS Nano_**, 2019, 13(10): 11800-11808](https://pubs.acs.org/doi/10.1021/acsnano.9b05774).

21. X. Gao, Y. Wu, Y. Zhang, X. Chen, **Z. Song**, et al. "How the spacer influences the stability of 2D perovskites?." [**_Small Methods_**, 2024: 2401172](https://onlinelibrary.wiley.com/doi/10.1002/smtd.202401172).

### Conference Papers (1 paper)

22. **Z. Song**, X. Chen, S. Dieb, et al. "Design of thermodynamically stable perovskites using machine learning." [*The 67th JSAP Spring Meeting 2020*, The Japan Society of Applied Physics, 2020: 3632-3632](https://www.jstage.jst.go.jp/article/jsapmeeting/2020.1/0/2020.1_3632/_article/-char/ja/).

---
# 💻 Technical Expertise

## Theoretical Foundations
- **Physics & Chemistry**: Solid theoretical foundation in solid-state physics, quantum chemistry, density functional theory (DFT), and theoretical catalysis
- **Computer Science**: Deep understanding of interpretable models, generative models， graph neural networks (GNNs) and autoregressive models.

## Programming
- **Languages**: Proficient in Python, Shell scripting (Bash, Zsh, Perl), Julia, MATLAB and Fortran  
- **AI-Powered Development**: Proficient in AI-assisted development tools like Cursor and Claude code to enhance productivity and achieve vibe coding.

## Machine Learning
- **General Frameworks**: Expert in PyTorch and TensorFlow
- **Materials-Specific ML**:
  - Generative models (GAN, VAE, Diffusion, Flow) for materials structure generation - model development and innovation
  - Graph Neural Networks (GNN) for materials property prediction - model development and innovation
  - Universal machine learning potentials - application and development
- **Large Language Models**: Full parameter and LoRA fine-tuning, agent construction, and reinforcement learning fine-tuning
- **Interpretable ML**: Development and application of interpretable ML algorithms such as symbolic regression
- **Infrastructure**: Materials database development and deployment

## Computational Materials Science
- **First-Principles Calculations**: Expert in VASP, CP2K, Quantum ESPRESSO for material property calculations
- **Machine Learning Potentials**: Proficient in GPUMD and DeePMD-kit for force field training and development
- **Specialized Tools**: Expert in Pymatgen and ASE (Atomic Simulation Environment) for general-purpose materials data manipulation

---
# 🎯 Hobbies

Beyond my research, I'm passionate about various activities that keep me balanced and inspired:

## 🏎️ **Driving**
I'm passionate about driving and got my license right after graduating from high school. During my undergraduate years, I completed two long self-driving adventures across China:
- **Summer 2015**: ~5,500 km journey in 15 days, traversing 11 provinces across central and southern China
- **Summer 2016**: ~9,100 km journey in 23 days, traversing 15 provinces across northern, western, and central China

My passion for driving extends to the virtual world - I was once a sim racer with a complete racing simulator setup, including a force feedback steering wheel, shifter, handbrake, and three-pedal system (throttle, brake, and clutch). During high school, I set:
- **7 track world records** in [DiRT 3](https://en.wikipedia.org/wiki/Dirt_3) 🏆
- **20 track world records** in [WRC 3](https://en.wikipedia.org/wiki/WRC_3:_FIA_World_Rally_Championship) 🏆

Throughout my undergraduate years, I enjoyed racing simulators like [Assetto Corsa](https://assettocorsa.gg/), [Forza Motorsport](https://forza.net/), and [iRacing](https://www.iracing.com/) for relaxation, took multiple wins and pole positions in their online races, and **retired** from competitive sim racing after starting my master's degree. These experiences have taught me to embrace competition fearlessly - even when facing intense competition and pressure, I maintain 100% confidence and give my all to pursue opportunities, regardless of the outcome.

These days I still take a go-kart out once in a while, but everyday driving on public roads no longer excites me. Performance car or not, in the city or on the highway, pushing hard is unsafe, and after a racing simulator it feels far too slow however you drive. I have become an enthusiast of autonomous driving technology instead, especially Huawei's ADS.


## 🎱 **Cue Sports**
I'm an amateur billiards player with a particular fondness for snooker and Chinese eight-ball:
- **Snooker**: Personal best break of 48 points
- **Chinese Eight-ball**: Occasional table clearances

My potting is reasonably reliable, and I can usually read the position: the line the cue ball needs to take, and where to strike it for the right screw or side. Judging the weight of the shot, the force I put into the cue ball, is what lets me down.

During high school and undergraduate years, I played weekly, though this reduced to at most once a month during my master's and Ph.D. studies; I have kept following professional snooker closely throughout. These sports taught me the importance of precision, strategy, and patience - qualities that serve me well in research.

## 🏸 **Badminton**
I enjoy playing badminton at a recreational level. I can manage basic shots like clears, net drops, and smashes, but I can't do proper footwork and my movement speed is slow. During high school, I played frequently with friends, though this became less regular during my undergraduate years. Throughout my master's and PhD studies, I still play occasionally as a fun way to stay active and take a break from research.

---

*💡 Thank you for taking the time to learn about my work and interests! I'm always open to discussions, collaborations, and new connections. Feel free to reach out （email: zhilong@ust.hk, zhilong@seu.edu.cn, zhilong@email.cn, songzl@szlab.ac.cn）– I look forward to hearing from you!*


