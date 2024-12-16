import login from "../../fixtures/elements/login_elements.js";


export class LoginPage{
    navigateLoginPage() {
        const urlPrestaShop = Cypress.env('base_url');
        cy.log(urlPrestaShop);
        cy.visit(urlPrestaShop);
        cy.wait(10000);
        const signInButton = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(login.signIn).as('signInButton');
        signInButton.click();
    }

    validateEmail(emailData) {
        const emailField = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(login.emailField).as('emailField');
        emailField.type(emailData, { delay: 50 });
    }

    validatePassword(passwordData) {
        const passwordField = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(login.passwordField).as('passwordField');
        passwordField.type(passwordData, { delay: 50 });
    }

    clickLoginButton() {
         cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(login.loginBtn).click();
    }

    redirectRegistration() {
        const registerButton = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(login.register).as('registerButton');
        registerButton.click();
    }

    validateLoginSuccess() {
        cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(login.name).should('be.visible')
    }
}
