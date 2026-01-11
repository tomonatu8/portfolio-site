import type {
  BilingualText,
  BilingualArray,
  LocalizedProfile,
  LocalizedEducation,
  LocalizedExperience,
  LocalizedSkill,
  LocalizedPublication,
  LocalizedProject
} from './localizedData';

const bt = (en: string, ja: string): BilingualText => ({ en, ja });
const btNoTranslate = (en: string): BilingualText => ({ en, ja: en });
const ba = (en: string[], ja: string[]): BilingualArray => ({ en, ja });


export const skills: LocalizedSkill[] = [
  // Languages
  {name: bt('Japanese', '日本語'), category: 'language'},
  {name: bt('English', '英語'), category: 'language'},

  // Algorithm & Systems
  { 
    name: bt('Algorithm Design', 'アルゴリズム設計'), 
    description: bt(
      'Expertise in algorithm design and optimization, particularly in matching algorithms and mechanism design.',
      'マッチングアルゴリズムやメカニズムデザインに特化したアルゴリズム設計と最適化の専門知識'
    ),
    category: 'algorithm' 
  },
  { 
    name: bt('Applied Mathematics', '応用数学'), 
    description: bt(
      'Strong foundation in applied mathematics, particularly in optimization and computational methods.',
      '最適化や計算手法に特化した応用数学の強固な基盤'
    ),
    category: 'algorithm' 
  },

  // Programming Languages
  { 
    name: bt('Python', 'Python'), 
    description: bt(
      'For research coding, algorithm development, and ML pipelines. Extensive experience with NumPy, Pandas, and scientific computing libraries.',
      '研究コード実装，アルゴリズム開発やMLパイプライン実装などで使用。PyTorch, NumPy, Pandas, 科学計算ライブラリなど'
    ),
    category: 'programming' 
  },
  { 
    name: bt('JavaScript/TypeScript', 'JavaScript/TypeScript'), 
    description: bt(
      'Frontend and backend web development with Node.js, React, Svelte, and other modern frameworks.',
      'ReactやSvelteなどを使用したフロントエンドおよびバックエンドのWeb開発'
    ),
    category: 'programming' 
  },
  { 
    name: bt('Rust', 'Rust'), 
    description: bt(
      'Algorithm. Created Python bindings using PyO3. WebAssembly development for frontend.',
      'アルゴリズム実装。PyO3を使用したPythonバインディングの作成。フロントで利用できるWebAssemblyの開発。'
    ),
    category: 'programming' 
  },

  
  // Frameworks & Libraries (no description needed)
  // { name: 'React', category: 'programming' },
  // { name: 'Node.js', category: 'programming' },
  // { name: 'Svelte', category: 'programming' },
  // { name: 'TensorFlow', category: 'ai' },
  
  // AI & ML
  { name: bt('Generative AI', '生成AI'), category: 'ai' },
  { name: bt('NLP', '自然言語処理'), category: 'ai' },
  { name: bt('Algorithm', 'アルゴリズム'), category: 'ai' },
  { name: bt('Deep Learning', '深層学習'), category: 'ai' },
  
  // DevOps & Tools
  { name: bt('Docker', 'Docker'), category: 'devops' },
  { name: bt('Code Test', 'コードテスト'), category: 'devops' },
  
  // Other
  { name: bt('API Design', 'API設計'), category: 'other' },
  { name: bt('Development with Git', 'Gitを用いた開発'), category: 'other' },
  { name: bt('Team Development', 'チーム開発'), category: 'other' },
];

// Multilingual experience data
export const experience: LocalizedExperience[] = [

  {
    title: bt('Applied Research Engineer', 'Applied Research Engineer'),
    company: bt('Sakana AI', 'Sakana AI'),
    startDate: '09/2025',
    endDate: 'Present',
    // description: ba(
    //   [
    //     'Research and development with LLMs',
    //   ],
    //   [
    //     '生成AIを用いた研究開発',
    //   ]
    // ),
    employmentType: bt('Permanent', 'パーマネント'),
    experienceType: 'engineering'
  },

  {
    title: bt('Assistant Technical Staff', '技術補佐員'),
    company: bt('The University of Tokyo', '東京大学'),
    // location: bt('Tokyo', '東京'),
    startDate: '04/2022',
    endDate: '09/2025',
    // description: ba(
    //   [
    //   ],
    //   [
    //   ]
    // ),
    // technologies: ba(
    //   ['Computational Chemistry', 'Optimizations', 'Applied Mathematics', 'Python', 'C++'],
    //   ['計算化学', '最適化', '応用数学', 'Python', 'C++']
    // ),
    employmentType: bt('Part-time', 'パートタイム'),
    experienceType: 'research'
  },

  // Liquitousも書いておく

  {
    title: bt('R&D Engineer', 'R&Dエンジニア'),
    company: bt('Liquitous', 'Liquitous'),
    location: bt('Kanagawa, Japan', '神奈川, 日本'),
    startDate: '09/2022',
    endDate: '09/2025',
    // description: ba(
    //   [
    //     'Development of citizen participation platform for consensus building in Japanese local governments',
    //   ],
    //   [
    //     '自治体向けの市民参加型の合意形成プラットフォームの開発',
    //   ]
    // ),
    // technologies: ba(
    //   ['Citizen Participation', 'NLP', 'Front-end Web Development', 'Back-end Web Development', 'Python', 'TypeScript / Svelte', 'Gen AI'],
    //   ['市民参加', '自然言語処理', 'フロントエンド開発', 'バックエンド開発', 'Python', 'TypeScript / Svelte', '生成AI']
    // ),
    employmentType: bt('Outsourcing', '業務委託'),
    experienceType: 'engineering'
  },

  {
    title: bt('ML Engineer, Data Scientist', 'MLエンジニア, データサイエンティスト'),
    company: bt('Mirai Share', '未来シェア'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '02/2022',
    endDate: '02/2025',
    // description: ba(
    //   [
    //     'Developed algorithms and data analysis related to transportation mobility service.',
    //   ],
    //   [
    //     '交通モビリティサービスに関連したアルゴリズムの開発，データの分析',
    //   ]
    // ),
    // technologies: ba(
    //   ['Algorithm', 'Gen AI', 'Data Analysis', 'Machine Learning', 'Python'],
    //   ['アルゴリズム', '生成AI', 'データ分析', '機械学習', 'Python']
    // ),
    employmentType: bt('Part-time', 'パートタイム'),
    experienceType: 'engineering'
  },
  {
    title: bt('Research Visit', 'リサーチ訪問'),
    company: bt('National University of Singapore', 'シンガポール国立大学'),
    location: bt('Singapore', 'シンガポール'),
    startDate: '01/2024',
    endDate: '02/2024',
    // description: ba(
    //   [
    //   ],
    //   [
    //   ]
    // ),
    // technologies: ba(
    //   ['Research', 'Algorithm', 'Fair Division'],
    //   ['研究', 'アルゴリズム', '公平分割']
    // ),
    experienceType: 'research'
    // employmentType: bt('Research Visit', '研究訪問')
  },
  {
    title: bt('Research Scientist', 'リサーチサイエンティスト'),
    company: bt('CyberAgent', 'サイバーエージェント'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '02/2023',
    endDate: '08/2024',
    // description: ba(
    //   [
    //     'Deployed matching algorithms, and studied fairness metrics for reciprocal recommender systems',
    //   ],
    //   [
    //     'マッチングアルゴリズムやそのデータ分析，推薦アルゴリズムの開発',
    //   ]
    // ),
    // technologies: ba(
    //   ['Python', 'Algorithm', 'Matching', 'Recommender Systems'],
    //   ['Python', 'アルゴリズム', 'マッチング', '推薦システム']
    // ),
    employmentType: bt('Part-time', 'パートタイム'),
    experienceType: 'research'
  },
  {
    title: bt('R&D Internship', 'R&D インターンシップ'),
    company: bt('NTT', 'NTT'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '09/2020',
    endDate: '09/2020',
    // description: ba(
    //   [
    //     'Implemented and optimized deep neural network on image recognition',
    //   ],
    //   [
    //     '画像認識における深層学習アルゴリズムの実装，最適化',
    //   ]
    // ),
    // technologies: ba(
    //   ['Python', 'Tensorflow', 'Computer Vision', 'Deep Learning'],
    //   ['Python', 'Tensorflow', 'コンピュータビジョン', '深層学習']
    // ),
    employmentType: bt('Internship', 'インターンシップ'),
    experienceType: 'research'
  },
  {
    title: bt('ML Engineer Intern', 'MLエンジニア インターン'),
    company: bt('LegalOn Technologies', 'LegalOn Technologies'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '08/2018',
    endDate: '12/2018',
    // description: ba(
    //   [
    //     'Built NLP pipelines for legal document analysis',
    //   ],
    //   [
    //     '法的文書分析のためのNLPパイプライン',
    //   ]
    // ),
    // technologies: ba(
    //   ['Python', 'Machine Learning', 'NLP', 'Flask'],
    //   ['Python', '機械学習', '自然言語処理', 'Flask']
    // ),
    employmentType: bt('Internship', 'インターンシップ'),
    experienceType: 'engineering'
  }
];


export const education: LocalizedEducation[] = [
  {
    degree: bt('PhD in Information Science and Technology, Mathematical Informatics', '東京大学 情報理工学系研究科 博士課程修了'),
    institution: bt('The University of Tokyo', ' '),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '10/2022',
    endDate: '09/2025',
    // description: ba(
    //   ['Focusing on algorithm design, applied mathematics, and mechanism design'],
    //   ['アルゴリズム、応用数学、最適化、メカニズムデザインなど']
    // )
  },
  {
    degree: bt('Master of Information Science and Technology, Mathematical Informatics', '東京大学 情報理工学系研究科 修士課程修了'),
    institution: bt('The University of Tokyo', ' '),
    // field: bt('Mathematical Informatics', '数理情報学'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '04/2020',
    endDate: '03/2022',
    // description: ba(
    //   ['Mechanism Design, Machine Learning, Fair Division, Matching'],
    //   ['メカニズムデザイン、機械学習、公平分割、マッチング']
    // )
  },
  {
    degree: bt('Bachelor of Engineering, Mathematical Engineering and Information Physics', '東京大学 工学部 計数工学科 卒業'),
    institution: bt('The University of Tokyo', ' '),
    // field: bt('Mathematical Engineering and Information Physics', '数理情報工学'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '04/2016',
    endDate: '03/2020',
    // description: ba(
    //   ['Applied Mathematics, Statistics'],
    //   ['応用数学、統計学']
    // )
  }
];

// Multilingual publications data
export const publications: LocalizedPublication[] = [
  {
    title: btNoTranslate('Balancing fairness and high match rates in reciprocal recommender systems: A Nash social welfare approach'),
    authors: 'Y. Tomita and T. Yokoyama',
    venue: btNoTranslate('ACM Transactions on Recommender Systems, 2026'),
    category: 'journal',
  },
   {
    title: btNoTranslate('Mechanism-informed learning for fair division'),
    authors: 'A. Igarashi, R. Maruo, K. Takeuchi, and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of AAMAS 2026'),
    category: 'conference',
    url: 'https://openreview.net/forum?id=Z546lz5A4B'
  },
  {
    title: btNoTranslate('Position fair mechanisms allocating indivisible goods'),
    authors: 'R. Mahara, R. Mizutani, T. Oki, and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of AAAI 2026'),
    category: 'conference',
    url: 'https://arxiv.org/abs/2409.06423'
  },
  {
    title: btNoTranslate('Asymptotic analysis of weighted fair division'),
    authors: 'P. Manurangsi, W. Suksompong, and T. Yokoyama',
    venue: btNoTranslate('Theoretical Computer Science, 2025'),
    category: 'journal',
    url: 'https://doi.org/10.1016/j.tcs.2025.115533',
  },
  {
    title: btNoTranslate('Asymptotic analysis of weighted fair division'),
    authors: 'P. Manurangsi, W. Suksompong, and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of IJCAI 2025'),
    category: 'conference',
    url: 'https://www.ijcai.org/proceedings/2025/443',
  },
  {
    title: btNoTranslate('Probabilistic analysis of stable matching in large markets with siblings'),
    authors: 'Z. Sun, T. Yokoyama, and M. Yokoo',
    venue: btNoTranslate('In Proceedings of IJCAI 2025'),
    category: 'conference',
    url: 'https://arxiv.org/abs/2501.13043',
    repo: 'https://github.com/tomonatu8/ExtendedSDA'
  },
  {
    title: btNoTranslate('Asymptotic existence of class envy-free matchings'),
    authors: 'T. Yokoyama and A. Igarashi',
    venue: btNoTranslate('In Proceedings of AAMAS 2025'),
    category: 'conference',
    url: 'https://dl.acm.org/doi/10.5555/3709347.3743864',
  },
  {
    title: btNoTranslate('Virtual ligand-assisted optimization: A rational strategy for ligand engineering'),
    authors: 'W. Matsuoka, T. Oki, R. Yamada, T. Yokoyama, S. Suda, C. M. Saunders, B. B. Skjelstad, Y. Harabuchi, N. Fey, S. Iwata, and S. Maeda',
    venue: btNoTranslate('ACS Catalysis, 2024'),
    category: 'journal',
    url: 'https://pubs.acs.org/doi/10.1021/acscatal.4c06003'
  },
  {
    title: btNoTranslate('Fair reciprocal recommendation in matching markets'),
    authors: 'Y. Tomita and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of RecSys 2024'),
    description: ba(
      ['* Shortlisted for 6 best full paper candidates in RecSys\'24'],
      ['* RecSys\'24において最優秀論文候補6件にノミネート']
    ),
    category: 'conference',
    url: 'https://dl.acm.org/doi/10.1145/3640457.3688130',
    repo: 'https://github.com/CyberAgentAILab/FairReciprocalRecommendation'
  },
  {
    title: btNoTranslate('Differentiating the yield of chemical reactions using parameters in first-order kinetic equations to identify elementary steps that control the reactivity from complicated reaction path networks'),
    authors: 'Y. Harabuchi, T. Yokoyama, W. Matsuoka, T. Oki, S. Iwata, and S. Maeda',
    venue: btNoTranslate('The Journal of Physical Chemistry A, 2024'),
    category: 'journal',
    url: 'https://pubs.acs.org/doi/full/10.1021/acs.jpca.4c00204'
  },
  {
    title: btNoTranslate('Kajibuntan: A house chore division app'),
    authors: 'A. Igarashi and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of AAAI 2023'),
    category: 'conference',
    url: 'https://ojs.aaai.org/index.php/AAAI/article/view/27075',
    repo: 'https://github.com/kaji-buntan-project/kaji-buntan'
  },
];

// OSS projects data
export const projects: LocalizedProject[] = [
  {
    title: bt('Kajibuntan (Household Chore Division Application)', 'Kajibuntan（家事分担アプリ）'),
    description: bt(
      'We developed a web application using fair division algorithms for household chore allocation. Developed as part of a Code for Japan project. Featured on NHK (Japan\'s national public broadcasting).',
      '家事分担のための公平分割アルゴリズムを使用したWebアプリケーション。Code for Japanのプロジェクトの一環として、NHKで特集されました。'
    ),
    image: '',
    // technologies: ba(
    //   ['Algorithm', 'Fair Division', 'Node.js', 'React', 'Rust', 'WebAssembly', 'Docker', 'AWS'],
    //   ['アルゴリズム', '公平分割', 'Node.js', 'React', 'Rust', 'WebAssembly', 'Docker', 'AWS']
    // ),
    repo: 'https://github.com/kaji-buntan-project/kaji-buntan',
    demo: 'https://housechore-division.com',
    article: 'https://www.nhk.or.jp/info-blog/525255.html'
  },
  {
    title: bt('PyMallows', 'PyMallows'),
    description: bt(
      'This is a Mallows model sampling library written in Rust with Python bindings. Generating votes and rankings.',
      '投票やランキング生成に利用される, Mallows分布サンプリングのライブラリ. Rust (Pythonバインディング) で実装'
    ),
    image: '',
    // technologies: ba(
    //   ['Rust', 'Python', 'PyO3', 'GitHub Actions'],
    //   ['Rust', 'Python', 'PyO3', 'GitHub Actions']
    // ),
    repo: 'https://github.com/tomonatu8/pymallows'
  }
];

// Profile data
export const profile: LocalizedProfile = {
  name: bt('Tomohiko Yokoyama', '横山 智彦'),
  title: bt(
    'Applied Research Engineer at Sakana AI',
    'Sakana AI Applied Research Engineer'
  ),
  image: '',
  bio: bt(
    `My interests have focused particularly on the intersection of machine learning and platforms, as well as how to leverage LLMs in agentic applications. 
    With practical experience in algorithm and AI implementation, I am passionate about bridging the gap between research and real-world applications. 
    Currently working as an Applied Research Engineer at Sakana AI. 
    I received my PhD in Information Science and Technology from the University of Tokyo under the supervision of Prof. Satoru Iwata, specializing in optimization, mechanism design, algorithmic game theory, and machine learning.`,
    `AI技術やプラットフォーム、LLMのマルチエージェント的活用に興味があり、Sakana AIでApplied Research Engineerとして働いています。
    また、研究と社会実装の架け橋に興味や情熱を持っています。
    2025年9月に東京大学情報理工で博士号を取得しました（指導教員：岩田覚教授）、専門は最適化、マルチエージェントシステム、アルゴリズム的ゲーム理論、機械学習分野です。`
  ),
  email: 'tomohiko.yokoyama.888@gmail.com',
  github: 'https://github.com/tomonatu8',
  linkedin: 'https://linkedin.com/in/tomohiko-yokoyama-aa172b205'
};