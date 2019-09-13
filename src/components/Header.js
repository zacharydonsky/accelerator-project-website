import React from 'react'

// import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Accelerator Project</strong> <br />Empowerment <br />
                    through Tech Skills Training</h1>
                </div>

            </header>
        )
    }
}

export default Header
