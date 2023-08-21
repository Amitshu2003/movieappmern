import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Favs from './model.js'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/liked', async (req, res) => {
    try {
        const liked = await Favs.find()
        res.status(200).json(liked)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
})

app.post('/liked', async (req, res) => {
    const { title, year, type, image } = req.body
    try {
        const newFav = new Favs({ title, year, type, image })
        await newFav.save()
        res.status(200).json("added successfully")
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
})


mongoose.connect("mongodb://localhost:27017/movieAssignment")
    .then(() => app.listen(5000, () => console.log('app listening on port 5000')))
    .catch((err) => console.log(err))