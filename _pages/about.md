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

I am Dr. Zhilong Song, currently a Junior Research Fellow at the Department of Advanced Materials, Suzhou National Laboratory, working under the supervision of Prof. Jinlan Wang and Prof. Qisheng Wu. My research lies at the intersection of artificial intelligence and materials science, focusing on developing computational frameworks for automated materials discovery. I have contributed to research on three main topics: (1) inverse generation algorithms for functional materials design, (2) materials-specific large language models for synthesis prediction and scientific formula discovery, and (3) interpretable machine learning for catalyst design. My interdisciplinary work has led to the development of several innovative frameworks including MAGECS for electrocatalytic alloy design, SSAGEN for crystal structure generation, CSLLM for synthesizability prediction, and LLM-Feynman for universal scientific formula discovery.

I have published 16 peer-reviewed SCI papers with an h-index of 10, receiving total <a href='https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>. Among these, I am the first author on 7 papers, including 3 in Nature Communications, 1 in Materials Horizons, 1 in Advanced Functional Materials, and 1 in The Journal of Physical Chemistry Letters. Additionally, I have three important first-authored manuscripts currently under review, available as preprints. My research has achieved significant breakthroughs in automated inverse materials design, substantially improving discovery efficiency and success rates for novel functional materials.

# 🎖 Honors and Awards
- *2020.01* Top Prize in "HUAWEI Cup" The 16th Chinese Post-Graduate MathematicalContest in Modeling

# 📖 Educations
- *2021.09 - 2025.06*, PHD, School of Physics, Southeast University, Nanjing
- *2018.09 - 2021.06*, Master, Soochow Institute for Energy and Materials InnovationS, Soochow University, Suzhou
- *2014.09 - 2018.06*, Bachelor, New Energy Science and Technology, Nanjing Tech University, Nanjing

# 💬 Talks
- *2024.06*, Oral, The 34th Chinese Chemical Society Congress, Guangzhou, China
  
# 💻 Internships
- *2019.10 - 2020.01*, National Institute for Materials Science (NIMS), Tsukuba, Japan
- *2024.07 - 2024.09*, Shanghai Artificial Intelligence Laboratory, Shanghai, China

# 📝 Main research 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Nature Communications, 2025, 16(1): 6530</div><img src='images/CSLLM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Accurate prediction of synthesizability and precursors of 3D crystal structures via large language models](https://www.nature.com/articles/s41467-025-61778-y)

**Zhilong Song**, Shuaihua Lu, Minggang Ju, Qionghua Zhou, Jinlan Wang

[**Project**](https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=3MkXEhUAAAAJ&sortby=pubdate&citation_for_view=3MkXEhUAAAAJ:OcBU2YAGkTUC) <strong><span class='show_paper_citations' data='3MkXEhUAAAAJ:OcBU2YAGkTUC'></span></strong>
- Accessing the synthesizability of crystal structures is crucial for transforming theoretical materials into real-world applications. Nevertheless, there is a significant gap between actual synthesizability and thermodynamic or kinetic stability commonly used to screen synthesizable structures. Herein, we develop the Crystal Synthesis Large Language Models (CSLLM) framework, which utilizes three specialized LLMs to predict the synthesizability of arbitrary 3D crystal structures, possible synthetic methods, and suitable precursors, respectively. We construct a comprehensive dataset including synthesizable/non-synthesizable crystal structures and develop an efficient text representation for crystal structures to fine-tune LLMs. Our Synthesizability LLM achieves state-of-the-art accuracy (98.6%), significantly outperforming traditional synthesizability screening based on thermodynamic and kinetic stability. Its outstanding generalization ability is further demonstrated in experimental structures with complexity considerably exceeding that of the training data. Furthermore, both the Method and Precursor LLMs exceed 90% accuracy in classifying possible synthetic methods and identifying solid-state synthetic precursors for common binary and ternary compounds, respectively. Leveraging CSLLM, tens of thousands of synthesizable theoretical structures are successfully identified, with their 23 key properties predicted using accurate graph neural network models. 
</div>
</div>



# 📚 Publications


## Journal Articles (Total: 20 papers, <a href='https://scholar.google.com/citations?user=3MkXEhUAAAAJ&hl'>Google Scholar Profile</a> | Total Citations: 789 | h-index: 10)

### First Author Papers (5 published + 3 preprints)

1. **Z. Song**, S. Lu, M. Ju, et al. "Accurate prediction of synthesizability and precursors of 3D crystal structures via large language models." **_Nature Communications_**, 2025, 16(1): 6530.

2. **Z. Song**, L. Fan, S. Lu, et al. "Inverse design of promising alloys for electrocatalytic CO₂ reduction via generative graph neural networks combined with bird swarm algorithm." **_Nature Communications_**, 2025, 16(1): 1053.

3. **Z. Song**, X. Wang, F. Liu, et al. "Distilling universal activity descriptors for perovskite catalysts from multiple data sources via multi-task symbolic regression." **_Materials Horizons_**, 2023, 10(5): 1651-1660.

4. **Z. Song**, Q. Zhou, S. Lu, et al. "Adaptive design of alloys for CO₂ activation and methanation via reinforcement learning Monte Carlo tree search algorithm." **_The Journal of Physical Chemistry Letters_**, 2023, 14(14): 3594-3601.

5. **Z. Song**, C. Ling, Q. Li, et al. "Stability and Symmetry-Assured Crystal Structure Generation for Inverse Design of Photocatalysts in Water Splitting." 2025, **_arXiv:2507.19307_**. (Under review)

6. **Z. Song**, M. Ju, C. Ren, et al. "LLM-Feynman: Leveraging Large Language Models for Universal Scientific Formula and Theory Discovery." 2025, **_arXiv:2503.06512_**. (Under review)

7. **Z. Song**, S. Lu, Q. Zhou, et al. "T2MAT (text-to-materials): A universal framework for generating material structures with goal properties from a single sentence." 2024, **_arXiv:2407.06489_**. (Under review)

8. **Z. Song**, X. Chen, F. Meng, et al. "Machine learning in materials design: Algorithm and application." **_Chinese Physics B_**, 2020, 29(11): 116103. 

### Co-first Author Papers (2 papers)

9. B. Weng#, **Z. Song#**, R. Zhu, et al. "Simple descriptor derived from symbolic regression accelerating the discovery of new perovskite catalysts." **_Nature Communications_**, 2020, 11(1): 3513. (Equal contribution)

10. M. Wu#, **Z. Song#**, Y. Cui, et al. "Machine learning-assisted design of nitrogen-rich covalent triazine frameworks photocatalysts." **_Advanced Functional Materials_**, 2024: 2413453. (Equal contribution)

### Co-author Papers (10 papers)

11. Y. Su, **Z. Song**, W. Zhu, et al. "Visible-light photocatalytic CO₂ reduction using metal-organic framework derived Ni(OH)₂ nanocages: a synergy from multiple light reflection, static charge transfer, and oxygen vacancies." **_ACS Catalysis_**, 2020, 11(1): 345-354.

12. Z. Sun, **Z. Song**, W.J. Yin. "Going beyond the d-band center to describe CO₂ activation on single-atom alloys." **_Advanced Energy and Sustainability Research_**, 2022, 3(2): 2100152.

13. S. Dieb, **Z. Song**, W.J. Yin, et al. "Optimization of depth-graded multilayer structure for x-ray optics using machine learning." **_Journal of Applied Physics_**, 2020, 128(7): 074901.

14. X. Chen, **Z. Song**, S. Lu, et al. "AI-driven materials design: paradigm shift from small data to big data." **_SCIENTIA SINICA Chimica_**, 2025, 55(6): 1648-1659.

15. W. Lin, F. Liu, **Z. Song**, et al. "Feature-Extended Descriptor Construction for Prediction of Consecutive Elementary Reaction Energies in Methane Oxidation." **_Chemistry of Materials_**, 2025, 3(2): 2100152.

16. S. Lu, Q. Zhou, X. Chen, **Z. Song**, et al. "Inverse design with deep generative models: next step in materials discovery." **_National Science Review_**, 2022, 9(8): nwac111.

17. H. Lin, J. Mao, M. Qin, **Z. Song**, et al. "Single-phase alkylammonium cesium lead iodide quasi-2D perovskites for color-tunable and spectrum-stable red LED." **_Nanoscale_**, 2019, 11(36): 16907-16918.

18. H.L. Zhu, H. Lin, **Z. Song**, et al. "Achieving high-quality Sn–Pb perovskite films on complementary metal-oxide-semiconductor-compatible metal/silicon substrates for efficient imaging array." **_ACS Nano_**, 2019, 13(10): 11800-11808.

19. X. Gao, Y. Wu, Y. Zhang, X. Chen, **Z. Song**, et al. "How the spacer influences the stability of 2D perovskites?." **_Small Methods_**, 2024: 2401172.

### Conference Papers (1 paper)

20. **Z. Song**, X. Chen, S. Dieb, et al. "Design of thermodynamically stable perovskites using machine learning." *The 67th JSAP Spring Meeting 2020*, The Japan Society of Applied Physics, 2020: 3632-3632.
