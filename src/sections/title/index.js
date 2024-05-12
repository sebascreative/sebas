import Styles from './index.module.css';
import { SectionContainer } from "../../hoc/section-container";

export const Title = () => {
  return (
    <SectionContainer className="grid">
      <div className="h-full w-full bg-[#201b1b] flex items-center justify-center">
        <div className="flex flex-col gap-8">
          <div className="flex text-white text-9xl font-bold">
            <h1 className={Styles.yLetter}>Y</h1>
            <h1>ALETOR</h1>
          </div>

          <h2 className="text-white text-7xl text-center font-medium">
            I do UX/UI
          </h2>
        </div>
      </div>
    </SectionContainer>
  );
};
