export const GradientCard = ({ children, fromColor, midColor, toColor }) => {
  return (
    <div
      className="rounded-lg py-8 px-10 m-4"
      style={{
        background: `linear-gradient(180deg, ${fromColor} 0%, ${midColor} 50%, ${toColor} 100%)`,
      }}
    >
      {children}
    </div>
  );
};
