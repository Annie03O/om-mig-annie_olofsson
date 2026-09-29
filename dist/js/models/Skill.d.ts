type Skill = {
    id: string;
    title: string;
    categories: Category;
};
type Category = {
    javascript?: ["Vanilla" | "React Js" | "Next Js"];
    tailwind?: boolean;
    php?: boolean;
    ux?: boolean;
    testing?: boolean;
};
export declare const skills: Skill[];
export {};
//# sourceMappingURL=Skill.d.ts.map