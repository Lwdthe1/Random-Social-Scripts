let arr = []
document.querySelectorAll('[data-testid="primaryColumn"] [aria-labelledby="accessible-list-9"] article').forEach((el) => {
let text = el.innerText 
if (!text.includes('Apr')) return
text = text.replace('#Smedian #TopPublications #TopPubs https://toppubs.smedian.com', '').replace('Smedian', '').replace('@smedian_network', '')
arr.push(text)  
})
console.log(arr.join('\n'))
