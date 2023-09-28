const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig')
const apiRoutes = require('./routes/index');
const app = express();
const UserService = require('./services/user-service');
// const UserRepository =require('./repository/user-repository');

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT, async () => {
        console.log('Server started : ',PORT);
        const service = new UserService();
        // const newToken = service.createToken({email: 'manohar@admin.com',id:'1'});
        // console.log("new token is : ",newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbm9oYXJAYWRtaW4uY29tIiwiaWQiOiIxIiwiaWF0IjoxNjk1ODc4NTQ3LCJleHAiOjE2OTU4ODIxNDd9.Wfet_iTuedsumUlzBf54jm0IQ3aaepiaNAAUOc99F90'
        // const response = service.verifyToken(token);
        // console.log("Response is : ",response);
    })
}

prepareAndStartServer();