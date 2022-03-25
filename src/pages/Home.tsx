import { FC, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import NavMenu from '../components/Nav';

const Home: FC = () => {

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        body.className = 'bg-home'
    }, [])

    return (
        <>
            <header>
                <Logo />
                <NavMenu />
            </header>
            <main className='home'>
                <div className="home-intro">

                    <h2>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className='explore-wrapper'>
                    <NavLink to='/destinations' className='explore-button'>EXPLORE</NavLink>
                </div>
            </main>
        </>
    )
}

export default Home