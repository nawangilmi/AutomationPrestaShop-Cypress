import product from "../elements/product_elements.js";

export class ProductPage{
    selectSize(Size,Value) {
        const dropdownSize = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(product.dropdownSize).as('dropdownSize');
        dropdownSize.select(Size);
        dropdownSize.should('have.value', Value);
    }
    
    changeQuantityPlusBtn(){
    const qtyPlusBtn = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(product.qtyPlusBtn).as(' qtyPlusBtn');
    qtyPlusBtn.click();
    }
    
    changeQuantityMinusBtn(){
        const qtyMinusBtn = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(product.qtyMinusBtn).as('qtyMinusBtn');
        qtyMinusBtn.click();
        }

    changeQuantityField(qty){
        const qtyField = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(product.qtyField).as('qtyField');
        qtyField.type(qty);
    }

    clickAddtoCart(){
        const addtoCartButton = cy.getIframeBodyByXPath("//iframe[@id='framelive']").xpath(product.addtoCartBtn).as('addtoCartButton');
        addtoCartButton.click();
    }

    clickContinueShopping(){
        cy.getIframeBodyByXPath("//iframe[@id='framelive']") // Access iframe by its selector
        .xpath('//*[@id="blockcart-modal"]') // Locate the modal by XPath
        .should('be.visible') // Assert that the modal is visible
        .within(() => {
    // Interact with elements inside the modal
        cy.xpath(product.continueShoppingBtn).click(); // Example: Click a button
  });
    }

    validateAddedtoCart(){
        cy.getIframeBodyByXPath("//iframe[@id='framelive']")
        .xpath(product.popupSuccess)
        .should('be.visible');
    }

    // validateQuantity(qty){
    //     cy.getIframeBodyByXPath("//iframe[@id='framelive']")
    //     .xpath(product.quantity)
    //     .should('exist');
    // }

    // validateSize(size){
    //     cy.getIframeBodyByXPath("//iframe[@id='framelive']")
    //     .xpath(product.size)
    //     .should('exist');
    // }
}