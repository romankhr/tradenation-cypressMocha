import LoginPage from '../Pages/LoginPage';

describe('Trade Nation Home Page', () => {
    beforeEach(() => {
        cy.viewport(1280, 800);
    });

    it('Verify errors for invalid format of Email address and Password format', () => {
        cy.fixture('config.json').then((config) => {
            cy.visit(config.signupUrl);
            LoginPage.clickAcceptCookiesButton();
            LoginPage.typeEmail("Test");
            LoginPage.verifyEmailErrorMessage('Wrong email format');
            LoginPage.typeEmail("Test@google.com");

            LoginPage.isErrorMessageNotDisplayed("Wrong email format");

            LoginPage.typePassword("test");
            LoginPage.verifyEmailErrorMessage("Must have at least 8 characters");
            LoginPage.verifyEmailErrorMessage("Must contain upper and lower case characters");
            LoginPage.verifyEmailErrorMessage("Must contain a number and a symbol (!@#$%^&*)");

            LoginPage.typePassword("Test");
            LoginPage.verifyEmailErrorMessage("Must have at least 8 characters");
            LoginPage.isErrorMessageNotDisplayed("Must contain upper and lower case characters");
            LoginPage.verifyEmailErrorMessage("Must contain a number and a symbol (!@#$%^&*)");


            LoginPage.typePassword("TestTestTest");
            LoginPage.isErrorMessageNotDisplayed("Must have at least 8 characters");
            LoginPage.isErrorMessageNotDisplayed("Must contain upper and lower case characters");
            LoginPage.verifyEmailErrorMessage("Must contain a number and a symbol (!@#$%^&*)");


            LoginPage.typePassword("TestTestTest1!");
            LoginPage.isErrorMessageNotDisplayed("Must have at least 8 characters");
            LoginPage.isErrorMessageNotDisplayed("Must contain upper and lower case characters");
            LoginPage.isErrorMessageNotDisplayed("Must contain a number and a symbol (!@#$%^&*)");

        });
    });
});
