import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import RemoteData from './App'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//for using Express
// const path = require('path');
// var express = require('express')
// var app = express()
// app.use(express.static(path.join(__dirname, 'client/build')));



function Routes() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">MainPage</Link>
            </li>
            <li>
              <Link to="/api/modifiers/:modifierId​">Save Modification</Link>
            </li>
            <li>
              <Link to="/api/modifiers">Get saves in a JSON</Link>
            </li>
          </ul>
  
          <hr />
  
          <Route exact path="/" component={RemoteData} />
          <Route exact path="/api/modifiers/:modifierId​" component={SaveData} />
          <Route exact path="/api/modifiers" component={GetJsonData} />
        </div>
      </Router>
    );
  }


  function SaveData({ match }) {
    return (
      <div>
        <h2>Save Data Modification</h2>
        <p>My idea here is to use express and mongoDB as a Database to
        save to the Data modification from the step 3 </p>
      </div>
    );
  }
// POST method route
// app.post('/api/modifiers/:modifierId', function (req, res) {
// res.send('POST request to the database')
// })



  function GetJsonData() {
    return (
      <div>
        <h2>This function returns a JSON Data</h2>
        <p>My idea here is to request MongoDB to give me a JSON Data,
        because MongoDB is a NoSQL Database</p>
      </div>
    );
  }

    //   app.get('/api/modifiers', function (req, res) {
    //     res.json('')
    //   })


  export default Routes;