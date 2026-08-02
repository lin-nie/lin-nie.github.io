import type { SiteContent } from './types'

const jp: SiteContent = {
  langLabel: '日本語',
  navHome: 'ホーム',
  profile: {
    name: '林 涅（リン ネ）',
    degree: '博士 (D2)',
    photoCaption: '撮影日：2025年11月、アメリカ、ハワイ 🌺',
    bio: `こんにちは、私は<a href="https://www.u-tokyo.ac.jp/ja/index.html" target="_blank" rel="noopener">東京大学</a>
      学際情報学府の博士課程2年生です。
      <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">佐藤洋一</a>
      教授の指導の下、<a href="https://www.iis.u-tokyo.ac.jp/ja/" target="_blank" rel="noopener">生産技術研究所 (IIS)</a>
      の<a href="https://www.ut-vision.org/ja/" target="_blank" rel="noopener">コンピュータビジョングループ</a>
      の一員として研究を行っています。2025年に東京大学の同じ研究室で修士号を取得し、その間
      <a href="https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html" target="_blank" rel="noopener">東京大学フェローシップ</a>
      の全額奨学金を受けていました。2022年にソフトウェア工学の学士号を取得し、その間
      <a href="https://cai-mj.github.io/" target="_blank" rel="noopener">蔡敏捷</a>教授の指導を受けました。
      以前は<a href="https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/" target="_blank" rel="noopener">Shanghai AI/ML Group</a>
      （<a href="https://www.microsoft.com/en-us/research/" target="_blank" rel="noopener">マイクロソフトリサーチ</a>）にて
      <a href="https://recmind.cn/" target="_blank" rel="noopener">李東勝</a>博士の指導の下、
      <a href="https://victorywys.github.io/" target="_blank" rel="noopener">王延森</a>博士と
      <a href="https://frosthan.github.io/" target="_blank" rel="noopener">韓東起</a>博士と共に研究を行っていました。
      また、<a href="https://jp.linkedin.com/in/takeshi-ohashi-056876ba" target="_blank" rel="noopener">大橋武史</a>博士と共に、
      ソニーR&Dの基盤AIチームで働いていました。`,
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
      { name: 'マイクロソフトリサーチアジア', role: '研究インターン 2024–2025', logoKey: 'microsoft' },
      { name: 'ソニー R&D', role: '夏季 AI インターン 2023', logoKey: 'sony' },
      { name: 'JSPS', role: '特別研究員（DC2）', logoKey: 'jsps' },
    ],
  },
  newsTitle: 'ニュース',
  navNews: 'ニュース',
  newsShowAll: 'すべて表示',
  newsShowLess: '折りたたむ',
  news: [
  { date: "2025.08", html: "【Congrats！】<a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/' target=\"_blank\">Microsoft Research Asia（MSRA）</a> でのインターンシップ期間中、優れた研究成果が評価され、<a href=\"https://www.linkedin.com/posts/nie-lin_microsoftresearch-msra-starsoftomorrow-activity-7348623900131368961-Ec9R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADanPIUBOzRUiTiGYjfxReqR5Wk96pMfoKg\">「Stars of Tomorrow」</a>賞（若手研究者に与えられる最高の栄誉）を受賞しました。指導してくださったメンターの方々とチームの皆様のご支援・ご助言に心より感謝申し上げます。" },
  { date: "2025.05", html: "<a href='https://www.microsoft.com/en-us/research/' target=\"_blank\">マイクロソフトリサーチ</a>での1年間の研究インターンシップを終了しました！指導教員の<a href=\"https://recmind.cn/\">李東勝博士</a>、および<a href=\"https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/\">上海AI/MLグループ</a>の皆様には、この期間中のご支援とご指導に心より感謝いたします。" },
  { date: "2025.02", html: "【Congrats！】私は <a href='https://www.u-tokyo.ac.jp/en/' target=\"_blank\">東京大学</a> の博士課程入試に合格し、2025年4月から <a href='https://www.iii.u-tokyo.ac.jp/' target=\"_blank\">東京大学大学院情報学環</a> で3年間の博士課程を開始します。" },
  { date: "2025.01", html: "【Congrats！】1本の論文が <a href=\"https://iclr.cc/\">ICLR 2025</a> に採択され、Openreviewが公開されました。 <a href=\"https://openreview.net/forum?id=96jZFqM5E0\">[Openreview]</a>" },
  { date: "2024.12", html: "【Congrats！】1本の論文が <a href=\"https://2025.ieeeicassp.org/\">ICASSP 2025</a> に採択されました。" },
  { date: "2024.09", html: "【Congrats！】1本の論文が <a href=\"https://2024.emnlp.org/\">EMNLP 2024</a> に採択されました。" },
  { date: "2024.07", html: "【Congrats！】2本の論文が <a href=\"https://eccv2024.ecva.net/\">ECCV 2024</a> に採択されました。" },
  { date: "2024.06", html: "【Congrats！】私は <a href='https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/' target=\"_blank\">Microsoft Research Asia</a> で産学連携インターンシップを開始する予定です。私の指導教員は <a href=\"https://recmind.cn/\">李東升博士</a> で、彼は <a href=\"https://www.microsoft.com/en-us/research/group/shanghai-ai-ml-group/\">Shanghai AI/ML Group</a> に所属しています。" },
  { date: "2023.08", html: "【Congrats！】私は <a href=\"https://www.sony.com/en/SonyInfo/technology/about/\">ソニーR&D</a>（日本、東京）の基盤AIチームで産学連携インターンシップを開始する予定です。私の指導教員は <a href=\"https://jp.linkedin.com/in/takeshi-ohashi-056876ba\">大橋健史博士</a> です。" },
  { date: "2023.03", html: "【Congrats！】私は <a href=\"https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html\">東京大学フェローシップ</a> に選ばれ、東京大学での修士課程において全額奨学金を受けることになります。" },
  { date: "2023.02", html: "【Congrats！】私は東京大学 情報学環・学際情報学府（GSII）の修士課程入学試験に合格し、4月から東京大学学際情報学府の学際情報学専攻の修士になります。" },
  { date: "2022.07", html: "私たちのノウレッジ・トランスファー・ラーニングに関する論文はECCV 2022に採択されました。論文とコードは利用可能です。<a href=\"https://arxiv.org/pdf/2207.05409.pdf\">[論文]</a><a href=\"https://arxiv.org/abs/2207.05409\">[Arxiv プリプリント]</a><a href=\"https://github.com/dzy3/KCD\">[Github コード]</a>" },
  { date: "2022.07", html: "私は今年の<a href=\"https://cvpr2022.thecvf.com/\">CVPR 2022</a>に招待されて、<a href=\"https://eyewear-computing.org/EPIC_CVPR22/\">EPIC 2022</a>の講演に参加しました。" },
  { date: "2022.06", html: "【Congrats！】<a href=\"https://cai-mj.github.io/\">蔡敏捷 先生</a>のご指導のもとで、私の<strong>無監督ドメイン適応について一人称動作認識</strong>に関する論文は<a href=\"https://eyewear-computing.org/EPIC_CVPR22/\">CVPR-EPIC 2022</a>に採択されました。論文とコードは利用可能です。<a href=\"https://arxiv.org/abs/2207.03095\">[ArXiv 预印本]</a> <a href=\"https://github.com/lin-nie/EPIC-KITCHENS-C4-UDA\">[Github代码]</a>" },
  { date: "2022.06", html: "私の卒業論文<strong>「エゴセントリックビデオにおけるUDA適応に基づく一人称行動認識」</strong>は、無事に答弁に合格しました。" },
  { date: "2022.05", html: "【Congrats！】<a href='http://en.moe.gov.cn/'>中華人民共和国教育部</a>から<a href='http://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A05/202112/t20211216_587869.html'>国家レベル奨学金</a>を受賞しました。これは中国最高レベルの奨学金プログラムです。（<strong>全国上位0.01%の学生</strong>）." },
  { date: "2021.12", html: "私は<strong>学年トップ1の成績</strong>で2021年の<strong>一等奨学金</strong>及び<strong>嶺南学術奨学金(優秀学術代表)</strong>を獲得しました。ありがとうございます。" },
  { date: "2021.10", html: "研究室から自分の<strong>ヘッドセット・カメラ</strong>をゲットしました。これを使って<strong>一人称データセット</strong>の収集を試みます。ありがとうございます。" },
  { date: "2021.06", html: "湖南大学のコンピュータビジョン研究室で<strong>アシスタント研究員</strong>として務め始めました。<br>指導先生は<a href=\"https://cai-mj.github.io/\">蔡 敏捷教授</a>です, よろしくお願いします~<a href=\"https://www.linnie.com.cn/documents/Research_Assistant_Minjie_Cai_Hunan_University.pdf\">[研究證明]</a>" },
  { date: "2021.05", html: "【Congrats！】アメリカ数学モデリングコンテスト(USA MCM/ICM)で<strong>国際二等賞</strong>を受賞しました！" },
  { date: "2021.01", html: "うちのチームは13/2207の順位で<a href= \"https://www.ccf.org.cn/en/\">中国コンピュータ学会（CCF）</a><strong>人工知能視覚アルゴリズムコンテストの決勝戦</strong>に入選しました。素晴らしいチームワークでした！！" },
  { date: "2020.12", html: "私は<strong>学年トップ1の成績</strong>で2020年の<strong>一等奨学金</strong>及び<strong>高偉光企業奨学金(傑出工程代表)</strong>を受賞しました。ありがとうございます。" },
  { date: "2020.10", html: "<strong>中国人工知能電子デザインコンテスト</strong>で三等賞を受賞しました !!" },
  { date: "2020.08", html: "私は<strong>シンガポール国立大学（NUS）</strong>で<strong>人工知能とディープラーニングのプロジェクトスタディ</strong>を修了しました。シンガポール国立大学から<strong>栄誉賞</strong>を受賞しました。" },
  { date: "2019.12", html: "私は<strong>学年トップ1の成績</strong>で2019年度の<strong>一等奨学金</strong>を受賞しました。ありがとうございます!" },
  { date: "2019.08", html: "Prof. Lvy Wangのご指導により、<strong>カナダのトロント大学（UofT）</strong>で私は数学と機械学習に関する研究プロジェクトを取り組みました。今後の<strong>コンピュータビジョン</strong>に関する研究に数学の基礎を築きくれました。" },
  ],

  publicationsTitle: '発表論文',
  navPublications: '発表論文',
  paperLabel: '論文',
  projectLabel: 'プロジェクトページ',
  codeLabel: 'コード',
  videoLabel: 'ビデオ',
  openreviewLabel: 'Openreview',
  publications: [
    {
      title: 'SiMHand: Mining Similar Hands for Large-Scale 3D Hand Pose Pre-training',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <strong><a href="https://tkhkaeio.github.io/" target="_blank" rel="noopener">Takehiko Ohkawa</a></strong>, Mingfang Zhang, Yifei Huang, <a href="https://cai-mj.github.io/" target="_blank" rel="noopener">Minjie Cai</a>, Ming Li, Ryosuke Furuta, <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">Yoichi Sato</a><sup>✉</sup>',
      venue: 'The Thirteenth International Conference on Learning Representations (ICLR), 2025',
    },
    {
      title: 'Translating Mental Imaginations into Characters with Codebooks and Dynamics-Enhanced Decoding',
      authors:
        'Jingyuan Li, <a href="https://victorywys.github.io/" target="_blank" rel="noopener">Yansen Wang</a>, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <a href="https://recmind.cn/" target="_blank" rel="noopener">Dongsheng Li</a><sup>✉</sup>',
      venue: 'IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2025',
    },
    {
      title: 'Vision-Language Model Fine-Tuning via Simple Parameter-Efficient Modification',
      authors:
        'Ming Li, Jike Zhong, Chenxin Li, Liuzhuozheng Li, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <strong><a href="https://www.ms.k.u-tokyo.ac.jp/sugi/" target="_blank" rel="noopener">Masashi Sugiyama</a></strong><sup>✉</sup>',
      venue: 'The Conference on Empirical Methods in Natural Language Processing (EMNLP), 2024',
    },
    {
      title: 'HandCLR: Pre-Training for 3D Hand Pose Estimation with Contrastive Learning on Large-Scale Hand Images in the Wild',
      authors:
        '<strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, <strong><a href="https://tkhkaeio.github.io/" target="_blank" rel="noopener">Takehiko Ohkawa</a></strong>, Mingfang Zhang, Yifei Huang, Ryosuke Furuta, <a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener">Yoichi Sato</a>',
      venue: 'HANDS, European Conference on Computer Vision Workshop (ECCVW), 2024',
    },
    {
      title: 'Benchmarks and Challenges in Pose Estimation for Egocentric Hand Interactions with Objects',
      authors:
        'Zicong Fan, <strong><a href="https://tkhkaeio.github.io/" target="_blank" rel="noopener">Takehiko Ohkawa</a></strong>, Linlin Yang, <strong><a href="https://lin-nie.github.io/" target="_blank" rel="noopener">Nie Lin</a></strong>, Zhishan Zhou, Shihao Zhou, Jiajun Liang, Zhong Gao, Xuanyang Zhang, Xue Zhang, Fei Li, Zheng Liu, Feng Lu, Karim Abou Zeid, Bastian Leibe, Jeongwan On, Seungryul Baek, Aditya Prakash, Saurabh Gupta, Kun He, Yoichi Sato, Otmar Hilliges, Hyung Jin Chang, Angela Yao',
      venue: 'European Conference on Computer Vision (ECCV), 2024',
    },
    {
      title: 'Knowledge Condensation Distillation',
      authors:
        'Chenxin Li, <a href="https://lmbxmu.github.io/" target="_blank" rel="noopener">Mingbao Lin</a>, Zhiyuan Ding, <strong>Nie Lin</strong>, Yihong Zhuang, <a href="https://huangyue05.github.io/" target="_blank" rel="noopener">Yue Huang</a>*, ...',
      venue: 'European Conference on Computer Vision (ECCV), 2022',
    },
    {
      title: 'EPIC-KITCHENS-100 Unsupervised Domain Adaptation Challenge for Action Recognition 2022 Technical Report',
      authors:
        '<strong>Nie Lin</strong>, <a href="https://cai-mj.github.io/" target="_blank" rel="noopener">Minjie Cai</a><sup>✉</sup>',
      venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR-EPIC), 2022',
    },
  ],

  educationTitle: '学歴',
  navEducation: '学歴',
  supervisedByLabel: '指導教員：',
  education: [
    {
      period: '2023.4 – 現在',
      degree: '博士課程',
      mentor: '佐藤 洋一',
      mentorUrl: 'https://sites.google.com/ut-vision.org/ysato/',
      department: '学際情報学、学際情報学府',
      university: '東京大学',
    },
    {
      period: '2023.4 – 2025.3',
      degree: '修士課程',
      mentor: '佐藤 洋一',
      mentorUrl: 'https://sites.google.com/ut-vision.org/ysato/',
      thesis: '大量かつ多様な手画像を用いた対照学習による3次元手指姿勢推定の事前学習',
      department: '学際情報学、学際情報学府',
      university: '東京大学',
    },
  ],

  honorsTitle: '奨学金・受賞',
  navHonors: '奨学金・受賞',
  scholarshipLabel: '奨学金',
  scholarships: [
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
    { text: '嶺南学術奨学金（傑出した学術の代表）' },
    { text: '2021年度 一等奨学金（学年GPA 1位、2021年）' },
    { text: '高偉光企業奨学金（傑出した工事の代表）' },
    { text: '2020年度 一等奨学金（学年GPA 1位、2020年）' },
    { text: '2019年度 一等奨学金（学年GPA 1位、2019年）' },
  ],
  awardsLabel: '受賞',
  awards: [
    'マイクロソフトアジア研究院 - 明日の星（Stars of Tomorrow）賞',
    '優秀な学部生の論文',
    '米国数学モデリングコンテスト国際2位',
    '中国コンピュータ学会AI視覚アルゴリズム大会（順位13/2207）',
    '中国人工知能電子デザインコンテスト3等賞',
    'シンガポール国立大学名誉賞',
  ],

  fundTitle: '研究ファンド',
  navFund: '研究ファンド',
  scientificFund: [
    {
      name: '<a href="https://www.cis-trans.jp/spring_gx/" target="_blank" rel="noopener">JST 次世代研究者挑戦的研究プログラム (SPRING-GX)</a>',
      match: 'JST SPRING Grant Number JPMJSP2108',
    },
    {
      name: '<a href="https://projectdb.jst.go.jp/grant/JST-PROJECT-23837230/" target="_blank" rel="noopener">人間中心のビジョン・メディア技術に関する国際共同研究ネットワークの構築</a>',
      match: 'JST ASPIRE Grant Number JPMJAP2303',
    },
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-24K02956/" target="_blank" rel="noopener">映像に基づく人物行動理解の意味的AI深化</a>',
      match: 'JSPS KAKENHI Grant Number JP24K02956',
    },
    {
      name: '<a href="https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-22KF0119/" target="_blank" rel="noopener">一人称視点教示映像のマルチモーダル解析による人物行動の学習と予測</a>',
      match: 'JSPS KAKENHI Grant Number JP22KF0119',
    },
    {
      name: '<a href="https://www.jst.go.jp/kisoken/act-x/en/project/111F001/111F001_2020.html" target="_blank" rel="noopener">模倣型AIによる人間行動の理解</a>',
      match: 'JST ACT-X Grant Number JPMJAX2007',
    },
  ],

  footerPeriod: '© 2018–2026 林涅',
  lastUpdatedLabel: '前回のアップデート',
}

export default jp
