const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
 
app.get('/', (req, res) => res.send('Hello World!'))
 
app.get('/square/:s', (req, res) => {
    //console.log("c")
    var s = req.params.s
    res.json({result: string_square(s)})
})

function string_square(s)
{
    if(s>=0){
        return -1
    }
    else{
        var l = s.length
        return(l*l)
    }
}
app.listen(PORT, () => console.log('Example app listening on port'+ PORT))
