import { BasePage } from './basePage';

export class HomePage extends BasePage {
  static get url() {
    return '/#/';
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get('#navbarAccount');
  }

  static get loginButton() {
    return cy.get('#navbarLoginButton');
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get('#searchQuery');
  }

  static get searchInputField() {
    return cy.get('#searchQuery input');
  }

  static get productNames() {
    return cy.get('.item-name');
  }

  static get productCard() {
    return cy.get('.details-row');
  }

  static get closeCardButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }
}