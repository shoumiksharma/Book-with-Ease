import mongoose from 'mongoose';
import express from 'express';

const userSchema = new mongoose.Schema({
    name: {type: String , required: true},
    username: { type: String , required: true , unique: true},
    password: { type: String , required: true}
});

const userModel = mongoose.model("user", userSchema);

export default userModel;