import React from 'react'
import iconsImages from './Icons/*.svg'


import "./Plant.scss"

class Plant extends React.Component {
    constructor(props) {
        super(props);

        this.isToxic = this.isToxic.bind(this);
        this.isChewable = this.isChewable.bind(this);
    }

    isToxic() {
        if (!this.props.toxicity) return

        return <img key={`toxic-${this.key}`} src={iconsImages["toxic"]} alt="Toxic Icon" />;
    }

    isChewable() {
        if (!this.props.pets) return;

        return <img key={`pets-${this.key}`} src={iconsImages["pets"]} alt="Dog Icon" />;
    }

    render() {
        return (
            <div className={`plant plant--${this.props.staffFavorite ? "favotire" : ""}`}>
                <div className="plant__content">
                    <img className="plant__image" src={this.props.url} alt={`Image from ${this.props.name}`} />
                    <div className="plant__name">{this.props.name}</div>
                    <div className="plant__price">${this.props.price}</div>
                    <div className="plant__icons">
                        {this.isToxic()}
                        <img key={`sun-${this.key}`} src={iconsImages[`sun-${this.props.sun}`]} alt="Sun Icon" />
                        <img key={`water-${this.key}`} src={iconsImages[`water-${this.props.water}`]} alt="Water Icon" />
                        {this.isChewable()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Plant;