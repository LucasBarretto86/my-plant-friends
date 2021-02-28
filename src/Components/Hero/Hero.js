import React from 'react'
import logo from '../../Images/Icons/logo-white.svg'
import arrow from '../../Images/Icons/arrow-down.svg'

import "./Hero.scss"

class Hero extends React.Component {
    render() {
        return (
            <header id="hero" className="hero">
                <div className="hero__content">
                    <a href="#selects">
                        <img className="hero__logo" src={logo} alt="Greenthumb" />
                        <h1 className="hero__message">Find your next green friend</h1>
                        <img className="hero__arrow" src={arrow} alt="Arrow Down" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Hero;