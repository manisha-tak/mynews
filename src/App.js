import './App.css';

import React, { Component } from 'react';
import Newscomponent from './components/Newscomponent';
import {BrowserRouter} from "react-router-dom";
import {Routes,Route,Router} from "react-router-dom";
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <>

        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Newscomponent key="general" pageSize={10} country='in' category="general"/>}></Route>
          <Route exact path="/general" element={<Newscomponent key="general" pageSize={10} country='in' category="general"/>}></Route>
          <Route exact path="/business" element={<Newscomponent key="business" pageSize={10} country='in' category="business"/>}></Route>
          <Route exact path="/health" element={<Newscomponent key="health" pageSize={10} country='in' category="health"/>}></Route>
          <Route exact path="/science" element={<Newscomponent key="science" pageSize={10} country='in' category="science"/>}></Route>
          <Route exact path="/sports" element={<Newscomponent key="sports" pageSize={10} country='in' category="sports"/>}></Route>
          <Route exact path="/entertainment" element={<Newscomponent key="entertainment" pageSize={10} country='in' category="entertainment"/>}></Route>
          <Route exact path="/technology" element={<Newscomponent key="technology" pageSize={10} country='in' category="technology"/>}></Route>

        </Routes> 
        </BrowserRouter>
      </>
    )
  }
}
