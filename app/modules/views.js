
// major imports
import React from 'react';

// import views
import HomeView from '../views/homeView';
import AboutView from '../views/aboutView';

class View extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        var view;

        switch (this.props.view) {
            case 'home':
                view = <HomeView />;
                break;
            case 'about':
                view = <AboutView />;
                break;
            default:
                view = <HomeView />;
        }

        return (
            <div>
                { view }
            </div>
        )
    }
}

export default View;