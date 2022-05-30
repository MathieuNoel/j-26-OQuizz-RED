const { Client } = require('pg');

// Instanciation du client de connexion à la BDD
const client = new Client(process.env.PG_URL);

// Connexion à la BDD
client.connect()
.then(() => { // Si tout s'est bien passé, on affiche le message suivant dans la console
    console.log('DB connected successfully!');
})
.catch((error) => { // S'il y a eu une erreur, on affiche l'erreur
    console.error('DB connection error:', error);
});

// On exporte le client pour effectuer des requêtes à la BDD depuis d'autres fichiers
module.exports = client;