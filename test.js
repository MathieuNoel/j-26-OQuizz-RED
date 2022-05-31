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
//  User.findAll().then(console.log).catch(console.error)




//            pour findById
//User.findById(3).then(console.log).catch(console.error)






//                 pour insert
// User.insert({ description: 'bla',
//     question_id: 5})
// .then(

//     console.log

// )
// .catch(console.error);





//                 pour delete
// User.findById(1)
// .then(user => {

//     console.log('USER TO DELETE >>> ',  user);

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
// User.update({email: 'bluminox@gmx.fr', password:'boquizpass', firstname: 'boquizname', lastname: 'boquizlastname'}).then((newUser) => {
//     console.log('NEW updated USER')
// })
// .catch(console.error);