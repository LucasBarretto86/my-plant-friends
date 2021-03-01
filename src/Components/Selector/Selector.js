import React from 'react';

import "./Selector.scss";

class Selector extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.selectorOptions = this.selectorOptions.bind(this);
    }

    selectorOptions() {
        let options = []

        this.props.options.forEach((option, index) => {
            options.push(<option key={index} value={option.value}>{option.key.toString()}</option >)
        });

        return options;
    }

    handleChange(event) {
        let select = event.target
        this.setState({ value: select.value });

        this.props.updateTerms(this.props.param, select.value)

        this.props.trySearchTerms();
    }

    render() {
        return (
            <div className={`selector selector__${this.props.param}`}>
                <img className={`selector__illustration selector__illustration--${this.props.param}`} src={this.props.illustrationUrl} />
                <div className="selector__description" >{this.props.description}</div>

                <div className="selector__select">
                    <select onChange={this.handleChange} id={`select-${this.props.param}`} defaultValue={this.props.defaultValue} >
                        {
                            this.selectorOptions().map(option => option)
                        }
                    </select>
                </div>
            </div>
        )
    }
}

export default Selector;