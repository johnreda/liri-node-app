
//===========SET THE VARIABLES TO GET TWITTER, SPOTIFY, IMDB
var fs = require('fs');
var Twitter = require('twitter');
var spotify = require('spotify');
var imdb = require('imdb');

//=======PULL IN THE DATA FROM KEYS.JS TO ACCESS TWITTER
var twitterKeys = require('./keys.js');
	//console.log(twitterKeys)
var client = new Twitter({
  consumer_key: 'fQ4A8JASRmdU0MrXVhDc41sR9',
  consumer_secret: 'QPjy3yl51C1PaOb3NDLdsNJXU5MoWMtUzvVE6zQo5UXvNdDQmM',
  access_token_key: '4815055935-BCdNbTy3PNOe10ewKSkpKBxJOTUdMVnd1gkZiC7',
  access_token_secret: 'iTfCmXSk863YLaSSa34JQDCWI3stp5MIPg0ZLQKd8m1H1',
}
);


//TEST TO GET TWEETS
function getTweets(){
var params = {screen_name: 'j_f_r4'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    //console.log(tweets);
    for (var i = 0; i <  tweets.length; i++) {
    	 console.log( tweets[i].text + tweets[i].created_at);
    };
  } else if (error) {
  	//console.log(error);
  }
});
}

//TEST TO GET SPOTIFY DATA
function getSongs(){
	var songTitle = (process.argv[3])
spotify.search({ type: 'track', query: songTitle }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 	console.log(data.tracks.items[0].name)
 	
 	
});
	}

//TEST TO GET IMDB DATA
function getMovies (){
imdb('tt3659388', function(err, data) {
  if(err)
    console.log(err.stack);
 
  if(data)
    console.log(data);
});
	}

// ================ LOGIC TO TAKE IN USER DATA AND DO SOMETHING WITH IT ================

//TAKES IN TWITTER, SPOTIFY OR IMDB FIRST (FOR TWITTER, THIS IS THE ONLY REQUIRED INPUT TO GET TWEETS)
var userInputA = (process.argv[2]);
	//console.log(userInputA);
//ENTERS USERS QUERY IN FOR SPOTIFY OR IMDB
var userInputB = (process.argv[3]);
	//console.log (userInputB)

	//LOGIC TO GET TWEETS
	if (userInputA === "my-tweets"){
		getTweets();
	} else if (userInputA === "spotify-this-song"){
		getSongs();
	} else if (userInputA === "movie-this"){
		console.log("FOR MOVIES")
		getMovies()
	}

















