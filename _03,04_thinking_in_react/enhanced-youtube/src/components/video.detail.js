import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({video}) => {
    console.log("called here: "+video);
    if(!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    let {title, description} = video.snippet;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    );
};

VideoDetail.propTypes = {}

export default VideoDetail;