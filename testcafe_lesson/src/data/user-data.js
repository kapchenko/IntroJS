import * as faker from "faker";
const password = faker.internet.password()
exports.validUserData = {
    name : faker.name.firstName(),
    surname : faker.name.lastName(),
    countryCode : 'UA',
    email : faker.internet.email(),
    password ,
    confirmPass : password


};