import React from 'react';

export class Demo extends React.PureComponent {
    state = {no:0, count:1};

    //works with React.Component only
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Update Hook", nextProps, nextState);
    //     return nextState.count ===5 || nextProps.no !== this.state.no;
    // }

    render() {
        console.log("Render", this.state);
        return (
            <div>
                <h3>Demo component </h3>
                {this.state.count === 5 ? <p>Hello from Mike</p> : null}
                <button onClick={() => this.setState({no:1})}>change to 1</button>
                <button onClick={() => this.setState({no:0})}>change to 0</button>
        <       button onClick={() => this.setState((prevState) => ({count: prevState.count+1}))}>
                count {this.state.count}</button>
            </div>
        );
    }
}
