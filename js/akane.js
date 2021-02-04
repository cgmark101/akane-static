let url = 'https://akane.ga/api/v1/search/naruto'
let url2 = 'https://jsonplaceholder.typicode.com/todos/1'

fetch(url2)
  .then(response => response.json())
  .then(json => console.log(json))
