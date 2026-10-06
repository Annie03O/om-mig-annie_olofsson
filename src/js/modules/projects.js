import { pages } from "../models/Page.js";
import "./enlargeImage.js"
export const renderProjectPage = (project) => {
    if (!project) {
        return pages.map((page) => {                    
            return `
          
          <article class="project">
                <h2>${page.title}</h2>
                <p>${page.description}</p>
            </article>
        `}).join("");
    }

    document.title = project.title;    

    return `
        <article class="project-detail">
            <header class="project-detail-header">
                <a href="/">Back</a>
            </header>
            <section class="head-img-container">
                <h1>${project.title}</h1>
                <img src="${project.thumbnail}" class="head-img" alt="${project.title}">
            </section>
            <span class="project-description">${project.description}</span>
            <section class="project-gallery">
                ${project.features.map((feature) => {
                    const image = feature.images[0];
                    const featureImages = feature.images.slice(1)
                    return `
                        <section class="feature">
                                <h2>${feature.title}</h2>
                                <section class="feature-info">
                                   <section> 
                                      ${image
                                          ? `<img src="${image.image}" alt="${image.imageDetails}"/>`
                                       : ""}
                                  </section>
                                  <section>
                                    ${image?.imageDetails ? `<span>${image.imageDetails}</span>` : ""}
                                  </section>
                            </section>
                            <section class="feature-image-columns">
                                ${featureImages.map((image, index) => `
                                    <section class="feature-image-row ${index % 2 === 1 ? "reverse" : ""}">
                                        <section class="feature-image-container">
                                            <img src="${image.image}" alt="${image.imageDetails}">
                                        </section>
                                        <section class="feature-description-container">
                                            <span>${image.imageDetails}</span>
                                        </section>
                                    </section>
                                `).join("")}          
                        </section>
                    `;
                }).join("")}
            </section>
        </article>
    `;
};