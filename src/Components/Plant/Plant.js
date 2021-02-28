import React from 'react'
import icons from './Icons/*.svg'


import "./Plant.scss"

class Plant extends React.Component {
    constructor(props) {
        super(props);

        this.displayPlantIconsSet = this.displayPlantIconsSet.bind(this);
    }

    displayPlantIconsSet() {
        let iconsSet = [];

        if (this.props.plant.toxic) iconsSet.push(<img key={`toxic-${this.props.plant.id}`} src={icons["toxic"]} alt="Toxic Icon" />);
        iconsSet.push(<img key={`sun-${this.props.plant.id}`} src={icons[`sun-${this.props.plant.sun}`]} alt="Sun Icon" />)
        iconsSet.push(<img key={`water-${this.props.plant.id}`} src={icons[`water-${this.props.plant.water}`]} alt="Water Icon" />)
        if (this.props.plant.pets) iconsSet.push(<img key={`pets-${this.props.plant.id}`} src={icons["pets"]} alt="Dog Icon" />);

        return iconsSet;
    }

    render() {
        return (
            <div className={`plant plant--${this.props.plant.staff_favorite ? "favotire" : ""}`}>
                <div className="plant__content">
                    <img className="plant__image" src={this.props.plant.url} alt={`Image from ${this.props.plant.name}`} />
                    <div className="plant__name">{this.props.plant.name}</div>
                    <div className="plant__price">${this.props.plant.price}</div>
                    <div className="plant__icons">
                        {
                            this.displayPlantIconsSet().map(icon => {
                                return icon
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Plant;