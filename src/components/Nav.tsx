import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.scss'

export default function NavMenu() {

    const [visible, setVisible] = useState(false)
    const [layout, setLayout] = useState()

    if (visible === false) {
        return (
            <>
                <button className="hamburger-logo" onClick={() => {
                    setVisible(!visible ? true : false)
                }} />
                <nav className='hidden'>

                </nav>
            </>
        )
    } else {
        return (
            <>
                <button className="cross-logo" onClick={() => {
                    setVisible(!visible ? true : false)
                }} />
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
}