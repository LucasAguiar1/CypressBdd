
const loginElement  = require('../PageElements/LoginPageElements')

  export class LoginPageAction {
    login(username,password){
        cy.get(loginElement.ElEMENTS.username).type(username)
        cy.get(loginElement.ElEMENTS.password).type(password)
       
    }
    buttonLogin(){
        cy.get(loginElement.ElEMENTS.buttonLogin).click() 
    }
    urlLogin (){
        cy.visit(loginElement.ElEMENTS.urlLogin);
    }
    errosMensagemLogin(msn){
        //cy.get(loginElement.ElEMENTS.errorMessageLogin).contains(String(msn))
       // cy.get(loginElement.ElEMENTS.errorMessageLogin).contains(String(msn))
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')

       // cy.get('.error-message-container.error [data-test="error"]').contains('Epic sadface: Nome de usuário e senha não correspondem a nenhum usuário neste serviço');

    }
}