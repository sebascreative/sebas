export const GradientCard = ({ children, fromColor, toColor }) => {
  return (
    <div
    className="rounded-lg py-8 px-10"
      style={{
        background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`,
      }}
    >
      {children}
    </div>
  );
};
