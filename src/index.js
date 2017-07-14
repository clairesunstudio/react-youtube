import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/SearchBar'
import YTSearch from 'youtube-api-search'

const API_Key = 'AIzaSyBo01JP2fQkPzwHFLHIr2cXndIGj-P3Tgk';

YTSearch({key: API_Key, term: 'surfboards'}, function(data){
  console.log(data)
})

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
