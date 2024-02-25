const { default: mongoose } = require('mongoose');

const connection = {}
export default async function ConnectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB);
    } catch (err: any) {
        console.log(err);
        throw new Error(`Error when connection: ${err.message}`);
    }
}

// const { default: mongoose } = require('mongoose');


// export default async function ConnectToMongoDB() {
//     try {
//         await mongoose.connect(process.env.MONGODB);
//     } catch (err: any) {
//         console.log(err);
//         throw new Error(`connection error: ${err.message}`);
//     }
// }