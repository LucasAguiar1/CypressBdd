
///<reference types="Cypress"/>


const { LoginPageAction } = require("../../../PageObjects/PageActions/LoginPageAction");
const { ElEMENTS } = require("../../../PageObjects/PageElements/LoginPageElements");

const login_actions = new  LoginPageAction
/*
Given("I'm on the login page", function(){
  login_actions.urlLogin() 
})
When("I type a registered my login and password", function(){
  login_actions.login("standard_user", "secret_sauce" )
})
Then ("I have a successful login", function (){
  login_actions.buttonLogin() 
})



Given("I'm on the login page", function(){
  login_actions.urlLogin() 
})
When("I type a registered with wrong login and correct password", function(){
  login_actions.login("standard_user1", "secret_sauce" )
  login_actions.buttonLogin() 
})
Then ("I have a error menssage", function (){
  cy.wait(3000)
  login_actions.errosMensagemLogin("Epic sadface: Username and password do not match any user in this service")

 
})


Given("I'm on the login page", () => {
  // Implemente o código para visitar a página de login
  cy.visit('https://www.saucedemo.com/'); // Supondo que a página de login esteja em '/login'
});



When('I vary the following entries:', (dataTable) => {
  dataTable.hashes().forEach((row) => {
    // Acessa o campo de usuário e senha, e insere os valores da tabela
   
    cy.get('[data-test="username"]').type(row.username);
    cy.get('[data-test="password"]').type(row.password);
    cy.get('[data-test="login-button"]').click(); // Clicar no botão de login
  });       
});


Then('the error message is returned:', (dataTable) => {
  dataTable.hashes().forEach((row) => {
    // Verifica se a mensagem de erro esperada é exibida
    cy.get('[data-test="error"]').should('contain', row.error_message);
  });
});
*/

Given("I'm on the login page", () => {
  cy.visit('https://www.saucedemo.com/'); // Visita a página de login
});

When('I vary the following entries {string},{string}',(username, password) => {
  cy.get('[data-test="username"]').type(username);
  
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});


Then('the error message is returned {string}', (error_message) => {
  // Verifica se a mensagem de erro esperada é exibida na página
  cy.get('[data-test="error"]').should('contain', error_message);
});

  

