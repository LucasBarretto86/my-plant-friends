import React from 'react';
import GreenThumb from '../../lib/GreenThumb';

import Hero from '../Hero/Hero';
import SelectionBar from '../SelectionBar/SelectionBar';
import Plants from '../Plants/Plants';
import NoPlants from '../NoPlants/NoPlants';

import "../App/App.scss"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            plants: [],
            selections: [
                { type: "sunlight", options: ["no", "low", "high"] },
                { type: "water", options: ["regularly", "daily", "rarely"] },
                { type: "pets", options: ["yes", "no"] }
            ]
        };

        this.searchForPlants = this.searchForPlants.bind(this);
    }

    searchForPlants(term) {
        GreenThumb.search(term).then(plants => {
            this.setState({ plants: plants })
        })
    }


    render() {
        return (
            <div id="app" className="app">
                {/* <Hero /> */}
                <SelectionBar selections={this.state.selections} onSearchForPlants={this.searchForPlants} />
                {/* <Plants />
                <NoPlants /> */}
            </div>
        )
    }
}

export default App;