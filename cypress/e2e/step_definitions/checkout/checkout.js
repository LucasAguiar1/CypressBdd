
///<reference types="Cypress"/>
const { CheckoutPageAction } = require("../../../PageObjects/PageActions/CheckoutPageAction");

const checkout_actions = new   CheckoutPageAction  

Given("Que já selecionei os três produtos na tela de produtos", function(){
    checkout_actions.loginCheckOut("standard_user", "secret_sauce")
})
When("Eu cadastro os dados do cliente e clico no botão continuar", function(){
    checkout_actions.DadosCliente()
})
Then ("Eu devo visualizar a página Overview com os dados da compra do cliente", function (){
    checkout_actions.VisualizoDadosDaCompra()
})









  

