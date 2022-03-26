import express from 'express'
import * as mongoose from 'mongoose'

import { Character } from './models/character'

// Init Mongoose
mongoose.connect('mongodb://localhost:27017/cyberpunk-red-db')

// Init Server
const app = express()
const port = 3000

// const kitty = new Cat({ name: 'Zildjian' })
// kitty.save().then(() => console.log('meow'))

app.get('/', (req: any, res: any) => {
  const characters = Character.find({
    name: 'Forty'
  })
  res.send({
    characters
  })
})

app.listen(port, async () => {
  try {
    await run()
  } catch (error) {
    console.error(error)
  }

  console.log(`Example app listening on port ${port}`)
})

const run = async () => {
  const forty = await Character.findOneAndUpdate(
    { name: 'Forty' },
    { name: 'Forty ', hits: 30 },
    { upsert: true }
  )
  await forty.save()
}
