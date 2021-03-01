import React from 'react'
import Selector from '../Selector/Selector'

import "./SelectionBar.scss"

class SelectionBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit() {
        if (this.state.term == "") return;

        this.props.onSearchForPlants(this.state.term);
    }

    render() {
        return (
            <section id="selection-bar" className="selection-bar">
                <form className="selection-bar__form" onSubmit={this.handleSubmit}>
                    {
                        this.props.selections.map((selection, index) => {
                            return <Selector key={index} type={selection.type} options={selection.options} />
                        })
                    }
                </form>
            </section>
        )
    }
}

export default SelectionBar;