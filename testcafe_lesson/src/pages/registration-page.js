const BasePage =  require("../pages/base-page.js" );
import {Selector, t } from "testcafe";
import {baseUrl} from "../config/configFile.js";

class RegistrationPage extends BasePage { 
   
    constructor(){
    super();
}

url = `${baseUrl}create_account`;

firstNameInput = 'input[name="firstname"]';
surnameInput =   'input[name="lastname"]';
countryCodeInput = '.form-control[name="country_code"]' ;
//zoneCodeInput =  '.form-control[name="zone_code"]' ;
emailInput=' [name="customer_form"] [name="email"]';
passwordInput = '[name="customer_form"] [name="password"]'
confirmPasswordInput ='[name="customer_form"] [name="confirmed_password"]';
newsletterButton = '[name="newsletter"]';
createAccountButton = '[name="create_account"]';
successRegistrationMessage = '.alert.alert-success' ;

async registerNewUser(customerDetails){
    await t.typeText(this.firstNameInput, customerDetails) 
    await t.typeText(this.surnameInput, customerDetails)
    await t
            .click(this.createSelector(this.countryCodeInput))
            .click (Selector('option').withAttribute('value', 'UA'), customerDetails)
    await t.typeText(this.emailInput , customerDetails)
    await t.typeText(this.passwordInput ,  customerDetails)
    await t.typeText(this.confirmPasswordInput , customerDetails)
    await t.click (this.newsletterButton);
    await t.click (this.createAccountButton);
}

async getRegistrationSuccessMessage() {
    return this.createSelector(this.successRegistrationMessage);
}
    }
export default new RegistrationPage();