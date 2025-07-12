import '../../css/app.css';

export default function Project() {
    return (
        <section id='project' className="h-full bg-black text-white scroll-mt-16">
            <div className="mx-auto w-[80%]">
                <div className="mx-auto w-[80%] py-5">
                    <p className="py-5 text-4xl md:text-6xl font-light">// My Project</p>

                    <div className="grid grid-cols-1 gap-10 md:gap-42">
                        
                        <div className="mt-8 grayscale-100 border-4 border-black text-center overflow-hidden hover:grayscale-0 transition-all duration-600 hover:border-white">
                            <a href="https://www.akuntaxedu.tech" target='_blank'>
                                <img className='' src="images/akuntaxedu.png" alt="" />
                            </a>
                            <p>Universitas Sebelas Maret Tax Education Website - akuntaxedu.tech</p>
                        </div>

                        <div className='grayscale-100 border-4 border-black text-center overflow-hidden hover:grayscale-0 transition-all duration-600 hover:border-white'>
                            <a href="https://pttransformasirekaadinamikainovasi.com/jurnal/index.php/accounting-transformation/index" target="_blank">
                                <img src="images/journal-publication.png" alt="" />
                            </a>
                            <p>Journal Publication Website</p>
                        </div>

                        <div className="grayscale-100 border-4 border-black text-center overflow-hidden hover:grayscale-0 transition-all duration-600 hover:border-white">
                            <a href="https://karyagendhispustaka.com" target='_blank'>
                                <img src="images/ecommerce.png" alt="" />
                            </a>
                            <p>E-Commerce Website</p>
                        </div>

                    </div>

                    
                    
                </div>
            </div>
            <div className="h-64"></div>
        </section>
    );
}
