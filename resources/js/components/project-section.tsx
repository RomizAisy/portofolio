export default function Project() {
    const projects = [
        {
            title: "clippera.id",
            year: "2025",
            description:
                "AI-powered video editing platform designed to automate subtitle generation, styling, and content repurposing for creators seeking faster production workflows.",
            image: "images/clippera.jpg",
            link: "https://www.clippera.id",
        },
        {
            title: "akuntaxedu.com",
            year: "2025",
            description:
                "Educational platform developed for Universitas Sebelas Maret, focused on taxation and accounting learning resources.",
            image: "images/akuntaxedu.png",
            link: "https://www.akuntaxedu.com",
        },
        
        
    ];

    return (
        <section
            id="project"
            className="
                bg-[#F5F0E8]
                text-[#1F1F1F]
                py-32
                scroll-mt-24
            "
        >
            <div className="w-[90%] max-w-[1200px] mx-auto">

                {/* Section Header */}
                <div className="mb-24">
                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.35em]
                            text-[#7A746D]
                            mb-6
                        "
                    >
                        Selected Work
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
                        Projects & Case Studies
                    </h2>
                </div>

                {/* Projects */}
                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="
                                group
                                border-t
                                border-[#DDD6CB]
                                pt-12
                            "
                        >
                            <div className="grid md:grid-cols-12 gap-12 items-start">

                                {/* Content */}
                                <div className="md:col-span-5">
                                    <p
                                        className="
                                            text-sm
                                            text-[#7A746D]
                                            mb-4
                                        "
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <h3
                                        className="
                                            font-serif
                                            text-4xl
                                            md:text-5xl
                                            font-normal
                                            mb-6
                                        "
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        className="
                                            text-[#5D5852]
                                            leading-relaxed
                                            mb-8
                                        "
                                    >
                                        {project.description}
                                    </p>

                                    <p
                                        className="
                                            text-sm
                                            text-[#7A746D]
                                            mb-8
                                        "
                                    >
                                        {project.year}
                                    </p>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-block
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
                                        View Project
                                    </a>
                                </div>

                                {/* Image */}
                                <div className="md:col-span-7 flex justify-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="
                                                w-full
                                                max-w-[550px]

                                                border
                                                border-[#DDD6CB]

                                                grayscale
                                                group-hover:grayscale-0

                                                transition-all
                                                duration-700

                                                group-hover:scale-[1.02]
                                            "
                                        />
                                    </a>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}