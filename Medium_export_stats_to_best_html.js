var jfjkfhdFollowAttemps = 0;
var jfjkfhdTotalBestStories = 0;
var restSecs = 10;
var usersListOpened = false;
function jkhasdScrollPage() {
	scrollD();
	sleepFor(1000);
	function sleepFor( sleepDuration ){
	    var now = new Date().getTime();
	    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
	}
	sleepFor(1000);
	run();

	function scrollD() {
		//scroll to make sure all stories are in view
		//for(var i = 0; i < 10; i++) {
			window.scroll(0,document.body.scrollHeight); // horizontal and vertical scroll increments
			window.scrollBy(0,-10);
			//window.scrollTo(0,document.body.scrollHeight); // horizontal and vertical scroll increments
		//}
	}

	function run() {
		var storiesWithKeyWhy = 0;
		var storiesWithKeyWhyViews= 0;
		var storiesWithKeyWhyReads = 0;
		var storiesWithKeyWhyRecs = 0;

		var storiesWithKeyHow = 0;
		var storiesWithKeyHowViews = 0;
		var storiesWithKeyHowReads = 0;
		var storiesWithKeyHowRecs = 0;

		var storiesWithKeyHowTo = 0;
		var storiesWithKeyHowToViews = 0;
		var storiesWithKeyHowToReads = 0;
		var storiesWithKeyHowToRecs = 0;

		var storiesWithKeyNumber = 0;
		var storiesWithKeyNumberViews = 0;
		var storiesWithKeyNumberReads = 0;
		var storiesWithKeyNumberRecs = 0;

		var storiesWithoutKey = 0;
		var storiesWithoutKeyNumberViews = 0;
		var storiesWithoutKeyNumberReads = 0;
		var storiesWithoutKeyNumberRecs  = 0;


		var resultsTable = document.createElement('table');
		resultsTable.className = "flat-table flat-table-1";
		resultsTable.style.cssText = "border:1; frame:hsides; rules:rows";
		var resultsTableBody = document.createElement('tbody'); 
			
		
		var resultsTableHeaderRow = document.createElement('tr');

		resultsTableHeaderRow.appendChild(createTd("Story"));
		resultsTableHeaderRow.appendChild(createTd("Views"));
		resultsTableHeaderRow.appendChild(createTd("Reads"));
		resultsTableHeaderRow.appendChild(createTd("Recs"));
		resultsTableHeaderRow.appendChild(createTd(""));
		resultsTableHeaderRow.appendChild(createTd("Read Ratio"));
		resultsTableHeaderRow.appendChild(createTd("Views-Recs Ratio %"));
		resultsTableHeaderRow.appendChild(createTd("Read-Recs Ratio %"));

		resultsTableBody.appendChild(resultsTableHeaderRow);
			

		function createTd(title) { 
			var td = document.createElement('td');
			td.innerHTML = title;
			return td;
		}
		
		var mediumStatsRows = document.getElementsByClassName('js-statsTableRow');
		//alert(mediumStatsRows.length);
		for(var i = 0; i < mediumStatsRows.length; i++) {
			var storyStatsRow = mediumStatsRows[i];
			var storyTitleEl = storyStatsRow.getElementsByTagName("h2")[0];
			var storyViewsEl = storyStatsRow.querySelector('[data-label=" views"]');
			var storyReadsEl = storyStatsRow.querySelector('[data-label=" reads"]');
			if(storyReadsEl === undefined && storyReadsEl == null) storyReadsEl = storyStatsRow.querySelector('[data-label=" read"]');

			var storyReadRatioEl = storyStatsRow.querySelector('[data-label=" ratio"]');
			var storyRecsEl = storyStatsRow.querySelector('[data-label=" recs"]');
			if(storyRecsEl === undefined && storyRecsEl == null) storyRecsEl = storyStatsRow.querySelector('[data-label=" rec"]');
			
			var storyTitle = storyTitleEl.innerHTML;
			var storyViews = storyViewsEl.getAttribute("title").replace(",", "");
			var storyReads = storyReadsEl != null? storyReadsEl.getAttribute("title").replace(",", "") : "N/A";

			var storyReadRatio = storyReadRatioEl.innerHTML;
			var storyRecs = storyRecsEl !== undefined && storyRecsEl != null? storyRecsEl.innerHTML : -1;

			if(storyRecs > 50) {				
				++jfjkfhdTotalBestStories;

				var newStoryRow = document.createElement("tr");
				var storyViewsToRec = (parseInt(storyRecs)/parseInt(storyViews)) * 100;
				var storyReadsToRec = (parseInt(storyRecs)/parseInt(storyReads)) * 100;
				newStoryRow.appendChild(createTd(storyTitle));
				newStoryRow.appendChild(createTd(storyViews));
				newStoryRow.appendChild(createTd(storyReads));
				newStoryRow.appendChild(createTd(storyRecs));
				newStoryRow.appendChild(createTd(""));
				newStoryRow.appendChild(createTd(storyReadRatio));
			
				newStoryRow.appendChild(createTd(Math.round(storyViewsToRec) + "%"));
				newStoryRow.appendChild(createTd(Math.round(storyReadsToRec) + "%"));

				resultsTableBody.appendChild(newStoryRow);
			}
		}

		resultsTable.appendChild(resultsTableBody);
		
		console.log("Analyzed " + jfjkfhdTotalBestStories + " stories.");
		displayResults(resultsTable);
		console.log("No more stories. Good Bye!");
		
	}

	function displayResults(dataEl) {
		addCSS();
	    var resultsDiv = document.createElement('div');
		resultsDiv.style.cssText = 'padding:30px; position:block; color:#fff;';
		resultsDiv.appendChild(dataEl);
		document.body.appendChild(resultsDiv);

		window.scroll(0,document.body.scrollHeight); // horizontal and vertical scroll increments
	    return true;
	}

	function addCSS(){
		var css = '.flat-table{margin-bottom:20px;border-collapse:collapse;font-family:Lato,Calibri,Arial,sans-serif;border:none;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px}.flat-table td,.flat-table th{box-shadow:inset 0 -1px rgba(0,0,0,.25),inset 0 1px rgba(0,0,0,.25)}.flat-table th{font-weight:400;-webkit-font-smoothing:antialiased;padding:1em;color:rgba(0,0,0,.45);text-shadow:0 0 1px rgba(0,0,0,.1);font-size:1.5em}.flat-table td{color:#f7f7f7;padding:.7em 1em .7em 1.15em;text-shadow:0 0 1px rgba(255,255,255,.1);font-size:1.4em}.flat-table tr{-webkit-transition:background .3s,box-shadow .3s;-moz-transition:background .3s,box-shadow .3s;transition:background .3s,box-shadow .3s}.flat-table-1{background:#336ca6}.flat-table-1 tr:hover{background:rgba(0,0,0,.19)}';
	    head = document.head || document.getElementsByTagName('head')[0],
	    style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);
	}
	return true;
}



String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

//call the method
jkhasdScrollPage();
