import React from 'react'
import Plants from '../Plants/Plants';
import NoPlants from '../NoPlants/NoPlants';

class SelectionResults extends React.Component {
    constructor(props) {
        super(props)

        this.displayResults = this.displayResults.bind(this);
    }


    displayResults() {
        if (this.props.plants.length < 0) {
            return <Plants plants={this.props.plants} />
        } else {
            return <NoPlants />
        }
    }
    render() {
        return (
            <section id="selection-results" className="selection-results">
                {
                    <div className="selection-results__content">
                        {this.displayResults()}
                    </div>
                }
            </section>
        )
    }
}

export default SelectionResults;