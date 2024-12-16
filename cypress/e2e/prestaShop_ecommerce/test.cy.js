import { HomePage } from "../../fixtures/pages/homepage.cy.js"
import { ProductPage } from "../../fixtures/pages/product_page.cy.js"

let homePage = new HomePage()
let productPage = new ProductPage()

describe('Home Page', { testIsolation: false }, () => {
    it('Validate Product List', () => {
        homePage.navigateHomePage();
        cy.wait(30000)
        homePage.validateProductsList();
    });

    it('Redirected to Product Description', () => {
        homePage.validateProductsList();
        homePage.clickProduct();
        cy.wait(30000);
        homePage.validateProductDescription();
    });
});

describe('Product Description Page', { testIsolation: false }, () => {
    it('Add a Product to Cart', () => {
        productPage.selectSize('M',2);
        productPage.clickAddtoCart();
        cy.wait(10000);
        productPage.validateAddedtoCart();
        // productPage.validateSize(size);
    });

    it('Add Mutiple Product to Cart', () => {
        cy.wait(3000);
        productPage.clickContinueShopping();
        cy.wait(3000);
        productPage.selectSize('XL',4);
        productPage.changeQuantityPlusBtn();
        productPage.changeQuantityMinusBtn();
        productPage.changeQuantityField(8)
        productPage.clickAddtoCart();
        productPage.validateAddedtoCart();
        // productPage.validateSize(size);
        // productPage.validateQuantity(qty)
    });

});
