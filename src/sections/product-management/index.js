import { SectionContainer } from "../../hoc/section-container";

export const ProductManagement = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col w-full min-h-full bg-black items-center py-16">
        <div className="flex flex-col border-white border border-x-0 border-y-2 text-center gap-2 py-4 w-full max-w-screen-lg">
          <h1 className="uppercase text-white text-4xl font-light">Product Management</h1>
          <p className="text-white text-xs mb-4">
            In this section, I am going to share the main projects where I have
            don product management and some information
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
