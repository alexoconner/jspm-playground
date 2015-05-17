
import React from 'react';

class NavLink extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.view);
    }

    render() {
        return (
            <li>
                <a href="#" view={ this.props.view } onClick={ this.onClick }>{ this.props.title }</a>
            </li>
        )
    }
}

export default NavLink;