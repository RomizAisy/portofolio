import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section
            id="hero"
            className="
                min-h-screen
                bg-[#F5F0E8]
                text-[#1F1F1F]
                flex
                items-center
            "
        >
            <div
                className="
                    w-[90%]
                    max-w-[1200px]
                    mx-auto
                    flex
                    flex-col
                    justify-center
                "
            >
                {/* Small Editorial Label */}
                <p
                    className="
                        uppercase
                        tracking-[0.35em]
                        text-xs
                        text-[#7A746D]
                        mb-10
                    "
                >
                    Portfolio · 2026
                </p>

                {/* Main Title */}
                <h1
                    className="
                        font-serif
                        text-6xl
                        md:text-8xl
                        leading-[0.95]
                        font-normal
                        max-w-4xl
                    "
                >
                    Romiz Aisy
                </h1>

                {/* Description */}
                <p
                    className="
                        mt-8
                        max-w-xl
                        text-lg
                        leading-relaxed
                        text-[#5D5852]
                    "
                >
                    Designing and building digital products,
                    educational platforms, and creative tools
                    with a focus on simplicity and thoughtful
                    user experiences.
                </p>

                {/* Actions */}
                <div className="mt-12 flex flex-wrap gap-8">
                    <a
                        href="#project"
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
                        View Work
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

                {/* Bottom Metadata */}
                <div
                    className="
                        mt-24
                        flex
                        flex-col
                        md:flex-row
                        gap-6
                        text-sm
                        text-[#7A746D]
                    "
                >
                    <span>Semarang, Indonesia</span>
                    <span>Web Development</span>
                    <span>Laravel · React · Flask</span>
                </div>
            </div>
        </section>
    );
}