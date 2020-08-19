function runEarningsAnalysis() {
  const predicates = [
    (price) => 0.01,
    (price) => [0.02, 0.50],
    (price) => [0.51, 1.00],
    (price) => [1.01, 500],
    (price) => [5.01, 10.00],
  ]
  
  // Shape the groups
  const groups = predicates.reduce((arr, predicate) => {
    const group = {
      predicate,
      prices: [],
      numPrices: 0,
      maybeAddPrice(price) {
        if (!predicate(price)) {
          return
        }
        this._addPrice(price)
      },
      getPriceRange() {
        const sorted = group.prices.sort()
        return {min: sorted[0], max: sorted[sorted.length - 1]}
      },
      _addPrice(price) {
        this.prices.push(price)
        this.numPrices = group.prices.length
      },
    }
    
    arr.push(group)
    return arr
  }, [])
  
  const stories = Array.from(document.querySelectorAll('.js-postAmount')).map((node) => {
      return {price: parseFloat(node.innerText.replace('$', ''))}
  })
  
  const periodDisplay = document.querySelector('.js-selectPeriod').innerText
  
  const addPriceToGroup = (group, price) => {    
    group.prices.push(price)
    group.numPrices++
  }
  
  stories.forEach(({price}) => {
      groups.forEach((group) => group.maybeAddPrice(price))
  })
  
groups.forEach((group) => {
    if (!group.numPrices) {
      return
    }
    
    const range = group.getPriceRange()
    const rangeDisplay = range.min !== range.max ? `between $${range.min} and $${range.max}` : `$${range.min}`
    group.report = `${group.numPrices} of my stories earned ${rangeDisplay}.`
  })
  
  const totalReportData = groups.reduce((data, group) => {
    const {min, max} = group.getPriceRange()
    if (min === undefined) {
      return
    }
    
    if (!data.minPrice || min < data.minPrice) {
      data.minPrice = min
    }
    
    if (!data.maxPrice || max > data.maxPrice) {
      data.maxPrice = max
    }
    
    data.numPrices += group.numPrices
    
    return data
  }, {numPrices: 0, minPrice: 0, maxPrice: 0})
  
  const report = `I had ${totalReportData.numPrices} stories that earned me between $${totalReportData.minPrice} and $${totalReportData.maxPrice}. 
    ${groups.map(({report}) => report).join('\n\n   ')}`
  
  console.log(
    `%c✨💸 My earnings report for ${periodDisplay}: \n%c${report}`, 
    "color:#1abc9c; font-size:50px; font-weight: 700", 
    'color:#333; font-size:14px; font-weight: 700'
  )

  return {groups, report}
}

console.log(runEarningsAnalysis())
