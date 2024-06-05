const express = require("express");
const studentSchema = require("../models/student");

const router = express.Router();

//create student
router.post('/student', (req, res) => {
    const student = studentSchema(req.body);
    student
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

//get all students
router.get('/student', (req, res) => {
    studentSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

//get a student
router.get('/student/:id', (req, res) => {
    const { id } = req.params;
    studentSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

//update a student
router.put('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email, carrer, grade, phone, subjects } = req.body
    studentSchema
        .updateOne({ _id: id }, { $set: (name, age, email, carrer, grade, phone, subjects) })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

//delete a student
router.delete('/student/:id', (req, res) => {
    const { id } = req.params;
    studentSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

module.exports = router;