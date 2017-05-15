var jfjkfhdConnectAttemps = 0;
var jfjkfhdTotalConnected = 0;
var restSecs = 5;
function jkhasdScrollPage() {
	var connectedThisTime = 0;
	
	window.scrollBy(0,-15); // scroll up first
	//then scroll down because linkedin requires this
	window.scrollTo(0,document.body.scrollHeight); // horizontal and vertical scroll increments
	
	
	var linkedInConnectButtons = document.getElementsByClassName('button-secondary-small');
	for(var i = 0; i < linkedInConnectButtons.length; i++) {
		var connectButton = linkedInConnectButtons[i];
		var connectButtonInnerHTML = connectButton.innerHTML;
	
		if(connectButton.disabled == false) {
			//console.log(i + 'y| ' + connectButtonInnerHTML);
			connectButton.click();
			connectButton.innerHTML = "CONNECTED";
			//connectButton.disabled = true;
			++jfjkfhdTotalConnected;
			++connectedThisTime;
		}
	}
	
	if(connectedThisTime > 0) console.log(++jfjkfhdConnectAttemps + " | tf:" + jfjkfhdTotalConnected);
	if(jfjkfhdConnectAttemps <= 80) scrolldelay = setTimeout('jkhasdScrollPage()', restSecs * 1000); // scrolls every 100 milliseconds
	else {
		console.log("Connected " + jfjkfhdTotalConnected);
		console.log("Restarting in an hour ...");
		jfjkfhdConnectAttemps = 0;
		jfjkfhdTotalConnected = 0;
		setTimeout('jkhasdScrollPage()', 30 * 60 * 1000);
	}
}
//call the method
jkhasdScrollPage();
