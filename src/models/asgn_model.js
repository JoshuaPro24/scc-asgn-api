let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

let AssignmentSchema = new mongoose.Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: Date
});

module.exports = mongoose.model('Assignment', AssignmentSchema);