var jfjkfhdFollowAttemps = 0;
var jfjkfhdTotalFollowed = 0;
var restSecs = 2;
function jkhasdScrollPage() {
	var followedThisTime = 0;

	window.scrollBy(0,50); // horizontal and vertical scroll increments
	
	var twitterFollowButtons = document.getElementsByClassName('_ah57t _84y62 _i46jh _rmr7s');
	//alert(twitterFollowButtons.length);
	for(var i = 0; i < twitterFollowButtons.length; i++) {
		var followButton = twitterFollowButtons[i];
		var followSpan = followButton.innerHTML
		if(followSpan != "Follow") { continue; }
        if(followButton.disabled == false) {
            followButton.click();
            followSpan[0].innerHTML = "FOLLOWED";
            followButton.disabled = true;
            ++jfjkfhdTotalFollowed;
            ++followedThisTime;
        }
	}
	
	if(followedThisTime > 0) console.log(++jfjkfhdFollowAttemps + " | tf:" + jfjkfhdTotalFollowed);
	if(jfjkfhdFollowAttemps <= 80) scrolldelay = setTimeout('jkhasdScrollPage()', restSecs * 1000); // scrolls every 100 milliseconds
	else {
		console.log("Followed " + jfjkfhdTotalFollowed);
		console.log("Restarting in an hour ...");
		jfjkfhdFollowAttemps = 0;
		jfjkfhdTotalFollowed = 0;
		setTimeout('jkhasdScrollPage()', 30 * 60 * 1000);
	}
}
//call the method
jkhasdScrollPage();
