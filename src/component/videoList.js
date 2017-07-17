import React from 'react'
import VideoListItem from './videoListItem'

const VideoList = (props) => {
  var videoItems = props.videos.map((video) => { return (
      <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            video={video}
            key = {video.etag} />)
  })
  //props will arrive as argument to the functional component
  console.log(props)
  return(
    <ul className="list-unstyled col-md-4">
      {videoItems}
    </ul>

  )
}

export default VideoList
