import { Button } from '@/components/ui/button';
import GradientText from './gradientText';

export default function Hero() {
    return (
        <div id="hero" className="flex h-screen items-center bg-black">
            <div className="mx-auto w-[80%] text-center text-white">
                <h1 className="p-4 text-4xl font-extrabold md:text-7xl">
                    Hello, My Name is
                    <GradientText
                        colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class font-extrabold md:text-7xl"
                    >
                        Romiz Aisy
                    </GradientText>
                </h1>
                <p className="mb-6">Junior Web Developer</p>
                <div className="flex justify-center items-center gap-4">
                    <Button variant={'customSection'} size={'lg'}>
                        <a href="#contact">Contact</a>
                       
                    </Button>
                    <Button variant={'customSection'} size={'lg'}>
                        <a href="document/CV_RomizAisy.pdf" target='_blank'>Resume</a>
                    </Button>
                </div>
            </div>

            <div></div>
        </div>
    );
}
