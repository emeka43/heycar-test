/// <reference types="cypress" />

import cypressTexts from '../support/texts.json';

describe('I want to test the address modal functionality', () => {
    it('Navigates to the camera page and verifies the address modal appears', () => {
        cy.goToCameraPage();
        cy.contains(cypressTexts.cameras.nikonD5500).click(); //navigates to Nikon D5500 page
        cy.get('a[id="open-estimate-shipping-popup-14"]').click(); // clicks first address shipping link

        //verifies that the modal elements are visible
        cy.get('button').contains(cypressTexts.modal.ApplyButton).should('be.visible');
        cy.contains(cypressTexts.modal.Name).should('be.visible');
        cy.contains(cypressTexts.modal.estimatedDelivery).should('be.visible');
        cy.contains(cypressTexts.modal.noShipOptions).should('be.visible');
        cy.contains(cypressTexts.modal.price).should('be.visible');
        cy.contains(cypressTexts.modal.shippingMethod).should('be.visible');

        //enters the address details and applies the shipping
        cy.get('select[id="estimate_shipping_14_CountryId"]').select(cypressTexts.dropdown.UK);
        cy.get('input[id="estimate_shipping_14_ZipPostalCode"]').type(cypressTexts.dropdown.londonPostCode);
        cy.get('button[class="button-2 apply-shipping-button"').eq(0).click();
    })
})