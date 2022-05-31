const client = require("../database");


class CoreModel {

    #id;

    constructor(obj) {
        this.#id = obj.id;
        
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        if (isNaN(parseInt(value, 10))) {
            throw new Error('id must be an integer!');
        }
        this.#id = value;
    }

    static async findAll() {
        
        const query = {
            text: `SELECT * FROM "${this.tableName}"`,
        }        
        try {
            const result = await client.query(query);
            
            
            
            const instance =  result.rows.map(element =>{
                const newInstance = new this(element);
                
                return newInstance
                
            })
            
            return instance
            
        } catch (error) {
            return error
        }
        
    };

    static async findById(id) {
        

        const query = {
            text: `SELECT * FROM "${this.tableName}" WHERE id = $1`,
            values: [id]
        }

        try {
            const result = await client.query(query); 
            if (result.rows.length > 0) {
                return new this(result.rows[0]);
            }else {
                return null;
            }
            // return userElement
        } catch (error) {
            throw error;
        }
    };

    static async insert(obj) {
        const dollars = []
        let i = 1       
        const values = []
        const keys = []
        for( const key in obj) {
            values.push(obj[key])
            keys.push(key) 
            dollars.push(`$${i}`)
            i++
        }
        console.log(values, keys, this.tableName)              
        
        const query = {
            text : `INSERT INTO "${this.tableName}" (${keys}) VALUES (${dollars}) RETURNING "id"`,
            values
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
            text: `DELETE FROM "${this.tableName}" WHERE id = $1 RETURNING "id"`,
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

    static async update(obj) {
        const dollars= [];
        let i = 1;
        const keys = [];
        const values= [];
        for(const key in obj) {
            values.push(obj[key]);
            keys.push(key);
            dollars.push(`$${i}`);
            i++;
        }
        console.log('lululul',dollars, keys,values)
        console.log(this.tableName)
        const query = {            
            text: `UPDATE "${this.tableName}" SET (${keys}) = (${dollars})  RETURNING "id"`,
            values 
        }
        try {
            
            const result = await client.query(query);
            console.log('lalala',result)
            if (result.rowCount <= 0) {
                throw new Error('Insert did not return any id.');
            }
            return
        } catch (error) {
            throw error
        };
        
   }

}

module.exports = CoreModel;