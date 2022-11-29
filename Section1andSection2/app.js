import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import Route from './router/index.js';

const port = 3500; 

const server = express();


server.use(express.json())
server.use(bodyParser.json())

mongoose.connect('mongodb+srv://nghia1:nghia123@baitap.mgnbrjn.mongodb.net/test')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected!')
});

Route(server)

server.listen(port, () => {
  console.log(`Server running at ${port}`);
})