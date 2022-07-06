describe("Tests in my home page", () => {
  it("visit my home page", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Sobre").click();
    cy.contains("Conhecimentos").click();
    cy.contains("Contato").click();
    // cy.contains("Baixar Currículo").click();
    cy.contains("nederhayden").click();
  });
});
