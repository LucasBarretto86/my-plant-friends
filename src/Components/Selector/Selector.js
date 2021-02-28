import React from 'react';

import sunlightImage from './Images/sun.png';
import wateringcanImage from './Images/wateringcan.png';
import dogImage from './Images/dog.png';

import "./Selector.scss";

class Selector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sun: null,
            water: null,
            pets: null
        }

        this.illustration = this.illustration.bind(this);
        this.description = this.description.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.parametrize = this.parametrize.bind(this);
        this.handleBlur = this.handleBlur(this);
    }

    illustration() {
        switch (this.props.type) {
            case "sunlight":
                return sunlightImage;
            case "water":
                return wateringcanImage;
            case "pets":
                return dogImage;
        }
    }

    description() {
        switch (this.props.type) {
            case "sunlight":
                return <p><strong>1.</strong> Set the amount of <strong>sunlight</strong> your plant will get.</p>;
            case "water":
                return <p><strong>2.</strong> How often do you want to <strong>water</strong> your plant?</p>
            case "pets":
                return <p><strong>3.</strong> Do you have pets? Do they <strong>chew</strong> plants?</p>;
        }
    }

    searchForPlants() {
        // if (Object.values(this.state).every(state => { (state == null || state == "" || state == undefined) })) return;

        // this.props.onSearchForPlants(this.parametrize())
    }

    parametrize() {
        // this.state = { sun: "high", water: "regularly", pets: "no" }
        // return Object.entries(this.state).map(objs => objs.join("=")).join("&")
    }

    handleChange(event) {
        let select = event.target
        switch (select.id) {
            case "select-sunlight":
                this.setState({ sun: event.target.value });
                break;
            case "select-water":
                this.setState({ water: event.target.value });
                break;
            case "select-pets":
                this.setState({ pets: event.target.value });
                break;
        }

    }

    handleBlur() {
        this.searchForPlants();
    }

    render() {
        return (
            <div className={`selector selector__${this.props.type}`}>
                <img className={`selector__illustration selector__illustration--${this.props.type}`} src={this.illustration()} />
                <div className="selector__description" >{this.description()}</div>

                <div className="selector__select">
                    <select id={`select-${this.props.type}`} onClick={this.handleClick} onChange={this.handleChange} onBlur={this.handleBlur} value={this.state[this.props.type.toString()]} >
                        <option value="">Select...</option>
                        {
                            this.props.options.map((option) => {
                                return <option key={option} value={option}>{option.toString()}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default Selector;