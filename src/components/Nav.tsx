import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { useOnClickOutside } from 'usehooks-ts'


export default function NavMenu() {

    const [visible, setVisible] = useState(false)

    const ref = useRef(null)

    // const handleClickOutside = () => {
    //     setVisible(false)
    // }

    // useOnClickOutside(ref, handleClickOutside)


    if (!visible) {
        return (
            <>
                <button className="hamburger-logo" onClick={() => setVisible(!visible)} />
                <nav className='hidden'>
                    <ul ref={ref}>
                        <li><NavLink style={({ isActive }) => ({
                            borderBottom: isActive ? "4px solid white" : "none",
                            borderRight: "none",
                            display: "flex",
                            justifySelf: isActive ? "right" : "none",
                            width: "calc(100% + 6px)",
                            padding: "39px 0"
                        })} to='/'><span className='number'>00</span><span className='section-tag'>HOME</span></NavLink></li>
                        <li><NavLink style={({ isActive }) => ({
                            borderBottom: isActive ? "4px solid white" : "none",
                            borderRight: "none",
                            display: "flex",
                            justifySelf: isActive ? "right" : "none",
                            width: "calc(100% + 6px)",
                            padding: "39px 0"
                        })} to='/destinations'><span className='number'>01</span><span className='section-tag'>DESTINATION</span></NavLink></li>
                        <li><NavLink style={({ isActive }) => ({
                            borderBottom: isActive ? "4px solid white" : "none",
                            borderRight: "none",
                            display: "flex",
                            justifySelf: isActive ? "right" : "none",
                            width: "calc(100% + 6px)",
                            padding: "39px 0"
                        })} to='/crew'><span className='number'>02</span><span className='section-tag'>CREW</span></NavLink></li>
                        <li><NavLink style={({ isActive }) => ({
                            borderBottom: isActive ? "4px solid white" : "none",
                            borderRight: "none",
                            display: "flex",
                            justifySelf: isActive ? "right" : "none",
                            width: "calc(100% + 6px)",
                            padding: "39px 0"
                        })} to='/technology'><span className='number'>03</span><span className='section-tag'>TECHNOLOGY</span></NavLink></li>
                    </ul>
                </nav>
            </>
        )
    }
    return (
        <>
            <button ref={ref} className="cross-logo" onClick={() => setVisible(!visible)} />
            <nav className='visible'>
                <ul ref={ref}>
                    <li><NavLink style={({ isActive }) => ({
                        borderRight: isActive ? "4px solid white" : "none",
                        display: "flex",
                        justifySelf: isActive ? "right" : "none",
                        width: isActive ? "calc(100% - 4px)" : "unset",
                        padding: "6px 0"
                    })} to='/'><span className='number'>00</span><span className='section-tag'>HOME</span></NavLink></li>
                    <li><NavLink style={({ isActive }) => ({
                        borderRight: isActive ? "4px solid white" : "none",
                        display: "flex",
                        justifySelf: isActive ? "right" : "none",
                        width: isActive ? "calc(100% - 4px)" : "unset",
                        padding: "6px 0"
                    })} to='/destinations'><span className='number'>01</span><span className='section-tag'>DESTINATION</span></NavLink></li>
                    <li><NavLink style={({ isActive }) => ({
                        borderRight: isActive ? "4px solid white" : "none",
                        display: "flex",
                        justifySelf: isActive ? "right" : "none",
                        width: isActive ? "calc(100% - 4px)" : "unset",
                        padding: "6px 0"
                    })} to='/crew'><span className='number'>02</span><span className='section-tag'>CREW</span></NavLink></li>
                    <li><NavLink style={({ isActive }) => ({
                        borderRight: isActive ? "4px solid white" : "none",
                        display: "flex",
                        justifySelf: isActive ? "right" : "none",
                        width: isActive ? "calc(100% - 4px)" : "unset",
                        padding: "6px 0"
                    })} to='/technology'><span className='number'>03</span><span className='section-tag'>TECHNOLOGY</span></NavLink></li>
                </ul>

            </nav>
        </>
    )

}