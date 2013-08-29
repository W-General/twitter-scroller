###Twitter Scroller###

Originally, this would read the querystring that is gotten through http POST from a previous page.

Then the javascript in the DEPRECATED section would go use the twitter API and fetch about 30 tweets that are relevant using Twitter Search.

Then the script would fetch new tweets every minute or so.


However, with the introduction of Twitter API 1.1, it has required external apps to use OAuth or App-only authentication so I have been too lazy to update this to comply with v1.1


I've replaced the Tweet fetching functionality with just a bunch of static dummy Tweets, retaining the "scrolling" function.


Any takers to update this would be appreciated. Or if one day I found use for this script on my site, I would probably be more compelled to update it.