import React from "react"
import Link from 'gatsby-link'

export default () => (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
        <h1>Hello Gatsby Page Three!!</h1>
        <p>Call me Scarface</p>
        <img src="data:image/jpeg;base64,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"
            alt="company logo" />
        <Link to="/">Home</Link>
        <Link to="/page-2/">Page Two</Link>
        <Link to="/page-3/">Page Three</Link>
        <br />
        <Link to="/counter/">Counter App</Link>
    </div>
)
