describe("Alertas", () => {
 
    beforeEach(() => {
      cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/alert');

    })

    it('Digitar em uma prompt js', () => {

      

      cy.window().then(function(p){
        //stubbing prompt window
        cy.stub(p, "prompt").returns("teste-prompt-digitado");
        // click on Click for JS Prompt button
        cy.get(':nth-child(7) > .btn').click()
        // verify application message on clicking on OK
        cy.get('#result').contains('teste-prompt-digitado')


       
        
    })
 });
 });
