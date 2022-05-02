import mongoose from "mongoose"

export const setMongoConnection = () => {
    const URI = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
    mongoose.connect(URI, () => console.log("Connexion ok base de données"))
}