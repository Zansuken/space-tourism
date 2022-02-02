import { useLayoutEffect, useState } from "react";
import Logo from "../components/Logo";
import NavMenu from "../components/Nav";
import datas from "../data/data.json";

export default function Destination() {

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        body.className = 'bg-destinations'
    }, [])

    const [planetIndex, setPlanetIndex] = useState(0)

    const planet = [...datas.destinations]
    const planets = planet.filter((el) => {
        return el.name
    })
    const planetsList = planets.map((element, index) => <li key={element.name.toString()}><span className="planet-links" onClick={() => { setPlanetIndex(index) }}>{element.name.toLocaleUpperCase()}</span></li>)
    const image = require('../../public/assets/destination/image-' + planet[planetIndex].name.toLocaleLowerCase() + '.png')

    return (
        <>
            <header>
                <Logo />
                <NavMenu />
            </header>

            <h2><span className="number">01</span>PICK YOUR DESTINATION</h2>
            <img src={image} alt={planet[planetIndex].name + " picture"} />

            <ul className="destination-nav">
                {planetsList}
            </ul>

            <h1>{planet[planetIndex].name.toLocaleUpperCase()}</h1>

            <p>{planet[planetIndex].description}</p>
            <div className="separation-line"></div>
        </>
    )
}