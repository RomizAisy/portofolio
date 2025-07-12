import SpotlightCard from './SpotlightCard';

export default function Skills() {
    return (
        <section className="h-full bg-black text-white">
            <div className="mx-auto w-[80%]">
                <div className="mx-auto w-[80%]">
                    <p className="py-5 text-4xl md:text-6xl">// My Skills</p>
                </div>
                <div className="mx-auto flex w-[80%] flex-wrap justify-center gap-4 py-4">

                    <SpotlightCard
                        className="custom-spotlight-card flex h-20 w-20 md:h-46 md:w-46 items-center justify-center   md:text-2xl md:font-semibold "
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                        Html
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card flex h-20 w-20 md:h-46 md:w-46 items-center justify-center   md:text-2xl md:font-semibold "
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                        Css
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card flex h-20 w-20 md:h-46 md:w-46 items-center justify-center   md:text-2xl md:font-semibold "
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                       Php
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card flex h-20 w-20 md:h-46 md:w-46 items-center justify-center   md:text-2xl md:font-semibold "
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                        Laravel
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card flex h-20 w-20 md:h-46 md:w-46 items-center justify-center   md:text-2xl md:font-semibold "
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                        React
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card flex h-20 w-20 md:h-46 md:w-46 items-center justify-center   md:text-2xl md:font-semibold "
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                        Tailwind
                    </SpotlightCard>
                
                </div>
            </div>

            <div className="h-64"></div>
        </section>
    );
}
