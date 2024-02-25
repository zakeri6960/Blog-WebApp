import { Contact_u } from "./models";
import { IContact } from "./types";
import ConnectToMongoDB from "./utils";

export const addContact = async (formData: Iterable<[PropertyKey, IContact]>)=>{
    const { name, email, phone, message } = Object.fromEntries(formData);
    console.log(name, email, phone, message);
    
    try {
        await ConnectToMongoDB();
        // const newContact = new Contact_u({ name, email, phone, message });
        // console.log("Success");
    } catch (error) {
        // console.error(error);
    }
}