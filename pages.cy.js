

class cadastro {

    name(){
        return cy.get('input[name="user[name]"')
    }
    
    lastname(){

       return cy.get('input[name="user[lastname]"')
    }

    email(){
        
        return cy.get('#user_email')
    }
    
    endereço(){

        return cy.get(':nth-child(4) > :nth-child(2) > .input-field')
    }

    universidade(){

        return cy.get('#user_university')

    }

    profissao(){

        return cy.get('#user_profile')
    }
    
    genero(){

        return cy.get(':nth-child(6) > :nth-child(1) > .input-field')
    }

    idade(){

        return cy.get('#user_age')
    }

    criarbtn(){

        return cy.get('.actions > input').click()
    }

    








    
}

export default cadastro;