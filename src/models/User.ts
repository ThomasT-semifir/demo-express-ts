import mongoose from "mongoose";

// export class User {
//     public id: Number;
//     public nom: String;
//     public prenom: String;
//     public age: Number;

    // constructor(id: Number, nom: String, prenom: String, age: Number){
    //     this.id = id;
    //     this.nom = nom;
    //     this.prenom = prenom;
    //     this.age = age;
    // }
// }

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nom:{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})

export const User = mongoose.model('User', userSchema)