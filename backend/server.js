const express = require('express');
const fs = require('fs');
var cors = require('cors')

const app = express();
app.use(cors());

app.get('/products', (req, res) => {
    fs.readFile(__dirname+'/products.json', 'utf8', (err, data)=>{
        console.log(data);
        res.end(data);
    })   
});

app.listen('5000', () => {
    console.log("Server Started on port 5000");
})