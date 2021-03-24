const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21savage': {
        'age': 28, 
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 27, 
        'birthName': 'Chancellor Jonathon Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 'unknown', 
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')     
})
app.get('/api/rappers/:rapperName', (req, res) => {
    const rapName = req.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
        res.json(rappers[rapName])
    } else{
        res.json(rappers['unknown'])
    }

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})