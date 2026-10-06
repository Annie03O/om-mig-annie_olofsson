# om-mig-annie_olofsson

# index.html
head-sektionen innehåll:
    - titel
    - länkad style.css
    - länk till externt ikonbibliotek
    - script för hela projektet
    - script för header

bodyns innehåll: 
    - header-tag med id:et "header" (script ligger header.ts)
    - banner med introduktion
    - container för filtrering (script ligger script.js)
    - container för projekt (script ligger i projects.js)

# style.css 
Styling för följande för allt du ser på startsidan

# script.js 
    - Projekt-wrapper skapas och delges en klass
    - Projekten renderas (se projects.js)
    - listan skills loopas och lägger in knappar som filtrerar projekten (se filterProjects.js)

<!-- Relaterat till projekt -->
<!-- Relaterat till index.html -->
# renderProjects.js
Innehåller en funktion som renderar projekt på startsidan

    - Funktionen tar emot listan för sidor (se Page.ts)
    - Containern töms varje gång den görs för att undvika dubletter
    - listan loopan med forEach
    - För varje objekt i listan skapas en container
    - Inuti containern skapas en wrapper innehållande titel och thumbnail (se: Page.js)
    - På containern sätts en eventlyssnare som för användaren vidare till det valda projektet (projekt.html)
    - containern placeras i projektWrapper (se script.js)

# filterProjects.js
Innehåller funktion som filtrerar project via listan "pages". Funktionen tar emot två parametrar: 
    - Listan för sidorna
    - Objekt för kategorier

- Funktionen returnerar en filtrerad lista med objekt

Listan kan filtreras utifrån:
    - Javascript
    - Tailwind
    - PHP
    - UX
    - Testing


<!-- Relaterat till projekt.html -->
# projects.html
head-sektionen innehåll:
- titel (se projects.js)
- länkad style.css
- länkad projects.css
- länk till externt ikonbibliotek
- script för header
- script för router

body-sektionens innehåll:
- bodyns id är "projectPage"
- header med id "header" (se "header.js")
- main med id "project-container" (se projects.js)

# projects.js
- Funktion "renderProjectPage" som renderar projektsidan genom parametern "project"
- if-sats som renderar information om inget projekt matas in
- titel tilldelas baserat på det valda projektets titel
- returnerad html baserat på listan pages

    # html  
    - article som container
    - header innehållande länk som navigererar en tillbaka till startsidan
    - "head-img-container" innehåller rubrik och thumbnail
    - text med en övergripande beskrivning

        # project-gallery
        - listan med "features" från "pages" mappas
        - två variabler skapas: 
            "image" den första bilden i listan 
            "featureImages" för nästa bild
        - html returneras i containern med klassen "feature" för följande:
            - Rubrik för funktion på sidan
            - Första bilden
            - Resterande bilder mapas med information om bilden (OBS: Finns inte än)
            - Raderna växlar mellan att returnera bilden och beskrivningen först


# enlargeImage.js
Innehåller en funktion som gör att användaren kan  göra bilderna på projekt-sidan större

- Bodyn i projects.html hämtas via id:t "projectPage" 
- I funktionen skapas en lista med alla img-taggar i variabeln "images"

    # eventlyssnare på image-tag
    - Varje bild i listan tilldelas eventlyssnare med hjälp av forEach så att användaren kan klicka
        - Inuti eventlyssnaren skapas en section med klassen "overlay"

        # Modal
        - HTML:en inuti overlayen bildar en modal bestående av: 
            - Wrappper
            - Header med stäng knapp 
            - Section med bild
        - Overlayen läggs i body:n

        # Stäng knapp
        - Knappen hämtas från modalen med hjälp av querySelector
        - På knappen läggs en eventlyssnare
        - Inuti eventlyssnaren hämtas overlayen 
        - På overlay läggs klassen "closeModal" (se projects.css)
        - Overlayen tas bort ur body:n

    