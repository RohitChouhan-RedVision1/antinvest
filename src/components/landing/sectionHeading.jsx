export default function SectionHeading({ title, heading, variant = "light", align = "center" }) {
    return (
        <div className={`${align === "start" ? "text-start" : "text-center"}`}>
            <h3
                className={`text-anime-style-2 font-semibold uppercase ${variant === "dark" ? "text-[var(--rv-primary)]" : "text-[var(--rv-primary)]"
                    }`}
            >
                {heading}
            </h3>
            <h2
                className={`text-anime-style-1 font-bold  ${variant === "dark" ? "text-white" : "text-black"
                    }`}
            >
                {title}
            </h2>
        </div>
    );
}