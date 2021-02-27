import React from 'react'

import "../Hero/Hero.scss"

class Hero extends React.Component {
    render() {
        return (
            <header id="hero" className="hero">
                <div className="hero__content">
                    <a href="#selects">
                        <img className="hero__logo" src="images/icons/logo-white.svg" alt="Greenthumb" />
                        <h1 className="hero__message">Find your next green friend</h1>
                        <img className="hero__arrow" src="images/icons/arrow-down.svg" alt="Arrow Down" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Hero;