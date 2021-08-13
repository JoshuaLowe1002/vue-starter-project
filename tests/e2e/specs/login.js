describe("Test Login", () => {
  it("Visits the login page", () => {
    cy.visit("/login");
    cy.contains("h2", "Sign in to your account");
    cy.get('#email').type("test@test.com")
    cy.get('#password').type("password")
    cy.get('button').click()
    cy.contains("h1", "test@test.com");
  });
});
