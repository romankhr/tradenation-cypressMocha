Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error if you want to see it for debugging
    console.log('Caught error:', err.message);
    
    // Return false to prevent Cypress from failing the test due to the error
    return false;
  });
