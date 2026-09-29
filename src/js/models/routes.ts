import { renderProjectPage } from "../modules/projects.js";

export const routes: Record<string, { title: string; render: () => string }> = {
    "/" : {
        title: "Works",
        render: () => `
           <h1>Works</h1>
        ` 
        },
    "/projects": {
                title: "Projects",
                render: () => `
             <main id="project-page">
             ${renderProjectPage()}               
             </main>
          `
    }
}