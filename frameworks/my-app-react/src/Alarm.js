import React from 'react';

class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            120000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        alert('TA NA HORA!');
    }

    render() {
        return (
            <div>
                {this.tick}    
            </div>
        );
    }
}

export default Alarm;