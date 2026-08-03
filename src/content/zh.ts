import type { SiteContent } from './types'

const zh: SiteContent = {
  langLabel: '中文',
  navHome: '主页',
  profile: {
    name: '林 涅',
    degree: '博士 (D2)',
    photoCaption: '拍摄于 2025 年 11 月，美国，夏威夷 🌺',
    bio: `我目前是<a href="https://www.u-tokyo.ac.jp/zh/index.html" target="_blank" rel="noopener">东京大学</a>
      <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">佐藤洋一</a>教授与
      <a href="https://www.cmu.edu/" target="_blank" rel="noopener">卡内基梅隆大学</a>
      <a href="https://kriskitani.github.io/" target="_blank" rel="noopener">Kris Kitani</a>教授共同指导的
      博士二年级研究生（D2）。我在东京大学
      <a href="https://www.iis.u-tokyo.ac.jp/en/" target="_blank" rel="noopener">生产技术研究所（IIS）</a>，
      以及卡内基梅隆大学<a href="https://www.ri.cmu.edu/" target="_blank" rel="noopener">机器人研究所（Robotics Institute）</a>从事研究工作。
      目前，我在<a href="https://www.jsps.go.jp/english/e-pd/" target="_blank" rel="noopener">日本学术振兴会（JSPS）特别研究员（DC2）</a>
      的资助下攻读博士学位——这是日本博士生所能获得的最具声望的奖学金之一。`,
    researchStatement: `我很好奇机器如何才能学会<strong>感知并行动于物理世界之中</strong>——答案或许就藏在我们所拥有的最丰富的具身经验来源里：
      <strong>人类自身，以及其背后的神经信号</strong>。我的研究聚焦于<strong>以人为中心的多模态感知</strong>与<strong>类脑具身智能</strong>，通过
      <strong>第一人称视角的人类数据</strong>——从第一人称视频、神经信号到手部与身体动作——来教会具身智能体像我们一样去观察、理解并操控这个世界。`,
    contact: {
      addressJpLabel: '地址（日本）',
      addressJp: '〒 153-8505 东京都目黑区驹场 4-6-1 东京大学 生产技术研究所 Ee-401（IIS）',
      addressUsLabel: '地址（美国）',
      addressUs: '201 Smith Hall (EDSH), Carnegie Mellon University, 4800 Forbes Ave, Pittsburgh, PA 15213, USA',
      email: 'nielin@iis.u-tokyo.ac.jp',
      emailUtokyoTag: '（东京大学）',
      emailCmu: 'niel@andrew.cmu.edu',
      emailCmuTag: '（CMU）',
      emailAndWord: '和',
      web: 'lin-nie.github.io',
    },
    affiliations: [
      { name: '东京大学', role: '硕士 2023–2025，博士 2025–至今', logoKey: 'utokyo' },
      { name: '卡内基梅隆大学', role: '博士（共同指导）2025–至今', logoKey: 'cmu' },
      { name: 'JSPS', role: '特别研究员（DC2）', logoKey: 'jsps' },
      { name: '微软亚洲研究院', role: '研究实习 2024–2025', logoKey: 'microsoft' },
      { name: '索尼 R&D', role: '研究实习 2023', logoKey: 'sony' },
    ],
    cvNote: '我的简历可以从<a href="#" target="_blank" rel="noopener">这里</a>下载。',
  },
  newsTitle: '消息',
  navNews: '消息',
  newsShowAll: '查看全部',
  newsShowLess: '收起',
  news: [
  { date: "2026.07", html: "我已经开启了<a href=\"https://en.wikipedia.org/wiki/Pittsburgh\">匹兹堡</a>之旅，开始在<a href=\"https://www.cmu.edu/\">卡内基梅隆大学</a><a href=\"https://www.ri.cmu.edu/\">机器人研究所（Robotics Institute）</a>展开学习，接受 <a href=\"https://kriskitani.github.io/\">Kris Kitani</a> 教授的指导。" },
  { date: "2026.04", html: "恭喜！我获得了<a href=\"https://www.jsps.go.jp/english/e-pd/\">日本学术振兴会特别研究员（DC2）</a>资助，这是日本博士生所能获得的最具声望的奖学金之一。" },
  { date: "2026.01", html: "恭喜！一篇论文被 <a href=\"https://iclr.cc/\">ICLR 2026</a> 接收，Openreview已上线。 <a href=\"https://openreview.net/forum?id=DGcoJINQ7P\">[Openreview]</a>" },
  { date: "2025.08", html: "在 <a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/' target=\"_blank\">微软亚洲研究院（Microsoft Research Asia）</a> 实习期间，因卓越贡献荣获 <a href=\"https://www.linkedin.com/posts/nie-lin_microsoftresearch-msra-starsoftomorrow-activity-7348623900131368961-Ec9R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADanPIUBOzRUiTiGYjfxReqR5Wk96pMfoKg\">“Stars of Tomorrow”</a> 奖，感谢导师与团队的支持！" },
  { date: "2025.05", html: "结束了在<a href='https://www.microsoft.com/en-us/research/' target=\"_blank\">微软研究院</a>为期一年的科研实习！感谢导师<a href=\"https://recmind.cn/\">李东胜博士</a>及<a href=\"https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/\">上海AI/ML组</a>的支持与指导！" },
  { date: "2025.02", html: "恭喜！我通过了 <a href='https://www.u-tokyo.ac.jp/en/' target=\"_blank\">东京大学</a> 博士入学考试，将于今年四月入学！" },
  { date: "2025.01", html: "恭喜！一篇论文被 <a href=\"https://iclr.cc/\">ICLR 2025</a> 接收，Openreview已上线。 <a href=\"https://openreview.net/forum?id=96jZFqM5E0\">[Openreview]</a>" },
  { date: "2024.12", html: "恭喜！一篇论文被 <a href=\"https://2025.ieeeicassp.org/\">ICASSP 2025</a> 接收。" },
  { date: "2024.09", html: "恭喜！一篇论文被 <a href=\"https://2024.emnlp.org/\">EMNLP 2024</a> 接收。" },
  { date: "2024.07", html: "恭喜！两篇论文被 <a href=\"https://eccv2024.ecva.net/\">ECCV 2024</a> 接收。" },
  { date: "2024.06", html: "恭喜！我将开始在 <a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/' target=\"_blank\">微软亚洲研究院</a> 进行长期研究实习。我的指导老师是 <a href=\"https://recmind.cn/\">李东胜博士</a>，他属于 <a href=\"https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/\">上海AI/ML团队</a>。" },
  { date: "2023.08", html: "恭喜！我将开始在 <br><a href=\"https://www.sony.com/en/SonyInfo/technology/about/\">索尼公司研发部门</a>（日本，东京）的基础人工智能团队进行暑期AI实习。我的指导老师是 <a href=\"https://jp.linkedin.com/in/takeshi-ohashi-056876ba\">大桥健史博士</a>。" },
  { date: "2023.03", html: "恭喜！我已被 <a href=\"https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html\">东京大学奖学金</a> 选中，并将在东京大学的硕士项目中获得全额资助。" },
  { date: "2023.02", html: "恭喜！我成功通过了 <a href='https://www.u-tokyo.ac.jp/en/' target=\"_blank\">东京大学</a> 的硕士入学考试，将于今年四月开始在 <a href='https://www.iii.u-tokyo.ac.jp/' target=\"_blank\">情报学环·跨学科交叉信息学院（GSII）</a>攻读为期两年的硕士学位。" },
  { date: "2022.07", html: "我们关于<strong>知识迁移学习</strong>的论文已经被今年的<strong>ECCV 2022</strong>正式接受!! 代码已经开源。<a href=\"https://arxiv.org/pdf/2207.05409.pdf\">[論文]</a><a href=\"https://arxiv.org/abs/2207.05409\">[預印本]</a><a href=\"https://github.com/dzy3/KCD\">[Github代碼]</a>" },
  { date: "2022.07", html: "我受邀参加今年<a href=\"https://cvpr2022.thecvf.com/\">CVPR 2022</a> 并参与 <a href=\"https://eyewear-computing.org/EPIC_CVPR22/\">EPIC 2022</a> 演讲。" },
  { date: "2022.06", html: "恭喜! 我的论文在<a href=\"https://eyewear-computing.org/EPIC_CVPR22/\">CVPR-EPIC 2022</a>中关于<strong>无监督域适应第一人称动作识别</strong>顺利被接收, 在<a href=\"https://cai-mj.github.io/\">蔡 敏捷</a>教授的指导下。 预印本和代码均可用. <a href=\"https://arxiv.org/abs/2207.03095\">[預印本]</a> <a href=\"https://github.com/lin-nie/EPIC-KITCHENS-C4-UDA\">[Github代码]</a>" },
  { date: "2022.06", html: "我的毕业论文<strong>《基于自我中心视频中无监督域适应的第一人称动作识别》</strong>顺利通过了本科毕业设计论文答辩。" },
  { date: "2022.05", html: "恭喜! 我获得了<a href='http://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A05/202112/t20211216_587869.html'>中华人民共和国国家奖学金</a>, 由<a href='http://en.moe.gov.cn/'>中华人民共和国教育部</a>颁布, 这是中国最高级别的奖学金项目! (<strong>全国排名前0.01%的学生</strong>)." },
  { date: "2021.12", html: "我以年级第一的优异成绩获得了2021年的<strong>一等奖奖学金</strong>、<strong>岭南学术奖学金(优秀学术代表)</strong>，谢谢!" },
  { date: "2021.10", html: "我从我们的实验室得到了属于我自己的<strong>头戴式相机</strong>，未来将尝试收集第一人称数据集。谢谢!" },
  { date: "2021.06", html: "开始在湖南大学的計算機視覺实验室担任 <strong>研究助理</strong>。 由<a href='https://cai-mj.github.io/'>蔡 敏捷</a>教授担任指导老师。<a href=\"https://www.linnie.com.cn/documents/Research_Assistant_Minjie_Cai_Hunan_University.pdf\">[研究證明]</a>" },
  { date: "2021.05", html: "我在美国数学建模竞赛USA MCM/ICM 中获得<strong>国际二等奖</strong>。" },
  { date: "2021.01", html: "我们团队以<strong>13/2207</strong>的排名进入<a href=\"https://www.ccf.org.cn/en/\">中国计算机学会(CCF) </a> <strong>人工智能视觉算法大赛</strong>决赛。一次很赞的团队合作体验!!" },
  { date: "2020.12", html: "我以年级第一的优异成绩获得了2020年的<strong>一等奖学金</strong>以及<strong> 高伟光企业奖学金(杰出工程代表) </strong>。谢谢!" },
  { date: "2020.10", html: "我获得中国人工智能电子设计大赛三等奖 !!" },
  { date: "2020.08", html: "我在<strong>新加坡国立大学</strong>完成了<strong>人工智能与深度学习</strong>领域的项目学习。并获得由新加坡国立大学颁发的<strong>荣誉奖</strong>。" },
  { date: "2019.12", html: "我以年级第一的优异成绩获得了2019年的<strong>一等奖学金</strong>。谢谢!" },
  { date: "2019.08", html: "在Prof. Lvy Wang的指导下，我在<strong>加拿大多伦多大学</strong>完成了一个关于数学与机器学习的研究项目。为我以后关于<strong>计算机视觉</strong>的研究奠定数学基础。" },
  ],

  publicationsTitle: '项目',
  navPublications: '项目',
  paperLabel: '论文',
  projectLabel: '项目页面',
  codeLabel: 'Github 代码',
  videoLabel: '视频',
  openreviewLabel: 'Openreview',
  datasetLabel: '数据集',
  comingSoonLabel: '即将上线',
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
        '<a href="#">Zicong Fan</a>, <a href="https://tkhkaeio.github.io/" target="_blank" rel="noopener">Takehiko Ohkawa</a>, <a href="#">Linlin Yang</a>, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, et al., <a href="#">Angela Yao</a>',
      venue: 'European Conference on Computer Vision (ECCV), 2024',
    },
    {
      title: 'Knowledge Condensation Distillation',
      authors:
        '<a href="https://chenxinli001.github.io/" target="_blank" rel="noopener">Chenxin Li</a>, <a href="https://lmbxmu.github.io/" target="_blank" rel="noopener">Mingbao Lin</a>, <a href="#">Zhiyuan Ding</a>, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="#">Yihong Zhuang</a>, <a href="https://huangyue05.github.io/" target="_blank" rel="noopener">Yue Huang</a><sup>✉</sup>, ...',
      venue: 'European Conference on Computer Vision (ECCV), 2022',
    },
    {
      title: 'EPIC-KITCHENS-100 Unsupervised Domain Adaptation Challenge for Action Recognition 2022 Technical Report',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://cai-mj.github.io/" target="_blank" rel="noopener">Minjie Cai</a><sup>✉</sup>',
      venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR-EPIC), 2022',
    },
  ],

  educationTitle: '教育',
  navEducation: '教育',
  supervisedByLabel: '指导教授：',
  education: [
    {
      period: '2023.4 – 至今',
      degree: '博士课程',
      mentor: '佐藤 洋一',
      mentorUrl: 'https://sites.google.com/ut-vision.org/ysato/',
      department: '交叉信息学，跨学科交叉信息学院',
      university: '东京大学',
    },
    {
      period: '2023.4 – 2025.3',
      degree: '硕士课程',
      mentor: '佐藤 洋一',
      mentorUrl: 'https://sites.google.com/ut-vision.org/ysato/',
      thesis: '基于对比学习的野外大规模手部图像三维手势估计预训练方法',
      department: '交叉信息学，跨学科交叉信息学院',
      university: '东京大学',
    },
  ],

  honorsTitle: '荣誉奖项',
  navHonors: '荣誉奖项',
  scholarshipLabel: '所获奖学金',
  scholarships: [
    {
      text: '日本学术振兴会特别研究员（DC2）',
      url: 'https://www.jsps.go.jp/english/e-pd/',
      explain: '日本学术振兴会',
      supp: '日本博士生所能获得的最具声望的奖学金之一',
    },
    {
      text: '日本次世代研究者挑战性研究计划（SPRING-GX）',
      url: 'https://www.cis-trans.jp/spring_gx/',
      explain: '3 年项目，博士期间全额资助',
      supp: '由 JST 次世代研究者挑战的研究计划 JPMJSP2108 支援，额度：36 万日元 / 年',
    },
    {
      text: '东京大学奖学金',
      url: 'https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html',
      explain: '2 年项目，硕士期间全额资助',
      supp: '2023 年期间仅 22 名学生获得该奖学金',
    },
    {
      text: '中华人民共和国国家奖学金',
      url: 'http://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A05/202112/t20211216_587869.html',
      explain: '中华人民共和国教育部',
      supp: '中国排名前 0.1% 的学生',
    },
  ],
  awardsLabel: '奖励',
  awards: [
    {
      text: '微软亚洲研究院 - 明日之星（Stars of Tomorrow）奖',
      url: 'https://www.linkedin.com/posts/nie-lin_microsoftresearch-msra-starsoftomorrow-share-7348623898764115969-qQQJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADanPIUBOzRUiTiGYjfxReqR5Wk96pMfoKg',
    },
    { text: '优秀本科生论文' },
  ],

  fundTitle: '参与基金',
  navFund: '参与基金',
  scientificFund: [
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-26KJ0863/" target="_blank" rel="noopener">面向具身智能的第一人称视频与神经信号多模态数据库构建与分析</a>',
      match: 'JSPS KAKENHI 资助编号 JP26KJ0863（特别研究员奖励费）',
      note: '2026.04.22–2028.03.31 · 140 万日元（直接经费：140 万日元）',
      role: '负责人',
    },
    {
      name: '<a href="https://www.cis-trans.jp/spring_gx/" target="_blank" rel="noopener">JST 次世代研究者挑战的研究项目（SPRING-GX）</a>',
      match: 'JST SPRING Grant Number JPMJSP2108',
      role: '负责人',
    },
    {
      name: '<a href="https://bioskilldx.github.io/" target="_blank" rel="noopener">BioSkillDX：解锁生命科学实验操作中的隐性知识以支持实验工作</a>',
      match: 'JST K Program（跨领域协作重要技术研发计划）',
      note: '2025 年 8 月 – 2030 年 7 月',
      role: '参与',
    },
    {
      name: '<a href="https://www.jst.go.jp/aspire/en/index.html" target="_blank" rel="noopener">构建以人为中心的视觉与媒体技术国际联合研究网络</a>',
      match: 'JST ASPIRE Grant Number JPMJAP2303',
      note: '2024 年 2 月 – 2029 年 3 月',
      role: '参与',
    },
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-24K02956/" target="_blank" rel="noopener">基于影像的人物行为理解的语义深化</a>',
      match: 'JSPS KAKENHI Grant Number JP24K02956',
      role: '参与',
    },
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-22KF0119/" target="_blank" rel="noopener">通过第一人称视角教学影像的多模态分析进行人物行为的学习与预测</a>',
      match: 'JSPS KAKENHI Grant Number JP22KF0119',
      role: '参与',
    },
    {
      name: '<a href="https://www.jst.go.jp/kisoken/act-x/en/project/111F001/111F001_2020.html" target="_blank" rel="noopener">利用模仿型人工智能理解人类行为</a>',
      match: 'JST ACT-X Grant Number JPMJAX2007',
      role: '参与',
    },
  ],

  footerPeriod: '© 2018–2026 林涅',
  lastUpdatedLabel: '上次更新',
}

export default zh
