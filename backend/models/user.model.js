import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "recruiter"],
        required: true
    },
    profile: {
        bio:{type: String},
        skills: [{type: String}],
        resume: {type: String}, //url of the resume file
        resumeOriginalName: {type: String}, //original name of the resume file
        company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"}, //company id if user is recruiter
        profilePhoto: {type: String, default: ""}
    },
    
}, { timestamps: true });

export const User = mongoose.model("User", userSchema); //create a model from the schema