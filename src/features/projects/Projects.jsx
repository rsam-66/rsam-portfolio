import { ExternalLink, Github } from 'lucide-react';
import ImageCarousel from '../../components/ui/ImageCarousel';

const projects = [
    {
        title: "Tanavue",
        description: "Aplikasi monitoring hidroponik berbasis IoT yang memantau kondisi tanaman menggunakan Arduino. Sistem ini memungkinkan petani untuk memantau parameter penting tanaman secara real-time.",
        contribution: "Front-End & Back-End Development",
        tags: ["IoT", "Arduino", "React", "Node.js"],
        github: "https://github.com/rsam-66/tavanue-final",
        link: "",
        gradient: "from-emerald-500 to-teal-600",
        images: [
            "/images/projects/tanavue/1.png",
            "/images/projects/tanavue/2.png",
            "/images/projects/tanavue/3.png"
        ]
    },
    {
        title: "Berita Kini",
        description: "Website penampil berita sederhana yang terintegrasi dengan API berita eksternal. Menampilkan berita terkini dengan tampilan yang bersih dan responsif.",
        contribution: "Front-End & API Integration",
        tags: ["React", "REST API", "Tailwind CSS"],
        github: "https://github.com/rsam-66/technicalTest_FrontEndDev_reimarksam",
        link: "https://rsam-66.github.io/technicalTest_FrontEndDev_reimarksam/#/",
        gradient: "from-blue-500 to-indigo-600",
        images: [
            "/images/projects/berita/web1.png",
            "/images/projects/berita/web2.png",
            "/images/projects/berita/web3.png"
        ]
    },
    {
        title: "Portfolio Website",
        description: "Website portfolio personal yang dibangun dengan React dan Tailwind CSS. Menampilkan proyek, keahlian, dan informasi kontak dengan desain modern.",
        contribution: "Full Development",
        tags: ["React", "Tailwind CSS", "Vite"],
        github: "https://github.com/rsam-66/react-porto",
        gradient: "from-purple-500 to-pink-600",
        images: [] // No images for this project
    },
    {
        title: "Lumira AI",
        description: "Website analisis hasil USG Kanker berbasis Model AI. Memungkinkan dokter untuk mengubah hasil analisis GradCam dengan menggunakan Konva.js.",
        contribution: "Front-End Development",
        tags: ["Vue.js", "Tailwind CSS", "Vite", "Konva.js"],
        github: "https://github.com/rsam-66/Front-End_BreastCancer.git",
        link: "https://lumirabreast-cancer-flax.vercel.app/",
        gradient: "from-purple-500 to-pink-600",
        images: [
            "/images/projects/lumira/1.png",
            "/images/projects/lumira/2.png",
            "/images/projects/lumira/3.png"
        ]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                        My Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills in development and problem-solving.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden card-hover"
                        >
                            {/* Card Header - Carousel or Gradient Fallback */}
                            {project.images && project.images.length > 0 ? (
                                <ImageCarousel images={project.images} interval={4000} />
                            ) : (
                                <div className={`h-48 bg-linear-to-br ${project.gradient} flex items-center justify-center`}>
                                    <span className="text-white text-5xl font-bold opacity-30">
                                        {project.title.charAt(0)}
                                    </span>
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Status Badge */}
                                {project.status && (
                                    <span className="inline-block px-3 py-1 mb-3 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                                        {project.status}
                                    </span>
                                )}

                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Contribution Badge */}
                                <div className="mb-4">
                                    <span className="text-xs font-medium text-slate-500">
                                        Contribution:
                                    </span>
                                    <span className="ml-2 text-xs font-semibold text-blue-600">
                                        {project.contribution}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                                    >
                                        <Github size={18} />
                                        View Code
                                    </a>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

