import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Ensure you installed lucide-react, or remove imports if not

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Detect scroll to make navbar transparent or solid
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Reimark.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center font-medium text-gray-600">
                    <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
                    <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
                    <a href="#contact" className="px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg flex flex-col items-center py-6 gap-6">
                    <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                </div>
            )}
        </nav>
    );
}