const RegistrationPage =  require("../pages/registration-page.js");
const validUserData = require('../data/user-data.js');
import {baseUrl} from "../config/configFile.js";
import { t } from "testcafe";

const successMsg = 'Your customer account has been created' ;

fixture `Registration validation tests`
.page(RegistrationPage.url);

test('Registration new user from UA', async () =>{
    await  RegistrationPage.registerNewUser(validUserData)
    await t.expect(await RegistrationPage.getRegistrationSuccessMessage())
    await t.expect(await RegistrationPage.getUrl()).eql(baseUrl, 'invalid mess')
});
