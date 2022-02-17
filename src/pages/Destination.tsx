import { useLayoutEffect, useState } from "react";
import Logo from "../components/Logo";
import NavMenu from "../components/Nav";
import datas from "../data/data.json";

export default function Destination() {


    const [planetIndex, setPlanetIndex] = useState(0)

    const planet = [...datas.destinations]

    const planetsNames = [planet[0].name, planet[1].name, planet[2].name, planet[3].name]
    const [selectedPlanet, setSelectedPlanet] = useState(planetsNames[0])
    const image =
        require('../../public/assets/destination/image-' + planet[planetIndex].name.toLocaleLowerCase() + '.png')

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        body.className = 'bg-destinations'
    }, [selectedPlanet, planetIndex])

    return (
        <>
            <header>
                <Logo />
                <NavMenu />
            </header>

            <h2><span className="number">01</span>PICK YOUR DESTINATION</h2>
            <img src={image} alt={planet[planetIndex].name + " picture"} />

            <ul className="destination-nav">
                {planetsNames.map((element, index) =>
                    <li key={element.toString()}>
                        <input type="radio"
                            name={element}
                            id={element}
                            onClick={() => {
                                setPlanetIndex(index)
                                setSelectedPlanet(planetsNames[index])
                            }}
                            checked={element === selectedPlanet}
                            onChange={() => {
                                setSelectedPlanet(planetsNames[index])
                            }} />
                        <label
                            htmlFor={element}
                            className="planet-links">
                            {element.toLocaleUpperCase()}
                        </label>
                    </li>
                )}
            </ul>

            <h1>{planet[planetIndex].name.toLocaleUpperCase()}</h1>

            <p>{planet[planetIndex].description}</p>
            <div className="separation-line"></div>
            <div className="datas">
                <div className="distance">
                    <span className="title">
                        AVG. DISTANCE
                    </span>
                    <h1 className="value">
                        {planet[planetIndex].distance}
                    </h1>
                </div>
                <div className="travel-time">
                    <span className="title">
                        EST. TRAVEL TIME
                    </span>
                    <h1 className="value">
                        {planet[planetIndex].travel}
                    </h1>

                </div>
            </div>
        </>
    )
}