const express = require('express');
const PORT = 8080;

const app = express(); 
app.use(express.json() )    //middleware function to parse json

app.get('/fits', (req, res) => {
    res.status(200).send({
       dress : '👗',
        size:'small'
    })
});

app.post('/fits/:id', (req, res) =>{
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo) {
        res.status(200).send({
            message: '👗 we need a logo!'
        })
        res.send({
            dress: '👗 with your ${logo} and ID of ${id}',
         });
        
    }
})

app.listen(PORT, () =>
    console.log("server is running at port 8080 ${PORT}")
);
