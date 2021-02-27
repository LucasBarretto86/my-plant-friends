import React from 'react'

import "../Plant/Plant.scss"

class Plant extends React.Component {

    render() {
        return (
            <div class="plant">
                <img class="plant__image" src="../../images/plants/bunny-ears-cacti.jpg" alt="bunny-ears-cacti" />
                <div class="plant__name">Bunny eats cacti</div>
                <div class="plant__price">$25</div>
                <div class="plant__icons">
                    <img src="../../images/icons/pet.svg" alt="Pet Icon" />
                    <img src="../../images/icons/mid-sun.svg" alt="Sun Icon" />
                    <img src="../../images/icons/1-drop.svg" alt="Drop Icon" />
                </div>
            </div>
        )
    }
}

export default Plant;