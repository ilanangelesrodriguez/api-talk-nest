import express from 'express';

const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`)
})
