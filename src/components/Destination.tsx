import datas from "../data/data.json";
import '../styles/destination.scss';

export default function Destination() {

    const planet = [...datas.destinations]
    const planets = planet.filter((el) => {
        return el.name
    })
    const planetsList = planets.map((element) => <li key={element.name.toString()}><a>{element.name.toLocaleUpperCase()}</a></li>)
    const image = require('../assets/destination/image-' + planet[0].name.toLocaleLowerCase() + '.png')

    return (
        <>

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