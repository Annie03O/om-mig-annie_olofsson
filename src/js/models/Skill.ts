type Skill = {
    id: string;
    title: string;
    categories: Category;
}
type Category = {
    javascript?: ["Vanilla" | "React Js" | "Next Js"],
    tailwind?: boolean;
    php?: boolean;
    ux?: boolean; 
    testing?: boolean;
}
export const skills: Skill[] = [
    {
        id: "js-button",
        title: "Javascript",
        categories: { javascript: ["Vanilla"] }

    }, 
    {
        id: "react-js-button",
        title:"React Js",
        categories: { 
            javascript: ["React Js"]
         }

    },
    {
        id: "next-js-button",
        title: "Next Js",
        categories: { 
            javascript: ["Next Js"] 
        }

    },
    {
        id: "tailwind-css",
        title: "Tailwind CSS",
        categories: { 
            tailwind: true,
         }

    },
    {
        id: "php-button",
        title: "PHP",
        categories: { 
            php: true, 
        }

    },
    {
        id: "ux-button",
        title: "UX",
        categories: { 
            ux: true,
         }

    },
    {
        id: "testing-button",
        title: "Testing",
        categories: { 
            testing: true, 
        }

    }
 ];
