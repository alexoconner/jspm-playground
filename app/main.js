
import React from 'react';
import NavLink from './modules/navLink';
import View from './modules/views';

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log('playground react app');

        this.state = {
            view: 'home'
        };

        this.onNavClick = this.onNavClick.bind(this);
    }

    //getInitialState() {
    //    return {
    //        view: 'home'
    //    };
    //}

    onNavClick(view) {
        console.log('clicked nav link: ' + view);
        this.setState({
            view: view
        });
    }

    render() {
        return (
            <div>
                <h1>React JS App with Jspm Package Management</h1>
                <nav>
                    <ul>
                        <NavLink
                            title="Home"
                            view="home"
                            onClick={ this.onNavClick }
                        />
                        <NavLink
                            title="About"
                            view="about"
                            onClick={ this.onNavClick }
                        />
                    </ul>
                </nav>
                <div className="container">
                    <View view={ this.state.view } />
                </div>
            </div>
        );
    }
}


React.render(<App />, document.body);
