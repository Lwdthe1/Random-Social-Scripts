function runEarningsAnalysis(predicates) {
  const utils = {
    isNumberBetween(price, range) {
      if (range[1] === undefined) {
        range[1] = range[0]
      }

      return price >= range[0] && price <= range[1]
    },
    isNumberGreaterThan(price, min) {
      return price > max
    },
    isNumberAtleast(price, min) {
      return price >= min
    },
    isNumberLessThan(price, max) {
      return price < max
    },
    isNumberEqual(price, target) {
      return price === target
    }
  }
  
  // Shape the groups
  const groups = predicates.reduce((arr, predicate) => {
    const group = {
      predicate,
      stories: [],
      prices: [],
      numPrices: 0,
      maybeAddStory(story) {
        if (!predicate(story, utils)) {
          return
        }
        this._addStory(story)
      },
      getPriceRange() {
        const sorted = group.prices.sort()
        return {min: sorted[0], max: sorted[sorted.length - 1]}
      },
      _addStory(story) {
        this.stories.push(story)
        this.prices.push(story.price)
        this.numPrices = this.prices.length
      },
    }
    
    arr.push(group)
    return arr
  }, [])
  
  const stories = Array.from(document.querySelectorAll('.js-postAmount')).map((node) => {
      const titleLink = node.parentElement.parentElement.querySelectorAll('a[data-action="open-post"]')[0]
      
      return {
        titleLink,
        title: titleLink && titleLink.text,
        url: titleLink && titleLink.href,
        price: parseFloat(node.innerText.replace('$', ''))
      }
  })
  
  const periodDisplay = document.querySelector('.js-selectPeriod').innerText
  
  stories.forEach((story) => {
      groups.forEach((group) => group.maybeAddStory(story))
  })
  
groups.forEach((group) => {
    if (!group.numPrices) {
      return
    }
    
    const range = group.getPriceRange()
    const rangeDisplay = range.min !== range.max ? `between $${range.min} and $${range.max}` : `$${range.min}`
    const storiesDisplay = group.stories.map(({title, price}) => {
      return `${title ? title: '*DELETED'} — $${price}`
    }).join('\n\n  ')
    group.report = `${group.numPrices} of my stories earned ${rangeDisplay}.  The stories were ${storiesDisplay}`
  })
  
  const totalReportData = groups.reduce((data, group) => {
    const {min, max} = group.getPriceRange()
    if (min !== undefined) {
      if (!data.minPrice || min < data.minPrice) {
        data.minPrice = min
      }

      if (!data.maxPrice || max > data.maxPrice) {
        data.maxPrice = max
      }

      data.numPrices += group.numPrices
    }
    
    return data
  }, {numPrices: 0, minPrice: 0, maxPrice: 0})
  
  const totalEarnings = stories.reduce((sum, {price}) => sum + price, 0).toFixed(2)
  const report = `I had ${totalReportData.numPrices} stories that earned me between $${totalReportData.minPrice} and $${totalReportData.maxPrice}.
    They totaled to $${totalEarnings}
    ${groups.map(({report}) => report).join('\n\n   ')}`
  

  
  console.log(
    `%c✨💸 My earnings report for ${periodDisplay}: \n%c${report}`, 
    "color:#1abc9c; font-size:50px; font-weight: 700", 
    'color:#333; font-size:14px; font-weight: 700'
  )

  return {
    groups, 
    report, 
    stories, 
    totalReportData,
    totalEarnings, 
    periodDisplay,
    printData() {
      console.log(JSON.stringify(this))
    }
  }
}

console.log(runEarningsAnalysis([
    ({price}, {isNumberBetween}) => isNumberBetween(price, [0.01]),
    ({price}, {isNumberBetween}) => isNumberBetween(price, [0.02, 0.50]),
    ({price}, {isNumberBetween}) => isNumberBetween(price, [0.51, 1.00]),
    ({price}, {isNumberBetween}) => isNumberBetween(price, [1.01, 5.00]),
    ({price}, {isNumberBetween}) => isNumberBetween(price, [5.01, 10.00]),
    ({price}, {isNumberAtleast}) => isNumberAtleast(price, 10.01),
  ]).printData())
