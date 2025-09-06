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

My research lies at the intersection of artificial intelligence and materials science, focusing on developing innovative methods and agents for automated materials discovery. I have contributed to research on three main topics: (1) generative models for the inverse design of functional materials, (2) agents based on large language models for synthesis prediction of crystal structures and scientific formula discovery, and (3) interpretable machine learning for catalyst design. My interdisciplinary work has led to the development of several innovative frameworks including MAGECS for guiding generative models to globally explore chemical space, SSAGEN for crystal structure generation with inherent stability and symmetry, CSLLM for accurate synthesizability prediction of crystal structures, and LLM-Feynman for universal scientific formula and theory discovery.

I have published 16 peer-reviewed SCI papers with an h-index of 10, receiving total <a href='https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>. Among these, I am the first author on 7 papers, including 3 in Nature Communications, 1 in Materials Horizons, 1 in Advanced Functional Materials, and 1 in The Journal of Physical Chemistry Letters. Additionally, I have three important first-authored manuscripts currently under review, available as preprints. My research has achieved breakthroughs in automated inverse materials design, substantially improving discovery efficiency and success rates for novel functional materials.

# 🎖 Honors and Awards
- *2020.01* Top Prize in "HUAWEI Cup" The 16th Chinese Post-Graduate Mathematical Contest in Modeling, Award ratio: 1.3% (188 teams out of 14,014)

# 📖 Educations
- *2021.09 - 2025.06*, Ph.D. in Physics, School of Physics, Southeast University, Nanjing
- *2018.09 - 2021.06*, Master in Physics, Soochow Institute for Energy and Materials InnovationS, Soochow University, Suzhou
- *2014.09 - 2018.06*, Bachelor in New Energy Science and Technology, Nanjing Tech University, Nanjing
- *2011.09 - 2014.06*, High School, Suzhou No.10 High School, Suzhou
- *2008.09 - 2011.06*, Middle School, Suzhou Zhenhua Middle School, Suzhou

# 💬 Talks
- *2024.06*, Oral Presentation at the 34th Academic Meeting of the Chinese Chemical Society, Guangzhou, China [[Photo]](images/f9be59b9d29bae9d60bbb2e4a898867b.jpg) [[Abstract]](https://www.chemsoc.org.cn/meeting/34th/home/viewpaper.php?id=102458)
- *2025.03*, Oral Presentation at the American Chemical Society Spring 2025 Meeting, San Diego, USA [[Photo]](images/7b46b29e4ff6e14fd8ecad309b504d2a.jpg) [[Abstract]](https://acs.digitellinc.com/live/34/session/551145)
  
# 💼 Working Experiences
- *2025.06 - present*, Junior Research Fellow, Department of Advanced Materials, Suzhou National Laboratory, Suzhou, China
- *2024.07 - 2024.09*, Research Intern, Shanghai Artificial Intelligence Laboratory, Shanghai, China
- *2019.10 - 2020.01*, Research Intern, National Institute for Materials Science (NIMS), Tsukuba, Japan

# 🛠️ Skills

## Programming
- **Languages**: Proficient in Python, Julia, C, Fortran and Shell scripting (Bash, Zsh, etc.)
- **AI-Powered Development**: Leverage modern AI tools like Cursor and Claude code to enhance productivity and achieve vibe coding.

## Machine Learning
- **General Frameworks**: Expert in scikit-learn, PyTorch, and TensorFlow
- **Materials-Specific ML**:
  - Graph Neural Networks (GNN) for materials property prediction - model development and innovation
  - Generative models (GAN, VAE, Diffusion, Flow) for materials structure generation - model development and innovation
  - Universal machine learning potentials - application and development
- **Large Language Models**: Full parameter and LoRA fine-tuning, agent construction, and reinforcement learning fine-tuning
- **Interpretable ML**: Development and application of interpretable ML algorithms such as symbolic regression
- **Infrastructure**: Materials database development and deployment

## Computational Materials Science
- **First-Principles Calculations and Molecular Dynamics**: Expert in VASP, CP2K, Quantum ESPRESSO and LAMMPS
- **Machine Learning Potentials**: GPUMD force field training and development


# 📝 Main Research Works

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
      <img src='images/ssagen.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Stability and Symmetry-Assured Crystal Structure Generation for Inverse Design of Photocatalysts in Water Splitting](https://arxiv.org/abs/2507.19307)

**Zhilong Song**, Chongyi Ling, Qiang Li, Qionghua Zhou, Jinlan Wang

Generative models are revolutionizing materials discovery by enabling inverse design-direct generation of structures from desired properties. However, existing approaches often struggle to ensure inherent stability and symmetry while precisely generating structures with target compositions, space groups, and lattices without fine-tuning. Here, we present SSAGEN (Stability and Symmetry-Assured GENerative framework), which overcomes these limitations by decoupling structure generation into two distinct stages: crystal information (lattice, composition, and space group) generation and coordinate optimization. SSAGEN first generates diverse yet physically plausible crystal information, then derives stable and metastable atomic positions through universal machine learning potentials, combined global and local optimization with symmetry and Wyckoff position constraints, and dynamically refined search spaces. Compared to prior generative models such as CDVAE, SSAGEN improves the thermodynamic and kinetic stability of generated structures by 148% and 180%, respectively, while inherently satisfying target compositions, space groups, and lattices. Applied to photocatalytic water splitting (PWS), SSAGEN generates 200,000 structures-81.2% novel-with 3,318 meeting all stability and band gap criteria. Density functional theory (DFT) validation confirms 95.6% structures satisfy PWS requirements, with 24 optimal candidates identified through comprehensive screening based on electronic structure, thermodynamic, kinetic, and aqueous stability criteria. SSAGEN not only precisely generates materials with desired crystal information but also ensures inherent stability and symmetry, establishing a new paradigm for targeted inverse design of functional materials.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        arXiv: 2503.06512
      </div>
      <img src='images/feynman.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[LLM-Feynman: Leveraging Large Language Models for Universal Scientific Formula and Theory Discovery](https://arxiv.org/abs/2503.06512)

**Zhilong Song**, Minggang Ju, Chunjin Ren, Qiang Li, Chongyi Li, Qionghua Zhou, Jinlan Wang

Distilling underlying principles from data has historically driven scientific breakthroughs. However, conventional data‐driven machine learning often produces complex models that lack interpretability and generalization due to insufficient domain expertise. Here, we present LLM-Feynman, a novel agent that leverages large language models (LLMs) alongside systematic optimization to derive concise, interpretable formulas from data and domain knowledge. Our method integrates automated feature engineering, LLM-guided symbolic regression with self-evaluation, and Monte Carlo tree search to reduce LLM hallucination, thereby enhancing formula discovery. The embedding of domain knowledge simplifies the formula, while self-evaluation based on this knowledge further minimizes prediction errors, surpassing conventional symbolic regression in accuracy and interpretability. Validation on datasets from Feynman physics lectures confirms that LLM-Feynman can rediscover over 90% real physical formulas. Moreover, when applied to four key materials science tasks -- from classifying the synthesizability of 2D and perovskite structures to predicting ionic conductivity in lithium solid-state electrolytes and GW bandgaps in 2D materials -- LLM-Feynman consistently yields interpretable formula with accuracy exceeding 90% and R2 values above 0.8. By transcending mere data fitting through the integration of deep domain knowledge, LLM-Feynman establishes a new paradigm for the automated discovery of generalizable scientific formula and theory across disciplines.
</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div style="position: relative; width: 100%;">
      <div style="background-color: #E6F3FF; padding: 8px; text-align: center; font-weight: bold; border-radius: 8px 8px 0 0;">
        arXiv: 2407.06489
      </div>
      <img src='images/t2mat.png' alt="sym" width="100%" style="display: block; border-radius: 0 0 8px 8px;">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[T2MAT (text-to-materials): A universal agent for generating material structures with goal properties from a single sentence](https://arxiv.org/pdf/2407.06489)

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


## Total: 20 papers, <a href='https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl'>Google Scholar Profile</a> | <a href='https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> | h-index: 10

### First Author Papers (5 published + 3 preprints)

1. **Z. Song**, S. Lu, M. Ju, et al. "Accurate prediction of synthesizability and precursors of 3D crystal structures via large language models." [**_Nature Communications_**, 2025, 16(1): 6530](https://www.nature.com/articles/s41467-025-61778-y).

2. **Z. Song**, L. Fan, S. Lu, et al. "Inverse design of promising alloys for electrocatalytic CO₂ reduction via generative graph neural networks combined with bird swarm algorithm." [**_Nature Communications_**, 2025, 16(1): 1053](https://www.nature.com/articles/s41467-024-55613-z).

3. **Z. Song**, X. Wang, F. Liu, et al. "Distilling universal activity descriptors for perovskite catalysts from multiple data sources via multi-task symbolic regression." [**_Materials Horizons_**, 2023, 10(5): 1651-1660](https://pubs.rsc.org/en/content/articlehtml/2023/mh/d3mh00157a).

4. **Z. Song**, Q. Zhou, S. Lu, et al. "Adaptive design of alloys for CO₂ activation and methanation via reinforcement learning Monte Carlo tree search algorithm." [**_The Journal of Physical Chemistry Letters_**, 2023, 14(14): 3594-3601](https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.3c00242).

5. **Z. Song**, C. Ling, Q. Li, et al. "Stability and Symmetry-Assured Crystal Structure Generation for Inverse Design of Photocatalysts in Water Splitting." 2025, [**_arXiv:2507.19307_**](https://arxiv.org/abs/2507.19307). (Under review)

6. **Z. Song**, M. Ju, C. Ren, et al. "LLM-Feynman: Leveraging Large Language Models for Universal Scientific Formula and Theory Discovery." 2025, [**_arXiv:2503.06512_**](https://arxiv.org/abs/2503.06512). (Under review)

7. **Z. Song**, S. Lu, Q. Zhou, et al. "T2MAT (text-to-materials): A universal agent for generating material structures with goal properties from a single sentence." 2024, [**_arXiv:2407.06489_**](https://arxiv.org/abs/2407.06489). (Under review)

8. **Z. Song**, X. Chen, F. Meng, et al. "Machine learning in materials design: Algorithm and application." [**_Chinese Physics B_**, 2020, 29(11): 116103](https://iopscience.iop.org/article/10.1088/1674-1056/abc0e3). 

### Co-first Author Papers (2 papers)

9. B. Weng#, **Z. Song#**, R. Zhu, et al. "Simple descriptor derived from symbolic regression accelerating the discovery of new perovskite catalysts." [**_Nature Communications_**, 2020, 11(1): 3513](http://www.nature.com/articles/s41467-020-17263-9). (Equal contribution)

10. M. Wu#, **Z. Song#**, Y. Cui, et al. "Machine learning-assisted design of nitrogen-rich covalent triazine frameworks photocatalysts." [**_Advanced Functional Materials_**, 2024: 2413453](https://onlinelibrary.wiley.com/doi/10.1002/adfm.202413453). (Equal contribution)

### Co-author Papers (9 papers)

11. Y. Su, **Z. Song**, W. Zhu, et al. "Visible-light photocatalytic CO₂ reduction using metal-organic framework derived Ni(OH)₂ nanocages: a synergy from multiple light reflection, static charge transfer, and oxygen vacancies." [**_ACS Catalysis_**, 2020, 11(1): 345-354](https://pubs.acs.org/doi/10.1021/acscatal.0c04020).

12. Z. Sun, **Z. Song**, W.J. Yin. "Going beyond the d-band center to describe CO₂ activation on single-atom alloys." [**_Advanced Energy and Sustainability Research_**, 2022, 3(2): 2100152](https://onlinelibrary.wiley.com/doi/10.1002/aesr.202100152).

13. S. Dieb, **Z. Song**, W.J. Yin, et al. "Optimization of depth-graded multilayer structure for x-ray optics using machine learning." [**_Journal of Applied Physics_**, 2020, 128(7): 074901](http://aip.scitation.org/doi/10.1063/5.0012351).

14. X. Chen, **Z. Song**, S. Lu, et al. "AI-driven materials design: paradigm shift from small data to big data." [**_SCIENTIA SINICA Chimica_**, 2025, 55(6): 1648-1659](https://doi.org/10.1360/SSC-2025-0048).

15. W. Lin, F. Liu, **Z. Song**, et al. "Feature-Extended Descriptor Construction for Prediction of Consecutive Elementary Reaction Energies in Methane Oxidation." [**_Chemistry of Materials_**, 2025, 37(12): 4499–4510](https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.5c00930).

16. S. Lu, Q. Zhou, X. Chen, **Z. Song**, et al. "Inverse design with deep generative models: next step in materials discovery." [**_National Science Review_**, 2022, 9(8): nwac111](https://academic.oup.com/nsr/article/doi/10.1093/nsr/nwac111/6605930).

17. H. Lin, J. Mao, M. Qin, **Z. Song**, et al. "Single-phase alkylammonium cesium lead iodide quasi-2D perovskites for color-tunable and spectrum-stable red LED." [**_Nanoscale_**, 2019, 11(36): 16907-16918](https://xlink.rsc.org/?DOI=C9NR02706H).

18. H.L. Zhu, H. Lin, **Z. Song**, et al. "Achieving high-quality Sn–Pb perovskite films on complementary metal-oxide-semiconductor-compatible metal/silicon substrates for efficient imaging array." [**_ACS Nano_**, 2019, 13(10): 11800-11808](https://pubs.acs.org/doi/10.1021/acsnano.9b05774).

19. X. Gao, Y. Wu, Y. Zhang, X. Chen, **Z. Song**, et al. "How the spacer influences the stability of 2D perovskites?." [**_Small Methods_**, 2024: 2401172](https://onlinelibrary.wiley.com/doi/10.1002/smtd.202401172).

### Conference Papers (1 paper)

20. **Z. Song**, X. Chen, S. Dieb, et al. "Design of thermodynamically stable perovskites using machine learning." [*The 67th JSAP Spring Meeting 2020*, The Japan Society of Applied Physics, 2020: 3632-3632](https://www.jstage.jst.go.jp/article/jsapmeeting/2020.1/0/2020.1_3632/_article/-char/ja/).

---
# 🎯 Hobbies

Beyond my research, I'm passionate about various activities that keep me balanced and inspired:

## 🏎️ **Driving**
I'm an avid driving enthusiast who obtained my driver's license immediately after high school. During my undergraduate years, I completed two long self-driving adventures across China:
- **Summer 2015**: ~5,500 km journey in 15 days, traversing 11 provinces across central and southern China
- **Summer 2016**: ~9,100 km journey in 23 days, traversing 15 provinces across northern, western, and central China

My passion for driving extends to the virtual world - I was once a sim racer with a complete racing simulator setup, including a force feedback steering wheel, shifter, handbrake, and three-pedal system (throttle, brake, and clutch). During high school, I set:
- **7 track world records** in [DiRT 3](https://en.wikipedia.org/wiki/Dirt_3) 🏆
- **20 track world records** in [WRC 3](https://en.wikipedia.org/wiki/WRC_3:_FIA_World_Rally_Championship) 🏆

Throughout my undergraduate years, I enjoyed racing simulators like [Assetto Corsa](https://assettocorsa.gg/) and [Forza Motorsport](https://forza.net/) for relaxation, and I **retired** from competitive sim racing after starting my master's degree.

## 🎱 **Cue Sports**
I'm an amateur billiards player with a particular fondness for snooker and Chinese eight-ball:
- **Snooker**: Personal best break of 48 points
- **Chinese Eight-ball**: Occasional table clearances

During high school and undergraduate years, I played weekly, though this reduced to at most once a month during my master's and Ph.D. studies. These sports taught me the importance of precision, strategy, and patience - qualities that serve me well in research.

## 🏸 **Badminton**
I enjoy playing badminton at a recreational level. I can manage basic shots like clears, net drops, and smashes, but I can't do proper footwork and my movement speed is slow. During high school, I played frequently with friends, though this became less regular during my undergraduate years. Throughout my master's and PhD studies, I still play occasionally as a fun way to stay active and take a break from research.

---

*💡 Thank you for your interest in learning more about me! I'm always open to discussions, collaborations, and new connections. Feel free to reach out – I look forward to hearing from you!*


