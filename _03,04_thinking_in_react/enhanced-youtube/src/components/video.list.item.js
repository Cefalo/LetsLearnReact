import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({video, onVideoSelect}) => {
    const thumbnailUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li className="list-group-item" onClick={()=> onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={thumbnailUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};

VideoListItem.propTypes = {
	
}

export default VideoListItem;