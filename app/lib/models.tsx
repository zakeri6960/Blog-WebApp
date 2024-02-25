import mongoose from "mongoose";
import { IContact, IPost, IUser } from "./types";




const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 12,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 18,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},{timestamps: true});



const postSchema = new mongoose.Schema<IPost>({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    }
},{timestamps: true});



const contactSchema = new mongoose.Schema<IContact>({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        min: 10,
        max: 11,
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
export const Contact_u = mongoose.models.Contact_u || mongoose.model<IContact>("Contact_u", contactSchema);
