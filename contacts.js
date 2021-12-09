const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {    
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        return contacts; 
    }
    catch (error) {
        console.log(error);
    }
}

async function getContactById(id) {
    try {
        const contacts = await listContacts();    
        const contact = contacts.find(item => item.id === id);
        if (!contact) {
            return null;
        }
            return contact;
    }
    catch (error) {
        console.log(error);
    }
}

async function removeContact(id) {
    try {
        const contacts = await listContacts();
        const idx = contacts.findIndex(item => item.id === id);
        if (idx === -1){
            return null;
        }
        const deleteContact = contacts.splice(idx, 1);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

            return deleteContact;
    }
    catch (error) {
        console.log(error);
    }
}

async function addContact(data) {
    try {
        const newContact = { id: nanoid(), ...data };
        const contacts = await listContacts();
        contacts.push(newContact);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

        return newContact;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
};