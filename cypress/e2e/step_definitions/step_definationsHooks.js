beforeEach(function() {
  cy.fixture('example').then((data) => {
    this.data = data; // Store data using 'this'
  });
});
