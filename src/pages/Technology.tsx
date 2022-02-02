import { useLayoutEffect } from "react";
import Logo from "../components/Logo";
import NavMenu from "../components/Nav";

function Technology() {

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        body.className = 'bg-technology'
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

export default Technology;