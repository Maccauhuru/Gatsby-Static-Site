import React from 'react';

export default ({ children }) =>
    <div>
        <header>Navigation Bar Goes Here</header>
        {children()}
        <footer>Footer Goes Here</footer>
    </div>