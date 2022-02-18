import { useEffect, useState } from "react";

function WindowSize() {
    const { innerWidth: width } = window;
    return {
        width
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(WindowSize());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(WindowSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
