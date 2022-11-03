
require ( '@4tw/cypress-drag-drop' )

describe("Drag and Drop", () => {
 
    beforeEach(() => {
      cy.visit('https://automacaocombatista.herokuapp.com/iteracoes/draganddrop');

    })

    it('Deve arrastar', () => {
        cy.get('#winston').drag('#dropzone').then((success) => {
         assert.isTrue(success)});
        
    })
 });

