import { useState } from 'react'
import isVisibleLink from './NavLinks'

export default function NavMenu() {

    const [visible, setVisible] = useState(false)

    if (!visible) {
        return (
            <>
                <button className="hamburger-logo" onClick={() => setVisible(!visible)} />
                <nav className='hidden'>
                    <ul>
                        {isVisibleLink[0]}
                    </ul>
                </nav>
            </>
        )
    }
    return (
        <>
            <button className="cross-logo" onClick={() => setVisible(!visible)} />
            <nav className='visible'>
                <ul>
                    {isVisibleLink[1]}
                </ul>

            </nav>
        </>
    )

}