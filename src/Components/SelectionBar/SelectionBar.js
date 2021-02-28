import React from 'react'
import Selector from '../Selector/Selector'

import "./SelectionBar.scss"

class SelectionBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="selection-bar" className="selection-bar">
                <div class="selection-bar__content">
                    {
                        this.props.selections.map((selection, index) => {
                            return <Selector key={index} type={selection.type} options={selection.options} onSearchForPlants={this.props.onSearchForPlants} />
                        })
                    }
                </div>
            </section>
        )
    }
}

export default SelectionBar;