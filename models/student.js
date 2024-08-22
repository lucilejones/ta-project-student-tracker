const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    currLevel: {
        type: Number,
        required: true
    },
    progressPoint: {
        type: Number,
        required: true
    },
    assignedInstr: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    instrName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Student", studentSchema);