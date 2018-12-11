const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//quello che fa nella pagina localhost:3000 -> Hello World!

app.get('/', (req, res) => {
    res.send("Hello world!")

})

app.listen(PORT, () => console.log('Example app listening on port: ' + PORT))

//ERRORI: se non è stato fatto nulla di quello sopra allora darà un errore
/*app.use((req,res,next)=>{
    const error = new Error('Page not found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
*/