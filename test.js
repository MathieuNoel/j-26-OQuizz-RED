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

const User = require('./app/models/user');


//                 pour findAllUser
//User.findAllUser().then(console.log).catch(console.error)




//            pour findById
// User.findById(3).then(console.log).catch(console.error)






//                 pour insert
// User.insert('aluminox@gmx.fr', 'oquizpass', 'oquizname', 'oquizlastname')
// .then(

//     console.log

// )
// .catch(console.error);





//                 pour delete
// User.findById(4)
// .then(user => {

//     console.log('USER TO DELETE >>> ', user.id, user);

//     user.delete()
//     .then(deletedUser => {
//         console.log('DELETED USER >>>', deletedUser);
//     })
//     .catch(console.error);

// })
// .catch(console.error);



//                 pour insert
// const newUser = new User({email: 'bluminox@gmx.fr', password:'boquizpass', firstname: 'boquizname',lastname: 'boquizlastname'}); // pas d'id
// newUser.insert()
// .then((newUser) => {
//     // Super expert => id N
//     console.log('NEW CREATED USER', )

// })
// .catch(console.error);



//                 pour update 
// const newUser = new User({email: 'bluminox@gmx.fr', password:'boquizpass', firstname: 'boquizname', lastname: 'boquizlastname'}); // pas d'id
// newUser.update().then((newUser) => {
//     console.log('NEW updated USER')
// })
// .catch(console.error);