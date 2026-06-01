export default function Skills() {
    const categories = [
        {
            title: "Web Applications",
            description:
                "Laravel, React, TypeScript, Tailwind CSS",
        },
        {
            title: "Backend Development",
            description:
                "Flask, REST APIs, MySQL",
        },
        {
            title: "Content Platforms",
            description:
                "Moodle, OJS, Custom CMS Development",
        },
        {
            title: "Media Automation",
            description:
                "FFmpeg, Subtitle Processing, AI-Assisted Workflows",
        },
        {
            title: "Infrastructure & DevOps",
            description:
                "Docker, Linux, Git",
        },
    ];

    return (
        <section
            className="
                bg-[#F5F0E8]
                text-[#1F1F1F]
                py-32
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
                        Expertise
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
                        What I Do
                    </h2>
                </div>

                {/* Capability List */}
                <div className="border-t border-[#DDD6CB]">
                    {categories.map((item) => (
                        <div
                            key={item.title}
                            className="
                                py-10
                                border-b
                                border-[#DDD6CB]
                                grid
                                md:grid-cols-2
                                gap-8
                            "
                        >
                            <h3
                                className="
                                    font-serif
                                    text-3xl
                                    font-normal
                                "
                            >
                                {item.title}
                            </h3>

                            <p
                                className="
                                    text-[#5D5852]
                                    leading-relaxed
                                "
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}