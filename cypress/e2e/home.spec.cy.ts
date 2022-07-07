describe("Tests in my home page", () => {
  it("Visit my home page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Visit page PT-BR", () => {
    cy.visit("http://localhost:3000/pt-BR");
    cy.contains("Sobre").click();
    cy.contains("Conhecimentos").click();
    cy.contains("Contato").click();
    // cy.contains("Baixar Currículo").click();
  });

  it("Visit page EN-US", () => {
    cy.visit("http://localhost:3000/en-US");
    cy.contains("About").click();
    cy.contains("Acquirements").click();
    cy.contains("Contact").click();
    // cy.contains("Baixar Currículo").click();
  });

  it("Testing redirection to contacts", () => {
    // cy.contains("Linkedin").click();
    // cy.contains("Whatsapp").click();
    // cy.contains("Github").click();
  });
});
