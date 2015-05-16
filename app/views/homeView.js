
import React from 'react';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        console.log('home view');
    }

    render() {
        return (
            <div>
                I am the home view
            </div>
        )
    }
}

export default HomeView;