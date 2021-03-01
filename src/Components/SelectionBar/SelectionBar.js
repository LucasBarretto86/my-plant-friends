import React from 'react'
import Selector from '../Selector/Selector'

import sunImage from './Images/sun.png';
import wateringcanImage from './Images/wateringcan.png';
import dogImage from './Images/dog.png';

import "./SelectionBar.scss"

class SelectionBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            terms: { sun: "", water: "", pets: "" },
            selectors: [
                {
                    param: "sun", options: [
                        { key: "Select...", value: "" },
                        { key: "None", value: "no" },
                        { key: "Low", value: "low" },
                        { key: "High", value: "high" }
                    ]
                },
                {
                    param: "water", options: [
                        { key: "Select...", value: "" },
                        { key: "Regularly", value: "regularly" },
                        { key: "Daily", value: "daily" },
                        { key: "Rarely", value: "rarely" }
                    ]
                },
                {
                    param: "pets", options: [
                        { key: "Select...", value: "" },
                        { key: "Yes", value: true },
                        { key: "No", value: false }
                    ]

                }
            ]
        };

        this.illustrationUrl = this.illustrationUrl.bind(this);
        this.description = this.description.bind(this);
        this.updateTerms = this.updateTerms.bind(this);
        this.onSearchForPlants = this.onSearchForPlants.bind(this);
    }

    illustrationUrl(param) {
        switch (param) {
            case "sun":
                return sunImage;
            case "water":
                return wateringcanImage;
            case "pets":
                return dogImage;
        }
    }

    description(param) {
        switch (param) {
            case "sun":
                return <p><strong>1.</strong> Set the amount of <strong>sunlight</strong> your plant will get.</p>;
            case "water":
                return <p><strong>2.</strong> How often do you want to <strong>water</strong> your plant?</p>
            case "pets":
                return <p><strong>3.</strong> Do you have pets? Do they <strong>chew</strong> plants?</p>;
        }
    }

    parametrize(terms) {
        return Object.entries(this.state.terms).map(entry => entry.join("=")).join("&");
    }

    updateTerms(param, value) {
        let terms = this.state.terms;
        terms[param] = value;

        this.setState({ terms: terms });
    }

    onSearchForPlants() {
        if (Object.values(this.state.terms).some(value => { value == "" })) return;

        this.props.onSearchForPlants(this.parametrize(this.state.terms));
    }

    render() {
        return (
            <section id="selection-bar" className="selection-bar">
                <form className="selection-bar__form" name="selection-bar-form" >
                    {
                        this.state.selectors.map((selector) => {
                            return <Selector
                                key={selector.param}
                                param={selector.param}
                                options={selector.options}
                                defaultValue={this.state.terms[selector.param]}
                                illustrationUrl={this.illustrationUrl(selector.param)}
                                description={this.description(selector.param)}
                                updateTerms={this.updateTerms}
                                trySearchTerms={this.onSearchForPlants}
                            />
                        })
                    }
                </form>
            </section>
        )
    }
}

export default SelectionBar;