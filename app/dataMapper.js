// On récupère le client pour effectuer des requêtes à la BDD
const client = require('./database');
// On récupère le model Level (qui est une class)
const Level = require('./models/level');

// Objet dataMapper
const dataMapper = {

    async getAllLevels() {

        const query = {
            text: 'SELECT * FROM level'
        };

        try {

            const result = await client.query(query);

            const levelsInstances = result.rows.map(levelElement => {

                const newLevelInstance = new Level(levelElement);
                return newLevelInstance;

            });
            return levelsInstances;

        } catch (error) {
            throw error;
        }

    },

    async getOneLevel(id) {

        const query = {
            text: 'SELECT * FROM level WHERE id=$1',
            values: [id]
        }

        try {
            
            const result = await client.query(query);

            if (result.rows.length > 0) {
                return new Level(result.rows[0]);
            } else {
                return null;
            }

        } catch (error) {
            throw error;
        }

    }

}

module.exports = dataMapper;