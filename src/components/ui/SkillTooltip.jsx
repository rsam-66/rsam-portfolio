import { ExternalLink } from 'lucide-react';

// Skill metadata with descriptions and official URLs
const skillData = {
    // Frontend
    "React": {
        icon: "devicon-react-original colored",
        description: "A JavaScript library for building user interfaces with component-based architecture.",
        url: "https://react.dev"
    },
    "JavaScript": {
        icon: "devicon-javascript-plain colored",
        description: "The programming language of the web, enabling interactive and dynamic content.",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    "HTML/CSS": {
        icon: "devicon-html5-plain colored",
        description: "The foundational technologies for structuring and styling web pages.",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    "Tailwind CSS": {
        icon: "devicon-tailwindcss-original colored",
        description: "A utility-first CSS framework for rapidly building custom designs.",
        url: "https://tailwindcss.com"
    },
    "TypeScript": {
        icon: "devicon-typescript-plain colored",
        description: "A typed superset of JavaScript that compiles to plain JavaScript.",
        url: "https://www.typescriptlang.org"
    },

    // Backend
    "Node.js": {
        icon: "devicon-nodejs-plain colored",
        description: "A JavaScript runtime built on Chrome's V8 engine for server-side development.",
        url: "https://nodejs.org"
    },
    "Python": {
        icon: "devicon-python-plain colored",
        description: "A versatile programming language known for its readability and extensive libraries.",
        url: "https://www.python.org"
    },
    "Express.js": {
        icon: "devicon-express-original",
        description: "A minimal and flexible Node.js web application framework.",
        url: "https://expressjs.com"
    },
    "REST APIs": {
        icon: "devicon-fastapi-plain colored",
        description: "Architectural style for designing networked applications using HTTP methods.",
        url: "https://restfulapi.net"
    },
    "SQL": {
        icon: "devicon-postgresql-plain colored",
        description: "Structured Query Language for managing and querying relational databases.",
        url: "https://www.postgresql.org"
    },

    // Tools & Others
    "Git": {
        icon: "devicon-git-plain colored",
        description: "A distributed version control system for tracking code changes.",
        url: "https://git-scm.com"
    },
    "VS Code": {
        icon: "devicon-vscode-plain colored",
        description: "A lightweight but powerful source code editor by Microsoft.",
        url: "https://code.visualstudio.com"
    },
    "Figma": {
        icon: "devicon-figma-plain colored",
        description: "A collaborative interface design tool for UI/UX design.",
        url: "https://www.figma.com"
    },
    "Arduino": {
        icon: "devicon-arduino-plain colored",
        description: "An open-source electronics platform for creating interactive projects.",
        url: "https://www.arduino.cc"
    },
    "Linux": {
        icon: "devicon-linux-plain",
        description: "An open-source operating system kernel powering servers and devices worldwide.",
        url: "https://www.linux.org"
    },

    // Other technologies
    "Vue.js": {
        icon: "devicon-vuejs-plain colored",
        description: "A progressive JavaScript framework for building user interfaces.",
        url: "https://vuejs.org"
    },
    "Next.js": {
        icon: "devicon-nextjs-plain",
        description: "A React framework for production with hybrid static & server rendering.",
        url: "https://nextjs.org"
    },
    "Firebase": {
        icon: "devicon-firebase-plain colored",
        description: "Google's platform for building mobile and web applications.",
        url: "https://firebase.google.com"
    },
    "Docker": {
        icon: "devicon-docker-plain colored",
        description: "A platform for developing, shipping, and running applications in containers.",
        url: "https://www.docker.com"
    }
};

export default function SkillTooltip({ skill, children }) {
    const data = skillData[skill];

    if (!data) {
        return children;
    }

    return (
        <div className="relative block group">
            {children}

            {/* Tooltip - hidden on mobile, visible on hover for md+ screens */}
            <div className="hidden md:block absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 lg:w-72 
                opacity-0 invisible translate-y-2 
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-4 relative">
                    {/* Arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-slate-200 rotate-45"></div>

                    {/* Content */}
                    <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                            <i className={`${data.icon} text-2xl`}></i>
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-slate-900 text-sm mb-1">{skill}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed mb-2">
                                {data.description}
                            </p>
                            <a
                                href={data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                Learn more
                                <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export skill data for potential reuse
export { skillData };
