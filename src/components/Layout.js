import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import routes from "../routes";

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!",
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Layout;
