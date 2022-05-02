import mongoose from "mongoose"

export const setMongoConnection = (): void => {
    const URI = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/users`
    mongoose.connect(URI, () => console.log("Connexion ok base de données"))
}