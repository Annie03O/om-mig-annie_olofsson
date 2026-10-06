const app = document.querySelector("#projectPage");

export function enlargeImage() {
    const images = [...document.querySelectorAll("#project-container img")]
    
     images.forEach((img) => {
         // Add image behavior here 
         img.addEventListener("click", (e) => {
            
            const overLay = document.createElement("section");
             overLay.className = "overlay"; 
             
                overLay.innerHTML = `
                   <section class="overlay-wrapper">
                        <header>
                           <button id="closeModal">
                              <span></span>
                              <span></span>
                           </button>
                        </header>
                        <section>
                            <img src=${e.currentTarget.src} alt=${e.currentTarget.src}/>
                        </section>
                    </section>
             `
             app.appendChild(overLay)
          
          
         }, [])

         const closeBtn = document.querySelector("#closeModal");
         
         closeBtn.addEventListener("click", function() {
            const overlay = document.querySelector(".overlay");
            overlay.className = "closeModal"
            app.removeChild(overlay);
         })
         
        
         
     });
}