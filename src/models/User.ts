export class User {
    public id: Number;
    public nom: String;
    public prenom: String;
    public age: Number;

    constructor(id: Number, nom: String, prenom: String, age: Number){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}