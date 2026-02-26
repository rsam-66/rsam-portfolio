import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: "samuelriyanto57@gmail.com",
        href: "mailto:samuelriyanto57@gmail.com",
        color: "bg-red-100 text-red-600"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "reimark-samuel",
        href: "https://www.linkedin.com/in/reimark-samuel-630a67283/",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: Github,
        label: "GitHub",
        value: "rsam-66",
        href: "https://github.com/rsam-66",
        color: "bg-slate-100 text-slate-700"
    }
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjggeaqj";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-slate-50 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <MapPin className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Location</h3>
                                    <p className="text-slate-600">Bandung, Indonesia</p>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                Saya adalah mahasiswa aktif di <strong>Telkom University</strong> dengan minat besar dalam
                                <strong> Mobile Development</strong> dan <strong>Web Development</strong>. Memiliki rasa ingin tahu
                                tinggi terhadap teknologi, bertanggung jawab, solutif, dan mudah beradaptasi dalam berbagai situasi.
                            </p>

                            {/* Contact Links */}
                            <div className="space-y-4">
                                {contactLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
                                    >
                                        <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                                            <link.icon size={22} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-slate-500 font-medium">{link.label}</p>
                                            <p className="text-slate-800 font-semibold break-all">{link.value}</p>
                                        </div>
                                        <Send size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>

                        {/* Success Message */}
                        {status === 'success' && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl flex items-center gap-3">
                                <CheckCircle className="text-green-600" size={20} />
                                <p className="text-green-700 font-medium">Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}

                        {/* Error Message */}
                        {status === 'error' && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-xl flex items-center gap-3">
                                <AlertCircle className="text-red-600" size={20} />
                                <p className="text-red-700 font-medium">Something went wrong. Please try again or email me directly.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

