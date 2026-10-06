import { renderProjectPage } from "../modules/projects.js";

export const routes = {
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