import React, { Component } from 'react'
import Link from 'gatsby-link'

class counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        let { count } = this.state;
        return (
            <div style={{ color: this.props.color }}>
                <h1>Counter App</h1>
                <p>Current Count :{count}</p>
                <button onClick={() => this.setState({
                    count: count + 1
                })}>plus</button>
                <button onClick={() => this.setState({
                    count: count - 1
                })}>minus</button>
                <br />
                <Link to="/">Home</Link>
                <Link to="/page-2/">Page Two</Link>
                <Link to="/page-3/">Page Three</Link>
                <br />
                <Link to="/counter/">Counter App</Link>
            </div>
        )
    }
}

export default counter
