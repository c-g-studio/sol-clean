import { useEffect, useState } from "react";

const breakpoints = {
    md: 768,
    lg: 1199,
    xl: 1320,
};

export function useMedia(
    type: "min-width" | "max-width",
    breakpoint: keyof typeof breakpoints
) {
    const query = `(${type}: ${breakpoints[breakpoint]}px)`;
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}
