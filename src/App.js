import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Navigation from './components/Navigation';
import './App.css';
import './stylesheet.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/"><Navigation/></Route>
            </div>
        )
    }
}

export default App;
