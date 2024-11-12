class LoginPage {

    typeEmail(email) {
        cy.log(`Typing email: ${email}`);
        cy.get('input#email')
            .clear()
            .type(email);
        cy.wait(1000);
    }

    typePassword(password) {
        cy.log(`Typing password`);
        cy.get('input#password')
            .clear()
            .type(password);
        cy.wait(1000);
    }

    verifyEmailErrorMessage(errorMessage) {
        cy.log(`Verifying error message: ${errorMessage}`);
        cy.get('p.MuiFormHelperText-root.Mui-error').should('include.text', errorMessage);
    }

    clickAcceptCookiesButton() {
        cy.log(`Clicking accept cookies button`);
        cy.get('#onetrust-accept-btn-handler', { timeout: 30000 }).click();
    }

    isErrorMessageNotDisplayed(message) {
        cy.log(`Checking if error message "${message}" is not displayed`);
        cy.get('p')
            .each(($el) => {
                if ($el.text().includes(message)) {
                    cy.wrap($el).should('not.be.visible');
                }
            });
    }

}

export default new LoginPage();

