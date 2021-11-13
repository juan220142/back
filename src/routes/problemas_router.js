const {Router} = require('express')
const route=Router()
const controller=require('../controllers/problemas_controller')
const path = require("path");

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", '201.184.144.194')
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next()
});

route.get('/fibo',controller.getFib)
route.get('/fact',controller.getFact)
route.get('/circ',controller.getCirc)
route.get('/rect',controller.getRect)
route.get('/trian',controller.getTrian)
module.exports=route