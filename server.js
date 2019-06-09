const express = require('express');

const app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.listen(port,() => {
    console.log(`Started up at port ${port}`)
})