const contactsOperations = require("./contacts");

const operationsContacts = async ({action, id, name, email, phone}) => {
    switch (action) {

        case "listContacts":
            const contactsList = await contactsOperations.listContacts();
            console.log(contactsList);
            break;
        
        case "getContactById":
            const contactById = await contactsOperations.getContactById(id);
            console.log(contactById);
            break;
        
        case "addContact":
            const newContact = await contactsOperations.addContact(data);
            console.log(newContact);
            break;
        
        case "removeContact":
            const delContact = await contactsOperations.removeContact(id);
            console.log(delContact);
            break;
        
        default:
            console.log("Unknown action");
    }
};

const id = "3";

// const id = "uQwM0XDdwaEej2sLOKRY9";

const data = {
    name: "Aleksender Petrov",
    email: "123@ua.com",
    phone: "+3801321534684"
}
// operationsContacts({action: "listContacts"});
operationsContacts({action: "getContactById", id});
// operationsContacts({ action: "addContact", data });
// operationsContacts({action: "removeContact", id});