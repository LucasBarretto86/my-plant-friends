import React from 'react'

import "../NoPlants/NoPlants"

class NoPlants extends React.Component {
    render() {
        return (
            <section id="no-plants" class="no-plants">
                <div class="no-plants__content">
                    <h2>No results yet…</h2>
                    <p>Use the filters above to find the plant that best fits your environment :)</p>
                </div>

                <img class="no-plants__illustration" src="../../images/illustrations/no-results.png" alt="No result icon" />
            </section>
        )
    }
}

export default NoPlants;