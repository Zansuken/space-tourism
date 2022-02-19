import { NavLink } from "react-router-dom"


const visibleLink = [
    <NavLink key='home' style={({ isActive }) => ({
        borderBottom: isActive ? "4px solid white" : "4px solid transparent",
        borderRight: "none",
        display: "flex",
        justifySelf: isActive ? "right" : "none",
        width: isActive ? "calc(100% - 4px)" : "unset",
        padding: "6px 0",
        alignItems: "center"
    })} to='/'><span className='number'>00</span><span className='section-tag'>HOME</span></NavLink>,
    <NavLink key='destinations' style={({ isActive }) => ({
        borderBottom: isActive ? "4px solid white" : "4px solid transparent",
        borderRight: "none",
        display: "flex",
        justifySelf: isActive ? "right" : "none",
        width: "calc(100% + 6px)",
        padding: "39px 0",
        alignItems: "center"
    })} to='/destinations'><span className='number'>01</span><span className='section-tag'>DESTINATION</span></NavLink>,
    <NavLink key='crew' style={({ isActive }) => ({
        borderBottom: isActive ? "4px solid white" : "4px solid transparent",
        borderRight: "none",
        display: "flex",
        justifySelf: isActive ? "right" : "none",
        width: "calc(100% + 6px)",
        padding: "39px 0",
        alignItems: "center"
    })} to='/crew'><span className='number'>02</span><span className='section-tag'>CREW</span></NavLink>,
    <NavLink key='technology' style={({ isActive }) => ({
        borderBottom: isActive ? "4px solid white" : "4px solid transparent",
        borderRight: "none",
        display: "flex",
        justifySelf: isActive ? "right" : "none",
        width: "calc(100% + 6px)",
        padding: "39px 0",
        alignItems: "center"
    })} to='/technology'><span className='number'>03</span><span className='section-tag'>TECHNOLOGY</span></NavLink>
]

const notVisibleLink = [
    <NavLink key='home' style={({ isActive }) => ({
        borderRight: isActive ? "4px solid white" : "4px solid transparent",
        display: "flex",
        justifySelf: isActive ? "right" : "none",
        width: isActive ? "calc(100% - 4px)" : "unset",
        padding: "6px 0",
        alignItems: "center"
    })} to='/'><span className='number'>00</span><span className='section-tag'>HOME</span></NavLink>,
    <NavLink key='destinations' style={({ isActive }) => ({
        borderRight: isActive ? "4px solid white" : "4px solid transparent",
        display: "flex",
        justifySelf: isActive ? "right" : "none",
        width: isActive ? "calc(100% - 4px)" : "unset",
        padding: "6px 0",
        alignItems: "center"
    })} to='/destinations'><span className='number'>01</span><span className='section-tag'>DESTINATION</span></NavLink>,
    <NavLink key='crew' style={({ isActive }) => ({
        borderRight: isActive ? "4px solid white" : "4px solid transparent",
        display: "flex",
        justifySelf: isActive ? "right" : "none",
        width: isActive ? "calc(100% - 4px)" : "unset",
        padding: "6px 0",
        alignItems: "center"
    })} to='/crew'><span className='number'>02</span><span className='section-tag'>CREW</span></NavLink>,
    <NavLink key='technology' style={({ isActive }) => ({
        borderRight: isActive ? "4px solid white" : "4px solid transparent",
        display: "flex",
        justifySelf: isActive ? "right" : "none",
        width: isActive ? "calc(100% - 4px)" : "unset",
        padding: "6px 0",
        alignItems: "center"
    })} to='/technology'><span className='number'>03</span><span className='section-tag'>TECHNOLOGY</span></NavLink>
]

const isVisibleLink = [
    visibleLink,
    notVisibleLink
]

export default isVisibleLink