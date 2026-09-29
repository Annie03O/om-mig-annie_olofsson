import { pages } from "../models/Page.js";
export const renderProjectPage = (project) => {
    if (!project) {
        return pages.map((page) => `
        <article class="project">
            <h2>${page.title}</h2>
            <p>${page.description}</p>
        </article>
        `).join("");
    }
    return `
        <article class="project-detail">
            <a href="/">Back to projects</a>
            <h1>${project.title}</h1>
            <img src="${project.thumbnail}" alt="${project.title}">
            <p>${project.description}</p>
            <section class="project-gallery">
                ${project.gallery.map((image) => `<img src="${image}" alt="${project.title} project screenshot">`).join("")}
            </section>
        </article>
    `;
};
//# sourceMappingURL=projects.js.map