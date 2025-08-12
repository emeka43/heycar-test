/// <reference types="cypress" />

const cameraPage = Cypress.env('cameraPage');


Cypress.Commands.add('goToCameraPage', () => {
    cy.visit(cameraPage, { failOnStatusCode: false }), {
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "User-Agent": "axios/3.19.0",
            'x-test-bypass': 'true'

        },
    };
});