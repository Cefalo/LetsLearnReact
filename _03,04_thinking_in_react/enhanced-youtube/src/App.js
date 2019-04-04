import React, {Component} from 'react';
import SearchBar from './components/search.bar';
import VideoList from './components/video.list';
import VideoDetail from './components/video.detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDyPl-YqhqDwEHEAdSapsJCZgQbD9NFoGs';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onSearch('Caspian Report');
    }

    render() {
        return (
            <div>
                <SearchBar onSearchChange={term => this.onSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={video=> this.onVideoSelected(video)}/>
            </div>
        );
    }

    onSearch(searchTerm) {
        //console.log(`From App: ${searchTerm}`)
        YTSearch({key: API_KEY, term: searchTerm}, videos => {
            console.log(videos);
            this.setState({videos});
            if (this.state.selectedVideo === null) {
                this.setState({
                    selectedVideo: videos[0]
                });
            }
        });
    }

    onVideoSelected(selectedVideo) {
        this.setState({
            selectedVideo
        });
    }
};

export default App;
