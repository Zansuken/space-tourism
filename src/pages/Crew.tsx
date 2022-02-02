import { useLayoutEffect } from "react";
import Logo from "../components/Logo";
import NavMenu from "../components/Nav";

function Crew() {

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        body.className = 'bg-crew'
    }, [])

    return (
        <>
            <header>
                <Logo />
                <NavMenu />
            </header>
        </>
    );
}

export default Crew;