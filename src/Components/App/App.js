import React from 'react';
import Hero from '../Hero/Hero';
import Selects from '../Selects/Selects';
import Plants from '../Plants/Plants';
import NoPlants from '../NoPlants/NoPlants';

import "../App/App.scss"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selects: [
                { type: "sunlight", description: "<strong>1.</strong> Set the amount of <strong>sunlight</strong> your plant will get.", unit: "h", values: ["0:30", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "12:00"] },
                { type: "water", description: "<strong>2.</strong> How often do you want to <strong>water</strong> your plant?", unit: " times", values: ["1", "2", "3", "4", "5", "6", "7", "8"] },
                { type: "dog", description: "<strong>3.</strong> Do you have pets? Do they <strong>chew</strong> plants? ", unit: "", values: ["yes", "no"] }
            ]
        }
    }

    render() {
        return (
            <div id="app" className="app">
                <Hero />
                <Selects selects={this.state.selects} />
                {/* <Plants />
                <NoPlants /> */}
            </div>
        )
    }
}

export default App;