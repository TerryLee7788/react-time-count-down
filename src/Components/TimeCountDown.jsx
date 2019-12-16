import React from 'react';
import common from '../libs/common';

class TimeCountDown extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            second: props.second,
            formatString: '00:00'
        };

        this.timer = null;

    }

    componentDidMount () {

        this.initTimeString();
        this.setTimeEnd();

    }

    componentWillUnmount () {

        setTimeout(() => {

            clearTimeout(this.timer);

        }, 1100);

    }

    covertTimeItems = (second) => {

        let hour = common.getHours(second),
            min = common.getMinutes(second),
            sec = common.getSeconds(second);

        return {
            hour,
            min,
            sec
        };

    }

    genFormatString = (second) => {

        const {
            format
        } = this.props

        let string = second

        if (format) {

            const {
                hour,
                min,
                sec,
            } = this.covertTimeItems(second);

            string = this.props.format;

            string = string
                .replace(/HH/i, hour)
                .replace(/MM/i, min)
                .replace(/SS/i, sec);

        }

        return string;

    }

    initTimeString = () => {

        this.setState((state) => {

            let { second } = state;

            return {
                second,
                formatString: this.genFormatString(second)
            }

        });

    }

    setTimeString = (callback) => {

        this.setState((state) => {

            let { second } = state;
            second -= 1;

            return {
                second,
                formatString: this.genFormatString(second)
            }

        }, () => {

            callback && callback();

        });

    }

    setTimeEnd = () => {

        this.timer = setTimeout(() => {

            this.setTimeString(() => {

                if (this.state.second > 0) {

                    this.setTimeEnd();

                }
                else {

                    this.props.handleTimeExpired && this.props.handleTimeExpired();

                }

            })

        }, 1000);


    }

    render () {

        return (
            <span
                className={this.props.className}
            >{this.state.formatString}</span>
        );

    }

}

export default TimeCountDown;
