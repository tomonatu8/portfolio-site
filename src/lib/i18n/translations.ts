export type Language = 'en' | 'ja';

interface Translations {
  [key: string]: {
    en: string;
    ja: string;
  };
}

// ヘッダーナビゲーション
export const nav: Translations = {
  about: {
    en: 'About',
    ja: '自己紹介'
  },
  education: {
    en: 'Education',
    ja: '学歴'
  },
  experience: {
    en: 'Experience',
    ja: '経験'
  },
  publications: {
    en: 'Publications',
    ja: '発表論文'
  },
  projects: {
    en: 'OSS Projects',
    ja: 'OSS プロジェクト'
  },
  skills: {
    en: 'Skills',
    ja: 'スキル'
  }
};

// セクションタイトル
export const sectionTitles: Translations = {
  about: {
    en: '',  // About Me タイトルを削除
    ja: ''
  },
  education: {
    en: 'Education',
    ja: '学歴'
  },
  experience: {
    en: 'Experience',
    ja: '経歴'
  },
  engineeringExperience: {
    en: 'Engineering Experience',
    ja: 'エンジニア'
  },
  researchExperience: {
    en: 'Research Experience',
    ja: '研究'
  },
  publications: {
    en: 'Publications',
    ja: '発表論文'
  },
  research: {
    en: 'Publications',
    ja: '査読あり論文'
  },
  projects: {
    en: 'OSS Projects',
    ja: 'OSS プロジェクト'
  },
  skills: {
    en: 'Skills',
    ja: 'スキル'
  }
};

// スキルセクション
export const skills: Translations = {
  programmingLanguages: {
    en: 'Programming Languages',
    ja: 'プログラミング言語'
  },
  frameworksLibraries: {
    en: 'Frameworks & Libraries',
    ja: 'フレームワーク・ライブラリ'
  },
  aiMl: {
    en: 'AI & Machine Learning',
    ja: 'AI・機械学習'
  },
  devops: {
    en: 'DevOps & Tools',
    ja: 'DevOps・ツール'
  },
  other: {
    en: 'Other',
    ja: 'その他'
  }
};

// 出版物セクション
export const publications: Translations = {
  proceedingsJournals: {
    en: 'Proceedings & Journals',
    ja: '学会誌・ジャーナル'
  },
  conferences: {
    en: 'Conference',
    ja: '国際会議'
  },
  journals: {
    en: 'Journal',
    ja: 'ジャーナル'
  },
  workshops: {
    en: 'Peer-reviewed Workshops',
    ja: '査読付きワークショップ'
  },
  preprints: {
    en: 'Publicly Available Preprints',
    ja: '公開プレプリント'
  },
  paper: {
    en: 'Paper',
    ja: 'Paper'
  },
  github: {
    en: 'GitHub',
    ja: 'GitHub'
  }
};

// プロジェクトセクション
export const projects: Translations = {
  github: {
    en: 'GitHub',
    ja: 'GitHub'
  },
  liveDemo: {
    en: 'Live Demo',
    ja: 'Live Demo'
  }
};

// フッター
export const footer: Translations = {
  copyright: {
    en: 'All rights reserved.',
    ja: 'All rights reserved.'
  }
};
