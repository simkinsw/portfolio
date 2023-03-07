import clmStats from "../assets/images/clmStats.png";
import portfolio from "../assets/images/portfolio.png";
import powerRankings from "../assets/images/powerRankings.png";
import overlay from "../assets/images/overlay.png";
import crossword from "../assets/images/crossword.png";
import dungeonBuddies from "../assets/images/dungeonBuddies.png";

export const projects =[
    {
        "id": 1,
        "title": "Chicagoland Melee Stats Page",
        "types": ["React-JS", "Java/Python"],
        "link": "https://www.chicagomelee.com/stats",
        "github": "https://github.com/simkinsw/clm-stats-backend",
        "description": "Full stack app created for the Chicago Super Smash Bros. Melee community to track tournament statistics and compare and rank players. Used daily by a community of over 500 players.",
        "features": [
            "Uses GCP Cloud Scheduler to automate daily querying the start.gg GraphQL API and access tournament data in a 50 mile radius around Chicago",
            "Backend runs using Java Spring, JPA, and PostgreSQL and compiles and aggregates tournament data and ranks players with the Glicko2 rating system",
            "Uses a REST API deployed to GCP using Docker to allow for realtime querying of data",
            "Fully responsive and user-friendly frontend is hosted at chicagomelee.com/stats and used daily by a community of over 1000 players",
            "Frontend is optimized for SEO using Lighthouse and WordPress tools"
        ],
        "tools": ["GraphQL", "Java", "Spring", "Docker", "Google Cloud", "React", "TypeScript", "HTML", "CSS", "Sass", "WordPress"],
        "screenshot": clmStats,
        "icons": ["React", "Java"]
    },
    {
        "id": 2,
        "title": "Portfolio Webpage",
        "types": ["React-JS"],
        "link": "https://www.will-simkins.com",
        "github": "https://github.com/simkinsw/portfolio",
        "description": "Personal website containing my resume and portfolio.",
        "features": [
            "Fully responsive website built using React, TypeScript, and TailwindCSS",
            "SEO oprimized using Lighthouse",
            "Uses an automated contact form built with EmailJS"
        ],
        "tools": ["TypeScript", "React", "HTML", "TailwindCSS", "EmailJS", "Firebase"],
        "screenshot": portfolio,
        "icons": ["React"]
    },
    {
        "id": 3,
        "title": "Chicagoland Melee Power Rankings Graphics",
        "types": ["React-JS"],
        "link": "https://chicagomelee.com/clm-summer-2022-power-rankings/",
        "github": "https://github.com/simkinsw/pr-graphic",
        "description": "Interactive, animated website released quarterly to present the community-voted rankings for the Chicago Melee community",
        "features": [
            "Fully responsive React frontend featuring animations and custom scrolling behavior",
            "Updated quarterly to reflect new rankings",
            "Viewed and referenced by over 2000 community members",
            "Hosted using ReactPress and WordPress"
        ],
        "tools": ["TypeScript", "React", "HTML", "CSS", "ReactPress", "WordPress"],
        "screenshot": powerRankings,
        "icons": ["React"]
    },
    {
        "id": 4,
        "title": "Chicagoland Melee Stream Overlay",
        "types": ["React-JS"],
        "github": "https://github.com/simkinsw/clm-stats-overlay/",
        "description": "Overlay used by twitch.tv/chicagomelee to display stats about players during tournament streams.",
        "features": [
            "Uses React, Typescript, and Electron to create a stream overlay which displays up-to-date competitor data from the start.gg API and CLM stats",
            "Integrates with Tournament Stream Helper and Open Broadcaster Software to automatically update the overlay when players change"
        ],
        "tools": ["TypeScript", "Electron", "React", "HTML", "CSS", "OBS", "TournamentStreamHelper", "Twitch"],
        "screenshot": overlay,
        "icons": ["React"]
    },
    {
        "id": 5,
        "title": "New York Times Crossword App",
        "types": ["Java/Python"],
        "github": "https://github.com/simkinsw/Crossword",
        "description": "Desktop app used to solve the New York Time Crossword puzzles and store and track statistics on solve times.",
        "features": [
            "Pulls daily crossword puzzle files from the New York Times website using Mozilla Cookie Jar",
            "Uses a custom parser to recreate a puzzle grid from proprietary .puz files and validate solutions",
            "Uses a MySQL database to store and track statistics and visualizes them using graphs built with MatPlotLib and Seaborn",
            "Used by my wife and I to complete 1500 straight NYT puzzles!"
        ],
        "tools": ["Python", "tkinter", "NumPy", "Seaborn", "MatPlotLib", "MySQL"],
        "screenshot": crossword,
        "icons": ["Python"]
    },
    {
        "id": 6,
        "title": "Dungeon Buddies",
        "types": ["Misc."],
        "link": "https://wsimkins.itch.io/dungeon-buddies",
        "description": "Top down strategy game built in one week for the Brackeys Game Jam 2021.1.",
        "features": [  
            "Uses Unity, C#, and Aseprite to design and program a game from scratch",
            "Built in collaboration with another developer using Agile Methodology to assign and track work",
            "Scored in Top 20 of Brackeys Game Jam community voting"
        ],
        "tools": ["Unity", "C#", "Aseprite", "GitLab", "Trello"],
        "screenshot": dungeonBuddies,
        "icons": ["Unity"]
    }
]