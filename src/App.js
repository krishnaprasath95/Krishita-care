import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Treatment from './Components/Treatment/Treatment.js';
import {Route,Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
const App= () => {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
            <Switch>
            <Route exact path="/"  component={Home}></Route>
            <Route  path="/about" component={About}></Route>
            <Route  path="/treatment" component={Treatment}></Route>
        </Switch>
        </BrowserRouter>
        </div>
    )
}

export default App;
