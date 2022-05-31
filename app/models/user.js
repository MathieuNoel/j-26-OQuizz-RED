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
    tableName = 'user';

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

   

   

   


    async update() {
         const query = {
             text: 'UPDATE "user" SET "email" = $1, "password" = $2, "firstname" = $3, "lastname" = $4  RETURNING "id"',
             values: [this.email, this.password, this.firstname, this.lastname]
         }
         try {
             const result = await client.query(query);
             if (result.rowCount <= 0) {
                 throw new Error('Insert did not return any id.');
             }
             return
         } catch (error) {
             throw error
         };
         
    }

}

module.exports = User;