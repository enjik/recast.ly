var searchYouTube = (options, callback) => {

  var data = {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    embeddable: true,
    part: 'snippet',
    type: 'video',
  };

  $.get('https://www.googleapis.com/youtube/v3/search', data, function(data) { 
    console.log(data.items);
    callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
