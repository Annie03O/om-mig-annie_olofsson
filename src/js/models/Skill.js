class Skill {
    constructor(id, title, categories) {
        this.id = id;
        this.title = title;
        this.categories = categories;
    }
}
class Category {
    constructor(javascript, tailwind, php, ux, testing) {
        if (javascript !== undefined) {
            this.javascript = javascript;
        }
        if (tailwind !== undefined) {
            this.tailwind = tailwind;
        }
        if (php !== undefined) {
            this.php = php;
        }
        if (ux !== undefined) {
            this.ux = ux;
        }
        if (testing !== undefined) {
            this.testing = testing;
        }
    }
}
export const skills = [
    new Skill("react-js-button", "React Js", new Category(["React Js"])),
    new Skill("next-js-button", "Next Js", new Category(["Next Js"])),
    new Skill("tailwind-css", "Tailwind CSS", new Category(undefined, true)),
    new Skill("php-button", "PHP", new Category(undefined, undefined, true)),
    new Skill("ux-button", "UX", new Category(undefined, undefined, undefined, true)),
    new Skill("testing-button", "Testing", new Category(undefined, undefined, undefined, undefined, true))
];

