import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import GoogleMap from './googlemap_react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
      </div>
    );
  }
}

export default App;
