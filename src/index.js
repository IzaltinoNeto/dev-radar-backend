const express = require('express');

const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://izaltino:13852749@cluster0-rbbc6.mongodb.net/week10?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());


//Query Params: request.query (Filtros, Ordenação, Paginação..)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: 
app.use(routes);

app.listen(3333);