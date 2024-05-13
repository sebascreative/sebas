import { GradientCard } from "../../components/gradient-card";
import { SectionContainer } from "../../hoc/section-container";
import { GradientContainer } from './../../components/gradient-container';
import Image1 from './assets/image-1.png';
import Image2 from './assets/image-2.png';
import Image3 from './assets/image-3.png';
import Image4 from './assets/image-4.png';

export const InternautHomepage = () => {
    return (
        <SectionContainer>
            <GradientContainer color="#0d51a2">
                <div className="flex flex-col gap-16">
                    <h1 className="text-center text-white text-6xl font-light">Internaut Homepage</h1>
                    <GradientCard
                        fromColor="#7CA3D0"
                        midColor="#29476B"
                        toColor="#143356"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                            <img className="max-w-80 md:h-full" alt="Internaut page screenshot" src={Image1} />
                            <img className="max-w-80 md:h-full" alt="Internaut page screenshot" src={Image2} />
                            <img className="max-w-80 md:h-full" alt="Internaut page screenshot" src={Image3} />
                            <img className="max-w-80 md:h-full" alt="Internaut page screenshot" src={Image4} />
                        </div>
                    </GradientCard>
                </div>
            </GradientContainer>
        </SectionContainer>
    );
}