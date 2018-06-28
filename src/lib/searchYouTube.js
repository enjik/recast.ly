var searchYouTube = (options, callback) => {
  console.log('hello');
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: options,
    success: callback,
    error: function() {
      console.log('your request failed');
    }
  })
};

window.searchYouTube = searchYouTube;
