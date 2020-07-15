var express = require('express')
var router = express.Router();
var db = require("../models");
var helpers = require('../helpers/todos')


router.route('/')
    .get(helpers.getTodos)

router.post('/', function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)


module.exports = router;