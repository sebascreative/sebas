export const GradientContainer = ({ children, color }) => {
    return (
        <div className="flex flex-col w-full min-h-full bg-[#201b1b] items-center py-16 text-white" style={{
            background: `radial-gradient(ellipse 100% 30%, ${color} 0%, #070202 90%)`,
        }}>{children}</div>
    );
}