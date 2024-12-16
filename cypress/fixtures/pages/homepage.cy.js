import home from "../../fixtures/elements/home_elements.js"
import product from "../../fixtures/elements/product_elements.js";

export class HomePage{
    navigateHomePage() {
        const urlPrestaShop = Cypress.env('base_url');
        cy.log(urlPrestaShop);
        cy.visit(urlPrestaShop);
    }

    validateProductsList() {
      cy.getIframeBodyByXPath("//iframe[@id='framelive']")
      .xpath(home.popularproductLists)
      .should('be.visible');
    }

    clickProduct() {
        const productName= cy.getIframeBodyByXPath("//iframe[@id='framelive']")
        .xpath(home.productName)
        .as('productName');
        productName.click();
    }

    validateProductDescription() {
        cy.getIframeBodyByXPath("//iframe[@id='framelive']")
        .xpath(product.productDescription)
        .should('be.visible');
    }
    
}