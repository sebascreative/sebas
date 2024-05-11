import { Bebetronic } from "./sections/bebetronic";
import { InternautHomepage } from "./sections/internaut-homepage";
import { JoinnexusHomepage } from "./sections/joinnexus-homepage";
import { JoinnexusPlatform } from "./sections/joinnexus-platform";
import { Presentation } from "./sections/presentation";
import { ProductManagement } from "./sections/product-management";
import { Skills } from "./sections/skills";
import { Title } from "./sections/title";


function App() {
  return (
    <main>
      <Title />
      <Presentation />
      <Skills />
      <JoinnexusPlatform />
      <Bebetronic />
      <JoinnexusHomepage />
      <InternautHomepage />
      <ProductManagement />
    </main>
  );
}

export default App;
