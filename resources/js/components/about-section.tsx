export default function About() {
    return (
        <section
            id="about"
            className="
                bg-[#F5F0E8]
                text-[#1F1F1F]
                py-32
                scroll-mt-24
            "
        >
            <div className="w-[90%] max-w-[1200px] mx-auto">

                {/* Section Header */}
                <div className="mb-20">
                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.35em]
                            text-[#7A746D]
                            mb-6
                        "
                    >
                        About
                    </p>

                    <h2
                        className="
                            font-serif
                            text-5xl
                            md:text-7xl
                            font-normal
                            leading-none
                        "
                    >
                        A Brief Introduction
                    </h2>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-12 gap-12 items-start">

                    {/* Portrait */}
                    <div className="md:col-span-4">
                        <img
                            src="images/about-me.png"
                            alt="Romiz Aisy"
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="md:col-span-8">

                        <p
                            className="
                                text-2xl
                                md:text-3xl
                                font-serif
                                leading-relaxed
                                mb-10
                            "
                        >
                            I design and build digital products,
                            educational platforms, and web applications
                            that balance functionality with thoughtful
                            user experience.
                        </p>

                        <div
                            className="
                                max-w-2xl
                                text-[#5D5852]
                                leading-relaxed
                                space-y-6
                            "
                        >
                            <p>
                                Based in Indonesia, I am currently pursuing
                                a degree in Computer Science while working on
                                various web projects ranging from educational
                                platforms and journal publication systems to
                                e-commerce websites and automation tools.
                            </p>

                            <p>
                                My work focuses on Laravel, React, and modern
                                web technologies, with a growing interest in
                                automation, content creation workflows, and
                                AI-powered tools.
                            </p>

                            <p>
                                Outside of development, I enjoy exploring
                                design systems, digital publishing, and
                                creating products that solve practical
                                problems.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-8 mt-12">
                            <a
                                href="#contact"
                                className="
                                    border-b
                                    border-[#1F1F1F]
                                    pb-1
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    hover:opacity-60
                                    transition-opacity
                                "
                            >
                                Get In Touch
                            </a>

                            <a
                                href="document/CV_RomizAisy.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    border-b
                                    border-[#1F1F1F]
                                    pb-1
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    hover:opacity-60
                                    transition-opacity
                                "
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}