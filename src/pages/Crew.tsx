import { useLayoutEffect, useState } from "react";
import Logo from "../components/Logo";
import NavMenu from "../components/Nav";
import datas from "../data/data.json";

function Crew() {


    const [crewMateIndex, setCrewMateIndex] = useState(0)

    const crew = [...datas.crew]
    const crewName = crew.map((element, index) => {
        const name = element.name.replace(/\s/g, '-').toLocaleLowerCase()
        return name
    })
    const crewNames = [crew[0].name, crew[1].name, crew[2].name, crew[3].name,]
    const [selectedCrew, setSelectedCrew] = useState(crewNames[0])
    const image = require('../../public/assets/crew/image-' + crewName[crewMateIndex] + '.png')

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        body.className = 'bg-crew'
    }, [selectedCrew])

    return (
        <>
            <header>
                <Logo />
                <NavMenu />
            </header>
            <h2><span className="number">02</span>MEET YOUR CREW</h2>
            <img className="crew-picture" src={image} alt={crew[crewMateIndex].name + " picture"} />
            <div className="separation-line"></div>
            <div className="crew-nav">
                <ul>{
                    crewNames.map((element, index) =>
                        <li key={element}>
                            <input type="radio"
                                name={element}
                                id={element}
                                className='crew-nav-buttons'
                                checked={element === selectedCrew}
                                onClick={() => {
                                    setCrewMateIndex(index)
                                    setSelectedCrew(crewNames[index])
                                }}
                                onChange={() => setSelectedCrew(crewNames[index])} />
                        </li>
                    )}</ul>
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