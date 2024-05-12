import { SectionContainer } from "../../hoc/section-container";
import Wallpaper from "./assets/wallpaper.png";
import Cross from "./assets/cross.png";

export const Skills = () => {
  return (
    <SectionContainer>
      <div
        className="min-h-screen w-full text-white flex items-center justify-center"
        style={{
          background: `url(${Wallpaper})`,
        }}
      >
        <div className="relative">
          <img src={Cross} alt="Cross" className="absolute inset-0 m-auto" />
          <div className="grid grid-cols-2 gap-14 max-w-screen-lg">
            <div className="flex flex-col">
              <h2 className="text-4xl font-semibold">UX/UI</h2>
              <label>Figma</label>
              <label>Wireframing and prototyping</label>
              <label>UX research</label>
              <label>UX persona</label>
              <label>User flow</label>
              <label>A/B testing</label>
              <label>CSS</label>
              <label>HTML</label>
            </div>
            <div className="flex flex-col items-end">
              <h2 className="text-4xl font-semibold">DATA</h2>
              <label>Microsoft Power BI</label>
              <label>Microsoft Excel</label>
              <label>Python</label>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl font-semibold">PROJECTS</h2>
              <label>Scrum</label>
              <label>Jira</label>
              <label>Confluence</label>
              <label>Culture</label>
              <div className="h-16"></div>
            </div>
            <div className="flex flex-col items-end">
              <h2 className="text-4xl font-semibold">BUSINESS</h2>
              <label>Market Research</label>
              <label>Email marketing/ Hubspot</label>
              <label>Digital Marketing</label>
              <label>Accounting</label>
              <label>Financial Skills</label>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
