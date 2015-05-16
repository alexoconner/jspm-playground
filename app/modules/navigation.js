
import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="#/">Home</a>
                    </li>
                    <li>
                        <a href="#/about">About</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;