export default function Contact() {
    return (
        <section
            id="contact"
            className="
                bg-[#F5F0E8]
                text-[#1F1F1F]
                py-32
                scroll-mt-24
            "
        >
            <div className="w-[90%] max-w-[1200px] mx-auto">

                {/* Header */}
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
                        Contact
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
                        Let's Work Together
                    </h2>
                </div>

                {/* Intro */}
                <div className="max-w-2xl mb-20">
                    <p
                        className="
                            text-xl
                            md:text-2xl
                            font-serif
                            leading-relaxed
                            mb-8
                        "
                    >
                        Open to freelance projects,
                        collaborations, and opportunities
                        involving web development,
                        digital products, and creative tools.
                    </p>
                </div>

                {/* Contact List */}
                <div className="border-t border-[#DDD6CB]">

                    <div className="py-8 border-b border-[#DDD6CB] flex flex-col md:flex-row md:justify-between gap-3">
                        <span className="text-[#7A746D] uppercase tracking-[0.15em] text-sm">
                            Email
                        </span>

                        <a
                            href="mailto:romizaisyweb@gmail.com"
                            className="hover:opacity-60 transition-opacity"
                        >
                            romizaisyweb@gmail.com
                        </a>
                    </div>

                    <div className="py-8 border-b border-[#DDD6CB] flex flex-col md:flex-row md:justify-between gap-3">
                        <span className="text-[#7A746D] uppercase tracking-[0.15em] text-sm">
                            Phone
                        </span>

                        <a
                            href="tel:+6282136374249"
                            className="hover:opacity-60 transition-opacity"
                        >
                            +62 821 3637 4249
                        </a>
                    </div>

                    <div className="py-8 border-b border-[#DDD6CB] flex flex-col md:flex-row md:justify-between gap-3">
                        <span className="text-[#7A746D] uppercase tracking-[0.15em] text-sm">
                            Instagram
                        </span>

                        <a
                            href="https://instagram.com/romizaisyy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-60 transition-opacity"
                        >
                            @romizaisyy
                        </a>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="mt-20 text-[#7A746D] text-sm">
                    Based in Indonesia · Available for remote work
                </div>
            </div>
        </section>
    );
}