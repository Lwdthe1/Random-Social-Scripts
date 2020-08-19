function runEarningsAnalysis() {
  const stories = Array.from(document.querySelectorAll('.js-postAmount')).map((node) => {
      return {price: parseFloat(node.innerText.replace('$', ''))}
  })
  
  const addPriceToGroup = (group, price) => {    
    group.prices.push(price)
    group.numPrices++
  }
  
  const groupMap = {
    // These keys must all 
    // start with "e", 
    // the two numbers should be separated by "T",
    // and the numbers should represent cents ($)
    e001: {}, e002To050: {}, e051To100: {}, e101To500: {}, e501To1000: {}, e1001Up: {}
  }
  
  // Shape the groups
  Object.values(groupMap).forEach((group) => {
    group.prices = []
    group.numPrices = 0
    
    group.addPrice = (price) => {
          console.log('----here2', price, group)
      group.prices.push(price)
      group.numPrices = group.prices.length
    }
    
    group.getPriceRange = () => {
      const sorted = group.prices.sort()
      return {min: sorted[0], max: sorted[sorted.length - 1]}
    }
  })
  
  stories.forEach(({price}) => {
    console.log('----here1', price)
    if (price === 0.01) groupMap.e001.addPrice(price)
    if (price >= 0.02 && price <= 0.5) groupMap.e002To050.addPrice(price)
    if (price >= 0.51 && price <= 1) groupMap.e051To100.addPrice(price) 
    if (price >= 1.01 && price <= 5) groupMap.e101To500.addPrice(price) 
    if (price >= 5.01 && price <= 10) groupMap.e501To1000.addPrice(price)
    if (price >= 10.01) groupMap.e1001Up.addPrice(price)
  })
  
  Object.values(groupMap).forEach((group) => {
    if (!group.numPrices) {
      return
    }
    
    const range = group.getPriceRange()
    const rangeDisplay = range.min !== range.max ? `between $${range.min} and $${range.max}` : `$${range.min}`
    group.report = `${group.numPrices} of my stories earned ${rangeDisplay}.`
  })
  
  const report = Object.values(groupMap).map(({report}) => report).join('\n\n')
  console.log(`%c✨💸 My earnings report: \n%c${report}`, "color:#1abc9c; font-size:50px; font-weight: 700", 'color:#333; font-size:14px; font-weight: 700')
  return {groupMap, report}
}

console.log(runEarningsAnalysis())
