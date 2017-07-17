import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/SearchBar'
import YTSearch from 'youtube-api-search'
import VideoList from './component/videoList'
import VideoDetail from './component/videoDetail'

const API_Key = 'AIzaSyBo01JP2fQkPzwHFLHIr2cXndIGj-P3Tgk';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }

    YTSearch({key: API_Key, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
      //whenever key and value of an object are the same strings, key:value can be condensed in ES6 as { value }
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
