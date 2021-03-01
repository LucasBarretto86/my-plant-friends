import React from 'react'

import noResultImage from './Images/no-results.png';

import "./NoPlants.scss"

class NoPlants extends React.Component {
    render() {
        return (
            <section id="no-plants" className="no-plants">
                <div className="no-plants__content">
                    <h2>No results yet…</h2>
                    <p>Use the filters above to find the plant that best fits your environment :)</p>
                </div>

                <img className="no-plants__illustration" src={noResultImage} alt="No result icon" />
            </section>
        )
    }
}

export default NoPlants;