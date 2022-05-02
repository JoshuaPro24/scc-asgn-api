let AssignmentModel = require('../models/asgn_model');
let express = require('express');
let router = express.Router();

router.post('/assignment', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing!');
    } 
    let model = new AssignmentModel(req.body);
    model.save()
    .then(doc => {
        if(!doc || doc.length === 0){
            return res.status(500).send(doc);
        }

        res.status(201).send(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/assignment', (req, res) => {
    if(!req.query.assignmentName){
        return res.status(400).send('Missing URL Parameter: assignmentName');
    }
    AssignmentModel.findOne({
        assignmentName: req.query.assignmentName
    })
    .then(doc => {
        res.json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.put('/assignment', (req, res) => {
    if(!req.query.assignmentName){
        return res.status(400).send('Missing URL Parameter: assignmentName');
    }
    AssignmentModel.findOneAndUpdate({
        assignmentName: req.query.assignmentName
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.delete('/assignment', (req, res) => {
    if(!req.query.assignmentName){
        return res.status(400).send('Missing URL Parameter: assignmentName');
    }
    AssignmentModel.findOneAndRemove({
        assignmentName: req.query.assignmentName
    })
    .then(doc => {
        res.json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;