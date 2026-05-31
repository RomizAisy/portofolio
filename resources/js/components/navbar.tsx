import { useEffect, useState } from "react";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { href: "#project", label: "Work" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setMobileOpen(false)}
                className={[
                    "fixed inset-0 z-40 bg-black/20 transition-opacity duration-300",
                    mobileOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none",
                ].join(" ")}
            />

            {/* Mobile Menu */}
            <div
                className={[
                    "fixed top-0 right-0 z-50 h-screen w-[85vw] max-w-[340px]",
                    "bg-[#F5F0E8]",
                    "border-l border-[#DDD6CB]",
                    "transition-transform duration-500",
                    "flex flex-col justify-center px-10",
                    mobileOpen ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
            >
                <ul className="flex flex-col gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="
                                    text-3xl
                                    font-serif
                                    text-[#1F1F1F]
                                    no-underline
                                    hover:opacity-60
                                    transition-opacity
                                "
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <p
                    className="
                        mt-16
                        text-xs
                        tracking-[0.2em]
                        uppercase
                        text-[#7A746D]
                    "
                >
                    romizaisy.com
                </p>
            </div>

            {/* Navbar */}
            <header
                className={[
                    "fixed top-0 left-0 w-full z-30",
                    "transition-all duration-500",
                    scrolled
                        ? "bg-[#F5F0E8]/90 backdrop-blur-sm border-b border-[#DDD6CB]"
                        : "bg-transparent",
                ].join(" ")}
            >
                <nav
                    className="
                        w-[92%]
                        max-w-[1280px]
                        mx-auto
                        py-6
                        flex
                        items-center
                        justify-between
                    "
                >
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="
                            no-underline
                            text-[#1F1F1F]
                        "
                    >
                        <div className="flex flex-col">
                            <span
                                className="
                                    font-serif
                                    text-[1.7rem]
                                    leading-none
                                "
                            >
                                Romiz Aisy
                            </span>

                            <span
                                className="
                                    text-[10px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#7A746D]
                                    mt-1
                                "
                            >
                                Digital Creator
                            </span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <ul
                        className="
                            hidden
                            md:flex
                            items-center
                            gap-12
                        "
                    >
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="
                                        text-sm
                                        uppercase
                                        tracking-[0.15em]
                                        text-[#444]
                                        no-underline
                                        hover:text-black
                                        transition-colors
                                    "
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Button */}
                    <button
                        aria-label="Toggle Menu"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="
                            md:hidden
                            flex
                            flex-col
                            gap-1.5
                        "
                    >
                        <span
                            className="
                                w-6
                                h-px
                                bg-[#1F1F1F]
                            "
                        />

                        <span
                            className="
                                w-4
                                h-px
                                bg-[#1F1F1F]
                            "
                        />
                    </button>
                </nav>
            </header>
        </>
    );
}