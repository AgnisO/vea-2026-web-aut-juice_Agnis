import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage {
    static get url() {
        return '/#/address/saved';
    }

    static get addNewAddressButton() {
        return cy.get('[routerlink="/address/create"]');
    }

    static get addressList() {
        return cy.get('mat-card');
    }
}