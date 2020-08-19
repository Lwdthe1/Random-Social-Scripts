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
  })
  
  stories.forEach(({price}) => {
    if (price === 0.01) addPriceToGroup(groupMap.e001, price)
    if (price >= 0.02 && price <= 0.5) addPriceToGroup(groupMap.e002To050, price)
    if (price >= 0.51 && price <= 1) addPriceToGroup(groupMap.e051To100, price)
    if (price >= 1.01 && price <= 5) addPriceToGroup(groupMap.e101To500, price)
    if (price >= 5.01 && price <= 10) addPriceToGroup(groupMap.e501To1000, price)
    if (price >= 10.01) addPriceToGroup(groupMap.e1001Up, price)
  })
  
  const getGroupKeyPriceRange = (group) => {
    const sorted = group.prices.sort()
    return {min: sorted[0], max: sorted[sorted.length - 1]}
  }
  
  Object.values(groupMap).forEach((group) => {
    const range = getGroupKeyPriceRange(group)
    if (range.numPrices) {
      const rangeDisplay = range.min !== range.max ? `between $${range.min} and $${range.max}` : `$${range.min}`
      group.report = `${group.numPrices} of my stories earned ${rangeDisplay}.`
    }
  })
  
  const report = Object.values(groupMap).map(({report}) => report).join('\n')
  console.log(`%c✨💸 Your earnings report: \n${report}`, "color:#1abc9c; font-size:50px; font-weight: 700")
  return {groupMap, report}
}

console.log(runEarningsAnalysis())
