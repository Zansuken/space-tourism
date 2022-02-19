import { useLayoutEffect, useState } from "react";
import Logo from "../components/Logo";
import NavMenu from "../components/Nav";
import datas from "../data/data.json";
import useWindowDimensions from "../styles/functions/WindowSize";


function Technology() {

    const [technologyIndex, setTechnologyIndex] = useState(0)
    const technologies = [...datas.technology]
    const technologyName = technologies.map((element, index) => {
        const name = element.name.replace(/\s/g, '-').toLocaleLowerCase()
        return name
    })
    const { width } = useWindowDimensions();

    let imageType = (width > 768) ? '-portrait.jpg' : '-landscape.jpg';

    // let blurEffect = (width >= 769 && width <= 1300)

    const technologiesNames = [technologies[0].name, technologies[1].name, technologies[2].name]
    const [selectedTechnology, setSelectedTechnology] = useState(technologiesNames[0])
    const image = require('../../public/assets/technology/image-' + technologyName[technologyIndex] + imageType)

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
            <h2><span className="number">03</span>SPACE LAUNCH 101</h2>
            <main className="technology">
                <img src={image} alt={technologyName[technologyIndex]} className="technology-img" />
                <div className="nav-infos-wrapper">
                    <div className="tech-nav">

                        <ul>
                            {
                                technologiesNames.map((element, index) =>
                                    <li key={element}>
                                        <input type="radio"
                                            name={element}
                                            id={element}
                                            checked={element === selectedTechnology}
                                            onClick={() => {
                                                setTechnologyIndex(index)
                                                setSelectedTechnology(technologiesNames[index])
                                            }}
                                            onChange={() => setSelectedTechnology(technologiesNames[index])} />
                                        <label htmlFor={element} onClick={() => {
                                            setTechnologyIndex(index)
                                            setSelectedTechnology(technologiesNames[index])
                                        }}>{index + 1}</label>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <div className="infos-wrapper" >
                        <span>THE TERMINOLOGY...</span>
                        <h1>{technologies[technologyIndex].name}</h1>
                        <p>{technologies[technologyIndex].description}</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Technology;