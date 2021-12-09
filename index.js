const contactsOperations = require("./contacts");
const { program } = require('commander');

const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {

        case "getAll":
            const contactsList = await contactsOperations.listContacts();
            console.log(contactsList);
            break;
        
        case "getById":
            const contactById = await contactsOperations.getContactById(id);
            console.log(contactById);
            break;
        
        case "add":
            const newContact = await contactsOperations.addContact({name, email, phone});
            console.log(newContact);
            break;
        
        case "removeById":
            const removeContact = await contactsOperations.removeContact(id);
            console.log(removeContact);
            break;
        
        default:
            console.log("Unknown action");
    }
};

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);