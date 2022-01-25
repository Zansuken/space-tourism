import { useState } from 'react'
import '../styles/nav.scss'

export default function NavMenu() {

    const [visible, setVisible] = useState(false)

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
                        <li><a href=""><span className='number'>00</span><span className='section-tag'>HOME</span></a></li>
                        <li><a href=""><span className='number'>01</span><span className='section-tag'>DESTINATION</span></a></li>
                        <li><a href=""><span className='number'>02</span><span className='section-tag'>CREW</span></a></li>
                        <li><a href=""><span className='number'>03</span><span className='section-tag'>TECHNOLOGY</span></a></li>
                    </ul>

                </nav>
            </>
        )
    }
}