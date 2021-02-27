import React from 'react'

import "../Select/Select"

class Select extends React.Component {
    render() {
        return (
            <div id={`select-${this.props.type}`} className={`select select__${this.props.type}`}>
                <img className="select__illustration select__illustration--wateringcan" src={["images/illustrations", this.props.type].join("/")} />
                <div className="select__description">{document.createElement("p").append()}</div>
                <p className="select__description">{this.props.description}</p>

                <div className="select__input">
                    <select name={`select-${this.props.type}`} id={`select[${this.props.type}]`} >
                        {
                            this.props.values.forEach(value => {
                                <option value={`${value}`}>{`${value}${this.props.label}`}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default Select;