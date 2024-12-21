const express = require('express');
const router = express.Router();
const cors = require('cors');
const AuthRoute = require('./AuthRoute');

const allowedCors = cors({
    origin: [
        "http://localhost:5173",
    ], 
    methods: ["GET", "POST", "PUT", "DELETE"], // İzin verilen HTTP yöntemleri
    credentials: true, // Çerez gönderimini aktif eder
});
const unrestrictedCors = cors({
    origin: '*', 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: false, 
});


router.use('/auth',allowedCors, AuthRoute);

module.exports = router;