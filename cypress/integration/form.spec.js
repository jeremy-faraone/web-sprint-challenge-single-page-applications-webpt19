describe("Goes to localhost", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("does stuff", () => {
    cy.get('[data-cy="orderLink"]').click();
    cy.get('[data-cy="customer"]')
      .type("Jeremy")
      .should("have.value", "Jeremy");
    cy.get('[data-cy="size"]')
      .select("small, $5.99,  ")
      .should("have.value", "small, $5.99,  ");
    cy.get('[data-cy="pepperoniTest"]').check();
    cy.get('[data-cy="sausageTest"]').check();
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="cartLink"]').click();
  });
});
