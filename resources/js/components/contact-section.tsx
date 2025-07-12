import SpotlightCard from './SpotlightCard';

export default function Contact(){
    return(
        <section id="contact" className="h-full bg-black text-white scroll-smooth">
            <div className="mx-auto w-[80%]">
                <div className="mx-auto w-[80%]">
                    <p className="py-5 text-4xl md:text-6xl font-light">// Contact</p>
                    <div className="mx-auto w-[80%] flex md:flex-nowrap flex-wrap justify-center gap-4 py-8">

                    

                    

                    

                    <SpotlightCard
                        className="custom-spotlight-card flex w-full  items-center justify-center font-semibold"
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                        romizaisyweb@gmail.com
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card flex w-full items-center justify-center font-semibold"
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                        +6282136374249
                    </SpotlightCard>

                    <SpotlightCard
                        className="custom-spotlight-card flex w-full items-center justify-center font-semibold"
                        spotlightColor="rgba(3, 207, 252, 0.8)"
                    >
                        @romizaisyy
                    </SpotlightCard>
                
                </div>
                </div>
            </div>
            <div className="h-64"></div>

        </section>
    );
}