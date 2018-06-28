class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    
    this.debouncedHandleSearch = _.throttle(this.handleSearch, 500);
    
  }
  
  componentDidMount() {
    this.handleSearch('hack reactor');
  }
  

  render() {
  
    return (
      <div>
        <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleSearch={this.debouncedHandleSearch.bind(this)}/>
        </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    )

  }
  
  handleClick(video) {
    this.setState({currentVideo: video});
    // console.log(this);
    // console.log(this.state.currentVideo);

  }

  handleSearch(query) {
    console.log(query);
    var data = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5,
      
    };

    this.props.searchYouTube(data, function(data) {
      this.setState({videos: data});
      this.setState({currentVideo: data[0]});
    }.bind(this));
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
