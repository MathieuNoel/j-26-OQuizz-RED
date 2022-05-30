// Configuration des variables d'environnement
require('dotenv').config();

// DATAMAPPER

// On récupère dataMapper pour tester les requêtes
// const dataMapper = require('./app/dataMapper');

// Test de la requête getAllLevels
// dataMapper.getAllLevels()
// .then(console.log)
// .catch(console.error);

// Test de la requête getOneLevel (avec l'id 1)
// dataMapper.getOneLevel(1)
// .then(console.log)
// .catch(console.error)

// ACTIVE RECORD

const Level = require('./app/models/level');

Level.findAll()
.then(levelsList => {

    console.log(levelsList.map(el => ({id: el.id, name: el.name})));

})
.catch(console.error);

// Level.findById(10)
// .then(level => {

//     console.log('LEVEL TO DELETE >>> ', level.id, level);

//     level.delete()
//     .then(deletedLevel => {
//         console.log('DELETED LEVEL >>>', deletedLevel);
//     })
//     .catch(console.error);

// })
// .catch(console.error);

// const superExpert = new Level({name: 'Super Expert 11'}); // pas d'id
// superExpert.insert()
// .then((savedLevel) => {
//     // Super expert => id N
//     console.log('NEW CREATED LEVEL', savedLevel.id, savedLevel.name);

//     savedLevel.name = 'Niveau test';
//     savedLevel.update()
//     .then(updatedLevel => {
//         console.log('UPDATED LEVEL', {id: updatedLevel.id, name: updatedLevel.name});
//     })
//     .catch(console.error);

// })
// .catch(console.error);