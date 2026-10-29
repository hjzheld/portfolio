export interface Projects {
    id: number;
    title: string;
    content: string;
    mainTab: 'front' | 'back' | 'fullstack';
    kind: '개인' | '개인·팀' | '실무' | '자동화';
    subTab: 'vue' | 'nuxt' | 'react' | 'fastapi' | 'django' | 'python';
    tags: string[];
    detail: Detail;
}

export interface Detail {
    github?: string;
    notion?: string;
    notion_vedio?: string;
    video?: string;
    site?: string;
    blog?: string[];
    content: string;
    image: MediaItem[];
    stack: Stack;
    sections?: [title: string, content: string][];
}

export interface Stack {
    back?: string[];
    front?: string[];
    database?: string[];
    ai?: string[];
    build?: string[];
}

type MediaItem = {
    type: 'image' | 'video';
    src: string;
};

  
interface ImageProps {
    images: MediaItem[];
    onClick?: () => void;
};
