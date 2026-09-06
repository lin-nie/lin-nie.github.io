import type { SiteContent } from './types'

const jp: SiteContent = {
  langLabel: '日本語',
  navHome: 'ホーム',
  profile: {
    name: '林 涅（リン ネ）',
    degree: '博士 (D2)',
    photoCaption: '撮影日：2026年8月、CMU 🤖、ピッツバーグ ⚙️、アメリカ',
    easterEggPhotoCaption: '撮影日：2025年11月、アメリカ、ハワイ 🌺',
    easterEggPhotoSubtitle: '（人生の写真）',
    easterEggHint: '🥚 クリックしてイースターエッグを見る',
    bio: `私は<a href="https://www.u-tokyo.ac.jp/ja/index.html" target="_blank" rel="noopener">東京大学</a>の
      <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">佐藤洋一</a>教授と
      <a href="https://www.cmu.edu/" target="_blank" rel="noopener">カーネギーメロン大学</a>の
      <a href="https://kriskitani.github.io/" target="_blank" rel="noopener">Kris Kitani</a>教授の共同指導のもと、
      博士課程2年生（D2）として研究を行っています。
      東京大学<a href="https://www.iis.u-tokyo.ac.jp/ja/" target="_blank" rel="noopener">生産技術研究所（IIS）</a>、
      およびカーネギーメロン大学<a href="https://www.ri.cmu.edu/" target="_blank" rel="noopener">ロボティクス研究所</a>に所属しています。
      現在、日本の博士課程学生にとって最も権威ある奨学金の一つである
      <a href="https://www.jsps.go.jp/j-pd/" target="_blank" rel="noopener">日本学術振興会（JSPS）特別研究員（DC2）</a>
      の支援を受けて、博士課程に取り組んでいます。`,
    researchStatement: `<strong>機械がどのようにして物理世界を知覚し行動できるようになるのか</strong>、私はそこに強い関心を持っています——
      その答えは、私たちが持つ最も豊かな身体的経験の源、すなわち<strong>人間自身とその背後にある神経信号</strong>にあるのかもしれません。
      私の研究は、<strong>人間中心のマルチモーダル知覚</strong>と<strong>脳型の身体性知能</strong>を中心に据え、
      <strong>一人称視点の人間データ</strong>——一人称動画や神経信号から手や体の動きまで——を用いて、身体性エージェントが私たちと同じように世界を見て、
      理解し、操作できるように学習させることを目指しています。`,
    contact: {
      addressJpLabel: '住所（日）',
      addressJp: '〒 153-8505 東京都目黒区駒場 4-6-1 東京大学 生産技術研究所 Ee-401（IIS）',
      addressUsLabel: '住所（米）',
      addressUs: '201 Smith Hall (EDSH), Carnegie Mellon University, 4800 Forbes Ave, Pittsburgh, PA 15213, USA',
      email: 'nielin@iis.u-tokyo.ac.jp',
      emailUtokyoTag: '（東京大学）',
      emailCmu: 'niel@andrew.cmu.edu',
      emailCmuTag: '（CMU）',
      emailAndWord: 'と',
      web: 'lin-nie.github.io',
    },
    affiliations: [
      { name: '東京大学', role: '修士 2023–2025、博士 2025–現在', logoKey: 'utokyo' },
      { name: 'カーネギーメロン大学', role: '博士課程（共同指導）2025–現在', logoKey: 'cmu' },
      { name: 'JSPS', role: '特別研究員（DC2）', logoKey: 'jsps' },
      { name: 'マイクロソフトリサーチアジア', role: '研究インターン 2024–2025', logoKey: 'microsoft' },
      { name: 'ソニー R&D', role: '研究インターン 2023', logoKey: 'sony' },
    ],
    cvNote: '私の履歴書は<a href="#" target="_blank" rel="noopener">こちら</a>からダウンロードできます。',
    internshipNote:
      '2027年のResearch Scientist夏季インターンシップを積極的に探しています<br />——勤務地は問いません、お気軽に<a href="mailto:nielin@iis.u-tokyo.ac.jp">ご連絡ください</a>！',
    socialHints: {
      github: '私のコードを見る',
      scholar: '私を知る',
      linkedin: 'つながりましょう',
      x: 'フォローする',
    },
  },
  newsTitle: 'ニュース',
  navNews: 'ニュース',
  newsShowAll: 'すべて表示',
  newsShowLess: '折りたたむ',
  news: [
  { date: "2026.09", html: "朗報です！<a href=\"https://2026.ieee-iros.org/\">IROS 2026</a>に参加します——ピッツバーグでお会いしましょう。" },
  { date: "2026.08", html: "第7回<a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7498943727135150080/\">CMU Robot Learning Workshop</a>で素敵な時間を過ごしました。SiMDexについてライトニングトークを行いました——<a href=\"https://www.ri.cmu.edu/ri-faculty/david-held/\">David Held</a>教授とMadhavan Iyengarさんの企画に感謝します！" },
  { date: "2026.08", html: "<a href=\"https://en.wikipedia.org/wiki/Pittsburgh\">ピッツバーグ</a>で新たな一歩を踏み出し、<a href=\"https://www.cmu.edu/\">カーネギーメロン大学</a><a href=\"https://www.ri.cmu.edu/\">ロボティクス研究所</a>にて<a href=\"https://kriskitani.github.io/\">Kris Kitani</a>教授のご指導のもと研究をスタートしました。三本の川が交わり、かつての鉄鋼の街⚙️がいまロボティクス🤖の鼓動を刻むこの場所は、世界の未来を築くのにふさわしい地だと感じています。" },
  { date: "2026.04", html: "おめでとうございます！<a href=\"https://www.jsps.go.jp/j-pd/\">日本学術振興会特別研究員（DC2）</a>に採択されました。日本の博士課程学生にとって最も権威ある奨学金の一つです。" },
  { date: "2026.01", html: "おめでとうございます！1本の論文が <a href=\"https://iclr.cc/\">ICLR 2026</a> に採択され、Openreviewが公開されました。 <a href=\"https://openreview.net/forum?id=DGcoJINQ7P\">[Openreview]</a>" },
  { date: "2025.08", html: "おめでとうございます！<a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/' target=\"_blank\">Microsoft Research Asia（MSRA）</a> でのインターン中、<a href=\"https://www.linkedin.com/posts/nie-lin_microsoftresearch-msra-starsoftomorrow-activity-7348623900131368961-Ec9R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADanPIUBOzRUiTiGYjfxReqR5Wk96pMfoKg\">「Stars of Tomorrow」</a>賞を受賞しました。メンターとチームの皆様に感謝します。" },
  { date: "2025.05", html: "<a href='https://www.microsoft.com/en-us/research/' target=\"_blank\">マイクロソフトリサーチ</a>での1年間の研究インターンを終了しました！<a href=\"https://recmind.cn/\">李東勝博士</a>と<a href=\"https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/\">上海AI/MLグループ</a>に感謝します。" },
  { date: "2025.02", html: "おめでとうございます！<a href='https://www.u-tokyo.ac.jp/en/' target=\"_blank\">東京大学</a>の博士課程入試に合格し、2025年4月から博士課程を開始します。" },
  { date: "2025.01", html: "おめでとうございます！1本の論文が <a href=\"https://iclr.cc/\">ICLR 2025</a> に採択され、Openreviewが公開されました。 <a href=\"https://openreview.net/forum?id=96jZFqM5E0\">[Openreview]</a>" },
  { date: "2024.12", html: "おめでとうございます！1本の論文が <a href=\"https://2025.ieeeicassp.org/\">ICASSP 2025</a> に採択されました。" },
  { date: "2024.09", html: "おめでとうございます！1本の論文が <a href=\"https://2024.emnlp.org/\">EMNLP 2024</a> に採択されました。" },
  { date: "2024.07", html: "おめでとうございます！2本の論文が <a href=\"https://eccv2024.ecva.net/\">ECCV 2024</a> に採択されました。" },
  { date: "2024.06", html: "おめでとうございます！私は <a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/' target=\"_blank\">Microsoft Research Asia</a> で産学連携インターンシップを開始する予定です。私の指導教員は <a href=\"https://recmind.cn/\">李東升博士</a> で、彼は <a href=\"https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/\">Shanghai AI/ML Group</a> に所属しています。" },
  { date: "2023.08", html: "おめでとうございます！私は <a href=\"https://www.sony.com/en/SonyInfo/technology/about/\">ソニーR&D</a>（日本、東京）の基盤AIチームで産学連携インターンシップを開始する予定です。私の指導教員は <a href=\"https://jp.linkedin.com/in/takeshi-ohashi-056876ba\">大橋健史博士</a> です。" },
  { date: "2023.03", html: "おめでとうございます！私は <a href=\"https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html\">東京大学フェローシップ</a> に選ばれ、東京大学での修士課程において全額奨学金を受けることになります。" },
  { date: "2023.02", html: "おめでとうございます！私は東京大学 情報学環・学際情報学府（GSII）の修士課程入学試験に合格し、4月から東京大学学際情報学府の学際情報学専攻の修士になります。" },
  { date: "2022.07", html: "私たちのノウレッジ・トランスファー・ラーニングに関する論文はECCV 2022に採択されました。論文とコードは利用可能です。<a href=\"https://arxiv.org/pdf/2207.05409.pdf\">[論文]</a><a href=\"https://arxiv.org/abs/2207.05409\">[Arxiv プリプリント]</a><a href=\"https://github.com/dzy3/KCD\">[Github コード]</a>" },
  { date: "2022.07", html: "私は今年の<a href=\"https://cvpr2022.thecvf.com/\">CVPR 2022</a>に招待されて、<a href=\"https://eyewear-computing.org/EPIC_CVPR22/\">EPIC 2022</a>の講演に参加しました。" },
  { date: "2022.06", html: "おめでとうございます！<a href=\"https://cai-mj.github.io/\">蔡敏捷 先生</a>のご指導のもとで、私の<strong>無監督ドメイン適応について一人称動作認識</strong>に関する論文は<a href=\"https://eyewear-computing.org/EPIC_CVPR22/\">CVPR-EPIC 2022</a>に採択されました。論文とコードは利用可能です。<a href=\"https://arxiv.org/abs/2207.03095\">[ArXiv 预印本]</a> <a href=\"https://github.com/lin-nie/EPIC-KITCHENS-C4-UDA\">[Github代码]</a>" },
  { date: "2022.06", html: "私の卒業論文<strong>「エゴセントリックビデオにおけるUDA適応に基づく一人称行動認識」</strong>は、無事に答弁に合格しました。" },
  { date: "2022.05", html: "おめでとうございます！<a href='http://en.moe.gov.cn/'>中華人民共和国教育部</a>から<a href='http://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A05/202112/t20211216_587869.html'>国家レベル奨学金</a>を受賞しました。これは中国最高レベルの奨学金プログラムです。（<strong>全国上位0.01%の学生</strong>）." },
  { date: "2021.10", html: "研究室から自分の<strong>ヘッドセット・カメラ</strong>をゲットしました。これを使って<strong>一人称データセット</strong>の収集を試みます。ありがとうございます。" },
  { date: "2021.06", html: "湖南大学のコンピュータビジョン研究室で<strong>アシスタント研究員</strong>として務め始めました。<br>指導先生は<a href=\"https://cai-mj.github.io/\">蔡 敏捷教授</a>です, よろしくお願いします~" },
  { date: "2020.08", html: "私は<strong>シンガポール国立大学（NUS）</strong>で<strong>人工知能とディープラーニングのプロジェクトスタディ</strong>を修了しました。シンガポール国立大学から<strong>栄誉賞</strong>を受賞しました。" },
  { date: "2019.08", html: "Prof. Lvy Wangのご指導により、<strong>カナダのトロント大学（UofT）</strong>で私は数学と機械学習に関する研究プロジェクトを取り組みました。今後の<strong>コンピュータビジョン</strong>に関する研究に数学の基礎を築きくれました。" },
  ],

  publicationsTitle: 'プロジェクト',
  navPublications: 'プロジェクト',
  paperLabel: '論文',
  projectLabel: 'プロジェクトページ',
  codeLabel: 'コード',
  videoLabel: 'ビデオ',
  openreviewLabel: 'Openreview',
  datasetLabel: 'データセット',
  comingSoonLabel: '近日公開',
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
        '<a href="https://chenxinli001.github.io/" target="_blank" rel="noopener">Chenxin Li</a>, <a href="https://lmbxmu.github.io/" target="_blank" rel="noopener">Mingbao Lin</a>, <a href="#">Zhiyuan Ding</a>, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="#">Yihong Zhuang</a>, <a href="https://huangyue05.github.io/" target="_blank" rel="noopener">Yue Huang</a>*, ...',
      venue: 'European Conference on Computer Vision (ECCV), 2022',
    },
    {
      title: 'EPIC-KITCHENS-100 Unsupervised Domain Adaptation Challenge for Action Recognition 2022 Technical Report',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://cai-mj.github.io/" target="_blank" rel="noopener">Minjie Cai</a><sup>✉</sup>',
      venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR-EPIC), 2022',
    },
  ],

  educationTitle: '学歴',
  navEducation: '学歴',
  supervisedByLabel: '指導教員：',
  supportedByLabel: '支援：',
  thesisLabel: '学位論文：',
  andWord: 'と',
  education: [
    {
      period: '2025.4 – 現在',
      degree: '博士課程',
      mentor: '佐藤 洋一',
      mentorUrl: 'https://sites.google.com/ut-vision.org/ysato/',
      mentorTag: 'UTokyo',
      mentor2: 'Kris Kitani',
      mentor2Url: 'https://kriskitani.github.io/',
      mentor2Tag: 'CMU',
      institution:
        '<a href="https://www.iis.u-tokyo.ac.jp/en/" target="_blank" rel="noopener">生産技術研究所（Institute of Industrial Science）</a>、<a href="https://www.u-tokyo.ac.jp/ja/index.html" target="_blank" rel="noopener">東京大学</a>（UTokyo, IIS）',
      institution2:
        '<a href="https://www.ri.cmu.edu/" target="_blank" rel="noopener">ロボティクス研究所（Robotics Institute）</a>、<a href="https://www.cmu.edu/" target="_blank" rel="noopener">カーネギーメロン大学</a>（CMU, RI）',
      support: '日本学術振興会特別研究員（DC2）',
      supportUrl: 'https://www.jsps.go.jp/english/e-pd/',
    },
    {
      period: '2023.4 – 2025.3',
      degree: '修士課程',
      mentor: '佐藤 洋一',
      mentorUrl: 'https://sites.google.com/ut-vision.org/ysato/',
      thesis: '大量かつ多様な手画像を用いた対照学習による3次元手指姿勢推定の事前学習',
      institution:
        '<a href="https://www.iii.u-tokyo.ac.jp/" target="_blank" rel="noopener">学際情報学府（GSII）</a>、<a href="https://www.u-tokyo.ac.jp/ja/index.html" target="_blank" rel="noopener">東京大学</a>（UTokyo, GSII）',
      support: '東京大学フェローシップ',
      supportUrl: 'https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html',
    },
  ],

  honorsTitle: '奨学金・受賞',
  navHonors: '奨学金・受賞',
  scholarshipLabel: '奨学金',
  scholarships: [
    {
      text: '日本学術振興会特別研究員（DC2）',
      url: 'https://www.jsps.go.jp/j-pd/',
      explain: '日本学術振興会',
      supp: '日本の博士課程学生にとって最も権威ある奨学金の一つ',
    },
    {
      text: '日本次世代研究者挑戦的研究プログラム（SPRING-GX）',
      url: 'https://www.cis-trans.jp/spring_gx/',
      explain: '3年間、博士課程の全額奨学金',
      supp: 'JST 次世代研究者挑戦的研究プログラム JPMJSP2108 の支援、上限額：年間36万円',
    },
    {
      text: '東京大学フェローシップ',
      url: 'https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html',
      explain: '2年間、修士課程の全額奨学金',
      supp: '2023年、東京大学の修士課程学生は22名のみ',
    },
    {
      text: '中華人民共和国国家奨学金',
      url: 'http://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A05/202112/t20211216_587869.html',
      explain: '中華人民共和国教育部',
      supp: '中国の上位0.1%の学生',
    },
  ],
  awardsLabel: '受賞',
  awards: [
    {
      text: 'マイクロソフトアジア研究院 - 明日の星（Stars of Tomorrow）賞',
      url: 'https://www.linkedin.com/posts/nie-lin_microsoftresearch-msra-starsoftomorrow-share-7348623898764115969-qQQJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADanPIUBOzRUiTiGYjfxReqR5Wk96pMfoKg',
    },
    { text: '優秀な学部生の論文' },
  ],

  fundTitle: '研究ファンド',
  navFund: '研究ファンド',
  scientificFund: [
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-26KJ0863/" target="_blank" rel="noopener">自己視点映像・脳波マルチモーダルデータベースの構築と分析</a>',
      match: 'JSPS 科研費 課題番号 26KJ0863（特別研究員奨励費）',
      note: '2026.04.22–2028.03.31 · 1,400千円（直接経費：1,400千円）',
      role: '代表',
    },
    {
      name: '<a href="https://www.cis-trans.jp/spring_gx/" target="_blank" rel="noopener">JST 次世代研究者挑戦的研究プログラム (SPRING-GX)</a>',
      match: 'JST SPRING Grant Number JPMJSP2108',
      role: '代表',
    },
    {
      name: '<a href="https://bioskilldx.github.io/" target="_blank" rel="noopener">BioSkillDX：ライフサイエンス実験作業における暗黙知の獲得と作業支援</a>',
      match: 'JST Kプログラム（経済安全保障重要技術育成プログラム）',
      note: '2025年8月～2030年7月',
      role: '参加',
    },
    {
      name: '<a href="https://www.jst.go.jp/aspire/en/index.html" target="_blank" rel="noopener">人間中心のビジョン・メディア技術に関する国際共同研究ネットワークの構築</a>',
      match: 'JST ASPIRE Grant Number JPMJAP2303',
      note: '2024年2月～2029年3月',
      role: '参加',
    },
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-24K02956/" target="_blank" rel="noopener">映像に基づく人物行動理解の意味的AI深化</a>',
      match: 'JSPS KAKENHI Grant Number JP24K02956',
      role: '参加',
    },
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-22KF0119/" target="_blank" rel="noopener">一人称視点教示映像のマルチモーダル解析による人物行動の学習と予測</a>',
      match: 'JSPS KAKENHI Grant Number JP22KF0119',
      role: '参加',
    },
    {
      name: '<a href="https://www.jst.go.jp/kisoken/act-x/en/project/111F001/111F001_2020.html" target="_blank" rel="noopener">模倣型AIによる人間行動の理解</a>',
      match: 'JST ACT-X Grant Number JPMJAX2007',
      role: '参加',
    },
  ],

  footerPeriod: '© 2018–2026 林涅',
  lastUpdatedLabel: '前回のアップデート',
}

export default jp
