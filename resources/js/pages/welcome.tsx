import About from '@/components/about-section';
import Contact from '@/components/contact-section';
import BFooter from '@/components/footer';
import Hero from '@/components/hero-section';
import { Navbar } from '@/components/navbar';
import Project from '@/components/project-section';
import Skills from '@/components/skills-section';

export default function Welcome() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Project />
            <Skills />
            <About />
            <Contact />
            <BFooter />
            
        </div>
    );
}
