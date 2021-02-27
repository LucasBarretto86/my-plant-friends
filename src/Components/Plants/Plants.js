import React from 'react'
import Plant from '../Plant/Plant'

import "../Plants/Plants.scss"

class Plants extends React.Component {

    render() {
        return (
            <section id="plants" className="plants">
                <div className="plants__header">
                    <img className="plants__illustration" src="../../images/illustrations/pick.png" alt="Hand holding a plant" />
                    <h2>Our picks for you</h2>
                </div>

                <div className="plants__content">
                    {
                        this.props.plants.map((plant, index) => {
                            <div class={`plants__card plants__card--${index == 0 ? "favotire" : ""}`}>
                                return <Plant />
                            </div>
                        })
                    }
                </div>

                <div className="plants__footer">
                    <a href="#selects">
                        <span><img src="../../images/icons/arrow-up.svg" alt="Arrow Up" /></span>
                        <span>back to the top</span>
                    </a>
                </div>
            </section>
        )
    }
}

export default Plants;