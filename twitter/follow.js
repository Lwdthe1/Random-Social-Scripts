var jfjkfhdFollowAttemps = 0;
var jfjkfhdTotalFollowed = 0;
var restSecs = 2;
function jkhasdScrollPage() {
	var followedThisTime = 0;

	window.scrollBy(0,50); // horizontal and vertical scroll increments
	
	var twitterFollowButtons = document.getElementsByClassName('user-actions-follow-button js-follow-btn follow-button btn small small-follow-btn');
	//alert(twitterFollowButtons.length);
	for(var i = 0; i < twitterFollowButtons.length; i++) {
		var followButton = twitterFollowButtons[i];
		var followSpan = followButton.getElementsByClassName("follow-text");
		if(followSpan === undefined || followSpan === null) { continue; }
		
		var followSpanInnerHTML = followSpan[0].innerHTML;
		followSpanDisplay = getComputedStyle(followSpan[0]).display;
		if(followSpanDisplay != "none") {
			if(followButton.disabled == false) {
    			//console.log(i + 'y| ' + followSpanInnerHTML);
    			followButton.click();
    			followSpan[0].innerHTML = "FOLLOWED";
    			followButton.disabled = true;
    			++jfjkfhdTotalFollowed;
    			++followedThisTime;
    		}
		} else {
 			//console.log(i + 'n| ' + followSpanInnerHTML);
 			followButton.style.display = "none";
 			followButton.disabled = true;
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
