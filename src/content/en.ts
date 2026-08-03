import type { SiteContent } from './types'

const en: SiteContent = {
  langLabel: 'English',
  navHome: 'Home',
  profile: {
    name: 'Nie (Elon) Lin',
    degree: 'Ph.D. Student (D2)',
    photoCaption: 'Photo taken in Nov. 2025, Hawaii 🌺, USA',
    bio: `I am a second-year PhD student (D2) co-advised by Prof.
      <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">Yoichi Sato</a>
      at <a href="https://www.u-tokyo.ac.jp/en/" target="_blank" rel="noopener">the University of Tokyo</a>
      and Prof. <a href="https://kriskitani.github.io/" target="_blank" rel="noopener">Kris Kitani</a>
      at <a href="https://www.cmu.edu/" target="_blank" rel="noopener">Carnegie Mellon University</a>.
      I work with the <a href="https://www.iis.u-tokyo.ac.jp/en/" target="_blank" rel="noopener">Institute of Industrial Science</a>
      at the UTokyo and the <a href="https://www.ri.cmu.edu/" target="_blank" rel="noopener">Robotics Institute</a> at Carnegie Mellon University.
      I am currently pursuing my PhD with the support of the
      <a href="https://www.jsps.go.jp/english/e-pd/" target="_blank" rel="noopener">JSPS Research Fellowship for Young Scientists (DC2)</a>,
      one of the most prestigious fellowships for doctoral students in Japan.`,
    researchStatement: `I am curious about how machines can learn to <strong>perceive and act in the physical world</strong>—and the answer may lie
      in the richest source of embodied experience we have: <strong>humans themselves, and the neural signals behind them</strong>.
      My research centers on <strong>human-centered multimodal perception</strong> and <strong>neuro-inspired embodied intelligence</strong>, using
      <strong>egocentric human data</strong>—from first-person video and neural signals to hand and body motion—to teach embodied
      agents to see, understand, and manipulate the world as we do.`,
    contact: {
      addressJpLabel: 'Address (JP)',
      addressJp: 'Ee-401 (IIS), The University of Tokyo, 4-6-1 Komaba, Meguro-ku, Tokyo, 153-8505 Japan',
      addressUsLabel: 'Address (US)',
      addressUs: '201 Smith Hall (EDSH), Carnegie Mellon University, 4800 Forbes Ave, Pittsburgh, PA 15213, USA',
      email: 'nielin@iis.u-tokyo.ac.jp',
      emailUtokyoTag: '(UTokyo)',
      emailCmu: 'niel@andrew.cmu.edu',
      emailCmuTag: '(CMU)',
      emailAndWord: 'and',
      web: 'lin-nie.github.io',
    },
    affiliations: [
      { name: 'The University of Tokyo', role: "M.S. '23–'25, Ph.D. '25–", logoKey: 'utokyo' },
      { name: 'Carnegie Mellon University', role: "Ph.D. (Co-Advised), '25–", logoKey: 'cmu' },
      { name: 'JSPS', role: 'Research Fellow (DC2)', logoKey: 'jsps' },
      { name: 'Microsoft Research Asia', role: "Research Intern '24–'25", logoKey: 'microsoft' },
      { name: 'Sony R&D', role: "Research Intern '23", logoKey: 'sony' },
    ],
    cvNote: 'My CV can be downloaded from <a href="#" target="_blank" rel="noopener">here</a>.',
  },
  newsTitle: 'News',
  navNews: 'News',
  newsShowAll: 'Show all',
  newsShowLess: 'Show less',
  news: [
  { date: "2026.07", html: "I have started my journey in <a href=\"https://en.wikipedia.org/wiki/Pittsburgh\">Pittsburgh</a>, beginning my studies at the <a href=\"https://www.ri.cmu.edu/\">Robotics Institute</a>, <a href=\"https://www.cmu.edu/\">Carnegie Mellon University</a>, under the supervision of Prof. <a href=\"https://kriskitani.github.io/\">Kris Kitani</a>." },
  { date: "2026.04", html: "Congratulations! I have been awarded the <a href=\"https://www.jsps.go.jp/english/e-pd/\">JSPS Research Fellowship for Young Scientists (DC2)</a>, one of the most prestigious fellowships for doctoral students in Japan." },
  { date: "2026.01", html: "Congratulations! One papers were accepted by <a href=\"https://iclr.cc/\">ICLR 2026</a>. Openreview is available. <a href=\"https://openreview.net/forum?id=DGcoJINQ7P\">[Openreview]</a>" },
  { date: "2025.08", html: "Honored with the <a href=\"https://www.linkedin.com/posts/nie-lin_microsoftresearch-msra-starsoftomorrow-activity-7348623900131368961-Ec9R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADanPIUBOzRUiTiGYjfxReqR5Wk96pMfoKg\">“Stars of Tomorrow”</a> award (the highest honor) at <a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/' target=\"_blank\">Microsoft Research Asia</a> -- thanks to my mentors and teammates for their support!" },
  { date: "2025.05", html: "Concluded my one-year research internship at <a href='https://www.microsoft.com/en-us/research/' target=\"_blank\">Microsoft Research</a>! Thanks to <a href=\"https://recmind.cn/\">Dr. Dongsheng Li</a> and the <a href=\"https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/\">Shanghai AI/ML Group</a> for their support!" },
  { date: "2025.02", html: "Congratulations! I passed the PhD entrance exam at <a href='https://www.u-tokyo.ac.jp/en/' target=\"_blank\">The University of Tokyo</a> and will start this April!" },
  { date: "2025.01", html: "Congratulations! One papers were accepted by <a href=\"https://iclr.cc/\">ICLR 2025</a>. Openreview is available. <a href=\"https://openreview.net/forum?id=96jZFqM5E0\">[Openreview]</a>" },
  { date: "2024.12", html: "Congratulations! One papers were accepted by <a href=\"https://2025.ieeeicassp.org/\">ICASSP 2025</a>." },
  { date: "2024.09", html: "Congratulations! One papers were accepted by <a href=\"https://2024.emnlp.org/\">EMNLP 2024</a>." },
  { date: "2024.07", html: "Congratulations! Two papers were accepted by <a href=\"https://eccv2024.ecva.net/\">ECCV 2024</a>." },
  { date: "2024.06", html: "Congratulations! I will be starting a long-term research internship in <a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/' target=\"_blank\">Microsoft Research Asia</a>. My advisor is <a href=\"https://recmind.cn/\">Dr. Dongsheng Li</a> in <a href=\"https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/\">Shanghai AI/ML groups</a>." },
  { date: "2023.08", html: "I will be starting a summer AI internship with the Fundamental AI Team at <br><a href=\"https://www.sony.com/en/SonyInfo/technology/about/\">The Sony's R&D</a> (Tokyo, Japan). My advisor is <a href=\"https://jp.linkedin.com/in/takeshi-ohashi-056876ba\">Dr. Takeshi Ohashi</a>." },
  { date: "2023.03", html: "Congratulations! I have been selected for <a href=\"https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html\">The University of Tokyo Fellowship</a> and will receive full funding during my master's program in UTokyo." },
  { date: "2023.02", html: "I successfully passed the entrance exam for the Master's program at The University of Tokyo, Graduate School of Interdisciplinary Information Studies. I will become a 2-years master student in the UTokyo this April." },
  { date: "2022.07", html: "Our paper on <strong>Knowledge Transfer Learning</strong> has been accepted for <strong>ECCV 2022</strong>!! Paper and code is available. <br><a href=\"https://arxiv.org/pdf/2207.05409.pdf\">[Paper]</a><a href=\"https://arxiv.org/abs/2207.05409\">[Arxiv]</a><a href=\"https://github.com/dzy3/KCD\">[Github Code]</a>" },
  { date: "2022.07", html: "I was invited to attend this year's <a href=\"https://cvpr2022.thecvf.com/\">CVPR 2022</a> and participate in the <a href=\"https://eyewear-computing.org/EPIC_CVPR22/\">EPIC 2022</a> presentation." },
  { date: "2022.06", html: "Congratulations! My paper on <a href=\"https://eyewear-computing.org/EPIC_CVPR22/\">CVPR-EPIC 2022</a> about <strong>UDA Frist-person Action Recognition</strong> has been successfully accepted, under the supervision of Prof. <a href=\"https://cai-mj.github.io/\">Minjie Cai</a>. The arXiv and code is available. <a href=\"https://arxiv.org/abs/2207.03095\">[ArXiv]</a> <a href=\"https://github.com/lin-nie/EPIC-KITCHENS-C4-UDA\">[Github Code]</a>" },
  { date: "2022.06", html: "My graduation thesis <strong>\"First-person Action Recognition Based on Unsupervised Domain Adaptation in Egocentric Video\"</strong> successfully pass the thesis defense of undergraduate graduation design." },
  { date: "2022.05", html: "Congratulations! I won the <a href='http://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A05/202112/t20211216_587869.html'>National Scholarship of the People's Republic of China</a>, issued by the <a href='http://en.moe.gov.cn/'>Ministry of Education of China</a>, which is the highest level scholarship program in China! (<strong>TOP 0.01% Students in China</strong>)." },
  { date: "2021.12", html: "I won 2021 year's <strong>The First Prize Scholarship</strong> and <strong>The Lingnan Academic Scholarship (Outstanding Academic Representative) </strong> for being the first in my grade. Thanks!" },
  { date: "2021.10", html: "I got my own <strong>head-mounted camera</strong> from our laboratory and will be trying to collect the first-person dataset in the future. Thanks!" },
  { date: "2021.06", html: "Started research working as a <strong>Research Assistant</strong> at Computer Vision Lab, Hunan University. <br>Supervised by Prof. <a href='https://cai-mj.github.io/'>Minjie Cai</a>.<a href=\"https://www.linnie.com.cn/documents/Research_Assistant_Minjie_Cai_Hunan_University.pdf\">[Research Certificate]</a>" },
  { date: "2021.05", html: "I won the <strong>international second prize</strong> in the American Mathematical Contest In Modeling (USA MCM)." },
  { date: "2021.01", html: "Our team successfully entered the <a href='https://www.ccf.org.cn/en/'>China Computer Federation (CCF) </a> <strong>Artificial Intelligence Vision Algorithm Competition</strong> and final with the rank of <strong>13/2207</strong>. A great team work experience !!" },
  { date: "2020.12", html: "I won 2020 year's <strong>The First Prize Scholarship</strong> and <strong>The Kao Wei-kwong Enterprise Scholarship (Outstanding Engineering Representative) </strong> for being the first in my grade. Thanks!" },
  { date: "2020.10", html: "I got The Third prize of <strong>China Artificial Intelligence Electronic Design Competition</strong>. Congratulations !!" },
  { date: "2020.08", html: "I completed my exchange programme study in the field of <strong>Artificial Intelligence and Deep Learning</strong> in the <strong>National University of Singapore</strong>. And won the <strong>Honorary Award of the National University of Singapore</strong>." },
  { date: "2019.12", html: "I won 2019 year's <strong>The First Prize Scholarship</strong> for being the first in my grade. Thanks!" },
  { date: "2019.08", html: "Under the leadership of Prof. Lvy Wang, I completed a research project on mathematics and machine learning in <strong>University of Toronto, Canada</strong>. Lay a mathematical foundation for my future research in <strong>Computer Vision</strong>." },
  ],

  publicationsTitle: 'Projects',
  navPublications: 'Projects',
  paperLabel: 'Paper',
  projectLabel: 'Project Page',
  codeLabel: 'Code',
  videoLabel: 'Video',
  openreviewLabel: 'OpenReview',
  datasetLabel: 'Dataset',
  comingSoonLabel: 'Coming Soon',
  publications: [
    {
      title: 'SiMDex: Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://tkhkaeio.github.io/" target="_blank" rel="noopener">Takehiko Ohkawa</a>, <a href="https://ch3cook-fdu.github.io/" target="_blank" rel="noopener">Sijin Chen</a>, <a href="https://github.com/ruoshiwen" target="_blank" rel="noopener">Ruoshi Wen</a>, <a href="#">Zhuohang Li</a>, <a href="#">Liqun Huang</a>, <a href="https://github.com/zhuzhengming" target="_blank" rel="noopener">Zhengming Zhu</a>, <a href="https://chillinfree.github.io/" target="_blank" rel="noopener">Yiming Bao</a>, <a href="https://irisli17.github.io/" target="_blank" rel="noopener">Yunfei Li</a>, <a href="https://cai-mj.github.io/" target="_blank" rel="noopener">Minjie Cai</a>, <a href="https://yusufma03.github.io/" target="_blank" rel="noopener">Xiao Ma</a>, <a href="#">Wei Xu</a>, <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">Yoichi Sato</a>',
      venue: 'Preprint, 2026',
    },
    {
      title: 'EgoBrain: Synergizing Minds and Eyes For Human Action Understanding',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://victorywys.github.io/" target="_blank" rel="noopener">Yansen Wang</a>, <a href="https://frosthan.github.io/" target="_blank" rel="noopener">Dongqi Han</a>, <a href="https://935963004.github.io/" target="_blank" rel="noopener">Weibang Jiang</a>, <a href="https://christincha.github.io/" target="_blank" rel="noopener">Jingyuan Li</a>, <a href="https://rfuruta.github.io/" target="_blank" rel="noopener">Ryosuke Furuta</a>, <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">Yoichi Sato</a>, <a href="https://recmind.cn/" target="_blank" rel="noopener">Dongsheng Li</a>',
      venue: 'The Fourteenth International Conference on Learning Representations (ICLR), 2026',
    },
    {
      title: 'SiMHand: Mining Similar Hands for Large-Scale 3D Hand Pose Pre-training',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://tkhkaeio.github.io/" target="_blank" rel="noopener">Takehiko Ohkawa</a>, <a href="https://mf-zhang.github.io/" target="_blank" rel="noopener">Mingfang Zhang</a>, <a href="https://hyf015.github.io/" target="_blank" rel="noopener">Yifei Huang</a>, <a href="https://cai-mj.github.io/" target="_blank" rel="noopener">Minjie Cai</a>, <a href="#">Ming Li</a>, <a href="https://rfuruta.github.io/" target="_blank" rel="noopener">Ryosuke Furuta</a>, <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">Yoichi Sato</a><sup>✉</sup>',
      venue: 'The Thirteenth International Conference on Learning Representations (ICLR), 2025',
    },
    {
      title: 'Translating Mental Imaginations into Characters with Codebooks and Dynamics-Enhanced Decoding',
      authors:
        '<a href="https://christincha.github.io/" target="_blank" rel="noopener">Jingyuan Li</a>, <a href="https://victorywys.github.io/" target="_blank" rel="noopener">Yansen Wang</a>, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://recmind.cn/" target="_blank" rel="noopener">Dongsheng Li</a><sup>✉</sup>',
      venue: 'IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2025',
    },
    {
      title: 'Vision-Language Model Fine-Tuning via Simple Parameter-Efficient Modification',
      authors:
        '<a href="#">Ming Li</a>, <a href="#">Jike Zhong</a>, <a href="https://chenxinli001.github.io/" target="_blank" rel="noopener">Chenxin Li</a>, <a href="#">Liuzhuozheng Li</a>, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://www.ms.k.u-tokyo.ac.jp/sugi/" target="_blank" rel="noopener">Masashi Sugiyama</a><sup>✉</sup>',
      venue: 'The Conference on Empirical Methods in Natural Language Processing (EMNLP), 2024',
    },
    {
      title: 'HandCLR: Pre-Training for 3D Hand Pose Estimation with Contrastive Learning on Large-Scale Hand Images in the Wild',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://tkhkaeio.github.io/" target="_blank" rel="noopener">Takehiko Ohkawa</a>, <a href="https://mf-zhang.github.io/" target="_blank" rel="noopener">Mingfang Zhang</a>, <a href="https://hyf015.github.io/" target="_blank" rel="noopener">Yifei Huang</a>, <a href="https://rfuruta.github.io/" target="_blank" rel="noopener">Ryosuke Furuta</a>, <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">Yoichi Sato</a>',
      venue: 'HANDS, European Conference on Computer Vision Workshop (ECCVW), 2024',
    },
    {
      title: 'Benchmarks and Challenges in Pose Estimation for Egocentric Hand Interactions with Objects',
      authors:
        '<a href="#">Zicong Fan</a>, <a href="https://tkhkaeio.github.io/" target="_blank" rel="noopener">Takehiko Ohkawa</a>, <a href="#">Linlin Yang</a>, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, et al., <a href="#">Angela Yao</a><sup>✉</sup>',
      venue: 'European Conference on Computer Vision (ECCV), 2024',
    },
    {
      title: 'Knowledge Condensation Distillation',
      authors:
        '<a href="https://chenxinli001.github.io/" target="_blank" rel="noopener">Chenxin Li</a>, <a href="https://lmbxmu.github.io/" target="_blank" rel="noopener">Mingbao Lin</a>, <a href="#">Zhiyuan Ding</a>, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="#">Yihong Zhuang</a>, <a href="https://huangyue05.github.io/" target="_blank" rel="noopener">Yue Huang</a><sup>✉</sup>, <a href="#">Xinghao Ding</a>, <a href="#">Liujuan Cao</a>',
      venue: 'European Conference on Computer Vision (ECCV), 2022',
    },
    {
      title: 'EPIC-KITCHENS-100 Unsupervised Domain Adaptation Challenge for Action Recognition 2022 Technical Report',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://cai-mj.github.io/" target="_blank" rel="noopener">Minjie Cai</a><sup>✉</sup>',
      venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR-EPIC), 2022',
    },
  ],

  educationTitle: 'Education',
  navEducation: 'Education',
  supervisedByLabel: 'Supervised by Prof.',
  education: [
    {
      period: '2023.4 – Now',
      degree: 'Ph.D. Course',
      mentor: 'Yoichi Sato',
      mentorUrl: 'https://sites.google.com/ut-vision.org/ysato/',
      department: 'Interdisciplinary Information Studies, Graduate School of Interdisciplinary Information Studies (GSII)',
      university: 'The University of Tokyo (UTokyo)',
    },
    {
      period: '2023.4 – 2025.3',
      degree: "Master's Course",
      mentor: 'Yoichi Sato',
      mentorUrl: 'https://sites.google.com/ut-vision.org/ysato/',
      thesis: 'Pre-Training for 3D Hand Pose Estimation with Contrastive Learning on Large-Scale Hand Images in the Wild',
      department: 'Interdisciplinary Information Studies, Graduate School of Interdisciplinary Information Studies (GSII)',
      university: 'The University of Tokyo (UTokyo)',
    },
  ],

  honorsTitle: 'Honors',
  navHonors: 'Honors',
  scholarshipLabel: 'Scholarships',
  scholarships: [
    {
      text: 'JSPS Research Fellowship for Young Scientists (DC2)',
      url: 'https://www.jsps.go.jp/english/e-pd/',
      explain: 'Japan Society for the Promotion of Science',
      supp: 'One of the most prestigious fellowships for doctoral students in Japan',
    },
    {
      text: 'SPRING-GX (Next-Generation Researcher)',
      url: 'https://www.cis-trans.jp/spring_gx/',
      explain: "3-years, Full Funding for Ph.D.'s Program",
      supp: 'Supported by JST SPRING, Grant Number JPMJSP2108, limit 360,000 JPY per year',
    },
    {
      text: 'The University of Tokyo Fellowship',
      url: 'https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html',
      explain: "2-years, Full Funding for Master's Program",
      supp: "Only 22 Master's course students of The University of Tokyo in 2023",
    },
    {
      text: 'National Scholarship of the PRC',
      url: 'http://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A05/202112/t20211216_587869.html',
      explain: 'Ministry of Education of China',
      supp: 'TOP 0.1% students in China',
    },
  ],
  awardsLabel: 'Awards',
  awards: [
    {
      text: "'Stars of Tomorrow' Award at Microsoft Research Asia",
      url: 'https://www.linkedin.com/posts/nie-lin_microsoftresearch-msra-starsoftomorrow-share-7348623898764115969-qQQJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADanPIUBOzRUiTiGYjfxReqR5Wk96pMfoKg',
    },
    { text: "Outstanding Undergraduate's Thesis" },
  ],

  fundTitle: 'Research Funding',
  navFund: 'Research Funding',
  scientificFund: [
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-26KJ0863/" target="_blank" rel="noopener">Construction and Analysis of an Egocentric Video and Neural Signal Multimodal Database for Embodied Intelligence</a>',
      match: 'JSPS KAKENHI Grant Number JP26KJ0863 (Grant-in-Aid for JSPS Fellows)',
      note: '2026.04.22–2028.03.31 · ¥1,400,000 (Direct Cost: ¥1,400,000)',
      role: 'Leader',
    },
    {
      name: '<a href="https://www.cis-trans.jp/spring_gx/" target="_blank" rel="noopener">JST Program for Developing Next-Generation Researchers (SPRING-GX)</a>',
      match: 'JST SPRING Grant Number JPMJSP2108',
      role: 'Leader',
    },
    {
      name: '<a href="https://bioskilldx.github.io/" target="_blank" rel="noopener">BioSkillDX: Unlocking Tacit Knowledge for Experimental Work Support in Life Sciences</a>',
      match: 'JST K Program (Key and Advanced Technology R&D through Cross Community Collaboration Program)',
      note: 'August 2025 – July 2030',
      role: 'Member',
    },
    {
      name: '<a href="https://www.jst.go.jp/aspire/en/index.html" target="_blank" rel="noopener">Establishing an International Collaborative Research Network on Human-Centered Vision and Media Technologies</a>',
      match: 'JST ASPIRE Grant Number JPMJAP2303',
      note: 'February 2024 – March 2029',
      role: 'Member',
    },
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-24K02956/" target="_blank" rel="noopener">Semantic Deepening AI of Video-based Human Behavior Understanding</a>',
      match: 'JSPS KAKENHI Grant Number JP24K02956',
      role: 'Member',
    },
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-22KF0119/" target="_blank" rel="noopener">Learning and Prediction of Human Behavior via Multimodal Analysis of First-Person Perspective Instructional Videos</a>',
      match: 'JSPS KAKENHI Grant Number JP22KF0119',
      role: 'Member',
    },
    {
      name: '<a href="https://www.jst.go.jp/kisoken/act-x/en/project/111F001/111F001_2020.html" target="_blank" rel="noopener">Human Behavior Understanding via Imitative AI</a>',
      match: 'JST ACT-X Grant Number JPMJAX2007',
      role: 'Member',
    },
  ],

  footerPeriod: '© 2018–2026 Nie (Elon) Lin',
  lastUpdatedLabel: 'Last updated',
}

export default en
