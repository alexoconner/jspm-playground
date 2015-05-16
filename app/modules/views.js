
// major imports
import React from 'react';

// import views
import HomeView from '../views/homeView';
import AboutView from '../views/aboutView';

class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            route: 'home',
            view: <HomeView />
        };
    }

    views() {

        switch (this.state.route) {
            case 'home':
                this.setState({
                    view: <HomeView />
                });
                break;
            case 'about':
                this.setState({
                    view: <AboutView />
                });
                break;
            default:
                this.setState({
                    view: <HomeView />
                })
        }

    }


    render() {
        //this.views();

        return (
            <div>
                { this.state.view }
            </div>
        )
    }
}

export default View;