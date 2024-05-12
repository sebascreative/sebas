import { SectionContainer } from "../../hoc/section-container";
import Profile from "./assets/profile.png";
import Styles from "./index.module.css";

export const Presentation = () => {
  return (
    <SectionContainer>
      <div className="flex items-center min-h-screen justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg gap-4">
          <div className="hidden md:flex items-center justify-center">
            <img
              className="rounded-full border-4 border-solid border-white"
              src={Profile}
              alt="profile"
            />
          </div>
          <div className="flex flex-col gap-4 p-12">
            <h1 className={`text-6xl ${Styles.hello}`}>Hello !</h1>
            <p className="text-white">My name is Sebastian.</p>
            <p className="text-white">
              From a very young age, I have been a great enthusiast for
              technology. As I grew up, I began to analyze why I preferred some
              products over others with “equal” functionality. I discovered that
              through a digital product, emotions, sensations, and messages can
              be shared.
            </p>
            <p className="text-white">
              Today, I see the creation of a product as an art. Just as a
              painter reflects his feelings through his painting, the creator of
              a product transmits his essence in his work. I am an industrial
              engineer and have led digital transformations in different sectors
              of the industry. I enjoy participating in the entire process of
              creating a digital product, especially the user experience.
            </p>
            <p className="text-white">
              Thinking about how the user is going to feel when using our
              service. Next, I will share my main technical strengths as well as
              the main projects in which I have participated in product
              creation.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
