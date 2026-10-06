export class Page {
    constructor(id, title, description, thumbnail, gallery, features, javascript, tailwind, php, ux, testing) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.gallery = gallery;
        this.features = features;
        this.javascript = javascript;
        this.tailwind = tailwind;
        this.php = php;
        this.ux = ux;
        this.testing = testing;
    }
}

export const pages = [
    new Page(
        "fanatic-fandom",
        "Fanatic Fandom",
        "Fanatic Fandom is a Wikipedia copy-cat, created to present information of multiple tv series, movies and its characters. The purpose is to give fans a platform where they can read about their favorite characters and discover new tv shows in the same genre. I have always had a great interest in all things fiction, so developing this website has been very fun.",
        "/src/images/projects/FF/FF_start.png",
        [
            "/src/images/projects/FF/Drama/Portal/1.png",
            "/src/images/projects/FF/Drama/Portal/Item-1.png",
            "/src/images/projects/FF/Drama/ShowPage/layout.png",
            "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Top.png",
            "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Middle.png",
            "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Btm.png",
            "/src/images/projects/FF/Drama/ShowPage/SeasonPage/Top.png",
        ],
        [
            {
                title: "Character Database",
                description: "A comprehensive database of characters from various franchises, including detailed bios and images.", 
                images: [
                    {
                        image: "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Top.png",
                        imageDetails: "Desciption for image",
                    },
                    {
                        image: "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Middle.png",
                        imageDetails: "Desciption for image",
                    },
                    {
                        image: "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Btm.png",
                        imageDetails: "Desciption for image",
                    },
                ],
            },
            {
                title: "Season Guides",
                description: "Detailed guides for each season of the shows featured on the site.",
                images: [
                    {
                        image: "/src/images/projects/FF/Drama/ShowPage/SeasonPage/Top.png",
                        imageDetails: "Decription for  image",
                    },
                ],
            },
        ],
        "Next Js",
        true,
        false,
        true,
        true
    ),
    new Page(
        "clearchoice-merchandise",
        "ClearChoice Merchandise",
        "An e-commerce website for ClearChoice, a company specializing in custom merchandise for fans.",
        "/src/images/projects/ClearChoice/CCStart.png",
        [
            "/src/images/projects/ClearChoice/ClearChoice.png",
            "/src/images/projects/ClearChoice/CCProducts.png",
        ],
        [
            {
                title: "Character Database",
                description: "A comprehensive database of characters from various franchises, including detailed bios and images.", 
                images: [
                    {
                        image: "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Top.png",
                        imageDetails: "Desciption for image",
                    },
                    {
                        image: "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Middle.png",
                        imageDetails: "Desciption for image",
                    },
                    {
                        image: "/src/images/projects/FF/Drama/ShowPage/CharacterPage/Btm.png",
                        imageDetails: "Desciption for image",
                    },
                ],
            },
            {
                title: "Season Guides",
                description: "Detailed guides for each season of the shows featured on the site.",
                images: [
                    {
                        image: "/src/images/projects/FF/Drama/ShowPage/SeasonPage/Top.png",
                        imageDetails: "Decription for  image",
                    },
                ],
            },
        ],
        "React JS",
        true,
        false,
        true,
        false    
    ),
    new Page(
        "soy-luna-fan-page",
        "Soy Luna Fan Page",
        "A fan page dedicated to the popular Disney Channel show Soy Luna, featuring news, character bios, and episode guides.",
        "/src/images/projects/SL/SL_Start.png",
        [
            "/src/images/projects/SL/SL.png",
            "/src/images/projects/SL/SLCharPage.png",
            "/src/images/projects/SL/SLCharDown.png",
        ],
        [
            {
                title: "Character Bios",
                description: "Detailed biographies of the main characters from the show, including their backgrounds and story arcs.",  
                images: [
                    {
                        image: "/src/images/projects/SL/SLCharPage.png",
                        imageDetails: "Description for image",
                    },
                    {
                        image: "/src/images/projects/SL/SLCharDown.png",
                        imageDetails: "Description for image",
                    },
                ]
            }
        ],
        "React Js",
        false,
        false,
        true,
        false
    ),
    new Page(
        "knitted-for-you",
        "Knitted For You",
        "'Knitted For You' was a small start-up company where I did an internship. I was responsible for redesigning buttons, testing the website and implenting funktionality to the website.",
        "/src/images/projects/Knitted For You/Modal/Full.png",
        [
            "/src/images/projects/Knitted For You/Modal/Full.png",
            "/src/images/projects/Knitted For You/Modal/Grid.png",
            "/src/images/projects/Knitted For You/Modal/Section.png",
            "/src/images/projects/Knitted For You/Knitted Setting/Full.png",
            "/src/images/projects/Knitted For You/Knitted Setting/Grid.png",
            "/src/images/projects/Knitted For You/Knitted Setting/Section.png",
            "/src/images/projects/Knitted For You/Pdf/Pdf-button.png",
            "/src/images/projects/Knitted For You/Pdf/pdf-text.png",
            "/src/images/projects/Knitted For You/Play with color/Full.png",
            "/src/images/projects/Knitted For You/Play with color/Colorpicker.png",
            "/src/images/projects/Knitted For You/Play with color/Section.png",
            "/src/images/projects/Knitted For You/Row Section/Full.png",
            "/src/images/projects/Knitted For You/Row Section/Close.png",
            "/src/images/projects/Knitted For You/Row Section/Open.png",
        ],
        [
            {
                title: "Play with color",
                description: "The 'Play with Color' feature allows users to customize the colors of their patterns in real-time. Users can select from a palette of colors or input specific color codes to see how their choices will look with the pattern. This interactive tool enhances the user experience by providing a visual representation of the final product, making it easier for users to make informed decisions about their designs. It also adds a fun and creative element to the website, encouraging users to experiment with different color combinations and personalize their knitting projects.",
                images: [
                    {
                        image: "/src/images/projects/Knitted For You/Play with color/Full.png",
                        imageDetails: "Description for image",
                    },
                    {
                        image: "/src/images/projects/Knitted For You/Play with color/Colorpicker.png",
                        imageDetails: "Description for image",
                    },
                    {
                        image: "/src/images/projects/Knitted For You/Play with color/Section.png",
                        imageDetails: "Description for image",
                    },
                ]
            },
            {
                title: "PDF Generation",
                description: "The PDF generation feature allows users to create a downloadable PDF of their knitting pattern. This includes all the necessary instructions, materials list, and any customizations made through the 'Play with Color' feature. Users can easily save or print the PDF for offline use, making it convenient for them to follow their knitting projects without needing constant access to the website. This feature enhances user satisfaction by providing a tangible output that they can refer to while working on their knitting projects.",
                images: [
                    {
                        image: "/src/images/projects/Knitted For You/Pdf/Pdf-button.png",
                        imageDetails: "Description for image",
                    },
                    {
                        image: "/src/images/projects/Knitted For You/Pdf/pdf-text.png",
                        imageDetails: "Description for image",
                    },
                ]
            },
            {
                title: "Feedback Modal",
                description: "The feedback modal is a user-friendly interface that allows customers to provide feedback on their experience with the website. It can be triggered by a button or automatically after certain interactions, such as completing a purchase or using the 'Play with Color' feature. The modal collects user input through a simple form, which may include rating scales, text fields for comments, and options for users to indicate specific areas of improvement. This feature helps the company gather valuable insights directly from users, enabling them to make informed decisions about future updates and enhancements to the website.",
                images: [
                    {
                        image: "/src/images/projects/Knitted For You/Modal/Full.png",
                        imageDetails: "Description for image",
                    },
                    {
                        image: "/src/images/projects/Knitted For You/Modal/Grid.png",
                        imageDetails: "Description for image",
                    },
                    {
                        image: "/src/images/projects/Knitted For You/Modal/Section.png",
                        imageDetails: "Description for image",
                    },
                ]
            }
        ],
        "React Js",
        true,
        false,
        true,
        false
    ),
];
