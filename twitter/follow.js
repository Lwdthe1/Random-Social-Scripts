let fhgafghFollowNScroll
(function() {
	let followAttempts = 0
	let totalFollowed = 0
	let restSecs = 60
	function followAndScroll(limitPerRound) {
		limitPerRound = limitPerRound || 2

		window.scrollBy(0, 5000) // horizontal and vertical scroll increments

		let followedThisTime = 0
		let i = 0
		while (i++ < limitPerRound) {
			const jFollowButton = $('[data-testid*="-follow"]')
			jFollowButton.click()
		}

		totalFollowed += followedThisTime

		if (followedThisTime > 0) console.log(++followAttempts + ' | tf:' + totalFollowed)
		if (followAttempts <= 3000) scrolldelay = setTimeout(followAndScroll, restSecs * 1000)
		// scrolls every 100 milliseconds
		else {
			console.log('Followed ' + totalFollowed)
			console.log('Restarting in an hour ...')
			followAttempts = 0
			totalFollowed = 0
			setTimeout(followAndScroll.bind(window), 45 * 60 * 1000)
		}
	}

	//call the method
	fhgafghFollowNScroll = followAndScroll
	followAndScroll(1)
})()
