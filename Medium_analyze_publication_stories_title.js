var restSecs = 10;
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
		var storiesWithoutKeyViews = 0;
		var storiesWithoutKeyReads = 0;
		var storiesWithoutKeyRecs  = 0;

		var storiesWithKeyHowI = 0;
		var storiesWithKeyHowIViews = 0;
		var storiesWithKeyHowIReads = 0;
		var storiesWithKeyHowIRecs = 0;

		var storiesWithKeyHowMy = 0;
		var storiesWithKeyHowMyViews = 0;
		var storiesWithKeyHowMyReads = 0;
		var storiesWithKeyHowMyRecs = 0;

		var storiesWithKeyHowWe = 0;
		var storiesWithKeyHowWeViews = 0;
		var storiesWithKeyHowWeReads = 0;
		var storiesWithKeyHowWeRecs = 0;

		var storiesWithKeyWhat = 0;
		var storiesWithKeyWhatViews = 0;
		var storiesWithKeyWhatReads = 0;
		var storiesWithKeyWhatRecs = 0;
		var storiesWithKeyWhen = 0;
		
		var storiesWithKeyWhenViews = 0;
		var storiesWithKeyWhenReads = 0;
		var storiesWithKeyWhenRecs = 0;

		var storiesWithKeyWay= 0;
		var storiesWithKeyWayViews = 0;
		var storiesWithKeyWayReads = 0;
		var storiesWithKeyWayRecs = 0;
	
		var storiesWithKeyWays = 0;
		var storiesWithKeyWaysViews = 0;
		var storiesWithKeyWaysReads = 0;
		var storiesWithKeyWaysRecs = 0;

		var totalStories = 0;
		var totalStoriesViews = 0;
		var totalStoriesReads = 0;
		var totalStoriesRecs = 0;

		var resultsTable = document.createElement('table');
		resultsTable.className = "flat-table flat-table-1";
		resultsTable.style.cssText = "border:1; frame:hsides; rules:rows; text-align:center";
		var resultsTableHead = document.createElement('thead'); 
		resultsTableHead.style.cssText = "background:#2c3e50";
		var resultsTableBody = document.createElement('tbody');
			
		
		var resultsTableHeaderRow = document.createElement('tr');
		resultsTableHeaderRow.appendChild(createTd("Key Phrase"));
		resultsTableHeaderRow.appendChild(createTd("Number of Stories"));

		resultsTableHeaderRow.appendChild(createTd("Read Ratio"));
		resultsTableHeaderRow.appendChild(createTd("Views-Recs Ratio"));
		resultsTableHeaderRow.appendChild(createTd("Read-Recs Ratio"));
		resultsTableHeaderRow.appendChild(createTd(""));
		resultsTableHeaderRow.appendChild(createTd(""));
		resultsTableHeaderRow.appendChild(createTd("Views"));
		resultsTableHeaderRow.appendChild(createTd("Reads"));
		resultsTableHeaderRow.appendChild(createTd("Recs"));
		

		var mediumPublicationName = document.getElementsByClassName('stats-title--page')[0].innerHTML;
		var resultsTableTitleRow = document.createElement('tr');
		resultsTableTitleRow.style.cssText = "background:#2c3e50";
		resultsTableTitleRow.appendChild(createSTd(mediumPublicationName, 8));

		resultsTableHead.appendChild(resultsTableTitleRow);
		resultsTableHead.appendChild(resultsTableHeaderRow);
		resultsTable.appendChild(resultsTableHead);
			

		function createTd(title) { 
			var td = document.createElement('td');
			td.innerHTML = title;
			return td;
		}

		function createSTd(title, cSpan) { 
			var td = document.createElement('td');
			td.innerHTML = title;
			td.colSpan = 9;
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


			if(storyRecs >= 0) {							
				storyTitle = storyTitle.toLowerCase();
				var matchedAKey = false;

				if(storyTitle.contains("why")) {
					storiesWithKeyWhy++;
					storiesWithKeyWhyViews = parseInt(storiesWithKeyWhyViews) + parseInt(storyViews);
					storiesWithKeyWhyReads = parseInt(storiesWithKeyWhyReads) + parseInt(storyReads);
					storiesWithKeyWhyRecs =  parseInt(storiesWithKeyWhyRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("what")) {
					storiesWithKeyWhat++;
					storiesWithKeyWhatViews = parseInt(storiesWithKeyWhatViews) + parseInt(storyViews);
					storiesWithKeyWhatReads = parseInt(storiesWithKeyWhatReads) + parseInt(storyReads);
					storiesWithKeyWhatRecs =  parseInt(storiesWithKeyWhatRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("when")) {
					storiesWithKeyWhen++;
					storiesWithKeyWhenViews = parseInt(storiesWithKeyWhenViews) + parseInt(storyViews);
					storiesWithKeyWhenReads = parseInt(storiesWithKeyWhenReads) + parseInt(storyReads);
					storiesWithKeyWhenRecs =  parseInt(storiesWithKeyWhenRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("how")) {
					storiesWithKeyHow++;
					storiesWithKeyHowViews = parseInt(storiesWithKeyHowViews) + parseInt(storyViews);
					storiesWithKeyHowReads = parseInt(storiesWithKeyHowReads) + parseInt(storyReads);
					storiesWithKeyHowRecs =  parseInt(storiesWithKeyHowRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("how to")) {
					storiesWithKeyHowTo++;
					storiesWithKeyHowToViews = parseInt(storiesWithKeyHowToViews) + parseInt(storyViews);
					storiesWithKeyHowToReads = parseInt(storiesWithKeyHowToReads) + parseInt(storyReads);
					storiesWithKeyHowToRecs =  parseInt(storiesWithKeyHowToRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("how i")) {
					storiesWithKeyHowI++;
					storiesWithKeyHowIViews = parseInt(storiesWithKeyHowIViews) + parseInt(storyViews);
					storiesWithKeyHowIReads = parseInt(storiesWithKeyHowIReads) + parseInt(storyReads);
					storiesWithKeyHowIRecs =  parseInt(storiesWithKeyHowIRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("how my")) {
					storiesWithKeyHowMy++;
					storiesWithKeyHowMyViews = parseInt(storiesWithKeyHowMyViews) + parseInt(storyViews);
					storiesWithKeyHowMyReads = parseInt(storiesWithKeyHowMyReads) + parseInt(storyReads);
					storiesWithKeyHowMyRecs =  parseInt(storiesWithKeyHowMyRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("how we")) {
					storiesWithKeyHowWe++;
					storiesWithKeyHowWeViews = parseInt(storiesWithKeyHowWeViews) + parseInt(storyViews);
					storiesWithKeyHowWeReads = parseInt(storiesWithKeyHowWeReads) + parseInt(storyReads);
					storiesWithKeyHowWeRecs =  parseInt(storiesWithKeyHowWeRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("way") && !storyTitle.contains("ways")) {
					storiesWithKeyWay++;
					storiesWithKeyWayViews = parseInt(storiesWithKeyWayViews) + parseInt(storyViews);
					storiesWithKeyWayReads = parseInt(storiesWithKeyWayReads) + parseInt(storyReads);
					storiesWithKeyWayRecs =  parseInt(storiesWithKeyWayRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.contains("ways")) {
					storiesWithKeyWays++;
					storiesWithKeyWaysViews = parseInt(storiesWithKeyWaysViews) + parseInt(storyViews);
					storiesWithKeyWaysReads = parseInt(storiesWithKeyWaysReads) + parseInt(storyReads);
					storiesWithKeyWaysRecs =  parseInt(storiesWithKeyWaysRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(storyTitle.match(/\d+/g)) {
					storiesWithKeyNumber++;
					storiesWithKeyNumberViews = parseInt(storiesWithKeyNumberViews) + parseInt(storyViews);
					storiesWithKeyNumberReads = parseInt(storiesWithKeyNumberReads) + parseInt(storyReads);
					storiesWithKeyNumberRecs =  parseInt(storiesWithKeyNumberRecs) + parseInt(storyRecs);

					matchedAKey = true;
				}

				if(!matchedAKey) {
					storiesWithoutKey++;
					storiesWithoutKeyViews = parseInt(storiesWithoutKeyViews) + parseInt(storyViews);
					storiesWithoutKeyReads = parseInt(storiesWithoutKeyReads) + parseInt(storyReads);
					storiesWithoutKeyRecs =  parseInt(storiesWithoutKeyRecs) + parseInt(storyRecs);
				}

				totalStories++;
				totalStoriesViews = parseInt(totalStoriesViews) + parseInt(storyViews);
				totalStoriesReads = parseInt(totalStoriesReads) + parseInt(storyReads);
				totalStoriesRecs = parseInt(totalStoriesRecs) + parseInt(storyRecs);
			}
		}

		//add each keyword to its own row in the table's body
		resultsTableBody.appendChild(createKeywordRow("How", 
			storiesWithKeyHow, storiesWithKeyHowViews, 
			storiesWithKeyHowReads, storiesWithKeyHowRecs));
		resultsTableBody.appendChild(createKeywordRow("How I", 
			storiesWithKeyHowI, storiesWithKeyHowIViews, 
			storiesWithKeyHowIReads, storiesWithKeyHowIRecs));
		resultsTableBody.appendChild(createKeywordRow("How My", 
			storiesWithKeyHowMy, storiesWithKeyHowMyViews, 
			storiesWithKeyHowMyReads, storiesWithKeyHowMyRecs));
		resultsTableBody.appendChild(createKeywordRow("How to", 
			storiesWithKeyHowTo, storiesWithKeyHowToViews, 
			storiesWithKeyHowToReads, storiesWithKeyHowToRecs));
		resultsTableBody.appendChild(createKeywordRow("How We", 
			storiesWithKeyHowWe, storiesWithKeyHowWeViews, 
			storiesWithKeyHowWeReads, storiesWithKeyHowWeRecs));
		resultsTableBody.appendChild(createKeywordRow("Way [singular]", 
			storiesWithKeyWay, storiesWithKeyWayViews, 
			storiesWithKeyWayReads, storiesWithKeyWayRecs));
		resultsTableBody.appendChild(createKeywordRow("Ways", 
			storiesWithKeyWays, storiesWithKeyWaysViews, 
			storiesWithKeyWaysReads, storiesWithKeyWaysRecs));
		resultsTableBody.appendChild(createKeywordRow("Why", 
			storiesWithKeyWhy, storiesWithKeyWhyViews, 
			storiesWithKeyWhyReads, storiesWithKeyWhyRecs));
		resultsTableBody.appendChild(createKeywordRow("What", 
			storiesWithKeyWhat, storiesWithKeyWhatViews, 
			storiesWithKeyWhatReads, storiesWithKeyWhatRecs));
		resultsTableBody.appendChild(createKeywordRow("When", 
			storiesWithKeyWhen, storiesWithKeyWhenViews, 
			storiesWithKeyWhenReads, storiesWithKeyWhenRecs));

		//all above without "Contains Number"
		var allAboveTotalStories = storiesWithKeyHow + storiesWithKeyHowI + storiesWithKeyHowMy
		+ storiesWithKeyHowTo + storiesWithKeyHowWe + storiesWithKeyWay + storiesWithKeyWays
		+ storiesWithKeyWhy + storiesWithKeyWhat + storiesWithKeyWhen;
		var allAboveTotalStoriesViews = storiesWithKeyHowViews + storiesWithKeyHowIViews + storiesWithKeyHowMyViews
		+ storiesWithKeyHowToViews + storiesWithKeyHowWeViews + storiesWithKeyWayViews + storiesWithKeyWaysViews
		+ storiesWithKeyWhyViews + storiesWithKeyWhatViews + storiesWithKeyWhenViews;
		var allAboveTotalStoriesReads = storiesWithKeyHowReads + storiesWithKeyHowIReads + storiesWithKeyHowMyReads
		+ storiesWithKeyHowToReads + storiesWithKeyHowWeReads + storiesWithKeyWayReads + storiesWithKeyWaysReads
		+ storiesWithKeyWhyReads + storiesWithKeyWhatReads + storiesWithKeyWhenReads;
		var allAboveTotalStoriesRecs = storiesWithKeyHowRecs + storiesWithKeyHowIRecs + storiesWithKeyHowMyRecs
		+ storiesWithKeyHowToRecs + storiesWithKeyHowWeRecs + storiesWithKeyWayRecs + storiesWithKeyWaysRecs
		+ storiesWithKeyWhyRecs + storiesWithKeyWhatRecs + storiesWithKeyWhenRecs;

		resultsTableBody.appendChild(createKeywordRow("[All Above Averaged]", 
			Math.round(allAboveTotalStories/10), Math.round(allAboveTotalStoriesViews/10), 
			Math.round(allAboveTotalStoriesReads/10), Math.round(allAboveTotalStoriesRecs/10)));

		resultsTableBody.appendChild(createKeywordRow("[Contains a Number]", 
			storiesWithKeyNumber, storiesWithKeyNumberViews, 
			storiesWithKeyNumberReads, storiesWithKeyNumberRecs));

		//all above with "Contains Number"
		allAboveTotalStories = storiesWithKeyHow + storiesWithKeyHowI + storiesWithKeyHowMy
		+ storiesWithKeyHowTo + storiesWithKeyHowWe + storiesWithKeyWay + storiesWithKeyWays
		+ storiesWithKeyWhy + storiesWithKeyWhat + storiesWithKeyWhen + storiesWithKeyNumber;
		allAboveTotalStoriesViews = storiesWithKeyHowViews + storiesWithKeyHowIViews + storiesWithKeyHowMyViews
		+ storiesWithKeyHowToViews + storiesWithKeyHowWeViews + storiesWithKeyWayViews + storiesWithKeyWaysViews
		+ storiesWithKeyWhyViews + storiesWithKeyWhatViews + storiesWithKeyWhenViews + storiesWithKeyNumberViews;
		allAboveTotalStoriesReads = storiesWithKeyHowReads + storiesWithKeyHowIReads + storiesWithKeyHowMyReads
		+ storiesWithKeyHowToReads + storiesWithKeyHowWeReads + storiesWithKeyWayReads + storiesWithKeyWaysReads
		+ storiesWithKeyWhyReads + storiesWithKeyWhatReads + storiesWithKeyWhenReads + storiesWithKeyNumberReads;
		allAboveTotalStoriesRecs = storiesWithKeyHowRecs + storiesWithKeyHowIRecs + storiesWithKeyHowMyRecs
		+ storiesWithKeyHowToRecs + storiesWithKeyHowWeRecs + storiesWithKeyWayRecs + storiesWithKeyWaysRecs
		+ storiesWithKeyWhyRecs + storiesWithKeyWhatRecs + storiesWithKeyWhenRecs + storiesWithKeyNumberRecs;

		resultsTableBody.appendChild(createKeywordRow("[All Above Averaged]", 
			Math.round(allAboveTotalStories/11), Math.round(allAboveTotalStoriesViews/11), 
			Math.round(allAboveTotalStoriesReads/11), Math.round(allAboveTotalStoriesRecs/11)));

		resultsTableBody.appendChild(createKeywordRow("[All Others]", 
			storiesWithoutKey, storiesWithoutKeyViews, 
			storiesWithoutKeyReads, storiesWithoutKeyRecs));

		var allStoriesRow = createKeywordRow("[All Stories]", 
			totalStories, totalStoriesViews, 
			totalStoriesReads, totalStoriesRecs);
		allStoriesRow.style.cssText = "background:#2c3e50";
		resultsTableBody.appendChild(allStoriesRow);

		//add the table body to the table
		resultsTable.appendChild(resultsTableBody);
		
		console.log("Analyzed " + totalStories + " stories.");
		displayResults(resultsTable);
		console.log("No more stories. Good Bye!");

		function createKeywordRow(keyword, totalStories, views, reads, recs) {
			var keyWordRow = document.createElement("tr");

			var totalStoriesDisplay = totalStories;
			var viewsDisplay = views;
			var readsDisplay = reads;
			var recsDisplay = recs;
			if(totalStories < 1) {
				totalStoriesDisplay = "--";
				viewsDisplay = "--";
				readsDisplay = "--";
				recsDisplay = "--";
			}

			var readRatio = (parseInt(reads)/parseInt(views)) * 100;
			var viewsToRecRatio = (parseInt(recs)/parseInt(views)) * 100;
			var readsToRecRatio = (parseInt(recs)/parseInt(reads)) * 100;

			var  readRatioDisplay = Math.round(readRatio) + "%";
			var  viewsToRecRatioDisplay = Math.round(viewsToRecRatio) + "%";
			var  readsToRecRatioDisplay = Math.round(readsToRecRatio) + "%";
			readRatioDisplay = !readRatioDisplay.contains("NaN")? readRatioDisplay : "--";
			viewsToRecRatioDisplay = !viewsToRecRatioDisplay.contains("NaN")? viewsToRecRatioDisplay : "--";
			readsToRecRatioDisplay = !readsToRecRatioDisplay.contains("NaN")? readsToRecRatioDisplay : "--";

			keyWordRow.appendChild(createTd(keyword));
			keyWordRow.appendChild(createTd(totalStoriesDisplay));

			keyWordRow.appendChild(createTd(readRatioDisplay));
			keyWordRow.appendChild(createTd(viewsToRecRatioDisplay));
			keyWordRow.appendChild(createTd(readsToRecRatioDisplay));
			keyWordRow.appendChild(createTd(""));
			keyWordRow.appendChild(createTd(""));
			keyWordRow.appendChild(createTd(viewsDisplay));
			keyWordRow.appendChild(createTd(readsDisplay));
			keyWordRow.appendChild(createTd(recsDisplay));

			return keyWordRow;
		}	
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
		var css = '.flat-table{margin-bottom:20px;border-collapse:collapse;font-family:Lato,Calibri,Arial,sans-serif;border:none;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px}.flat-table td,.flat-table th{box-shadow:inset 0 -1px rgba(0,0,0,.25),inset 0 1px rgba(0,0,0,.25)}.flat-table th{font-weight:400;-webkit-font-smoothing:antialiased;padding:1em;color:rgba(0,0,0,.45);text-shadow:0 0 1px rgba(0,0,0,.1);font-size:1.5em}.flat-table td{color:#f7f7f7;padding:.7em 1em .7em 1.15em;text-shadow:0 0 1px rgba(255,255,255,.1);font-size:1.4em}.flat-table tr{-webkit-transition:background .3s,box-shadow .3s;-moz-transition:background .3s,box-shadow .3s;transition:background .3s,box-shadow .3s}.flat-table-1{background:#1abc9c}.flat-table-1 tr:hover{background:rgba(0,0,0,.19)}';
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
