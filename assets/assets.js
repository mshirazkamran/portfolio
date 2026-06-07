import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import github from './github.png';
import java from './java.png';
import python from './python.jpeg';
import javascript from './javascript.png';
import nodejs from './nodejs.png';
import react from './react.svg';
import fastapi from './fastapi.png';
import fastify from './fastify.png';
import sentencetransformers from './sentencetransformers.jpeg';

import sql from './sql.png';
import postgresql from './postgresql.png';
import supabase from './supabase.jpeg';

import docker from './docker.png';
import digitalocean from './digital-ocean.png';
import netlify from './netlify.png';

import postman from './postman.png';
import tampermonkey from './tampermonkey.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './cropped-shiraz-github-logo.png';
import logo_dark from './shiraz-logo-written.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    code_icon,
    java,
    python,
    javascript,
    nodejs,
    sentencetransformers,
    docker,
    fastapi,
    fastify,
    digitalocean,
    netlify,
    postgresql,
    postman,
    tampermonkey,
    supabase,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    sql,
    git,
    github,
    react,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Mushaf Konnekt',
        description: 'Flutter, FastAPI, PostgreSQL, SQLite, OAuth2/OIDC, VPS',
        bgImage: '/mushaf-konnekt-1.png',
        link: 'https://mushafkonnekt.netlify.app/',
        github: 'https://github.com/mshirazkamran/mushaf-konnekt-core',
        fullDetails: [
            'Developed an offline first Quran app as a solo project using Flutter and a FastAPI backend, integrating the Quran Foundation Content APIs and User APIs for Quranic content, authentication, bookmarks, collections, and notes.',
            'Designed the caching and synchronization system using SQLite and PostgreSQL, allowing users to access Quran data, translations, and saved content offline.',
            'Implemented authentication using OAuth2/OIDC with PKCE enabling live synchronization of user bookmarks, collections, and reflective notes.',
            'Integrated on-device Quran recitation recognition using fine tuned tiny whisper (Tarteel) on Sherpa ONNX runtime and background Dart Isolates, keeping the UI responsive during real-time speech processing and verse matching.',
            'Used Riverpod for state management to handle themes, reader settings, persistent navigation state, and reactive UI updates across the application.'
        ]
    },
    {
        title: 'Hadith Semantic Search',
        description: 'Python, FastAPI, PostgreSQL, React, SentenceTransformers',
        bgImage: '/hadith-search-1.jpg',
        link: 'https://thehadith.netlify.app',
        github: 'https://github.com/mshirazkamran/',
        fullDetails: [
            'Built a high-performance semantic search engine for Hadith databases using SentenceTransformers and custom embeddings.',
            'Developed a FastAPI backend to handle high-concurrency requests, querying vectorized data in PostgreSQL.',
            'Designed a responsive React interface for querying, reading, and exploring related narrations.',
            'Optimized data pipeline and indexing for fast sub-second text matches across thousands of narrations.'
        ]
    },
    {
        title: 'Filebin CLI',
        description: 'Python click, Fastify, Supabase, PostgreSQL',
        bgImage: '/filebin-cli-1.png',
        link: 'https://github.com/mshirazkamran/filebin-api',
        github: 'https://github.com/mshirazkamran/filebin-api',
        fullDetails: [
            'Created a command-line interface tool in Python Click for instant file sharing and server uploads.',
            'Built a lightweight, high-speed Fastify backend using Node.js to manage file chunk uploads and metadata.',
            'Integrated Supabase and PostgreSQL for persistent file storage, user profiles, and security keys.',
            'Implemented secure, expiring share links, chunked uploads, and CLI progress bars for developer convenience.'
        ]
    },
    {
        title: 'Munch & Vibes',
        description: 'React, Tailwind CSS, React Router',
        bgImage: '/munch-1.png',
        link: 'https://munchvibes.netlify.app',
        github: 'https://github.com/mshirazkamran/',
        fullDetails: [
            'Designed and developed a premium restaurant exploration and reservations dashboard.',
            'Leveraged React Router for seamless single-page application transitions and fluid client-side states.',
            'Crafted a high-fidelity visual design focusing on vibrant elements, filtering systems, and menu showcases.',
            'Optimized client-side rendering performance and page responsiveness across mobile and tablet form factors.'
        ]
    },
]

// export const serviceData = [
//     { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
//     { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
//     { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
//     { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
// ]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.S. in Software Engineering, COMSATS University Islamabad (CGPA: 3.58/4.0)' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Java, JavaScript, SQL (PostgreSQL, SQLite), HTML/CSS' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Semantic Search Engine, CLI Tools, AI Assistants, E-Commerce Sites' }
];

export const educationData = [
    {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'COMSATS University Islamabad',
        duration: '2023 - 2027',
        description: 'CGPA: 3.62/4.0 - Focused on learning software knowledge about algorithms, databases, and system architecture.',
        highlights: ['Database Systems', 'Object-Oriented Programming', 'Data Structures & Algorithms', 'Design and Analysis of Algorithms', 'Computer Networks', 'Software Design and Architecture']
    }
];

export const experienceData = [
    {
        role: 'Team Co-Lead',
        company: 'Gaza Relief Fundraising Campaign',
        duration: 'Civics & Community Engagement',
        description: 'Co-led a team of 5 students to execute a fundraising campaign, successfully raising over 350,000 PKR through community outreach and donation drives.',
        skills: ['Team Leadership', 'Project Management', 'Community Outreach', 'Event Coordination']
    }
];

export const toolsData = [
    // Languages
    { name: 'Java', logo: assets.java },
    { name: 'Python', logo: assets.python },
    { name: 'JavaScript', logo: assets.javascript },

    // Frameworks & Runtimes
    { name: 'Node.js', logo: assets.nodejs },
    { name: 'React', logo: assets.react },
    { name: 'FastAPI', logo: assets.fastapi },
    { name: 'Fastify', logo: assets.fastify },
    { name: 'SentenceTransformers', logo: assets.sentencetransformers },

    // Databases & Backend Services
    { name: 'SQL', logo: assets.sql },
    { name: 'PostgreSQL', logo: assets.postgresql },
    { name: 'Supabase', logo: assets.supabase },

    // DevOps & Cloud
    { name: 'Docker', logo: assets.docker },
    { name: 'DigitalOcean', logo: assets.digitalocean },
    { name: 'Netlify', logo: assets.netlify },

    // Tools
    { name: 'Git', logo: assets.git },
    { name: 'GitHub', logo: assets.github },
    { name: 'Postman', logo: assets.postman },
    { name: 'Tampermonkey', logo: assets.tampermonkey },
];
