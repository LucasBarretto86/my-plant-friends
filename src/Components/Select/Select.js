import React from 'react';
import sunlightImage from '../../images/illustrations/sun.png';
import wateringcanImage from '../../images/illustrations/wateringcan.png';
import dogImage from '../../images/illustrations/dog.png';

import "./Select.scss";

class Select extends React.Component {

    constructor(props) {
        super(props);


        this.illustration = this.illustration.bind(this);
    }

    illustration() {
        switch (this.props.type) {
            case "sunlight":
                return sunlightImage;
            case "water":
                return wateringcanImage;
            case "dog":
                return dogImage;
        }
    }

    render() {
        return (
            <div id={`select-${this.props.type}`} className={`select select__${this.props.type}`}>
                <img className={`select__illustration select__illustration--${this.props.type}`} src={this.illustration()} />
                <p className="select__description" dangerouslySetInnerHTML={{ __html: this.props.description }}></p>

                <div className="select__input">
                    <select name={`select-${this.props.type}`} id={`select[${this.props.type}]`} >
                        {
                            this.props.values.forEach(value => {
                                <option value={`${value}`}>{`${[value, this.props.unit].join("")}`}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default Select;