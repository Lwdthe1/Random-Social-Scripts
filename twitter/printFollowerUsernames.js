function hsdhdjhRun() {
    String.prototype.contains = function(s) {
        return this.indexOf(s) > -1
    }

    var addedScreenNamesMap = {}
    var addedScreenNames = ""
    var attempts = 0
    var totalAdded = 0
    var restSecs = 0.5
    function runAgain() {
        var addedThisTime = 0
        window.scrollBy(0,500); // horizontal and vertical scroll increments
        var userCards = document.getElementsByClassName('ProfileCard-userFields');
        //alert(twitterFollowButtons.length);
        for(var i = 0; i < userCards.length; i++) {
            var screenName, userName, userBio
            var userCard = userCards[i];
            var userNameEl = userCard.getElementsByClassName("ProfileNameTruncated-link u-textInheritColor js-nav js-action-profile-name")[0];
            var screenNameEl = userCard.getElementsByClassName("ProfileCard-screennameLink u-linkComplex js-nav")[0];
            var bioEl = userCard.getElementsByClassName("ProfileCard-bio u-dir")[0];
            
            userName = userNameEl && userNameEl.innerHTML || ""
            screenName = "@" + (screenNameEl && screenNameEl.href && screenNameEl.href.split("com/")[1] || "")
            userBio = bioEl && bioEl.innerHTML || ""
            var all = userName.trim() + " " + screenName.trim() + " " + userBio.trim()
            all = all.toLowerCase()
            var isMatch = all.contains("entrepreneur") 
                || all.contains("startup") 
                || all.contains("start-up") 
                || all.contains("marketing") 
                || all.contains("growth marketing")
                || all.contains("digital marketing")
                || all.contains("digital advertising")
                || all.contains("sales analytics")
                || all.contains("business analytics")
                || all.contains("biz analytics")
                || all.contains("growth hacking") 
                || all.contains("growthhacking") 
                || all.contains("growthmarketing") 
                || all.contains("content marketing")
                || all.contains("contentmarketing")
                || all.contains("social media")
                || all.contains("socialmedia")
                || all.contains("business")
                || all.contains("biz")
                || all.contains("saas")
                || all.contains("b2b")
                || all.contains("sales")
                || all.contains("advertising")
            if (isMatch) {
                if(!addedScreenNames.contains(screenName)) {
                    addedScreenNames += " " +screenName
                    addedScreenNamesMap[screenName] = all
                    addedThisTime += 1
                }
            }
        }

        ++attempts
        if(addedThisTime > 0) {
            totalAdded = addedScreenNames.split("@").length
            console.error(attempts + " | total added: " + totalAdded);
            console.error("\n" +addedScreenNames)
        }
        setTimeout(function(){ runAgain() }, restSecs * 1000); // scrolls every 1000 milliseconds
    }

    function getChildNodeByClassName(obj, className) {
        for (var i = 0; i < doc.childNodes.length; i++) {
            if (doc.childNodes[i].className == className) {
                return doc.childNodes[i];
            }        
        }
    }

    runAgain()
}
//call the method
hsdhdjhRun();
