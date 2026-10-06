import { projectWrapper } from "../script.js";

export function renderProjects(pages) {
  projectWrapper.innerHTML = "";

  pages.forEach((page) => {
      const container = document.createElement("section");
      container.innerHTML = `
          <section class="project-wrapper">
              <section>
                  <section class="title-container">
                  <h2>${page.title}</h2>
              </section>
              <section class="img-container">
                  <img src="${page.thumbnail}" alt="${page.title}">
              </section>
          </section>
          `
      container.addEventListener("click", function () {
         console.log("klick");
         
          window.location.href = `/projects.html?project=${encodeURIComponent(page.id)}`;
      })
      projectWrapper.appendChild(container);
  })
  
}
