// 套用框架以及設定常用的變數的地方
const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

// 告訴Express，將樣板引擎交給express-handlebars
app.engine('.hbs', engine({ extname: '.hbs' }))   //透過這個方法來定義要使用的樣板引擎，其中參數 .hbs 是這個樣板引擎的名稱
app.set('view engine', '.hbs')    //透過這個方法告訴 Express 說要設定的 view engine 是 hbs (handlebars)
app.set('views', './views')

// 將public中的檔案代入app.js
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index')   //利用局部樣板index.hbs重新渲染main.hbs的body部份
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`read restaurant: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})
