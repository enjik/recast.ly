class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    }
  }

  render() {
  
    return (
    <div>
      <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search onClick={window.searchYouTube}/>
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
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
