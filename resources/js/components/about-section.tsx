import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <section  id="about"  className="h-full bg-black text-white scroll-mt-16">
            <div className="mx-auto w-[80%]">
                <div className="mx-auto w-[80%]">
                    <div className="gap-8 py-8 md:flex">
                        <img className="hidden md:h-auto md:w-md xl:block" src="images/about-me.png" alt="" />
                        <div>
                            <p className="text-4xl font-light md:text-6xl">// About Me</p>
                            <p className="pt-8 pb-4 text-justify">
                                Hello, My name is <span className='font-extrabold text-cyan-400'>Romiz Aisy, I'm a Junior Web Developer</span> with 2 years of experience in building and managing websites,
                                including e-learning platform, e-commerce website, and journal publication website. I'm currently pursuing my college
                                degree in Computer Science STMIK AMIKOM SURAKARTA while countinue learning to grow my skills in both front-end and
                                also back-end development. I enjoy building user-focused, responsive, and efficient website, and I always eager to
                                learn and collaborate on meaningful projects. 
                                <br />
                                <br />
                                Feel free to contact me or view my resume, <span className='font-extrabold text-cyan-400'>Thank youuuu.</span>
                            </p>
                            <div className=' flex gap-4'>
                                <Button variant={'customSection'} size={'lg'}>
                                    <a href="#contact">Contact</a>
                                </Button>
                                <Button variant={'customSection'} size={'lg'}>
                                    <a href="document/CV_RomizAisy.pdf" target='_blank'>Resume</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-64"></div>
        </section>
    );
}
