function runEarningsAnalysis() {
  const stories = Array.from(document.querySelectorAll('.js-postAmount')).map((node) => {
      return {price: parseFloat(node.innerText.replace('$', ''))}
  })
  
  const addPriceToGroup = (group, price) => {
    if (!group.prices) {
      group.prices = []
      group.numPrices = 0
    }
    
    group.prices.push(price)
    group.numPrices++
  }

  const data = stories.reduce((map, {price}) => {
    if (price === 0.01) addPriceToGroup(map.e001, price)
    if (price >= 0.02 && price <= 0.5) addPriceToGroup(map.e002To050, price)
    if (price >= 0.51 && price <= 1) addPriceToGroup(map.e051To100, price)
    if (price >= 1.01 && price <= 5) addPriceToGroup(map.e101To500, price)
    if (price >= 5.01 && price <= 10) addPriceToGroup(map.e501To1000, price)
    if (price >= 10.01) addPriceToGroup(map.e1001Up, price)
    
    return map
  }, {
    // These keys must all 
    // start with "e", 
    // the two numbers should be separated by "T",
    // and the numbers should represent cents ($)
    e001: {}, e002To050: {}, e051To100: {}, e101To500: {}, e501To1000: {}, e1001Up: {}
  })
  
  const getGroupKeyPriceRange = (group) => {
    const sorted = group.prices.sort()
    return {min: sorted[0], max: sorted[sorted.length - 1]}
  }
  
  Object.values(data).reduce((map, group) => {
    const range = getGroupKeyPriceRange(group)
    group.sentence = `${group.numPrices} of my stories earned between $${range.min} and $${range.max}.`
    return map
  }, {})
      
  return data
}

console.log(runEarningsAnalysis())
