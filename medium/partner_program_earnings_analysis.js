function runEarningsAnalysis() {
  const stories = Array.from(document.querySelectorAll('.js-postAmount')).map((node) => {
      return {price: parseFloat(node.innerText.replace('$', ''))}
  })

  const data = stories.reduce((map, {price}) => {
    if (price === 0.01) map.e001++
    if (price >= 0.02 && price <= 0.5) map.e002To050++
    if (price >= 0.51 && price <= 1) map.e051To100++
    if (price >= 1.01 && price <= 5) map.e101To500++
    if (price >= 5.01 && price <= 10) map.e501To1000++
    if (price >= 10.01) map.e1001Up++
    
    return map
  }, { e001: 0, e002To050: 0, e051To100: 0, e101To500: 0, e501To1000: 0, e1001Up: 0 })
  
  return data
}

console.log(runEarningsAnalysis())
