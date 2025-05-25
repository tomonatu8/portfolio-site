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
      'マッチングアルゴリズムやメカニズムデザインに特化したアルゴリズム設計と最適化の専門知識。'
    ),
    category: 'algorithm' 
  },
  { 
    name: bt('Applied Mathematics', '応用数学'), 
    description: bt(
      'Strong foundation in applied mathematics, particularly in optimization and computational methods.',
      '最適化や計算手法に特化した応用数学の強固な基盤。'
    ),
    category: 'algorithm' 
  },

  // Programming Languages
  { 
    name: bt('Python', 'Python'), 
    description: bt(
      'Main language for production-level algorithm development and ML pipelines. Extensive experience with NumPy, Pandas, and scientific computing libraries.',
      'アルゴリズム開発やMLパイプラインの本番実装で主に使用。PyTorch, NumPy, Pandas, 科学計算ライブラリなど。'
    ),
    category: 'programming' 
  },
  { 
    name: bt('JavaScript/TypeScript', 'JavaScript/TypeScript'), 
    description: bt(
      'Frontend and backend web development with Node.js, React, Svelte, and other modern frameworks.',
      'Node.js、ReactやSvelteなど、その他のモダンフレームワークを使用したフロントエンドおよびバックエンドWeb開発。'
    ),
    category: 'programming' 
  },
  { 
    name: bt('Rust', 'Rust'), 
    description: bt(
      'Performance-critical applications and systems programming. Created Python bindings using PyO3. WebAssembly development for frontend.',
      'パフォーマンスが重要なアプリケーションとシステムプログラミング。PyO3を使用したPythonバインディングの作成。フロントで利用できるWebAssemblyの開発。'
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
  // { name: 'Computer Vision', category: 'ai' },
  // { name: 'Recommender Systems', category: 'ai' },
  // { name: 'Generative AI', category: 'ai' },
  { name: bt('Algorithm', 'アルゴリズム'), category: 'ai' },
  { name: bt('Deep Learning', '深層学習'), category: 'ai' },
  
  // DevOps & Tools
  { name: bt('Docker', 'Docker'), category: 'devops' },
  // { name: 'GCP', category: 'devops' },
  // { name: bt('AWS', 'AWS'), category: 'devops' },
  // { name: 'CI/CD', category: 'devops' },
  { name: bt('Code Test', 'コードテスト'), category: 'devops' },
  
  // Other
  // { name: 'NoSQL', category: 'other' },
  { name: bt('API Design', 'API設計'), category: 'other' },
  { name: bt('Development with Git', 'Gitを用いた開発'), category: 'other' },
  { name: bt('Team Development', 'チーム開発'), category: 'other' },
  // { name: 'Algorithm Optimization', category: 'other' }

  // { name: 'Team Development', category: 'soft' },
];

// Multilingual experience data
export const experience: LocalizedExperience[] = [
  {
    title: bt('Assistant Technical Staff', '技術補佐員'),
    company: bt('The University of Tokyo', '東京大学'),
    // location: bt('Tokyo', '東京'),
    startDate: '04/2022',
    endDate: 'Present',
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
    title: bt('R&D, Engineer', 'R&D, エンジニア'),
    company: bt('Liquitous, Inc.', '株式会社Liquitous'),
    location: bt('Kanagawa, Japan', '神奈川, 日本'),
    startDate: '2022',
    endDate: 'Present',
    description: ba(
      [
        'Development of citizen participation platform for consensus building in Japanese local governments',
      ],
      [
        '自治体向けの市民参加型の合意形成プラットフォームの開発',
      ]
    ),
    // technologies: ba(
    //   ['Citizen Participation', 'NLP', 'Front-end Web Development', 'Back-end Web Development', 'Python', 'TypeScript / Svelte', 'Gen AI'],
    //   ['市民参加', '自然言語処理', 'フロントエンド開発', 'バックエンド開発', 'Python', 'TypeScript / Svelte', '生成AI']
    // ),
    employmentType: bt('Outsourcing', '業務委託'),
    experienceType: 'engineering'
  },

  {
    title: bt('Engineer, Data Scientist', 'エンジニア, データサイエンティスト'),
    company: bt('Mirai Share, Inc.', '株式会社未来シェア'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '02/2023',
    endDate: '02/2025',
    description: ba(
      [
        'Engaged mobility optimization algorithms, and data analysis',
      ],
      [
        'モビリティに関連したアルゴリズム、データの分析',
      ]
    ),
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
    title: bt('Research Scientist Intern', 'リサーチサイエンティスト (インターン)'),
    company: bt('CyberAgent, Inc.', '株式会社サイバーエージェント'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '02/2023',
    endDate: '08/2024',
    description: ba(
      [
        'Deployed matching algorithms, and studied fairness metrics for reciprocal recommender systems',
      ],
      [
        'マッチングアルゴリズムやそのデータ分析，推薦アルゴリズムの開発',
      ]
    ),
    // technologies: ba(
    //   ['Python', 'Algorithm', 'Matching', 'Recommender Systems'],
    //   ['Python', 'アルゴリズム', 'マッチング', '推薦システム']
    // ),
    employmentType: bt('Part-time', 'パートタイム'),
    experienceType: 'research'
  },
  {
    title: bt('Research Intern', 'R&D インターンシップ'),
    company: bt('NTT, Inc.', 'NTT株式会社'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '09/2020',
    endDate: '09/2020',
    description: ba(
      [
        'Implemented and optimized deep neural network on image recognition',
      ],
      [
        '画像認識における深層学習アルゴリズムの実装，最適化',
      ]
    ),
    // technologies: ba(
    //   ['Python', 'Tensorflow', 'Computer Vision', 'Deep Learning'],
    //   ['Python', 'Tensorflow', 'コンピュータビジョン', '深層学習']
    // ),
    employmentType: bt('Internship', 'インターンシップ'),
    experienceType: 'research'
  },
  {
    title: bt('Machine Learning Engineer Intern', '機械学習エンジニア インターン'),
    company: bt('LegalOn Technologies, Inc.', '株式会社LegalOn Technologies'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '08/2018',
    endDate: '12/2018',
    description: ba(
      [
        'Built NLP pipelines for legal document analysis',
      ],
      [
        '法的文書分析のためのNLPパイプライン',
      ]
    ),
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
    degree: bt('Doctoral Program in Information Science and Technology', '情報理工学系研究科 博士課程'),
    institution: bt('The University of Tokyo', '東京大学'),
    // field: bt('Mathematical Informatics', '数理情報学'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '10/2022',
    endDate: 'Expected: 09/2025',
    // description: ba(
    //   ['Focusing on algorithm design, applied mathematics, and mechanism design'],
    //   ['アルゴリズム、応用数学、最適化、メカニズムデザインなど']
    // )
  },
  {
    degree: bt('Master of Information Science and Technology', '情報理工学系研究科 修士課程'),
    institution: bt('The University of Tokyo', '東京大学'),
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
    degree: bt('Bachelor of Engineering', '工学部 計数工学科'),
    institution: bt('The University of Tokyo', '東京大学'),
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

// Multilingual publications data (論文タイトルと学会誌情報は英語のまま)
export const publications: LocalizedPublication[] = [
  // Proceedings or Journals
  {
    title: btNoTranslate('Asymptotic analysis of weighted fair division'),
    authors: 'P. Manurangsi, W. Suksompong, and T. Yokoyama',
    // venue: btNoTranslate('In Proceedings of the 34th International Joint Conference on Artificial Intelligence (IJCAI 2025), forthcoming'),
    venue: btNoTranslate('In Proceedings of IJCAI 2025'),
    // description: ba(
    //   [],
    //   []
    // ),
    category: 'conference',
    url: 'https://arxiv.org/abs/2504.21728',
  },
  {
    title: btNoTranslate('Probabilistic analysis of stable matching in large markets with siblings'),
    authors: 'Z. Sun, T. Yokoyama, and M. Yokoo',
    venue: btNoTranslate('In Proceedings of IJCAI 2025'),
    // description: ba(
    //   ['Mechanism Design', 'Matching', 'Stability'],
    //   ['メカニズムデザイン', 'マッチング', '安定性']
    // ),
    category: 'conference',
    url: 'https://arxiv.org/abs/2501.13043',
    repo: 'https://github.com/tomonatu8/ExtendedSDA'
  },
  {
    title: btNoTranslate('Mechanism-informed preference learning for fair division'),
    authors: 'A. Igarashi, R. Maruo, K. Takeuchi, and T. Yokoyama',
    venue: btNoTranslate('In the GAIW workshop in AAMAS 2025'),
    // description: ba(
    //   ['Mechanism Design', 'Machine Learning', 'Fair Division', 'Preference Learning', 'Deep Learning'],
    //   ['メカニズムデザイン', '機械学習', '公平分割', '選好学習', '深層学習']
    // ),
    category: 'workshop',
    url: 'https://preflib.github.io/gaiw2025/program/'
  },
  {
    title: btNoTranslate('Asymptotic existence of class envy-free matchings'),
    authors: 'T. Yokoyama and A. Igarashi',
    venue: btNoTranslate('In Proceedings of AAMAS 2025'),
    // description: ba(
    //   ['Mechanism Design', 'Matching', 'Fair Division'],
    //   ['メカニズムデザイン', 'マッチング', '公平分割']
    // ),
    category: 'conference',
    url: 'https://arxiv.org/abs/2502.14371',
  },
  {
    title: btNoTranslate('Virtual ligand-assisted optimization: A rational strategy for ligand engineering'),
    authors: 'W. Matsuoka, T. Oki, R. Yamada, T. Yokoyama, S. Suda, C. M. Saunders, B. B. Skjelstad, Y. Harabuchi, N. Fey, S. Iwata, and S. Maeda',
    venue: btNoTranslate('ACS Catalysis, 2024'),
    // description: ba(
    //   ['Computational Chemistry', 'Optimization'],
    //   ['計算化学', '最適化']
    // ),
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
    title: btNoTranslate('Position fair mechanisms allocating indivisible goods'),
    authors: 'R. Mahara, R. Mizutani, T. Oki, and T. Yokoyama',
    venue: btNoTranslate('In arXiv, 2024'),
    // description: ba(
    //   ['Mechanism Design', 'Fair Division'],
    //   ['メカニズムデザイン', '公平分割']
    // ),
    category: 'preprint',
    url: 'https://arxiv.org/abs/2409.06423'
  },
  {
    title: btNoTranslate('Differentiating the yield of chemical reactions using parameters in first-order kinetic equations to identify elementary steps that control the reactivity from complicated reaction path networks'),
    authors: 'Y. Harabuchi, T. Yokoyama, W. Matsuoka, T. Oki, S. Iwata, and S. Maeda',
    venue: btNoTranslate('The Journal of Physical Chemistry A, 2024'),
    // description: ba(
    //   ['Computational Chemistry'],
    //   ['計算化学']
    // ),
    category: 'journal',
    url: 'https://pubs.acs.org/doi/full/10.1021/acs.jpca.4c00204'
  },
  {
    title: btNoTranslate('Kajibuntan: A house chore division app'),
    authors: 'A. Igarashi and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of AAAI 2023'),
    // description: ba(
    //   ['Mechanism Design', 'Fair Division', 'Applications'],
    //   ['メカニズムデザイン', '公平分割', 'アプリケーション']
    // ),
    category: 'conference',
    url: 'https://ojs.aaai.org/index.php/AAAI/article/view/27075',
    repo: 'https://github.com/kaji-buntan-project/kaji-buntan'
  },
  // {
  //   title: btNoTranslate('Probabilistic analysis of stable matching in large markets with siblings'),
  //   authors: 'Z. Sun, T. Yokoyama, and M. Yokoo',
  //   venue: btNoTranslate('In the GAIW workshop held as part of AAMAS'),
  //   year: 2024,
  //   description: ba(
  //     ['Mechanism Design', 'Matching'],
  //     ['メカニズムデザイン', 'マッチング']
  //   ),
  //   category: 'workshop',
  //   url: 'https://preflib.github.io/gaiw2024/program/',
  //   repo: 'https://github.com/tomonatu8/ExtendedSDA'
  // },
  // Publicly available preprints
];

// Multilingual projects data
export const projects: LocalizedProject[] = [
  {
    title: bt('Kajibuntan (Household Chore Division Application)', 'Kajibuntan（家事分担アプリ）'),
    description: bt(
      'Web application using fair division algorithms for household chore allocation.', //Deployed to production with over 13,000 users.
      '家事分担のための公平分割アルゴリズムを使用したWebアプリケーション。' //13,000人以上のユーザーを持つ本番サービスとして展開。
    ),
    image: '',
    // technologies: ba(
    //   ['Algorithm', 'Fair Division', 'Node.js', 'React', 'Rust', 'WebAssembly', 'Docker', 'AWS'],
    //   ['アルゴリズム', '公平分割', 'Node.js', 'React', 'Rust', 'WebAssembly', 'Docker', 'AWS']
    // ),
    repo: 'https://github.com/kaji-buntan-project/kaji-buntan',
    demo: 'https://housechore-division.com'
  },
  {
    title: bt('PyMallows', 'PyMallows'),
    description: bt(
      'A Mallows model sampling library written in Rust with Python bindings. Generating votes and rankings.',
      '投票やランキング生成に利用される, Mallows分布サンプリングのライブラリ. Rust (Pythonバインディング) で実装.'
    ),
    image: '',
    // technologies: ba(
    //   ['Rust', 'Python', 'PyO3', 'GitHub Actions'],
    //   ['Rust', 'Python', 'PyO3', 'GitHub Actions']
    // ),
    repo: 'https://github.com/tomonatu8/pymallows'
  }
];

// Multilingual profile data
export const profile: LocalizedProfile = {
  name: bt('Tomohiko Yokoyama', '横山 智彦'),
  title: bt(
    'A third-year Ph.D. Candidate in Information Science and Technology',
    '情報理工学系研究科 博士課程 3年'
  ),
  image: '',
  // bioを配列からテキストに変更
  bio: bt(
    'I am a third-year Ph.D. Candidate in Information Science and Technology specializing in optimization, mechanism design, algorithmic game theory (matching/allocation etc.), and machine learning. Recently, my research interests have focused particularly on the intersection of AI technologies, platforms, and economic fairness. Also, I have experience translating algorithms and AI systems into practical applications, with passion for bridging research with real-world implementation.',
    '最適化，メカニズムデザイン，アルゴリズム的ゲーム理論（マッチング/配分など），機械学習分野を専門とする情報理工学系研究科の博士3年生です。最近は特にAI技術やプラットフォームと経済的な公平性の視点に興味があります。また，アルゴリズムやAIの実用化経験があり，研究と社会実装の架け橋に興味，情熱を持っています。'
  ),
  jobSeekingInfo: bt(
    'Seeking full-time positions from October 2025.',
    '現在2025年10月以降のフルタイムポジションを探しています。'
  ),
  email: 'tomohiko.yokoyama.888@gmail.com',
  github: 'https://github.com/tomonatu8',
  linkedin: 'https://linkedin.com/in/tomohiko-yokoyama-aa172b205'
};