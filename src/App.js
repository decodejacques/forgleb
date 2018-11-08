import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import GlebsForm from './GlebsForm'

class App extends Component {
  renderGleb = (data) => {
    console.log(data)
    return (<div>{JSON.stringify(data.location.state)}</div>)
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <GlebsForm></GlebsForm>
          <Route path='/search' render={this.renderGleb} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
