import { useState } from "react";
import '../../css/app.css';

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full py-5 bg-gray-950/20 backdrop-blur-md text-white z-50">
            <nav className="flex justify-between w-[80%] items-center mx-auto">
                <a href="#hero">Romiz Aisy</a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-12">
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? '✖' : '☰'}
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <ul className="flex flex-col gap-4 items-center mt-4 md:hidden">
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            )}
        </div>
    );
}
