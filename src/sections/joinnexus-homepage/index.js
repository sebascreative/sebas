import { Button } from "../../components/button";
import { GradientCard } from "../../components/gradient-card";
import { GradientContainer } from "../../components/gradient-container";
import { SectionContainer } from "../../hoc/section-container";
import Image11 from './assets/image1-1.png';
import Image12 from './assets/image1-2.png';
import Image13 from './assets/image1-3.png';
import Image21 from './assets/image2-1.png';
import Image22 from './assets/image2-2.png';
import Image23 from './assets/image2-3.png';
import Image31 from './assets/image3-1.png';
import Image32 from './assets/image3-2.png';
import Image33 from './assets/image3-3.png';
import Image41 from './assets/image4-1.png';
import Image42 from './assets/image4-2.png';
import Image43 from './assets/image4-3.png';
import Styles from './index.module.css';

export const JoinnexusHomepage = () => {
    return (<SectionContainer>
        <GradientContainer color="#5215D3">
            <div className="flex flex-col gap-16">
                <h1 className="text-center text-white text-6xl font-light">Joinnexus Homepage</h1>
                <div className="max-w-screen-lg">
                    <GradientCard
                        fromColor="#11021F"
                        midColor="#160329"
                        toColor="#150524"
                    >
                        <div className={`grid gap-16 ${Styles.imagesContainer}`}>
                            <div className="flex flex-col">
                                <img alt="joinnexus screenshot" src={Image11} />
                                <img alt="joinnexus screenshot" src={Image12} />
                                <img alt="joinnexus screenshot" src={Image13} />

                            </div>
                            <div className="flex flex-col">
                                <img alt="joinnexus screenshot" src={Image21} />
                                <img alt="joinnexus screenshot" src={Image22} />
                                <img alt="joinnexus screenshot" src={Image23} />
                            </div>
                            <div className="hidden md:flex flex-col">
                                <img className={`max-w-24 ${Styles.horizontalImage}`} alt="joinnexus screenshot" src={Image31} />
                                <img className={`max-w-24 ${Styles.horizontalImage}`} alt="joinnexus screenshot" src={Image32} />
                                <img className={`max-w-24 ${Styles.horizontalImage}`} alt="joinnexus screenshot" src={Image33} />
                            </div>
                            <div className="hidden md:flex flex-col">
                                <img className={`max-w-24 ${Styles.horizontalImage}`} alt="joinnexus screenshot" src={Image41} />
                                <img className={`max-w-24 ${Styles.horizontalImage}`} alt="joinnexus screenshot" src={Image42} />
                                <img className={`max-w-24 ${Styles.horizontalImage}`} alt="joinnexus screenshot" src={Image43} />
                            </div>
                        </div>
                    </GradientCard>
                </div>
                <div className="flex items-center justify-center">
                    <Button href="https://joinnexus.io">Visit here</Button>
                </div>

            </div>
        </GradientContainer>
    </SectionContainer>);
}