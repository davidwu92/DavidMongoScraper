//server.js ~~~~~Packages installed: axios, cheerio, express, mongoose
require('./config')
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const {join} = require('path')
const app = express()

//middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//bring in routes
require('./routes')(app)


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CHEERIO STUFF~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
axios.get('https://www.nytimes.com/section/todayspaper#thefrontpage')
  .then(({data: html})=>{
    const $ = cheerio.load(html)
    console.log('~~~~~~~~~~~~~~~SCRAPE MATERIAL BELOW~~~~~~~~~~~~~~~')
    //div with link, title, summary
    $('div.css-10wtrbd').children('h2').children('a')
      .each((i, elem)=>{
        console.log($(elem).text())
      })
    $('div.css-10wtrbd').children('p.css-1gh531')
      .each((i, elem)=>{
        console.log($(elem).text())
      })


    //p-tag summary text
    // console.log($('p.css-1gh531').text())
  })
  .catch(e=>console.error(e))
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CHEERIO STUFF~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//listen once connection is open
require('mongoose')
  .connection
  .once('open', ()=>app.listen(3000))
