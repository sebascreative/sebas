import { GradientCard } from "../../components/gradient-card";
import { SectionContainer } from "../../hoc/section-container";
import Wallpaper from "./assets/wallpaper.jpg";
import Horizontal1 from "./assets/horizontal1.png";
import Vertical1 from "./assets/vertical1.png";
import Vertical2 from "./assets/vertical2.png";
import Vertical3 from "./assets/vertical3.png";
import Vertical4 from "./assets/vertical4.png";
import Horizontal2 from "./assets/horizontal2.png";
import Horizontal3 from "./assets/horizontal3.png";
import { Button } from "../../components/button";

export const Bebetronic = () => {
  return (
    <SectionContainer>
      <div
        className="h-full w-full"
        style={{
          background: `url(${Wallpaper})`,
        }}
      >
        <div className="flex flex-col gap-32 items-center justify-center">
          <h1 className="text-center text-white text-6xl font-light">
            BEBETRONIC GAME
          </h1>

          <div className="max-w-screen-lg">
            <GradientCard
              fromColor="#23459A"
              midColor="#122B6B"
              toColor="#0C1734"
            >
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <img
                    className="w-1/2 p-2"
                    src={Horizontal1}
                    alt="Horizontal 1"
                  />
                  <img className="w-1/6 p-2" src={Vertical2} alt="Vertical 2" />
                  <img className="w-1/6 p-2" src={Vertical3} alt="Vertical 3" />
                  <img className="w-1/6 p-2" src={Vertical1} alt="Vertical 1" />
                </div>
                <div className="flex">
                  <img
                    className="w-1/2 p-2"
                    src={Horizontal2}
                    alt="Horizontal 2"
                  />
                  <img
                    className="w-3/12 p-2"
                    src={Horizontal3}
                    alt="Horizontal 3"
                  />
                  <img
                    className="w-3/12 p-2"
                    src={Vertical4}
                    alt="Vertical 4"
                  />
                </div>
              </div>
            </GradientCard>
          </div>

          <div className="flex gap-4 pb-16">
            <Button href="https://www.cosmopolitan.com/es/consejos-planes/familia-amigos/a33603454/juego-de-beber-online/">
              COSMOPOLITAN
            </Button>
            <Button href="https://www.biobiochile.cl/especial/nuestra-casa/noticias/2020/08/18/bebetronic-la-aplicacion-que-te-permite-salir-de-fiesta-junto-a-tus-amigos.shtml">
              BIOBIOCHILE
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
