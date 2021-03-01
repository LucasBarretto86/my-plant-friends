import React from 'react';
import GreenThumb from '../../lib/GreenThumb';

import Hero from '../Hero/Hero';
import SelectionBar from '../SelectionBar/SelectionBar';
import SelectionResults from '../SelectionResults/SelectionResults';

import "../App/App.scss"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            plants: [
                {
                    id: 1,
                    name: "Euphorbia eritrea",
                    sun: "high",
                    water: "rarely",
                    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
                    price: 25,
                    toxicity: false,
                    staff_favorite: true
                },
                {
                    id: 2,
                    name: "Euphorbia eritrea",
                    sun: "high",
                    water: "rarely",
                    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
                    price: 25,
                    toxicity: false,
                    staff_favorite: false
                }
            ],
            selections: [
                { type: "sunlight", options: ["no", "low", "high"] },
                { type: "water", options: ["regularly", "daily", "rarely"] },
                { type: "pets", options: ["yes", "no"] }
            ]
        };

        this.hasPlants = this.hasPlants.bind(this);
        this.refreshResults = this.refreshResults.bind(this);
        this.searchForPlants = this.searchForPlants.bind(this);
    }

    hasPlants() {
        return (this.state.plants.length > 0);
    }

    refreshResults() {
        document.querySelector("#selection-results").outerHTML.replace(
            <SelectionResults plants={this.state.plants} onHasPlants={this.hasPlants} />
        );

    }

    searchForPlants(term) {
        GreenThumb.findMyGreenFriend(term).then(results => {
            this.setState({ plants: results });
            this.refreshResults();
        })
    }

    render() {
        return (
            <div id="app" className="app">
                <Hero />
                <SelectionBar selections={this.state.selections} onSearchForPlants={this.searchForPlants} />
                <SelectionResults plants={this.state.plants} hasPlants={this.hasPlants} />
            </div>
        )
    }
}

export default App;