import { User } from "../models/User";

class UserRepository {
    findAll(){
        return User.find()
    }
}

export const userRepository = Object.freeze(new UserRepository());