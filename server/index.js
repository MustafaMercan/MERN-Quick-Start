require('dotenv').config({
    path: `./config/.env.${process.env.NODE_ENV || 'development'}`
});

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const connectDB = require('./config/ConnectDb');
const app = express();
const PORT = process.env.PORT || 3000 
const cookieParser = require('cookie-parser');
const apiRoute = require('./routes/index')

const init = async() => {
    try{


        await connectDB();

        //Deployment With Proxy
        app.set('trust proxy', 1);
        
        //Deployment Static file
        app.use('/js', express.static(path.join(__dirname, 'public/js')));

        app.use(express.json());
        app.use(express.urlencoded({ extended: true })); // Form process
        app.use(cookieParser()); // Handle Cookie


        app.use('/api',apiRoute);


        app.listen(PORT, () => {
            console.log(`Sunucu ${PORT} numaralı portta ${process.env.NODE_ENV} modunda çalışıyor`);
        })

    }catch(error){

    }

} 

init();
