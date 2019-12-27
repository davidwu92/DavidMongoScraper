//GET ARTICLES FROM DB, make cards with "Save" and "Delete" buttons.
const scrapeArticles = () => {
  //GET articles from db.
  axios.get('/scrape')
    .then(({data})=>{
      console.log(data)
      //CREATE CARDS for Articles
    })
    .catch(e=>console.error(e))
}
scrapeArticles()

const getArticles = () => {
  axios.get('/articles')
    .then(({data}) => {
      console.log(data)
      //create cards for articles
    })
    .catch(e=>console.error(e))
}
setTimeout(getArticles(), 1000)

setTimeout(console.log("hi"), 2000)

setTimeout(console.log('Ten Seconds'), 10000)