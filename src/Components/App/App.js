import React from 'react';

import GreenThumb from '../../lib/GreenThumb';

import Hero from '../Hero/Hero';
import SelectionBar from '../SelectionBar/SelectionBar';
import SelectionResults from '../SelectionResults/SelectionResults';

import "../App/App.scss"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { plants: [] };
        this.hasPlants = this.hasPlants.bind(this);
        this.searchForPlants = this.searchForPlants.bind(this);
    }
    componentDidUpdate(prevState) {
        console.log(this.state.plants)
        // if (this.state != prevState) {
        //     <SelectionResults plants={this.state.plans} hasPlants={this.hasPlants} />
        // }
    }

    hasPlants() {
        return (this.state.plants.length > 0);
    }

    searchForPlants(terms) {
        GreenThumb.findMyGreenFriend(terms).then(plants => {
            console.log(plants)
            this.setState({ plants: plants });
        });
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