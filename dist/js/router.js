import { navigateTo } from "./functions/navigateTo.js";
import { pages } from "./models/Page.js";
import { renderProjectPage } from "./modules/projects.js";
import { routes } from "./models/routes.js";
const app = document.querySelector("#project-container");
export const router = async () => {
    const path = window.location.pathname;
    const projectId = new URLSearchParams(window.location.search).get("project")
        ?? path.match(/^\/projects?\/([^/]+)$/)?.[1];
    if (!app)
        return;
    if (projectId) {
        const project = pages.find((page) => page.id === projectId);
        if (!project) {
            document.title = "404 Not Found";
            app.innerHTML = `
               <h1>404</h1>
               <span>Project not found</span>
            `;
            return;
        }
        document.title = project.title;
        app.innerHTML = renderProjectPage(project);
        return;
    }
    const route = routes[path] ?? (path === "/projects.html" ? routes["/projects"] : undefined);
    if (route) {
        document.title = route.title;
        app.innerHTML = route.render();
    }
    else {
        document.title = `404 Not Found`;
        app.innerHTML = `
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        `;
    }
};
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        const target = e.target;
        if (target instanceof HTMLAnchorElement && target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(target.pathname);
        }
        else if (!target) {
            console.error("'e.target' is undefined");
        }
        router();
    });
});
router();
//# sourceMappingURL=router.js.map