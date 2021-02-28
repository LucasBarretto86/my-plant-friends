import React from 'react'
import logoImage from '../../Images/Icons/logo-white.svg'
import arrowUpImage from '../../Images/Icons/arrow-down.svg'

import "./Hero.scss"

class Hero extends React.Component {
    render() {
        return (
            <header id="hero" className="hero">
                <div className="hero__content">
                    <a href="#selection-bar">
                        <img className="hero__logo" src={logoImage} alt="Greenthumb" />
                        <h1 className="hero__message">Find your next green friend</h1>
                        <img className="hero__arrow" src={arrowUpImage} alt="Arrow Down" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Hero;