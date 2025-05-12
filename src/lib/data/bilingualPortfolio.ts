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
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '04/2022',
    endDate: 'Present',
    // description: ba(
    //   [
    //   ],
    //   [
    //   ]
    // ),
    technologies: ba(
      ['Computational Chemistry', 'Optimizations', 'Applied Mathematics', 'Python', 'C++'],
      ['計算化学', '最適化', '応用数学', 'Python', 'C++']
    ),
    employmentType: bt('Part-time', 'パートタイム')
  },

  // Liquitousも書いておく

  {
    title: bt('Research and Development, Engineer', 'R&D, エンジニア'),
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
    technologies: ba(
      ['Citizen Participation', 'NLP', 'Front-end Web Development', 'Back-end Web Development', 'Python', 'TypeScript / Svelte', 'Gen AI'],
      ['市民参加', '自然言語処理', 'フロントエンド開発', 'バックエンド開発', 'Python', 'TypeScript / Svelte', '生成AI']
    ),
    employmentType: bt('Outsourcing', '業務委託')
  },

  {
    title: bt('Engineer & Data Scientist', 'エンジニア・データサイエンティスト'),
    company: bt('Mirai Share, Inc.', '株式会社未来シェア'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '02/2023',
    endDate: '02/2025',
    description: ba(
      [
        'Built mobility optimization algorithms, and data analysis',
      ],
      [
        'モビリティに関連したアルゴリズム、データの分析',
      ]
    ),
    technologies: ba(
      ['Algorithm', 'Gen AI', 'Data Analysis', 'Machine Learning', 'Python'],
      ['アルゴリズム', '生成AI', 'データ分析', '機械学習', 'Python']
    ),
    employmentType: bt('Part-time', 'パートタイム')
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
    technologies: ba(
      ['Research', 'Algorithm', 'Fair Division'],
      ['研究', 'アルゴリズム', '公平分割']
    ),
    // employmentType: bt('Research Visit', '研究訪問')
  },
  {
    title: bt('Research Scientist Intern', 'リサーチサイエンティスト インターン'),
    company: bt('CyberAgent, Inc.', '株式会社サイバーエージェント'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '02/2023',
    endDate: '08/2024',
    description: ba(
      [
        'Deployed matching algorithms, and data analysis for related data',
        'Implemented a fairness metric system for reciprocal recommendation algorithms',
      ],
      [
        'マッチングアルゴリズム',
        '相互レコメンデーションアルゴリズムの公平性評価',
      ]
    ),
    technologies: ba(
      ['Python', 'Algorithm', 'Matching', 'Recommender Systems'],
      ['Python', 'アルゴリズム', 'マッチング', '推薦システム']
    ),
    employmentType: bt('Part-time', 'パートタイム')
  },
  {
    title: bt('Research Intern', 'リサーチ インターン'),
    company: bt('Nippon Telegraph and Telephone (NTT), Inc.', '日本電信電話株式会社（NTT）'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '09/2020',
    endDate: '09/2020',
    description: ba(
      [
        'Implemented and optimized semi-supervised learning algorithms',
        'Engineered image recognition optimization techniques'
      ],
      [
        '半教師あり学習アルゴリズムを実装・最適化',
        '画像認識最適化技術'
      ]
    ),
    technologies: ba(
      ['Python', 'Tensorflow', 'Computer Vision', 'Deep Learning'],
      ['Python', 'Tensorflow', 'コンピュータビジョン', '深層学習']
    ),
    employmentType: bt('Internship', 'インターンシップ')
  },
  {
    title: bt('Machine Learning Engineer', '機械学習エンジニア'),
    company: bt('LegalOn Technologies, Inc.', '株式会社LegalForce (現LegalOn Technologies)'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '08/2018',
    endDate: '12/2018',
    description: ba(
      [
        'Built NLP pipelines for legal document analysis',
        'Designed and implemented information extraction systems for Word XML files',
      ],
      [
        '法的文書分析のためのNLPパイプライン',
        'Word XMLファイル用の情報抽出システム',
      ]
    ),
    technologies: ba(
      ['Python', 'Machine Learning', 'NLP', 'Flask'],
      ['Python', '機械学習', '自然言語処理', 'Flask']
    ),
    employmentType: bt('Internship', 'インターンシップ')
  }
];


export const education: LocalizedEducation[] = [
  {
    degree: bt('Doctoral Program in Information Science and Technology', '情報理工学系研究科 博士課程'),
    institution: bt('The University of Tokyo', '東京大学'),
    field: bt('Mathematical Informatics', '数理情報学'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '10/2022',
    endDate: 'Expected: 09/2025',
    description: ba(
      ['Focusing on algorithm design, applied mathematics, and mechanism design'],
      ['アルゴリズム、応用数学、最適化、メカニズムデザインなど']
    )
  },
  {
    degree: bt('Master of Information Science and Technology', '情報理工学系研究科 修士課程'),
    institution: bt('The University of Tokyo', '東京大学'),
    field: bt('Mathematical Informatics', '数理情報学'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '04/2020',
    endDate: '03/2022',
    description: ba(
      ['Mechanism Design, Machine Learning, Fair Division, Matching'],
      ['メカニズムデザイン、機械学習、公平分割、マッチング']
    )
  },
  {
    degree: bt('Bachelor of Engineering', '工学部 計数工学科'),
    institution: bt('The University of Tokyo', '東京大学'),
    field: bt('Mathematical Engineering and Information Physics', '数理情報工学'),
    location: bt('Tokyo, Japan', '東京, 日本'),
    startDate: '04/2016',
    endDate: '03/2020',
    description: ba(
      ['Applied Mathematics, Statistics'],
      ['応用数学、統計学']
    )
  }
];

// Multilingual publications data (論文タイトルと学会誌情報は英語のまま)
export const publications: LocalizedPublication[] = [
  // Proceedings or Journals
  {
    title: btNoTranslate('Asymptotic analysis of weighted fair division'),
    authors: 'P. Manurangsi, W. Suksompong, and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of the 34th International Joint Conference on Artificial Intelligence (IJCAI 2025), forthcoming'),
    year: 2025,
    description: ba(
      ['Mechanism Design', 'Weighted Fair Division', 'Asymptotic Analysis'],
      ['メカニズムデザイン', '重み付き公平分割', '漸近解析']
    ),
    category: 'conference',
    url: 'https://arxiv.org/abs/2504.21728',
  },
  {
    title: btNoTranslate('Probabilistic analysis of stable matching in large markets with siblings'),
    authors: 'Z. Sun, T. Yokoyama, and M. Yokoo',
    venue: btNoTranslate('In Proceedings of the 34th International Joint Conference on Artificial Intelligence (IJCAI 2025), forthcoming'),
    year: 2025,
    description: ba(
      ['Mechanism Design', 'Matching', 'Stability'],
      ['メカニズムデザイン', 'マッチング', '安定性']
    ),
    category: 'conference',
    url: 'https://arxiv.org/abs/2501.13043',
    repo: 'https://github.com/tomonatu8/ExtendedSDA'
  },
  {
    title: btNoTranslate('Asymptotic existence of class envy-free matchings'),
    authors: 'T. Yokoyama and A. Igarashi',
    venue: btNoTranslate('In Proceedings of the 24th International Conference on Autonomous Agents and Multi-Agent Systems (AAMAS 2025), forthcoming'),
    year: 2025,
    description: ba(
      ['Mechanism Design', 'Matching', 'Fair Division'],
      ['メカニズムデザイン', 'マッチング', '公平分割']
    ),
    category: 'conference',
    url: 'https://arxiv.org/abs/2502.14371',
  },
  {
    title: btNoTranslate('Virtual ligand-assisted optimization: A rational strategy for ligand engineering'),
    authors: 'W. Matsuoka, T. Oki, R. Yamada, T. Yokoyama, S. Suda, C. M. Saunders, B. B. Skjelstad, Y. Harabuchi, N. Fey, S. Iwata, and S. Maeda',
    venue: btNoTranslate('ACS Catalysis, 14(21): pp.16297-16312'),
    year: 2024,
    description: ba(
      ['Computational Chemistry', 'Optimization'],
      ['計算化学', '最適化']
    ),
    category: 'journal',
    url: 'https://pubs.acs.org/doi/10.1021/acscatal.4c06003'
  },
  {
    title: btNoTranslate('Fair reciprocal recommendation in matching markets'),
    authors: 'Y. Tomita and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of the 18th ACM Conference on Recommender Systems (RecSys\'24), pp.209-218'),
    year: 2024,
    description: ba(
      ['* Shortlisted for 6 best full paper candidates in RecSys\'24', 'Machine Learning', 'Recommender Systems', 'Matching'],
      ['* RecSys\'24において最優秀論文候補6件にノミネート', '機械学習', '推薦システム', 'マッチング']
    ),
    category: 'conference',
    url: 'https://dl.acm.org/doi/10.1145/3640457.3688130',
    repo: 'https://github.com/CyberAgentAILab/FairReciprocalRecommendation'
  },
  {
    title: btNoTranslate('Differentiating the yield of chemical reactions using parameters in first-order kinetic equations to identify elementary steps that control the reactivity from complicated reaction path networks'),
    authors: 'Y. Harabuchi, T. Yokoyama, W. Matsuoka, T. Oki, S. Iwata, and S. Maeda',
    venue: btNoTranslate('The Journal of Physical Chemistry A, 128(14): pp.2883-2890'),
    year: 2024,
    description: ba(
      ['Computational Chemistry'],
      ['計算化学']
    ),
    category: 'journal',
    url: 'https://pubs.acs.org/doi/full/10.1021/acs.jpca.4c00204'
  },
  {
    title: btNoTranslate('Kajibuntan: A house chore division app'),
    authors: 'A. Igarashi and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of the 37th AAAI Conference on Artificial Intelligence (AAAI 2023), pp.16449-16451'),
    year: 2023,
    description: ba(
      ['Mechanism Design', 'Fair Division', 'Applications'],
      ['メカニズムデザイン', '公平分割', 'アプリケーション']
    ),
    category: 'conference',
    url: 'https://ojs.aaai.org/index.php/AAAI/article/view/27075',
    repo: 'https://github.com/kaji-buntan-project/kaji-buntan'
  },
  // Peer-reviewed workshops
  {
    title: btNoTranslate('Mechanism-informed preference learning for fair division'),
    authors: 'A. Igarashi, R. Maruo, K. Takeuchi, and T. Yokoyama',
    venue: btNoTranslate('In Appears of the GAIW workshop held of part of AAMAS'),
    year: 2025,
    description: ba(
      ['Mechanism Design', 'Machine Learning', 'Fair Division', 'Preference Learning', 'Deep Learning'],
      ['メカニズムデザイン', '機械学習', '公平分割', '選好学習', '深層学習']
    ),
    category: 'workshop',
    url: 'https://preflib.github.io/gaiw2025/program/'
  },
  {
    title: btNoTranslate('Probabilistic analysis of stable matching in large markets with siblings'),
    authors: 'Z. Sun, T. Yokoyama, and M. Yokoo',
    venue: btNoTranslate('In Appears of the GAIW workshop held of part of AAMAS'),
    year: 2024,
    description: ba(
      ['Mechanism Design', 'Matching'],
      ['メカニズムデザイン', 'マッチング']
    ),
    category: 'workshop',
    url: 'https://preflib.github.io/gaiw2024/program/',
    repo: 'https://github.com/tomonatu8/ExtendedSDA'
  },
  // Publicly available preprints
  {
    title: btNoTranslate('Position fair mechanisms allocating indivisible goods'),
    authors: 'R. Mahara, R. Mizutani, T. Oki, and T. Yokoyama',
    venue: btNoTranslate('In arXiv'),
    year: 2024,
    description: ba(
      ['Mechanism Design', 'Fair Division'],
      ['メカニズムデザイン', '公平分割']
    ),
    category: 'preprint',
    url: 'https://arxiv.org/abs/2409.06423'
  }
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
    technologies: ba(
      ['Algorithm', 'Fair Division', 'Node.js', 'React', 'Rust', 'WebAssembly', 'Docker', 'AWS'],
      ['アルゴリズム', '公平分割', 'Node.js', 'React', 'Rust', 'WebAssembly', 'Docker', 'AWS']
    ),
    repo: 'https://github.com/kaji-buntan-project/kaji-buntan',
    demo: 'https://housechore-division.com'
  },
  {
    title: bt('PyMallows', 'PyMallows'),
    description: bt(
      'A high-performance Mallows model sampling library written in Rust with Python bindings. Optimized implementation for generating votes and rankings in computational social choice.',
      'RustでPythonバインディングを持つ高性能Mallowsモデルサンプリングライブラリ。計算社会選択における投票とランキング生成のための最適化実装。'
    ),
    image: '',
    technologies: ba(
      ['Rust', 'Python', 'PyO3', 'GitHub Actions'],
      ['Rust', 'Python', 'PyO3', 'GitHub Actions']
    ),
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
  bio: ba(
    [
      // 'From Mie Prefecture, Japan',
      // 'Research and development in applied mathematics, optimization algorithms (matching, allocation), and machine learning.',
      'Expertise in applied mathematics, optimization, mechanism design (matching / allocation), and machine learning.',
      // 'Experience in implementing algorithms and AI systems into practical business solutions.',
      'Experienced in translating algorithms and AI systems into practical applications.',
      // 'Proven success in implementing optimized matching algorithms.',
      // 'Passionate about bridging research innovations with real-world implementation (business side also). Particularly interested in mechanism design, advanced algorithms, machine learning, and generative AI.',
      'Passionate about bridging research and real-world implementation, including the business side. ',
    ],
    [
      // '三重県出身',
      '応用数学、最適化アルゴリズム、メカニズムデザイン（マッチング・配分）、機械学習の研究や実装。',
      // '最適化されたマッチングアルゴリズムの実装における実績。'
      'アルゴリズム・AIシステムの実用化周りのエンジニアの経験。',
      '研究レベルのイノベーションと実社会の実装（ビジネスサイド含め）の橋渡しに強い興味があります。特に、メカニズムデザイン、アルゴリズム、機械学習、生成AIなど。',
      // '特に、メカニズムデザイン、高度なアルゴリズム、機械学習、生成AIなどを、どのように社会やビジネスに応用するかに強い関心があります。'
    ]
  ),
  jobSeekingInfo: bt(
    'Seeking full-time positions from October 2025.',
    //  Please feel free to contact me.',
    '現在2025年10月以降のフルタイムポジションを探しています。',
    // お気軽にご連絡ください。'
  ),
  email: 'tomohiko.yokoyama.888@gmail.com',
  github: 'https://github.com/tomonatu8',
  linkedin: 'https://linkedin.com/in/tomohiko-yokoyama-aa172b205'
};
