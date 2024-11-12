
import mainPage from '../Pages/MainPage';

describe('Trade Nation Home Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
  });

  it('User should redirect to the correct page after clicking the logo', () => {
    cy.fixture('config.json').then((config) => {
      cy.visit(config.baseUrl);
      mainPage.clickLogo();

      mainPage.verifyPageTitle('Popular Markets to Trade With Us — Trade Nation');
      mainPage.verifyPageUrl('/en-gb/');
    });
  });

});
