import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    values: []
  }
  componentDidMount() {
    axios.get('https://localhost:44339/api/values')
      .then(res => {
        this.setState(
          {
            values: res.data
          }
        )
      })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {this.state.values.map((v: any) =>
              (
                <li>{v.name}</li>
              )
            )}
          </ul>
        </header>
      </div>

    );
  }
}

export default App;
