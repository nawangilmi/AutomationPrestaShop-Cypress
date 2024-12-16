import register from "../elements/register_elements.js";
import home from "../elements/home_elements.js";


export class RegisterPage{
    selectGender() {
        const femaleSelect = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.femaleField).as('femaleSelect');
        femaleSelect.click();
    }
    validateEmail(emailData) {
        const emailField = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.emailField).as('emailField');
        emailField.type(emailData);
    }

    validatePassword(passwordData) {
        const passwordField = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.passwordField).as('passwordField');
        passwordField.type(passwordData);
    }

    validateFirstName(firstnameData){
        const firstnameField = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.firstnameField).as('firstnameField');
        firstnameField.type(firstnameData);
    }

    validatelastName(lastnameData){
        const lastnameField = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.lastnameField).as('lastnameField');
        lastnameField.type(lastnameData);
    }

    clickRegisterButton() {
         cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.registerBtn).click();
    }

    fillCheckboxes() {
        cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.offerCheckbox).click();
        cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.termscondiCheckbox).click();
        cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.newsCheckBox).click();
        cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(register.privacyCheckBox).click();
    }

    
    validateRegisterSuccess() {
        cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(home.name).should('be.visible')
    }
}
