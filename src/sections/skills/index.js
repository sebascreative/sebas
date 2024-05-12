import { SectionContainer } from "../../hoc/section-container";
import Wallpaper from "./assets/wallpaper.png";
import Cross from "./assets/cross.png";
import Styles from './index.module.css';

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
          <img src={Cross} alt="Cross" className="absolute inset-0 m-auto md:rotate-0 rotate-45 ease-linear" />
          <div className={`flex flex-wrap max-w-screen-lg p-4 ${Styles.text}`}>
            <div className="flex flex-col md:w-2/4 w-full items-center md:items-start mt-[-100px] md:mt-0 md:mb-20">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-8">UX/UI</h2>
              <label>Figma</label>
              <label>Wireframing and prototyping</label>
              <label>UX research</label>
              <label>UX persona</label>
              <label>User flow</label>
              <label>A/B testing</label>
              <label>CSS</label>
              <label>HTML</label>
            </div>
            <div className="flex flex-col items-start md:items-end w-2/4">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-8">DATA</h2>
              <label>Microsoft Power BI</label>
              <label>Microsoft Excel</label>
              <label>Python</label>
            </div>
            <div className="flex flex-col w-2/4 items-end md:items-start">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-8">PROJECTS</h2>
              <label>Scrum</label>
              <label>Jira</label>
              <label>Confluence</label>
              <label>Culture</label>
            </div>
            <div className="flex flex-col md:w-2/4 w-full items-center md:items-end mt-12 md:mt-0">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-8">BUSINESS</h2>
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
