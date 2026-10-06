
export function filterProjects(pages, categories) {
    return pages.filter(page => {
        
        const filterJs = 
            !categories.javascript ||
            categories.javascript.includes(page.javascript);

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
