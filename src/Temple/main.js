import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from './about';
import ContactUs from './contactUs';
import Footer from './footer';
import Header from './header';
import Home from './home';
import OurTeam from './ourTeam';
import Portfolio from './portfolio';
import Services from './services';

function Main() {
    return (
        <Router>
        <div>
            <Header />
            {/* <Home /> */}
            
            <main id="main">
            <Route path="/" component={Home} exact={true} strict></Route>
            <Route path="/about" component={About} exact={true} strict></Route>
            <Route path="/services" component={Services} exact={true} strict></Route>
            <Route path="/portfolio" component={Portfolio} exact={true} strict></Route>
            <Route path="/team" component={OurTeam} exact={true} strict></Route>
            <Route path="/contact" component={ContactUs} exact={true} strict></Route>
                
            </main>
            <Footer />
        </div>
        </Router>
    )
}

export default Main;
