const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig')
const apiRoutes = require('./routes/index');
const app = express();
// const UserRepository =require('./repository/user-repository');

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT, async () => {
        console.log('Server started : ',PORT);
       
    })
}

prepareAndStartServer();