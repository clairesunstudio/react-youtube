import _ from 'lodash'
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
      videos: [],
      selectedVideo: null
    }

    this.videoSearch("surfboards")
  }

  videoSearch(term) {
    YTSearch({key: API_Key, term}, (videos) => {
      this.setState({
        videos,
        //whenever key and value of an object are the same strings, key:value can be condensed in ES6 as { value }
        selectedVideo : videos[0]
       })

    })
  }

  render() {
    const videoSearch=_.debounce((term) => {this.videoSearch(term)}, 300)
    //debounce takes the inner function and returns a new function runs every 300 milliseconds elaps
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
