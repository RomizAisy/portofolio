export default function Experience() {
    const experiences = [
        {
            period: "2025 — Present",
            role: "Full-Stack Developer",
            company: "clippera.id",
            link:"https://www.clippera.id",
            description:
                "Developing Clippera as a full-stack SaaS platform, handling frontend development design with Tailwind, backend services with Flask, video automation workflows using FFmpeg, database management, and production deployment through Docker, Linux, Nginx, and VPS infrastructure.",
        },
        {
            period: "2024 — 2025",
            role: "Web Developer",
            company: "akuntaxedu.com",
            link:"https://www.akuntaxedu.com",
            description:
                "Designed and implemented educational platforms, learning management systems, and publication websites. Collaborated with academic institutions to improve accessibility and user experience.",
        },
        {
            period: "2021 — 2023",
            role: "Web Developer",
            company: "majalahedukasi.com",
            link:"https://www.majalahedukasi.com",
            description:
                "Built custom websites for businesses and organizations, including e-commerce platforms, content management systems, and responsive marketing websites.",
        },
    ];

    return (
        <section
            id="experience"
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
                        Experience
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
                        Selected Experience
                    </h2>
                </div>

                {/* Timeline */}
                <div className="border-t border-[#DDD6CB]">
                    {experiences.map((item) => (
                        <article
                            key={`${item.company}-${item.period}`}
                            className="
                                py-12
                                border-b
                                border-[#DDD6CB]
                            "
                        >
                            <div className="grid md:grid-cols-12 gap-8">

                                {/* Date */}
                                <div className="md:col-span-3">
                                    <p
                                        className="
                                            text-sm
                                            text-[#7A746D]
                                        "
                                    >
                                        {item.period}
                                    </p>
                                    
                                </div>

                                {/* Content */}
                                <div className="md:col-span-9">

                                    <h3
                                        className="
                                            font-serif
                                            text-3xl
                                            md:text-4xl
                                            mb-2
                                        "
                                    >
                                        {item.role}
                                    </h3>

                                    <p
                                        className="
                                            uppercase
                                            tracking-[0.15em]
                                            text-xs
                                            text-[#7A746D]
                                            mb-6
                                        "
                                    >
                                        {item.company}
                                    </p>

                                    <p
                                        className="
                                            max-w-2xl
                                            leading-relaxed
                                            text-[#5D5852]
                                        "
                                    >
                                        {item.description}
                                    </p>
                                    <br />
                                    <a
                                        href={item.link}
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

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}