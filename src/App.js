import React from 'react';
import './App.css';
import Toolbar from './container/header/toolbar/toolbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import AddStudent from './pages/AddStudent';
import EditStudent from '../src/pages/EditStudent';
// import Page404 from '../src/pages/404';


const App=() =>{
    return(
        <BrowserRouter>
            <div className="App">
              <Toolbar />
              <div style={{marginTop:'80px'}}>
                <Route path="/" exact  component={Homepage} />
                <Route path="/add-student" component={AddStudent} />
                <Route path="/student/:id" component={EditStudent} />
                {/* <Route component={Page404} /> */}
              </div>
            </div>
                        
        </BrowserRouter>
    );
}

export default App;

