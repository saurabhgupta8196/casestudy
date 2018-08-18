//importing libraries
var http = require('http');
var express = require('express');
var data = require('./data.json')
var parser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
var exp = express();
var courses=require('./courses.json')
//Declaring Vaiables
var appendData;
var _url = '/get';
var _url1 = '/edit';
var _url2 = '/add';
var _url3 = '/getCourses';

exp.route(_url, cors()).get((req, res) => {
    console.log("Get Url invoked");
    res.send(data);
    res.end();
});

exp.route(_url3, cors()).get((req, res) => {
    console.log("Get Url invoked");
    res.send(courses);
    res.end();
});
exp.use(cors()).listen(4004, () => console.log("Running"));

exp.use(parser.json());
exp.route(_url2, cors()).post((req, res) => {
    //console.log(req.body);
    console.log("Post Invoked");
    data.push(req.body)
    console.log(data)
    fs.writeFileSync('data.json', JSON.stringify(data))
    res.status(201).send(data);
});
