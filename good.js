
// GPL 2.0
// Author: Michael Odland
// GitHub: NA

// With help from the tutorial, Coding for Good: API Integration with SoundCloud

// Until the Tank Channel account is made on SoundCloud use:
// Bruce Odland, user_id:4065989


function playGenreSound(genre)
{
	// all api calls in the javascript sdk accept a uri path, some options, and then a callback function
	// this allows us to specify some filters
	SC.get('/tracks',
	{
			genres: genre,
			bpm: {from: 50}
		},
		function (tracks){ // embed a random track within the page
			alert(tracks.length + " tracks returned");
			var random = Math.floor(Math.random() * 49); // 0-50 since 50 is the default number of tracks returned when you make a request to '/tracks'
			// the oEmbed function is how to embed a track
			// it takes a uri, some optional parameters, and a DOM 
			SC.oEmbed(tracks[random].uri,
				{
					autoplay: true,
					buying: true,
					sharing: true,
					single_active: false,
					enable_api: true
				},
				document.getElementById('target')
			);
		}
	);
}


function playUserSound(user){ // this adaptation plays all of client's tracks
	SC.get('/tracks',
		{user_id:"4065989"}, // user id is hardcoded to Bruce Odland, if changed to a variable it would be easier to users to follow up on the music of other contributors
		function (tracks) {
			alert(tracks.length + " tracks returned");
			// track randomizer will fail if it generates an index greater than tracks.lenth
			//var random = Math.floor(Math.random() * (tracks.length - 1));
			alert("Latest track: " + tracks.title);
			SC.oEmbed(tracks[0].uri,
				{
					autoplay: true,
					buying: true,
					sharing: true,
					single_active: false,
					enable_api: true
				},
				document.getElementById('target')
			);
		}
	);
}


function playTagSound(tag){ // plays clients tracks filtered by tag
	SC.get('/tracks',
		{tags: tag},
		function (tracks) {
			alert(tracks.length + " tracks returned");
			var random = Math.floor(Math.random() * (tracks.length - 1));
			SC.oEmbed(tracks[random].uri,
				{
					autoplay: true,
					buying: true,
					sharing: true,
					single_active: false,
					enable_api: true,
					iframe:true
				}, document.getElementById('target')
			);
		}
	);
}

function playSet()
{
	SC.get('/playlists',
		{
			user_id : 4065989
		},
		function (set){
			alert(set.length + " set returned");
			// SC 
		}
	);
}

// The next thing we want to do is create a window.onload event handler
// When the user loads this page in their browser this does two things
// initialize the soundcloud sdk and allow for some clickable links  

window.onload = function()
{
	SC.initialize({
		client_id: 'a61ffcd395f8315e44a0786540b6bdfb'
	});

/*    // SC.connect works when client_id AND redirect_uri are passed
	// redirect_uri must work with callback.html hosted on the server
	SC.connect(function (){
		SC.get("/me", function(me){
			alert("Hello " + me.username);
		});
	});
*/

	// now we need to get the genre link elements
	var genreLinks = document.getElementsByClassName('genre');
	// then we are going to loop through those
	for (var i = 0; i < genreLinks.length; i++)
	{
		var genreLink = genreLinks[i];
		// and make them clickable
		genreLink.onclick = function (c){
			c.preventDefault();
			playGenreSound(genreLink.innerHTML);
		};
	}

	// same for the client link
	// Currently this function is invisible. Bruce Odland is hardcoded as the user_id
	var userLinks = document.getElementsByClassName('username');
	for (var j=0; j < userLinks.length; j++){
		var userLink = userLinks[j];
		userLink.onclick = function (d){
			alert("userLink is " + userLink);
			d.preventDefault();
			playUserSound(userLink.innerHTML);
		};
	}

	// same for the tag links
	var tagLinks = document.getElementsByClassName('tag');
	for (var k=0; k < tagLinks.length; k++){
		var tagLink = tagLinks[k];
		tagLink.onclick = function (e){
			e.preventDefault();
			playTagSound(tagLink.innerHTML);
		};
	}
};