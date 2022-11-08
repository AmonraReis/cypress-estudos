class cadastro {

    navigateOne(){
        cy.visit('https://automacaocombatista.herokuapp.com/users/new');
    }

    nome(username){

     cy.get('input[name="user[name]"')
     .type(username)
     return this
  
    }
    
    lastname(lastname){

    cy.get('input[name="user[lastname]"')
    .type(lastname)
    return this
    }

    email(email){
        
        return cy.get('#user_email')
        .type(email)
        return this
    }
    
    endereço(endereco){

         cy.get(':nth-child(4) > :nth-child(2) > .input-field')
         .type(endereco)
         return this
    }

    universidade(universidade){

         cy.get('#user_university')
         .type(universidade)
         return this

    }

    profissao(profissao){

         cy.get('#user_profile')
         .type(profissao)
         return this
    }
    
    genero(genero){

       cy.get(':nth-child(6) > :nth-child(1) > .input-field')
       .type
       return this
    }

    idade(idade){

         cy.get('#user_age')
         .type(idade)
         return this
    }

    criarbtn(){

         cy.get('.actions > input').click()
    }

    








    
}
 export default cadastro;
