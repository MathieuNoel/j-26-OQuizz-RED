const client = require('../database');
const CoreModel = require("./coreModel");

class User extends CoreModel {

    email;
    password;
    firstname;
    lastname;

    constructor(obj) {
        super(obj);
        this.email = obj.email;
        this.password = obj.password;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
    };

    static async findAllUser() {
        const query = {
            text: 'SELECT * FROM "user" ',
        }

        try {
            const result = await client.query(query); 
            const usersInstance = result.rows.map(userElement =>{
                const newUserInstance = new User(userElement);
                return newUserInstance;
            })
            return usersInstance
        } catch (error) {
            throw error;
        }
    };

    static async findById(id) {

        const query = {
            text: 'SELECT * FROM "user" WHERE id = $1',
            values: [id]
        }

        try {
            const result = await client.query(query); 
            if (result.rows.length > 0) {
                return new User(result.rows[0]);
            }else {
                return null;
            }
            // return userElement
        } catch (error) {
            throw error;
        }
    };

    async insert() {
        const query = {
            text : 'INSERT INTO "user" ("email", "password", "firstname", "lastname") VALUES ($1, $2, $3, $4) RETURNING "id"',
            values : [this.email, this.password, this.firstname, this.lastname]
        };
        try {
            const result = await client.query(query);
            if(result.rows.length <= 0) {
                throw new Error('Insert did not return any id.');
            }
            this.id = result.rows[0].id
        } catch (error) {
            throw error;
        }
    };

    async delete() {
        const query = {
            text: 'DELETE FROM "user" WHERE id = $1 RETURNING "id"',
            values: [this.id]
        };

        try {

        const result = await client.query(query);

        if(result.rows.length >= 0) {
            throw new Error('Insert did not return any id.');            
        }
        return {
            message: 'Element with id ' + this.id + 'was deleted successfully',
            element: result.rows[0]
        };
            
        } catch (error) {
            throw error;
        };    
    };

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