import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video  no need rewriting argument (props) to ({video}) directly creates a new variable video
  const imageUrl = video.snippet.thumbnails.default.url
  const { title, description } = video.snippet
  return (

    <li onClick={() => onVideoSelect(video)} className="list-group-item">
       <div className="video-list media">
        <div className="media-left">
         <img className="media-object" src={imageUrl} alt="Generic placeholder image" />
        </div>
        <div className="media-body">
          <h5 className="media-heading">{title}</h5>
        </div>
       </div>
    </li>
  )

}

export default VideoListItem
