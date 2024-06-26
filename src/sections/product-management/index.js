import { GradientCard } from "../../components/gradient-card";
import { GradientContainer } from "../../components/gradient-container";
import { SectionContainer } from "../../hoc/section-container";
import Horizontal1Image from "./assets/horizontal-1.png";
import Horizontal2Image from "./assets/horizontal-2.png";
import Horizontal3Image from "./assets/horizontal-3.png";
import Horizontal4Image from "./assets/horizontal-4.png";
import Vertical1Image from "./assets/vertical-1.png";
import Vertical2Image from "./assets/vertical-2.png";
import Styles from './styles.module.css';

export const ProductManagement = () => {
  return (
    <SectionContainer>
      <GradientContainer color="#736F6E">
        <div className="max-w-screen-lg gap-16 flex flex-col">
          <div className="flex flex-col border-white border border-x-0 border-y-2 text-center gap-2 py-4 w-full p-4">
            <h1 className="uppercase text-2xl md:text-6xl font-light">
              Product Management
            </h1>
            <p className="text-xs mb-4">
              In this section, I am going to share the main projects where I
              have done product management and some information
            </p>
          </div>

          <div className="flex flex-col text-center gap-4">
            <h1 className="text-4xl">Sales platform</h1>
            <p className="text-left p-4">
              Important project in which a platform was initially created to
              create order requests, with all the company s requirements. After
              this, portfolio information, sales reports such as sales in units
              by customers, sales in monetary units by sales representative,
              commissions, fulfillment of goals and objectives were included. In
              this role, it was key to coordinate the entire team and prioritize
              the most relevant KPIs for sales analysis in the company.
            </p>
          </div>
          <GradientCard
            fromColor="#B1ACAC"
            midColor="#A09A9A"
            toColor="#514C4C"
          >
            <div className={`grid gap-4 ${Styles.imagesContainer}`}>
              <img alt="Horizontal 1" src={Horizontal1Image} />
              <img alt="Horizontal 2" src={Horizontal2Image} />
              <img className={Styles.horizontalImage} alt="Vertical 1" src={Vertical1Image} />
              <img alt="Horizontal 3" src={Horizontal3Image} />
              <img alt="Horizontal 4" src={Horizontal4Image} />
              <img className={Styles.horizontalImage} alt="Vertical 2" src={Vertical2Image} height="146px" />
            </div>
          </GradientCard>
          <a
            className="font-bold text-xl md:text-2xl text-center"
            href="mailto: yaletordesigner@gmail.com"
          >
            mail: jsebascreative@gmail.com
          </a>
        </div>
      </GradientContainer>
    </SectionContainer>
  );
};
