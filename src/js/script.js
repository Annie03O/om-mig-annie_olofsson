import "./router.js";
import { filterProjects } from "./functions/filterProjects.js";
import { renderProjects } from "./functions/renderProjects.js";
import { pages } from "./models/Page.js";
import { skills } from "./models/Skill.js";

export const projectWrapper = document.createElement("section");

const filterList = document.querySelector(".skills")

projectWrapper.className = "project-wrapper";

document.querySelector("#projects").appendChild(projectWrapper);

renderProjects(pages);

skills.map((skill) => {
    const button = document.createElement("button");
    button.id = skill.id;
    button.textContent = skill.title;

    button.addEventListener("click", () => {
        const matchingPages = filterProjects(pages, skill.categories);
        renderProjects(matchingPages)
    });

    filterList.appendChild(button);
});


