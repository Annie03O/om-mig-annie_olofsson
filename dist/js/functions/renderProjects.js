import { projectWrapper } from "../script.js";
export function renderProjects(pages) {
    projectWrapper.innerHTML = "";
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
        titleContainer.appendChild(h2);
        imgContainer.appendChild(image);
        container.appendChild(titleContainer);
        container.appendChild(imgContainer);
        projectWrapper.appendChild(container);
    });
}
//# sourceMappingURL=renderProjects.js.map