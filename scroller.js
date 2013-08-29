var move = new Array();

/* DEPRECATED DUE TO TWITTER API 1.1
function getTweets(){
var scriptTag = document.createElement('SCRIPT');
scriptTag.src = "http://api.twitter.com/1/search.json?q="+queryterm+"&rpp=30&callback=logIt";

document.getElementsByTagName('HEAD')[0].appendChild(scriptTag);
var scriptelement = document.getElementsByTagName('HEAD')[0].getElementsByTagName('script')[0];
document.getElementsByTagName('HEAD')[0].removeChild(scriptelement);

}
DEPRECATED DUE TO TWITTER API 1.1 */

//Filling array with a bunch of dummy data
var data = new Array(6);
data[0] = {'from_user': 'w_general', 'text': 'lol my next door neighbors (I dont know them) are watching Madoka very loudly. Im moving out Friday though lol', 'id_str': '370411605575475200'};
data[1] = {'from_user': 'w_general', 'text': 'My personal website is now up and running! http://www.erickyu.com', 'id_str': '365017920188850176'};
data[2] = {'from_user': 'w_general', 'text': 'Finally dealt with requests from my advisor...finally can get back to developing! #keepworking', 'id_str': '367320919703699457'};
data[3] = {'from_user': 'w_general', 'text': 'I hate doing dishes', 'id_str': '364615030186061825'};
data[4] = {'from_user': 'w_general', 'text': 'This is my goal!', 'id_str': '366172809526906881'};
data[5] = {'from_user': 'w_general', 'text': 'Jack Dorsey’s Plan to Save America’s Struggling Cities http://buswk.co/16L31qW  via @BW', 'id_str': '372628199382867968'};



tweets(data);

function tweets(data) 
{
	//print last tweet text
	var left_result = document.getElementsByClassName('left_result')[0];
	for(var i=0; i<data.length; i++)
	{
		console.log(data[i]);
		left_result.appendChild(document.createElement('div'));
		left_result.lastChild.className = "left_text";
		var link = document.createElement('a');
		link.href = "http://www.twitter.com/"+data[i].from_user + "/status/" + data[i].id_str;
		var tweetText = "@" + data[i].from_user + ": " + data[i].text; 
		link.appendChild(document.createTextNode(tweetText));
		left_result.lastChild.appendChild(link);
		move = document.getElementsByClassName('left_text');
		for (var j=0; j < move.length; j++)
		{
			move[j].style.top = "0px";
		} 
	}
}




function mover(){
for (var i=0; i < move.length; i++)
	{
		move[i].style.top = parseInt(move[i].style.top) - 1;
	}

}

function stripTweet()
{
	var left_result = document.getElementsByClassName('left_result')[0];
	left_result.removeChild(left_result.firstChild.nextSibling);
	for (var i=0; i < move.length; i++)
		{
			move[i].style.top = "0px";
		} 
}

setInterval("stripTweet()",6000);

setInterval("tweets(data);",6000);

setInterval("mover()",100);
