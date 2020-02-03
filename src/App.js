import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Navigation from './components/Navigation';
import './App.css';
import './stylesheet.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Link to="/"><Navigation/></Link>
                </Router>
            </div>
        )
    }
}

export default App;
