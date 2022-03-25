import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import isVisibleLink from './NavLinks'

export default function NavMenu() {

    const [visible, setVisible] = useState(false)

    const handleClickOutside = () => {
        if (visible === true) {
            setVisible(!visible)
        }
    }

    const ref = useRef(null)


    useOnClickOutside(ref, handleClickOutside)

    if (!visible) {
        return (
            <>
                <button className="hamburger-logo" onClick={() => setVisible(!visible)} />
                <nav className='hidden'>
                    <ul>
                        {isVisibleLink[0].map((link, index) => <li key={index}>{link}</li>)}
                    </ul>
                </nav>
            </>
        )
    }
    return (
        <div ref={ref}>
            <button className="cross-logo" onClick={() => setVisible(!visible)} />
            <nav className='visible'>
                <ul>
                    {isVisibleLink[1].map((link, index) => <li key={index}>{link}</li>)}
                </ul>

            </nav>
        </div>
    )

}