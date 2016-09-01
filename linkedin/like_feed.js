var jfjkfhdLikeAttemps = 0;
var jfjkfhdTotalLiked = 0;
var restSecs = 10;
var usersListOpened = false;
function jkhasdScrollPage() {
	var likedThisTime = 0;

	window.scrollBy(0,50); // horizontal and vertical scroll increments
	
	var linkedinLikeButtons = document.getElementsByClassName('like');
	//alert(linkedinLikeButtons.length);
	for(var i = 0; i < linkedinLikeButtons.length; i++) {
		var likeButton = linkedinLikeButtons[i];
		var canLike = likeButton.getAttribute("data-liked") == "";

		if(canLike == true) {
			if(likeButton.disabled == false) {
	   			//console.log(i + 'y| ' + likeButtonInnerHTML);
    			likeButton.click();
    			likeButton.disabled = true;
    			++jfjkfhdTotalLiked;
    			++likedThisTime;
    		}
		}
	}
	
	if(likedThisTime > 0) console.log(++jfjkfhdLikeAttemps + " | tf:" + jfjkfhdTotalLiked);

	if(jfjkfhdLikeAttemps <= 80) scrolldelay = setTimeout('jkhasdScrollPage()', restSecs * 1000); // scrolls every 100 milliseconds
	else {
		console.log("Liked " + jfjkfhdTotalLiked);
		console.log("Restarting in an hour ...");
		jfjkfhdLikeAttemps = 0;
		jfjkfhdTotalLiked = 0;
		setTimeout('jkhasdScrollPage()', 30 * 60 * 1000);
	}
}
//call the method
jkhasdScrollPage();
