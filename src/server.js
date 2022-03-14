import express from 'espress'
const app = express()
const port = 3000 
app.get('/', (req, res)=> {
res.send('Hello Word!')
})
app.listen(port, () => {
console.log('example app listening on port ${port}')
})
app.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })

