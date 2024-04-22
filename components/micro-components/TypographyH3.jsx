export function TypographyH3({ text }) {
    const textStyle = {
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        backgroundImage: `linear-gradient(to right, #4f3ba9, #643cad, #7d2fad, #9622ad, #ad0bad)`
    };

    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight m-1" style={textStyle}>
            {text}
        </h3>
    );
}
