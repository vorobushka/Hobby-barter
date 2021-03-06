const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/skillBarter', { useNewUrlParser: true, useUnifiedTopology: true });

const Hobby = require('../back/models/user');

const hobbies = [
  {
    email: 'anna@gmail.com',
    login: 'annutka',
    password: '1',
    name: 'Anna',
    photo: null,
    hobby: 'knit',
    wish: 'run',
    phone: '66666666',
  },
  {
    email: 'max@gmail.com',
    login: 'maxutka',
    password: '2',
    name: 'Max',
    photo: null,
    hobby: 'run',
    wish: 'cook',
    phone: '66669999',
  },
  {
    email: 'masha@gmail.com',
    login: 'mashutka',
    password: '3',
    name: 'Masha',
    photo: null,
    hobby: 'knit',
    wish: 'run',
    phone: '99999999',
  },
  {
    email: 'luda@gmail.com',
    login: 'ludka',
    password: '4',
    name: 'Luda',
    photo: null,
    hobby: 'cook',
    wish: 'run',
    phone: '66777779',
  },
  {
    email: 'sasha@gmail.com',
    login: 'sashka',
    password: '5',
    name: 'Sasha',
    photo: null,
    hobby: 'swim',
    wish: 'cook',
    phone: '6611111111',
  },
  {
    email: 'oleg@gmail.com',
    login: 'olejka',
    password: '6',
    name: 'Oleg',
    photo: null,
    hobby: 'knit',
    wish: 'swim',
    phone: '6690901111111',
  },
  {
    email: 'lexa@gmail.com',
    login: 'lexa',
    password: '7',
    name: 'Lesha',
    photo: null,
    hobby: 'english',
    wish: 'sing',
    phone: '6611111111',
  },
  {
    email: 'lisha@gmail.com',
    login: 'lisha',
    password: '8',
    name: 'Lesha',
    photo: null,
    hobby: 'sing',
    wish: 'english',
    phone: '660000001111',
  },
  {
    email: 'katya@gmail.com',
    login: 'Katya',
    password: '9',
    name: 'Katya',
    photo: null,
    hobby: 'sing',
    wish: 'paint',
    phone: '6600001111',
  },
  {
    email: 'kotya@gmail.com',
    login: 'Kotya',
    password: '10',
    name: 'Kotya',
    photo: null,
    hobby: 'paint',
    wish: 'sing',
    phone: '6111',
  },

  {
    email: 'kostya@gmail.com',
    login: 'Kostya',
    password: '10',
    name: 'Kostya',
    photo: null,
    hobby: 'paint',
    wish: 'run',
    phone: '61111233321',
  },
];

Hobby.insertMany(hobbies).then(() => {
  mongoose.connection.close();
});
