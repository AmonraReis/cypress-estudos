 describe('testes de cadastro', () => {



  it('Realiza cadastro sem preenchimento de usuário', () => {
    cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php")

    cy.get('input[name="form_senha"]').type("123")
    cy.get('input[name="form_nome"]').type("Amonra Reis de souza")
    cy.get('input[class="btn btn-info"]').click()
    cy.get('input[name="form_usuario"]').should('be.empty')
    
    cy.wait(30)
   });

   it('Realizar cadastro sem preenchimento de nome', () => {
 
    cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php")
    cy.get('input[name="form_usuario"]').type("Amonratestesnom")
    cy.get('input[name="form_senha"]').type("nome")
    cy.get('input[class="btn btn-info"]').click()
    cy.contains('Existem campos em branco.').should('be.visible')
  
    cy.wait(30)
   });

   it('Realizar cadastro sem preenchimento de senha', () => {
    cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php")
    cy.get('input[name="form_usuario"]').type("Amonra")
    cy.get('input[name="form_nome"]').type("Amonra Reis de souza")
    cy.get('input[class="btn btn-info"]').click()
    cy.get('input[name="form_senha"]').should('be.empty')
  
    cy.wait(30)
   });

   it('Realiza cadastro completo', () => {

    cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php")
    cy.get('input[name="form_usuario"]').type("Amon")
    cy.get('input[name="form_senha"]').type("novasenha")
    cy.get('input[name="form_nome"]').type("Amonra Reis de souza")
    cy.get('input[class="btn btn-info"]').click()
    cy.contains('Amon').should('be.visible')
  });

  it('Realiza a atualização da página', () => {

    cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php")
    cy.contains('Clique aqui para atualizar.').click
    cy.get('input[name="form_usuario"]').should('be.empty')
    

    
  });
  
 
});
