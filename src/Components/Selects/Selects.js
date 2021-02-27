import React from 'react'
import Select from '../Select/Select'

import "../Selects/Selects.scss"

class Selects extends React.Component {

    render() {
        return (
            <section id="selects" className="selects">
                {
                    this.props.selects.map((select, index) => {
                        return <Select key={index} type={select.type} description={select.description} label={select.label} values={select.values} index={index} />
                    })
                }
            </section>
        )
    }
}

export default Selects;