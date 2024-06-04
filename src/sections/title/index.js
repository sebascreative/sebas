import Styles from "./index.module.css";
import { SectionContainer } from "../../hoc/section-container";
import Profile from "./assets/profile.png";
import { ReactTyped } from "react-typed";

export const Title = () => {
  return (
    <SectionContainer className="grid">
      <div className="h-full w-full bg-[#201b1b] flex items-center justify-center">
        <div className="flex flex-col gap-8">
          <div className="flex text-white text-7xl md:text-9xl font-bold items-center justify-center">
            <h1 className={Styles.yLetter}>Y</h1>
            <h1>ALETOR</h1>
          </div>
          <div className="md:hidden flex items-center justify-center p-8">
            <img
              className="rounded-full border-4 border-solid border-white"
              src={Profile}
              alt="profile"
            />
          </div>
          <h2 className="text-white text-5xl md:text-7xl text-center font-medium">
            I do{" "}
            <ReactTyped
              strings={["UX/UI", "PRODUCT MANAGEMENT"]}
              typeSpeed={30}
              backSpeed={40}
              loop
            />
          </h2>
        </div>
      </div>
    </SectionContainer>
  );
};
