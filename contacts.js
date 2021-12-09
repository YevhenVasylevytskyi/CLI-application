const fs = require('fs/promises');
const path = require('path');
// const contactsPath = path.join(__dirname, './db/contacts.json');
const contactsPath = path.resolve('./db/contacts.json');

fs.readFile('./db/contacts.json', 'utf-8')
    .then(data => console.log(data))
    .catch(error => console.log(error));

function listContacts() {
  // ...твой код
}


function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
    contactsPath,
    listContacts,
    getContactById,
    removeContact,
    addContact
}