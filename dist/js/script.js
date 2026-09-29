import "./router.js";
import { filterProjects } from "./functions/filterProjects.js";
import { renderProjects } from "./functions/renderProjects.js";
import { pages } from "./models/Page.js";
import { skills } from "./models/Skill.js";
const projects = document.querySelector("#projects");
export const projectWrapper = document.createElement("section");
const filterContainer = document.querySelector(".skills-container");
const filterList = document.createElement("section");
projectWrapper.className = "project-wrapper";
filterList.className = "skills";
projects.appendChild(projectWrapper);
filterContainer.appendChild(filterList);
pages.forEach((page) => {
    const container = document.createElement("section");
    const imgContainer = document.createElement("section");
    const titleContainer = document.createElement("section");
    const image = document.createElement("img");
    const h2 = document.createElement("h2");
    h2.textContent = page.title;
    image.src = page.thumbnail;
    image.alt = page.title;
    imgContainer.className = "img-container";
    titleContainer.className = "title-container";
    projects?.appendChild(container);
    container.appendChild(titleContainer);
    titleContainer.appendChild(h2);
    container.appendChild(imgContainer);
    imgContainer.appendChild(image);
    projectWrapper.appendChild(container);
    container.addEventListener("click", function () {
        window.location.href = `/projects.html?project=${encodeURIComponent(page.id)}`;
    });
});
skills.forEach((skill) => {
    const button = document.createElement("button");
    button.id = skill.id;
    button.textContent = skill.title;
    button.addEventListener("click", () => {
        const matchingPages = filterProjects(pages, skill.categories);
        renderProjects(matchingPages);
    });
    filterList.appendChild(button);
});
//# sourceMappingURL=script.js.map