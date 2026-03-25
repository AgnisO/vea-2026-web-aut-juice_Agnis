import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage {
    static get url() {
        return '/#/address/select';
    }

    static get selectAddressField() {
        return cy.get('#mat-radio-42');
    }

}