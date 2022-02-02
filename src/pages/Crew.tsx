import { useLayoutEffect, useState } from "react";
import Logo from "../components/Logo";
import NavMenu from "../components/Nav";
import datas from "../data/data.json";

function Crew() {

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        body.className = 'bg-crew'
    }, [])

    const [crewMateIndex, setCrewMateIndex] = useState(0)

    const crew = [...datas.crew]
    const crewName = crew.map((element, index) => {
        const name = element.name.replace(/\s/g, '-').toLocaleLowerCase()
        return name
    })
    const navigation = crew.map((element, index) =>
        <button className='crew-nav-buttons' key={element.name} onClick={() => setCrewMateIndex(index)}></button>)
    const image = require('../../public/assets/crew/image-' + crewName[crewMateIndex] + '.png')

    return (
        <>
            <header>
                <Logo />
                <NavMenu />
            </header>
            <h2><span className="number">02</span>MEET YOUR CREW</h2>
            <img src={image} alt={crew[crewMateIndex].name + " picture"} />
            <div className="separation-line"></div>
            <div className="crew-nav">
                <ul>{navigation}</ul>
            </div>
            <div className="infos-wrapper">
                <span>{crew[crewMateIndex].role}</span>
                <h1>{crew[crewMateIndex].name}</h1>
                <p>{crew[crewMateIndex].bio}</p>
            </div>
        </>
    );
}

export default Crew;