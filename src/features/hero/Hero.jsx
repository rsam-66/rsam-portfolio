export default function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text */}
                <div className="space-y-6 text-center lg:text-left">
                    {/* <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
                        Available for Hire
                    </span> */}
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                        Building Logic <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                            Solving Problems.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Hi, I'm <strong>Reimark Samuel</strong>. A Software Engineering student at Telkom University passionate about Data Science and Frontend Development.
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start pt-4">
                        <a href="#projects" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                            View Work
                        </a>
                        <a href="https://github.com/rsam-66" target="_blank" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-all">
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Right Side: Visual/Image */}
                <div className="relative">
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-8 left-0 -z-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <img
                        src="/images/myself.jpg"
                        alt="Reimark Samuel"
                        className="relative rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white max-w-sm mx-auto w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}