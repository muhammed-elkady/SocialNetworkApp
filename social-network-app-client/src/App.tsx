import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Header, List } from 'semantic-ui-react'

class App extends Component {
  state = {
    values: []
  }
  componentDidMount() {
    axios.get('https://localhost:44339/api/values')
      .then(res => {
        this.setState({ values: res.data })
      })
  }

  render() {
    return (
      <div >
        <Header as='h2' icon='users' content='Social Network App' />

        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>

      </div>

    );
  }
}

export default App;
