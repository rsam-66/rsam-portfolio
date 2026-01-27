import SkillTooltip from '../../components/ui/SkillTooltip';

const skillCategories = [
    {
        title: "Frontend",
        icon: "🎨",
        skills: [
            { name: "React", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "HTML/CSS", level: 95 },
            { name: "Tailwind CSS", level: 88 },
            { name: "TypeScript", level: 70 }
        ]
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: [
            { name: "Node.js", level: 75 },
            { name: "Python", level: 80 },
            { name: "Express.js", level: 70 },
            { name: "REST APIs", level: 85 },
            { name: "SQL", level: 75 }
        ]
    },
    {
        title: "Tools & Others",
        icon: "🛠️",
        skills: [
            { name: "Git", level: 85 },
            { name: "VS Code", level: 90 },
            { name: "Figma", level: 70 },
            { name: "Arduino", level: 75 },
            { name: "Linux", level: 65 }
        ]
    }
];

const otherTechnologies = ["Vue.js", "Next.js", "Firebase", "Docker"];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                        Expertise
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life and solve complex problems.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 card-hover"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="text-xl font-bold text-slate-900">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-5">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillTooltip key={skillIndex} skill={skill.name}>
                                        <div className="cursor-pointer group/skill">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-slate-700 group-hover/skill:text-blue-600 transition-colors">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs font-semibold text-blue-600">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-linear-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    </SkillTooltip>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-slate-500 mb-6">Other technologies I've worked with:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {otherTechnologies.map((tech, index) => (
                            <SkillTooltip key={index} skill={tech}>
                                <span className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors cursor-pointer">
                                    {tech}
                                </span>
                            </SkillTooltip>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

