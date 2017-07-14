import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/SearchBar'
import YTSearch from 'youtube-api-search'

const API_Key = 'AIzaSyBo01JP2fQkPzwHFLHIr2cXndIGj-P3Tgk';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }

    YTSearch({key: API_Key, term: 'surfboards'}, (video) => {
      this.setState({ video })
      //whenever key and value of an object are the same strings, key:value can be condensed in ES6 as { value }
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
