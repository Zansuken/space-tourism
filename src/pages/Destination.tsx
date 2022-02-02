import { useLayoutEffect } from "react";
import Logo from "../components/Logo";
import NavMenu from "../components/Nav";
import datas from "../data/data.json";

export default function Destination() {

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        body.className = 'bg-destinations'
    }, [])

    const planet = [...datas.destinations]
    const planets = planet.filter((el) => {
        return el.name
    })
    const planetsList = planets.map((element) => <li key={element.name.toString()}><a href="#">{element.name.toLocaleUpperCase()}</a></li>)
    const image = require('../../public/assets/destination/image-' + planet[0].name.toLocaleLowerCase() + '.png')


    return (
        <>
            <header>
                <Logo />
                <NavMenu />
            </header>

            <h2><span className="number">01</span>PICK YOUR DESTINATION</h2>
            <img src={image} alt={planet[0].name + " picture"} />

            <ul className="destination-nav">
                {planetsList}
            </ul>

            <h1>{planet[0].name.toLocaleUpperCase()}</h1>

            <p>{planet[0].description}</p>
            <div className="separation-line"></div>
        </>
    )
}