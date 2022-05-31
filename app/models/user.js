const { user } = require('pg/lib/defaults');
const client = require('../database');
const CoreModel = require("./coreModel");

class User extends CoreModel {

    id;
    email;
    password;
    firstname;
    lastname;
    static  #tableName = 'user';
    

    constructor(obj) {
        super(obj);
        this.email = obj.email;
        this.password = obj.password;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.id = obj.id;
        

    };


    static get tableName() {
        return this.#tableName
    }

   

   

   


   

}

module.exports = User;