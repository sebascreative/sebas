import { Button } from "../../components/button";
import { GradientCard } from "../../components/gradient-card";
import { GradientContainer } from "../../components/gradient-container";
import { SectionContainer } from "../../hoc/section-container";
import Image1 from './assets/image1.png';
import Image2 from './assets/image2.png';
import Image3 from './assets/image3.png';
import Image4 from './assets/image4.png';
import Image5 from './assets/image5.png';
import Image6 from './assets/image6.png';

export const JoinnexusPlatform = () => {
    return (
        <SectionContainer>
            <GradientContainer color="#5215D3">
                <div className="flex flex-col gap-16">
                    <h1 className="text-center text-white text-6xl font-light">Joinnexus Platform</h1>
                    <div className="max-w-screen-lg">
                        <GradientCard
                            fromColor="#501986B2"
                            midColor="#471677B2"
                            toColor="#2F0D50B2"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <img className="md:h-full" src={Image1} alt="Joinnexus screenshot" />
                                <img className="md:h-full" src={Image2} alt="Joinnexus screenshot" />
                                <img className="md:h-full" src={Image3} alt="Joinnexus screenshot" />
                                <img className="md:h-full" src={Image4} alt="Joinnexus screenshot" />
                                <img className="md:h-full" src={Image5} alt="Joinnexus screenshot" />
                                <img className="md:h-full" src={Image6} alt="Joinnexus screenshot" />
                            </div>
                        </GradientCard>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button href="https://joinnexus.io">Visit here</Button>
                    </div>
                </div>
            </GradientContainer>
        </SectionContainer>
    );
}