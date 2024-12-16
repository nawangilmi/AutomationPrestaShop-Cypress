import { LoginPage } from "../../fixtures/pages/login_page.cy.js"
import { RegisterPage } from "../../fixtures/pages/register_page.cy.js"

let loginPage = new LoginPage()
let registerPage = new RegisterPage()

describe('Register Page', { testIsolation: false }, () => {
    it('Register an Account', () => {
        loginPage.navigateLoginPage();
        cy.wait(10000);
        loginPage.redirectRegistration();
        cy.wait(3000);
        registerPage.selectGender();
        registerPage.validateFirstName(Cypress.env('first_name'));
        registerPage.validatelastName(Cypress.env('last_name'));
        registerPage.validateEmail(Cypress.env('valid_email'));
        registerPage.validatePassword(Cypress.env('password'));
        registerPage.fillCheckboxes();
        registerPage.clickRegisterButton();
        cy.wait(10000);
        registerPage.validateRegisterSuccess();
    });
});


// describe('Login Page', { testIsolation: false }, () => {
//     it('Login with valid credentials', () => {
//         loginPage.navigateLoginPage();
//         cy.wait(10000);
//         loginPage.validateEmail(Cypress.env('valid_email'));
//         loginPage.validatePassword(Cypress.env('password'));
//         cy.wait(10000);
//         loginPage.clickLoginButton();
//         cy.wait(10000);
//         loginPage.validateLoginSuccess();
//     });
// });
