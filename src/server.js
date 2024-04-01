const express = require('express');
const morgan =require("morgan");
const cors = require("cors");
const shortid = require("shortid");
const fs    = require("fs/promises");
const path = require("path");

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//search by id
app.get('/:id' ,async (req, res) => {
    const id = req.params.id;

    const data = await fs.readFile('./data.json');
    const players =JSON.parse(data);

    const player =players.find(item => item.id === id);

    if(!player){
        return res.status(404).json({message:"Player not found"});
    }

    res.status(200).json(player);

    
})

//insert the player 
app.post('/', async(req,res)=>{
    const player ={
        ...req.body,
        id: shortid.generate(),
    }
    res.status(201).json(player);

    const data = await fs.readFile('./data.json');
    const players =JSON.parse(data);
    players.push(player);

    await fs.writeFile('./data.json',JSON.stringify(players));
    res.status(201).json(player);


})

//search player
app.get('/', async (req, res) => {
    const data = await fs.readFile('./data.json');
    const players = JSON.parse(data);
    res.status(201).json(players);


})


app.get('/health', (req, res) => {
    res.status(200).json({status: 'OK'});
});

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log("listening on port " + port );
})