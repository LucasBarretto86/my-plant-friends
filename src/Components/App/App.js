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
                { type: "sunlight", description: "<b>1.</b> Set the amount of <b>sunlight</b> your plant will get.", label: "h", values: ["0:30", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "12:00"] },
                { type: "water", description: "<b>2.<b> How often do you want to <b>water</b> your plant?", label: " times", values: ["1", "2", "3", "4", "5", "6", "7", "8"] },
                { type: "sunlight", description: "<b>3.</> Do you have pets? Do they <b>chew<b/> plants? ", label: "", values: ["yes", "no"] }
            ]
        }
    }

    render() {
        return (
            <div id="app" className="app">
                <Hero />
                <Selects selects={this.state.selects} />
                <Plants />
                <NoPlants />
            </div>
        )
    }
}

export default App;