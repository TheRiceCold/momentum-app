const baseUrl = 'https://dalewaltergh.github.io/Activity6-Momentum-App/main/docs/json/'
const endpointUrl = 'quotes.json'
const url = baseUrl+endpointUrl

export function getQuotes() {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const values = Object.values(data)
    const randomValue = values[parseInt(Math.random() * values.length)]
    console.log(randomValue) 
  })
}


