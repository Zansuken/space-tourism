import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavMenu() {

    const [visible, setVisible] = useState(false)

    if (!visible) {
        return (
            <>
                <button className="hamburger-logo" onClick={() => setVisible(!visible)} />
                <nav className='hidden'>

                </nav>
            </>
        )
    }
    return (
        <>
            <button className="cross-logo" onClick={() => setVisible(!visible)} />
            <nav className='visible'>
                <ul>
                    <li><NavLink to='/'><span className='number'>00</span><span className='section-tag'>HOME</span></NavLink></li>
                    <li><NavLink to='/destinations'><span className='number'>01</span><span className='section-tag'>DESTINATION</span></NavLink></li>
                    <li><NavLink to='/crew'><span className='number'>02</span><span className='section-tag'>CREW</span></NavLink></li>
                    <li><NavLink to='/technology'><span className='number'>03</span><span className='section-tag'>TECHNOLOGY</span></NavLink></li>
                </ul>

            </nav>
        </>
    )

}