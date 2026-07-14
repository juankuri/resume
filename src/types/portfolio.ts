export type Lang = "es" | "en";

export interface UiText {
    langBtn: string;
    navCta: string;
    heroKicker: string;
    heroTitle: string;
    heroSub: string;
    heroCta1: string;
    heroCta2: string;
    projKicker: string;
    projTitle: string;
    projSub: string;
    benefitsLabel: string;
    viewLive: string;
    wantSimilar: string;
    demosLabel: string;
    askDemo: string;
    howKicker: string;
    howTitle: string;
    incKicker: string;
    incTitle: string;
    incNote: string;
    ctaTitle: string;
    ctaSub: string;
    emailBtn: string;
    rights: string;
}

export interface DemoProject {
    id: string;
    tag: string;
    title: string;
    desc: string;
    features: string[];
    demoHref?: string;
}
