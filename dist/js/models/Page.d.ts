export type Page = {
    id: string;
    title: string;
    javascript?: "Vanilla" | "React Js" | "Next Js";
    tailwind?: boolean;
    php?: boolean;
    ux?: boolean;
    testing?: boolean;
    description: string | string[];
    thumbnail: string;
    gallery: string[];
    specialFeatures?: Pick<Page, "title" | "description" | "gallery">[];
};
export declare const pages: Page[];
//# sourceMappingURL=Page.d.ts.map