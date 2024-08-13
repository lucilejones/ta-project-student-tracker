const express = require('express');
const studentRouter = express.Router();
const Student = require('../models/student');

studentRouter.post('/', async(req, res, next) => {
    try {
        req.body.assignedInstr = req.auth._id;
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        return res.status(201).send(savedStudent);
    } catch (error) {
        res.status(500);
        return next(error);
    }
})

studentRouter.get('/allStudents', async(req, res, next) => {
    try {
        const foundStudents = await Student.find();
        return res.status(200).send(foundStudents);
    } catch (error) {
        res.status(500);
        return next(error);
    }
})

studentRouter.get('/byInstructor', async(req, res, next) => {
    try {
        const foundStudents = await Student.find({assignedInstr: req.auth._id});
        return res.status(200).send(foundStudents);
    } catch (error) {
        res.status(500);
        return next(error);
    }
})

studentRouter.delete('/:studentId', async(req, res, next) => {
    try {
        const studentId = req.params.studentId;
        const deletedStudent = await Student.findByIdAndDelete(studentId);
        return res.status(200).send(`You've successfully deleted ${deletedStudent.firstName}.`);
    } catch (error) {
        res.status(500);
        return next(error);
    }
})

studentRouter.put('/:studentId', async(req, res, next) => {
    try {
        const studentId = req.params.studentId;
        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            req.body,
            { new: true}
        )
        return res.status(201).send(updatedStudent);
    } catch (error) {
        res.status(500);
        return next(error);
    }
})

module.exports = studentRouter;