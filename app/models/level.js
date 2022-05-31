const client = require('../database');
const CoreModel = require("./coreModel");

class Level extends CoreModel {

    name;
    static  #tableName = 'user';

    constructor(obj) {
        super(obj);

        if (typeof obj.name !== 'string') {
            throw new Error('Level.name must be a string!');
        }
        this.name = obj.name;
    }

    static get tableName() {
        return this.#tableName
    }

    // static permet d'utiliser cette méthode sans instancier la class
    // READ: Fonction de lecture de tous les éléments de la BDD
    // static async findAll() {

    //     try {
            
    //         const query = {
    //             text: 'SELECT * FROM level'
    //         };
    
    //         const result = await client.query(query);
    
    //         const levelsInstances = result.rows.map(levelElement => {
    
    //             const newLevelInstance = new Level(levelElement);
    //             return newLevelInstance;
    
    //         });
    //         return levelsInstances;

    //     } catch (error) {
    //         throw error;
    //     }

    // }

    // // READ: Fonction de lecture d'un seul élément par son ID
    // static async findById(id) {
     
    //     const query = {
    //         text: 'SELECT * FROM level WHERE id=$1',
    //         values: [id]
    //     }

    //     try {
            
    //         const result = await client.query(query);

    //         if (result.rows.length > 0) {
    //             return new Level(result.rows[0]);
    //         } else {
    //             return null;
    //         }

    //     } catch (error) {
    //         throw error;
    //     }
        
    // }

    // async insert() {

    //     const query = {
    //         text: 'INSERT INTO level ("name") VALUES ($1) RETURNING "id"',
    //         values: [this.name]
    //     };

    //     try {
            
    //         const result = await client.query(query);

    //         if (result.rows.length <= 0) {
    //             throw new Error('Insert did not return any id.');
    //         }

    //         this.id = result.rows[0].id;
    //         return this;

    //     } catch (error) {
    //         throw error;
    //     }

    // }

    // async delete() {

    //     const query = {
    //         text: 'DELETE FROM level WHERE id=$1 RETURNING "id"',
    //         values: [this.id]
    //     }

    //     try {
            
    //         const result = await client.query(query);

    //         if (result.rows.length <= 0) {
    //             throw new Error('Insert did not return any id.');
    //         }

    //         return {
    //             message: 'Element with id ' + this.id + ' was deleted successfully',
    //             element: result.rows[0]
    //         };

    //     } catch (error) {
    //         throw error;
    //     }

    // }

    // async update() {

    //     const query = {
    //         text: 'UPDATE level SET "name" = $1 WHERE id = $2 RETURNING "id", "name"',
    //         values: [this.name, this.id]
    //     }

    //     try {
            
    //         const result = await client.query(query);

    //         if (result.rowCount <= 0) {
    //             throw new Error('Insert did not return any id.');
    //         }

    //         // this.name = result.rows[0].name;
    //         return this;

    //     } catch (error) {
    //         throw error;
    //     }

    // }

}

module.exports = Level;