import React, { Component } from 'react';
import Beer from './components/Beer';

import './App.css';

const URL = 'https://api.punkapi.com/v2/beers';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: []  
    }
  }

  async componentDidMount() {
    console.log('Mounted', this.state.beers)

    try {
      const res = await fetch(URL);
      const data = await res.json();
      this.setState({
        beers: data
      });
    } catch(error) {
      console.error('There was an error:', error)
    }
  }

  componentDidUpdate() {
    console.log('Updated', this.state.beers)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <span className="pageTitle">Bottoms Up!</span>
          <ul>
            {this.state.beers.map((beer, index) => {
              return <Beer singleBeer={beer} key={index}/>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;