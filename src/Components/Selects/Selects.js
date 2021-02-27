import React from 'react'
import Select from '../Select/Select'

import "./Selects.scss"

class Selects extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <section id="selects" className="selects">
                {
                    this.props.selects.map((select, index) => {
                        return <Select key={index} type={select.type} description={select.description} unit={select.unit} values={select.values} />
                    })
                }
            </section>
        )
    }
}

export default Selects;