
export type Page = {
    id: string,
    title: string,
    javascript?: "Vanilla" | "React Js" | "Next Js";
    tailwind?: boolean,
    php?: boolean;
    ux?: boolean;
    testing?: boolean;
    description: string | string[];
    thumbnail: string;
    gallery: string[];
    specialFeatures?: Pick<Page, "title" | "description" | "gallery">[]
 }

export const pages: Page[] = [
    {
        id: "fanatic-fandom",
        title: "Fanatic Fandom",
        description: "A multiple fandom wikia for fans to read about their favorite franchises and discover new ones.",
        javascript: "Next Js",
        tailwind: true,
        thumbnail: "/src/images/projects/FF/FF_start.png",
        gallery: [
            "src/images/projects/FF/ShowPage.png",
            "src/images/projects/FF/TeensPage.png",
        ],
    },
    {
        id: "clearchoice-merchandise",
        title: "ClearChoice Merchandise",
        description: "An e-commerce website for ClearChoice, a company specializing in custom merchandise for fans.",
        javascript: "React Js",
        tailwind: true,
        thumbnail: "/src/images/projects/ClearChoice/CCStart.png",
        gallery: [
            "/src/images/projects/ClearChoice/ClearChoice.png",
            "/src/images/projects/ClearChoice/CCProducts.png",
            "/src/images/projects/ClearChoice/CCProductPage.png",
            "/src/images/projects/ClearChoice/CCProductPageBtn.png",
            "/src/images/projects/ClearChoice/CCSCPage.png",
            "/src/images/projects/ClearChoice/CCSCModal.png",
            "/src/images/projects/ClearChoice/CCSCResult.png"
        ],
        specialFeatures: [
            {
                title: "Size Calculator",
                description: "The size calculator improves the online shopping experience by providing more accurate size recommendations. Instead of relying solely on standard size charts, users can enter their personal measurements, which are then matched against model-specific sizing data. This ensures a better fit across different clothing styles and reduces the risk of incorrect sizing. Logged-in users can also save their measurements for a faster and more seamless experience. The feature is designed to minimize returns, enhance user satisfaction, and contribute to a more sustainable e-commerce flow.",
                gallery: [
                    "/src/images/projects/ClearChoice/CCSCPage.png",
                    "/src/images/projects/ClearChoice/CCSCModal.png",
                    "/src/images/projects/ClearChoice/CCSCResult.png"
                ]
            }
        ]
    },
    {
        id: "soy-luna-fan-page",
        title: "Soy Luna Fan Page",
        javascript: "React Js",
        tailwind: true,
        description: "A fan page dedicated to the popular Disney Channel show Soy Luna, featuring news, character bios, and episode guides.",
        thumbnail: "/src/images/projects/SL/SL_Start.png",
        gallery: [
            "/src/images/projects/SL/SL.png",
            "/src/images/projects/SL/SLCharPage.png",
            "/src/images/projects/SL/SLCharDown.png",
        ],
    },
    {
        id: "knitted-for-you",
        title: "Knitted For You",
        javascript: "React Js",
        php: true,
        description: "'Knitted For You' was a small start-up company where I did an internship. I was responsible for redesigning buttons, testing the website and implenting funktionality to the website.",
        thumbnail: "/src/images/projects/Knitted For You/Modal/Full.png",
        gallery: [
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
        specialFeatures: [
            {
                title: "Play with color",
                description: "The 'Play with Color' feature allows users to customize the colors of their patterns in real-time. Users can select from a palette of colors or input specific color codes to see how their choices will look with the pattern. This interactive tool enhances the user experience by providing a visual representation of the final product, making it easier for users to make informed decisions about their designs. It also adds a fun and creative element to the website, encouraging users to experiment with different color combinations and personalize their knitting projects.",
                gallery: [
                    "/src/images/projects/Knitted For You/Play with color/Full.png",
                    "/src/images/projects/Knitted For You/Play with color/Colorpicker.png",
                    "/src/images/projects/Knitted For You/Play with color/Section.png",
                ]
            },
            {
                title: "PDF Generation",
                description: "The PDF generation feature allows users to create a downloadable PDF of their knitting pattern. This includes all the necessary instructions, materials list, and any customizations made through the 'Play with Color' feature. Users can easily save or print the PDF for offline use, making it convenient for them to follow their knitting projects without needing constant access to the website. This feature enhances user satisfaction by providing a tangible output that they can refer to while working on their knitting projects.",
                gallery: [
                    "/src/images/projects/Knitted For You/Pdf/Pdf-button.png",
                    "/src/images/projects/Knitted For You/Pdf/pdf-text.png",
                ]
            },
            {
                title: "Feedback Modal",
                description: "The feedback modal is a user-friendly interface that allows customers to provide feedback on their experience with the website. It can be triggered by a button or automatically after certain interactions, such as completing a purchase or using the 'Play with Color' feature. The modal collects user input through a simple form, which may include rating scales, text fields for comments, and options for users to indicate specific areas of improvement. This feature helps the company gather valuable insights directly from users, enabling them to make informed decisions about future updates and enhancements to the website.",
                gallery: [
                    "/src/images/projects/Knitted For You/Modal/Full.png",
                    "/src/images/projects/Knitted For You/Modal/Grid.png",
                    "/src/images/projects/Knitted For You/Modal/Section.png",
                ]
            }
        ],
    }
];
