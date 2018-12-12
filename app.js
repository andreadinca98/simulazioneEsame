const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
 
app.get('/', (req, res) => {
    res.send('Hello World!')
    res.status(200)
})
 
app.get('/square', (req, res) => {
    var s = req.query.string
    square(s)
    function square(string){
        var s = string
        if(isNaN(s)){
            var l = s.length
            res.json({result: (l*l)})
        }
        else{
            res.json({result:-1})
        }
 
    }

})


app.listen(PORT, () => console.log('Example app listening on port '+ PORT))