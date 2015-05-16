
import React from 'react';
import Navigation from './modules/navigation';
import View from './modules/views';

class App extends React.Component {
    constructor(props) {
         super(props);

         console.log('playground react app');
    }

    render() {
        return (
            <div>
                <h1>React JS App with Jspm Package Management</h1>
                <Navigation />
                <div className="container">
                    <View />
                </div>
            </div>
        );
    }
}


React.render(<App />, document.body);
