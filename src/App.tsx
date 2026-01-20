import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './features/hero/Hero';
import Projects from './features/projects/Projects';
import Skills from './features/skills/Skills';
import Contact from './features/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App