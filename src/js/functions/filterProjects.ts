import type { Page } from "../models/Page.js";

export function filterProjects(pages: Page[], categories: {
        javascript?: string[];
        tailwind?: boolean;
        git?: boolean;
        php?: boolean;
        ux?: boolean;
        testing?: boolean;
    }
) {
    return pages.filter(page => {
        
        const filterJs = 
            !categories.javascript ||
            categories.javascript.includes(page.javascript!)

        const filterTailwind = 
            categories.tailwind === undefined ||
            page.tailwind === categories.tailwind;
        
        
        const filterPHP = 
            categories.php === undefined ||
            page.php === categories.php;
        
        const filterUX = 
            categories.ux === undefined ||
            page.ux === categories.ux;
        
        const filterTesting = 
            categories.testing === undefined ||
            page.testing === categories.testing;

        return filterJs && filterTailwind && filterPHP && filterUX && filterTesting;
       }
    );


}
