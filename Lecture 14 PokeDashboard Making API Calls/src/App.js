import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

//** written in ES6
class App extends Component {

  constructor(props) {
    super(props);
//array of pokemon state
    this.state = {
      pokemon: []
    };
//binding the function to this component
    this.loadPokemon = this.loadPokemon.bind(this);
  }
//makes a call to an API, which response will return a jsoon file, then this json will be moved
//if there is an error, it will be catched in the fetch, then all of the api call will be fetched in and printed out in console
  loadPokemon(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        console.log(json);
//making pages, since there is a maximum number of states for a component
        let pages = Math.round(json.count / this.state.limit);

        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count
        });
        console.log(this.state)
      
      }).catch(err => {
        console.log(err)
      })
  }
//*** once the component will mount, it should call the loadpokemon function, parsing the API call
  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
