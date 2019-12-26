//GET ARTICLES FROM DB, make cards with "Save" and "Delete" buttons.
const getArticles = () => {
  //GET articles from db.
  axios.get('/articles')
    .then(({data})=>{
      console.log(data)
      //CREATE CARDS for Articles
    })
    .catch(e=>console.error(e))
}
getArticles()

