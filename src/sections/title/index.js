import { SectionContainer } from "../../hoc/section-container";
import Profile from "./assets/profile.png";
import { ReactTyped } from "react-typed";
import background from "./assets/title.jpg";
import logo from "./assets/logo.png"
export const Title = () => {
  return (
    <SectionContainer className="grid">
      <div style= {{background:`url("${background}")`}}className="h-full w-full flex items-center justify-center">
        <div className="absolute top-9 left-9">
          <div className="flex gap-2">
            <img src={logo} className="w-32 h-32" alt="logo"></img>
            <div className="flex items-center justify-center">
              <label className="text-white text-2xl">sebascreative</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex text-white text-7xl md:text-9xl font-bold items-center justify-center">
        
            <h1>Hi there!</h1>
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
