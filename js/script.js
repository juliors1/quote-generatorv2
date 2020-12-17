// Constants
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
// Get quote from an API
async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    try {
        const response = await fetch(proxyUrl + apiUrl)
        const data = await response.json()
        console.log(data )
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = data.quoteAuthor
        }
        quoteText.innerText = data.quoteText

    } catch (error) {
        getQuote() // add this to get a new quote if you get an error
        console.log('whaaaaatttthappnnnnnnnn, no quote, ', error)
    }
}
// Tweet that Quote
function tweetQuote() {
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
    window.open(twitterUrl, '_blank')
}
// Event Listeners
newQuoteBtn.addEventListener('click', getQuote)
twitterBtn.addEventListener('click', tweetQuote)
// My onload
getQuote()