import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

function Credits() {

    const [hidden, setHidden] = useState(true);

    const ref = useRef(null)

    const isHidden = hidden ? {
        display: 'none'
    } : {
        display: 'inline'
    }

    const handleClickOutside = () => {
        if (hidden === false) {
            setHidden(!hidden)
        }
    }

    useOnClickOutside(ref, handleClickOutside)


    return (
        <div className="credits" ref={ref} style={
            hidden ? {
                bottom: '1em',
                left: '1em',
                height: 'fit-content',
                padding: '0.5em',
                transform: 'scale(0.7)'
            } : {
                bottom: '1em',
                left: '50%',
                transform: 'translateX(-50%)'
            }
        }>
            {hidden ? <div onClick={() => setHidden(!hidden)} className="info-button" /> : <div onClick={() => setHidden(!hidden)} className="close-button" />}
            <h3 style={isHidden}>A FrontendMentor project coded by </h3>
            <a style={isHidden} href="https://zansuken.netlify.app">Zansuken</a>
            <h3 style={isHidden}>with React/Typescript/Sass</h3>
            <h4 style={isHidden}>© 2022 Zansuken</h4>
        </div>
    );
}

export default Credits;