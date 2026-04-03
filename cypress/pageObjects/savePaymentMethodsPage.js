import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get url() {
        return '/#/saved-payment-methods';
    }

    static get addNewCardButton() {
        return cy.get('#mat-expansion-panel-header-0');
    }

    static get nameField() {
        return cy.contains('mat-label', 'Name').parents('mat-form-field').find('input')
    }

    static get cardNumberField() {
        return cy.contains('mat-label', 'Card Number').parents('mat-form-field').find('input')
    }

    static get expiryMonthSelect() {
        return cy.get('#mat-input-4');
    }

    static get expiryYearSelect() {
        return cy.get('#mat-input-5');
    }

    static get submitButton() {
        return cy.get('#submitButton');
    }

    static get cardList() {
        return cy.get('mat-row');
    }
}