import React, { Component } from "react";

import {
    MainContainer,
    Buttons
} from './feedback.styled'


export class FeedbackWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,

        }
    }
}
handleIncrementGood = () => {
    this.setState({ good: this.state.good + 1 })
}
handleIncrementNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 })
}
handleIncrementBad = () => {
    this.setState({ bad: this.state.bad + 1 })
}
// total feed back count 
countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;

}

// total feed back  % of positive feedback out of 100
countPositivePercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
        
        return 0;
    } else {

        return Math.round((this.state.good / totalFeedback) * 100)

    }


}