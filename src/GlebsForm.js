import React, { Component } from 'react';
import logo from './logo.svg';
import { withRouter } from 'react-router'
import './App.css';

class GlebsForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.history.push('/search', { gleb: true })
  }
  render() {
    return (
      <div className="gleb-class">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default withRouter(GlebsForm);
