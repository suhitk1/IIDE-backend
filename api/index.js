const express = require('express');
const cors = require('cors')
const contacts = require('./contacts');
const cities = require('./cities');

// initialize express router
let router = express.Router();
router.use(cors());
// set contacts endpoints
router.route('/contacts')
    .get(contacts.getContacts)
    .post(contacts.postContact)
    .put(contacts.putContact)
    .delete(contacts.deleteContact);

// set cities endpoints
router.route('/cities')
    .get(cities.getCities)
    .post(cities.postCity);
router.route('/cities/:id')
    .get(cities.getCityById);


module.exports = router;