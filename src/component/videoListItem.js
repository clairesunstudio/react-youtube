import React from 'react'

const VideoListItem = ({video}) => {
  //const video = props.video  no need rewriting argument (props) to ({video}) directly creates a new variable video
  const imageUrl = video.snippet.thumbnails.default.url
  const { title, description } = video.snippet
  return (
    <li>
        <div className="card" style={{width: '20rem'}}>

          <div className="card-block">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
          </div>
            <img className="card-img-bottom" src={imageUrl} alt="Card image cap" />
        </div>
    </li>
  )

}

export default VideoListItem
