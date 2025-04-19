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
  {name: 'Japanese', category: 'language'},
  {name: 'English', category: 'language'},

  // Algorithm & Systems
  { 
    name: 'Algorithm Design', 
    description: bt(
      'Expertise in algorithm design and optimization, particularly in matching algorithms and mechanism design.',
      'マッチングアルゴリズムやメカニズムデザインに特化したアルゴリズム設計と最適化の専門知識。'
    ),
    category: 'algorithm' 
  },
  { 
    name: 'Applied Mathematics', 
    description: bt(
      'Strong foundation in applied mathematics, particularly in optimization and computational methods.',
      '最適化や計算手法に特化した応用数学の強固な基盤。'
    ),
    category: 'algorithm' 
  },

  // Programming Languages
  { 
    name: 'Python', 
    description: bt(
      'Main language for production-level algorithm development and ML pipelines. Extensive experience with NumPy, Pandas, and scientific computing libraries.',
      'アルゴリズム開発やMLパイプラインの本番実装で主に使用。PyTorch, NumPy, Pandas, 科学計算ライブラリなど。'
    ),
    category: 'programming' 
  },
  { 
    name: 'JavaScript/TypeScript', 
    description: bt(
      'Frontend and backend web development with Node.js, React, Svelte, and other modern frameworks.',
      'Node.js、ReactやSvelteなど、その他のモダンフレームワークを使用したフロントエンドおよびバックエンドWeb開発。'
    ),
    category: 'programming' 
  },
  { 
    name: 'Rust', 
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
  { name: 'Generative AI', category: 'ai' },
  { name: 'NLP', category: 'ai' },
  // { name: 'Computer Vision', category: 'ai' },
  // { name: 'Recommender Systems', category: 'ai' },
  // { name: 'Generative AI', category: 'ai' },
  { name: 'Algorithm Optimization', category: 'ai' },
  { name: 'Deep Learning', category: 'ai' },
  
  // DevOps & Tools
  { name: 'Docker', category: 'devops' },
  // { name: 'GCP', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  // { name: 'CI/CD', category: 'devops' },
  { name: 'Code Test', category: 'devops' },
  
  // Other
  // { name: 'NoSQL', category: 'other' },
  { name: 'API Design', category: 'other' },
  { name: 'Git', category: 'other' },
  { name: 'Team Development', category: 'other' },
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
    technologies: ['Computational Chemistry', 'Optimizations', 'Applied Mathematics', 'Python', 'C++'],
    isFullTime: false
  },

  // Liquitousも書いておく

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
    technologies: ['Algorithm', 'Generative AI', 'NLP', 'Data Analysis', 'Machine Learning', 'Python'],
    isFullTime: false
  },
  {
    title: bt('Research Visit', 'リサーチ ビジット'),
    company: bt('National University of Singapore', 'National University of Singapore'),
    location: bt('Singapore', 'シンガポール'),
    startDate: '01/2024',
    endDate: '01/2024',
    // description: ba(
    //   [
    //   ],
    //   [
    //   ]
    // ),
    technologies: ['Research', 'Algorithm', 'Fair Division'],
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
        'マッチングアルゴリズムに関するデータ分析',
        '相互レコメンデーションアルゴリズムの公平性評価',
      ]
    ),
    technologies: ['Python', 'Algorithm', 'Matching', 'Recommender Systems'],
    isFullTime: false
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
    technologies: ['Python', 'Tensorflow', 'Computer Vision', 'Deep Learning'],
    isFullTime: false
  },
  {
    title: bt('Machine Learning Engineer Intern', '機械学習エンジニア インターン'),
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
    technologies: ['Python', 'Machine Learning', 'NLP', 'Flask'],
    isFullTime: false
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
      ['Focusing on applied algorithm design, applied mathematics, and mechanism design'],
      ['応用アルゴリズム設計、応用数学、最適化、メカニズムデザインなど']
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
    title: btNoTranslate('Kajibuntan: A house chore division app'),
    authors: 'A. Igarashi and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of the 37th AAAI Conference on Artificial Intelligence (AAAI 2023), pp.16449-16451'),
    year: 2023,
    description: ['Mechanism Design', 'Fair Division', 'Applications'],
    category: 'conference',
    url: 'https://ojs.aaai.org/index.php/AAAI/article/view/27075',
    repo: 'https://github.com/kaji-buntan-project/kaji-buntan'
  },
  {
    title: btNoTranslate('Virtual ligand-assisted optimization: A rational strategy for ligand engineering'),
    authors: 'W. Matsuoka, T. Oki, R. Yamada, T. Yokoyama, S. Suda, C. M. Saunders, B. B. Skjelstad, Y. Harabuchi, N. Fey, S. Iwata, and S. Maeda',
    venue: btNoTranslate('ACS Catalysis, 14(21): pp.16297-16312'),
    year: 2024,
    description: ['Computational Chemistry', 'Optimization'],
    category: 'journal',
    url: 'https://pubs.acs.org/doi/10.1021/acscatal.4c06003'
  },
  {
    title: btNoTranslate('Fair reciprocal recommendation in matching markets'),
    authors: 'Y. Tomita and T. Yokoyama',
    venue: btNoTranslate('In Proceedings of the 18th ACM Conference on Recommender Systems (RecSys\'24), pp.209-218'),
    year: 2024,
    description: ['* Shortlisted for 6 best full paper candidates in RecSys\'24', 'Machine Learning', 'Recommender Systems', 'Matching'],
    category: 'conference',
    url: 'https://dl.acm.org/doi/10.1145/3640457.3688130',
    repo: 'https://github.com/CyberAgentAILab/FairReciprocalRecommendation'
  },
  {
    title: btNoTranslate('Differentiating the yield of chemical reactions using parameters in first-order kinetic equations to identify elementary steps that control the reactivity from complicated reaction path networks'),
    authors: 'Y. Harabuchi, T. Yokoyama, W. Matsuoka, T. Oki, S. Iwata, and S. Maeda',
    venue: btNoTranslate('The Journal of Physical Chemistry A, 128(14): pp.2883-2890'),
    year: 2024,
    description: ['Computational Chemistry'],
    category: 'journal',
    url: 'https://pubs.acs.org/doi/full/10.1021/acs.jpca.4c00204'
  },
  {
    title: btNoTranslate('Asymptotic existence of class envy-free matchings'),
    authors: 'T. Yokoyama and A. Igarashi',
    venue: btNoTranslate('In Proceedings of the 18th ACM Conference on Recommender Systems (AAMAS 2025), forthcoming'),
    year: 2025,
    description: ['Mechanism Design', 'Matching', 'Fair Division'],
    category: 'conference'
  },
  
  // Peer-reviewed workshops
  {
    title: btNoTranslate('Probabilistic analysis of stable matching in large markets with siblings'),
    authors: 'Z. Sun, T. Yokoyama, and M. Yokoo',
    venue: btNoTranslate('In Appears of the GAIW workshop held of part of AAMAS'),
    year: 2024,
    description: ['Mechanism Design', 'Matching'],
    category: 'workshop',
    url: 'https://preflib.github.io/gaiw2024/program/',
    repo: 'https://github.com/tomonatu8/ExtendedSDA'
  },
  {
    title: btNoTranslate('Mechanism-informed preference learning for fair division'),
    authors: 'A. Igarashi, R. Maruo, K. Takeuchi, and T. Yokoyama',
    venue: btNoTranslate('In Appears of the GAIW workshop held of part of AAMAS'),
    year: 2025,
    description: ['Mechanism Design', 'Machine Learning', 'Fair Division', 'Preference Learning'],
    category: 'workshop',
    url: 'https://preflib.github.io/gaiw2025/program/'
  },
  
  // Publicly available preprints
  {
    title: btNoTranslate('Position fair mechanisms allocating indivisible goods'),
    authors: 'R. Mahara, R. Mizutani, T. Oki, and T. Yokoyama',
    venue: btNoTranslate('In arXiv'),
    year: 2024,
    description: ['Mechanism Design', 'Fair Division'],
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
    technologies: ['Algorithm', 'Fair Division', 'Node.js', 'React', 'Rust', 'WebAssembly', 'Docker', 'AWS'],
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
    technologies: ['Rust', 'Python', 'PyO3', 'GitHub Actions'],
    repo: 'https://github.com/tomonatu8/pymallows'
  }
];

// Multilingual profile data
export const profile: LocalizedProfile = {
  name: bt('Tomohiko Yokoyama', '横山 智彦'),
  title: bt(
    'PhD Candidate in Information Science and Technology',
    '情報理工学系研究科 博士課程'
  ),
  image: '',
  bio: ba(
    [
      // 'From Mie Prefecture, Japan',
      // 'Research and development in applied mathematics, optimization algorithms (matching, allocation), and machine learning.',
      'Expertise in applied mathematics, optimization (matching / allocation), and machine learning.',
      // 'Experience in implementing algorithms and AI systems into practical business solutions.',
      'Experienced in translating research innovations into practical applications.',
      // 'Proven success in implementing optimized matching algorithms.',
      // 'Passionate about bridging research innovations with real-world implementation (business side also). Particularly interested in mechanism design, advanced algorithms, machine learning, and generative AI.',
      'Passionate about bridging research and real‑world implementation, including the business side. ',
    ],
    [
      // '三重県出身',
      '応用数学、最適化アルゴリズム（マッチング、配分）、機械学習の研究や実装。',
      // '最適化されたマッチングアルゴリズムの実装における実績。'
      '高度なアルゴリズムとAIシステムの実用化周りのエンジニアの経験。',
      '研究レベルのイノベーションと実社会の実装（ビジネスサイド）の橋渡しに強い興味があります。特に、メカニズムデザイン、高度なアルゴリズム、機械学習、生成AIなど。',
      // '特に、メカニズムデザイン、高度なアルゴリズム、機械学習、生成AIなどを、どのように社会やビジネスに応用するかに強い関心があります。'
    ]
  ),
  jobSeekingInfo: bt(
    'Seeking full-time positions from October 2025. Please feel free to contact me.',
    '2025年10月以降のフルタイムポジションを探しています。お気軽にご連絡ください。'
  ),
  email: 'tomohiko.yokoyama.888@gmail.com',
  github: 'https://github.com/tomonatu8',
  linkedin: 'https://linkedin.com/in/tomohiko-yokoyama-aa172b205'
};
