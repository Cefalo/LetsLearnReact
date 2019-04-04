import React from 'react';
import VideoListItem from './video.list.item';
import PropTypes from 'prop-types';

const VideoList = ({videos, onVideoSelect}) => {
    const videoList = videos.map(v=><VideoListItem key={v.etag} video={v} onVideoSelect={onVideoSelect}/> );
    return (
        <ul className="col-md-4 list-group">
            {videoList}
        </ul>
    );
};

VideoList.propTypes = {
	videos: PropTypes.array,
    onVideoSelect: PropTypes.func
}

export default VideoList;