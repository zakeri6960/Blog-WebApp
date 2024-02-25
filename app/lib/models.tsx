import mongoose from "mongoose";


interface IUser {
    username: string;
    email: string;
    password: string;
    img?: string;
    isAdmin?: boolean;
}

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

interface IPost {
    title: string;
    desc: string;
    img?: string;
    userId: string;
    slug: string;
}

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

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
