describe('Formulário', () => {

    it('Realiza cadastro com suceso', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users/new');
        cy.get('input[name="user[name]"').type('Amonra')
        cy.get('input[name="user[lastname]"').type('Reis')
        cy.get('#user_email').type('amonra.reisde1@gmail.com')
        cy.get(':nth-child(4) > :nth-child(2) > .input-field').type('Marechal floriano, 2536, jardins')
        cy.get('#user_university').type('Estacio de Sá')
        cy.get('#user_profile').type('Analista de QA')
        cy.get(':nth-child(6) > :nth-child(1) > .input-field').type('Masculino')
        cy.get('#user_age').type('21')
        cy.get('.actions > input').click()
        cy.contains('Usuário Criado com sucesso').should('be.visible')
    });

    it('Realiza edição de usuário', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/users/1154');
        cy.get('.col > .blue').click()
        cy.get('input[name="user[name]"').type('Amonra-editado')
        cy.get('input[name="user[lastname]"').type('Reis-editado')
        cy.get('.actions > input').click()
        cy.contains('Seu Usuário foi Atualizado!').should('be.visible')

        
    });

    it('Verifica página lista de usuário', () => {
        cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home');
        cy.get(':nth-child(1) > .collapsible-header').click()
        cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
        cy.contains('Nome').should('be.visible')
        cy.contains('Email').should('be.visible')

    });

    it('Verifica usuário cadastrado', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home');
        cy.get(':nth-child(1) > .collapsible-header').click()
        cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > :nth-child(9) > .material-icons').click()
        cy.contains('Nome: 1231237').should('be.visible')
        cy.contains('Nome: 1231237').should('be.visible')
        cy.get('.red').click()

        
    });

    it('Verifica botão de editar na lista', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/users');
        cy.get(':nth-child(1) > :nth-child(10) > .material-icons').click()
        cy.get('input[name="user[name]"').type('Amonra-editado')
        cy.get('input[name="user[lastname]"').type('Reis-editado')
        cy.get('.actions > input').click()
        cy.contains('Seu Usuário foi Atualizado!').should('be.visible')
        cy.get('.red').click()

        
    });

    it('Exclusão de usuário', () => {

        cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home');
        cy.get(':nth-child(1) > .collapsible-header').click()
        cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > :nth-child(11) > .material-icons').click
        cy.get('#notice')
        cy.contains('Seu Usuário foi removido com sucesso!').should('be.visible')      
    });




 
 });