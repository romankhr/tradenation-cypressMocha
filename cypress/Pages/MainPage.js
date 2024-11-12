
class MainPage {

    verifyPageTitle(expectedTitle) {
        cy.log(`Verifying page title is "${expectedTitle}"`);
        cy.title().should('eq', expectedTitle);
    }

    clickLogo() {
        cy.log('Clicking on the logo');
        cy.get('[data-testid="logo"]').click();
    }

    verifyPageUrl(expectedUrl) {
        cy.log(`Verifying current URL includes "${expectedUrl}"`);
        cy.url().should('include', expectedUrl);
    }
}

export default new MainPage();