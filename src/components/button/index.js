export const Button = ({ children, href }) => {
    return (
        <div>
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="border-white border-2 italic p-1 rounded-lg text-3xl">
                {children}
            </a>
        </div>
    )
}