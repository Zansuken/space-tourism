import { useState } from "react";

function Credits() {

    const [hidden, setHidden] = useState(true);


    return (
        <div className="credits" style={
            hidden ? {
                bottom: '-126px',
                left: '-205.23px'
            } : {
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)'
            }
        }>
            {hidden ? <button onClick={() => setHidden(!hidden)} className="info-button"></button> : <button onClick={() => setHidden(!hidden)} className="close-button"></button>}
            <h3>A FrontendMentor project coded by </h3>
            <a href="https://zansuken.netlify.app">Zansuken</a>
            <h3>with React/Typescript/Sass</h3>
            <h4>© 2022 Zansuken</h4>
        </div>
    );
}

export default Credits;