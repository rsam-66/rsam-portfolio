import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: "https://github.com/rsam-66", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/reimark-samuel-630a67283/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:samuelriyanto57@gmail.com", label: "Email" }
];

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <a href="#" className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Reimark.
                        </a>
                        <p className="text-slate-400 leading-relaxed">
                            Software Engineering student passionate about building innovative solutions and exploring new technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                                    aria-label={link.label}
                                >
                                    <link.icon size={18} />
                                </a>
                            ))}
                        </div>
                        <p className="text-slate-400 mt-4 text-sm">
                            Bandung, Indonesia
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        © {currentYear} Reimark Samuel
                    </p>
                    <p className="text-slate-500 text-sm">
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
