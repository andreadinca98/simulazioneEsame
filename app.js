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
        if(s>=0){
            res.json({result:-1})
        }
        else{
            var l = s.length
            res.json({result: (l*l)})
        }
 
    }

})


app.listen(PORT, () => console.log('Example app listening on port '+ PORT))