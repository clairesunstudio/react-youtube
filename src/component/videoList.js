import React from 'react'

const VideoList = (props) => {
  //props will arrive as argument to the functional component
  console.log(props)
  return(
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  )
}

export default VideoList
