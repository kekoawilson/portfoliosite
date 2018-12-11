require('dotenv').config()
const express = require('express')
    , cors = require('cors')

const app = express()
app.use( cors() )

app.use( express.static( `${__dirname}/..` ) );
app.use( express.static( `images` ) );
app.use( express.static( `assets` ) );

app.listen(process.env.SERVER_PORT, () =>console.log(`listening on port: ${process.env.SERVER_PORT}`))