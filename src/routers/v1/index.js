const express =require('express');

const router =express.Router();

const {response , response1} = require('../../controller');

router.get('/',response);

router.get('/home',response1);

module.exports =router;

