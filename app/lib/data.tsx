import { Post, User } from "./models";
import ConnectToMongoDB from "./utils";
// type User = {
//     id: number,
//     name: string,
// };


// type Post = {
//     id: number,
//     userId: number,
//     title: string,
//     body: string,
// }

// let posts: Post[] = [
//     {
//         id: 1,
//         userId: 1,
//         title: "Post 1",
//         body: "Irure deserunt dolore eiusmod voluptate ad elit eiusmod irure culpa. Dolore commodo magna irure elit ad ipsum minim laborum excepteur. Ut ea mollit duis dolore aute. Reprehenderit amet anim quis consequat eu mollit amet pariatur ut labore ad laborum non elit. Mollit anim id ea laboris labore officia nisi excepteur voluptate ut sunt exercitation ea."
//     },
//     {
//         id: 2,
//         userId: 1,
//         title: "Post 2",
//         body: "Irure deserunt dolore eiusmod voluptate ad elit eiusmod irure culpa. Dolore commodo magna irure elit ad ipsum minim laborum excepteur. Ut ea mollit duis dolore aute. Reprehenderit amet anim quis consequat eu mollit amet pariatur ut labore ad laborum non elit. Mollit anim id ea laboris labore officia nisi excepteur voluptate ut sunt exercitation ea."
//     },
//     {
//         id: 3,
//         userId: 2,
//         title: "Post 3",
//         body: "Irure deserunt dolore eiusmod voluptate ad elit eiusmod irure culpa. Dolore commodo magna irure elit ad ipsum minim laborum excepteur. Ut ea mollit duis dolore aute. Reprehenderit amet anim quis consequat eu mollit amet pariatur ut labore ad laborum non elit. Mollit anim id ea laboris labore officia nisi excepteur voluptate ut sunt exercitation ea."
//     },
//     {
//         id: 4,
//         userId: 2,
//         title: "Post 4",
//         body: "Irure deserunt dolore eiusmod voluptate ad elit eiusmod irure culpa. Dolore commodo magna irure elit ad ipsum minim laborum excepteur. Ut ea mollit duis dolore aute. Reprehenderit amet anim quis consequat eu mollit amet pariatur ut labore ad laborum non elit. Mollit anim id ea laboris labore officia nisi excepteur voluptate ut sunt exercitation ea."
//     },
//     {
//         id: 5,
//         userId: 2,
//         title: "Post 5",
//         body: "Irure deserunt dolore eiusmod voluptate ad elit eiusmod irure culpa. Dolore commodo magna irure elit ad ipsum minim laborum excepteur. Ut ea mollit duis dolore aute. Reprehenderit amet anim quis consequat eu mollit amet pariatur ut labore ad laborum non elit. Mollit anim id ea laboris labore officia nisi excepteur voluptate ut sunt exercitation ea."
//     },
//     {
//         id: 6,
//         userId: 2,
//         title: "Post 6",
//         body: "Irure deserunt dolore eiusmod voluptate ad elit eiusmod irure culpa. Dolore commodo magna irure elit ad ipsum minim laborum excepteur. Ut ea mollit duis dolore aute. Reprehenderit amet anim quis consequat eu mollit amet pariatur ut labore ad laborum non elit. Mollit anim id ea laboris labore officia nisi excepteur voluptate ut sunt exercitation ea."
//     },
//     {
//         id: 7,
//         userId: 1,
//         title: "Post 7",
//         body: "Irure deserunt dolore eiusmod voluptate ad elit eiusmod irure culpa. Dolore commodo magna irure elit ad ipsum minim laborum excepteur. Ut ea mollit duis dolore aute. Reprehenderit amet anim quis consequat eu mollit amet pariatur ut labore ad laborum non elit. Mollit anim id ea laboris labore officia nisi excepteur voluptate ut sunt exercitation ea."
//     }
// ]

// let users: User[] = [
//     {
//         id: 1,
//         name: "max",
//     },
//     {
//         id: 2,
//         name: "elli",
//     },
// ];

interface IUser {
    username: string;
    email: string;
    password: string;
    img?: string;
    isAdmin?: boolean;
}

interface IPost {
    title: string;
    desc: string;
    img?: string;
    userId: string;
    slug: string;
}

export async function getPosts() {
    try {
        await ConnectToMongoDB();
        const posts = (await Post.find()); 
        return posts;
    } catch (error) {
        console.log(error);
    }
}

export async function getPost(slug: string) {
    try {
        await ConnectToMongoDB();
        const post = await Post.findOne({ slug: slug });
        return post;
    } catch (error) {
        console.log(error);
    }
    
}

export async function getUser(id: string) {
    try {
        await ConnectToMongoDB();
        const user = User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
    }
}

