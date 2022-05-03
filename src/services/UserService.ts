import { userRepository } from './../repositories/UserRepository';

class UserService{

    findAll(){
        return userRepository.findAll();
    }
}

export const userService = Object.freeze(new UserService());