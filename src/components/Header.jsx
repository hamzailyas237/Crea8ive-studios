

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div>
            <div className="header-container" >
                <TypeAnimation className='type-animation'
                    sequence={[
                        'LOGO MANTIC', // Types 
                        1000, // Waits 2s
                        'WELCOMES YOU', // Deletes previous  text and types new
                        2000, // Waits 2s
                    ]}
                    speed="10"
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', color:'#19C6A8' }}
                />
                <h3>We Build Websites And Application For Your Business</h3>
                <p>Grow your business online with us and make success</p>

            </div>
        </div>
    )
}

export default Header