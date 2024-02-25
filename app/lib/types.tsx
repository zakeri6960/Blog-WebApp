export interface IContact {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface IUser {
    username: string;
    email: string;
    password: string;
    img?: string;
    isAdmin?: boolean;
}

export interface IPost {
    title: string;
    desc: string;
    img?: string;
    userId: string;
    slug: string;
}