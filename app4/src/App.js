import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(res => {
      console.log(res);
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {this.state.cars}
      </div>
    );
  }
}

export default App;
