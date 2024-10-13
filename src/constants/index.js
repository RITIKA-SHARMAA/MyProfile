import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    Ritika3, Ayurvedic, DishDiary, LLM1,BrainTumor,Affiliated,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "work",
        title: "Work",
    },

    {
        id: "contact",
        title: "Contact",
    },

];

const myPhoto = [
    {
        title: "Ritika Sharma",
        icon: Ritika3,
    },
    ];

const services = [
    {
        title: "Full-Stack Web Development",
        icon: web,
    },
    {
        title: "Problem-Solving & Algorithms",
        icon: mobile,
    },
    {
        title: "Android Development",
        icon: backend,
    },
    {
        title: "Artistic Designer",
        icon: creator,
    },


];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Frontend Intern",
        company_name: "Dehix",
        icon: "dehixIcon", // Replace with your actual icon variable
        iconBg: "#383E56",
        date: "Month Year - Month Year", // Replace with actual dates
        points: [
            "Collaborated with a team of developers to design and implement web applications using React, Node.js, and other modern technologies.",
            "Developed user-friendly interfaces and optimized application performance to enhance user experience.",
            "Gained experience in Agile methodologies, participating in daily stand-ups, sprint planning, and code reviews.",
            "Utilized Git for version control, managing code changes and collaborating effectively with team members.",
        ],
    },
    {
        title: "Open Source Contributor",
        company_name: "Various Projects",
        icon: "openSourceIcon", // Replace with your actual icon variable
        iconBg: "#E6DEDD",
        date: "Month Year - Month Year", // Replace with actual dates
        points: [
            "Actively contributed to several open-source projects on GitHub, focusing on front-end development and bug fixes.",
            "Collaborated with a global community of developers, enhancing skills in code review and project collaboration.",
            "Improved documentation and added features, ensuring better user experience and project maintainability.",
        ],
    },
    {
        title: "Hackathon Participant",
        company_name: "Various Hackathons",
        icon: "hackathonIcon", // Replace with your actual icon variable
        iconBg: "#383E56",
        date: "Month Year - Month Year", // Replace with actual dates
        points: [
            "Participated in multiple hackathons, working with diverse teams to develop innovative solutions within a limited timeframe.",
            "Designed and implemented prototypes, focusing on usability and functionality.",
            "Gained recognition for creative problem-solving and adaptability in fast-paced environments.",
        ],
    },
    {
        title: "Data Structures & Algorithms Learner",
        company_name: "Self-Driven Learning",
        icon: "learningIcon", // Replace with your actual icon variable
        iconBg: "#E6DEDD",
        date: "Ongoing",
        points: [
            "Engaged in learning data structures and algorithms through over 200 LeetCode questions to enhance technical skills.",
            "Practiced problem-solving techniques and coding efficiency to prepare for technical interviews.",
            "Participated in online coding challenges and competitions to apply knowledge in real-world scenarios.",
        ],
    },
];


const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Streamlit Gemini AI ChatBot",
        description:
            "AI-powered chatbot platform integrating the Gemini API for image processing, text embedding, and an 'ask me anything' feature. Provides real-time, dynamic responses across a variety of user queries through a user-friendly interface.",
        tags: [
            {
                name: "streamlit",
                color: "blue-text-gradient",
            },
            {
                name: "geminiapi",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },

        ],
        image: LLM1,
        source_code_link: "https://ritika-geminichatbot.streamlit.app",
    },
    {
        name: "Food Ordering Web Application",
        description:
            "A full-stack web application enabling users to browse food items, add to cart, and securely place orders. Features include encrypted password authentication, real-time database interaction, and toasting notifications for a seamless user experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: DishDiary,
        source_code_link: "https://github.com/RITIKA-SHARMAA/DishDairy-",
    },
    {
        name: "Ayurvedic Home Remedies App",
        description:
            "A full-stack web application recommending Ayurvedic treatments based on home remedies for minor health issues. Features a chatbot for user interaction, built with a responsive UI and seamless API integration for an optimal user experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "sql",
                color: "pink-text-gradient",
            },
        ],
        image: Ayurvedic,
        source_code_link: "https://github.com/RITIKA-SHARMAA/ayurvedic-web",
    },
    {
        name: "Brain Tumor Detection with ML",
        description:
            "Developed an innovative MedTech solution using ML to detect brain tumors in MRI scans. Trained on diverse datasets from Kaggle, the model identifies tumors in real-time and is integrated into a user-friendly web app built with Flask for medical professionals.",
        tags: [
            {
                name: "machine learning",
                color: "blue-text-gradient",
            },
            {
                name: "flask",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: BrainTumor,
        source_code_link: "https://github.com/RITIKA-SHARMAA/GLbajab",
    },
    {
        name: "Affiliate Marketing based App",
        description:
            "An affiliate marketing app published on the Google Play Store, utilizing ClueLink for generating affiliate links and Firebase as the backend for real-time data management. The app streamlines affiliate marketing for users through an intuitive interface.",
        tags: [
            {
                name: "android",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "cluelink",
                color: "pink-text-gradient",
            },
        ],
        image: Affiliated,
        source_code_link: "https://github.com/",
    },
];



export {myPhoto, services, technologies, experiences, testimonials, projects };