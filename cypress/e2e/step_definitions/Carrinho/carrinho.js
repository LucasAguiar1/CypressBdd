
///<reference types="Cypress"/>
const { CarrinhoPageAction } = require("../../../PageObjects/PageActions/CarrinhoPageAction");
const carrinho_actions = new   CarrinhoPageAction  

Given("Que eu estou logado na pagina de checkout", function(){
    carrinho_actions.loginCarinho("standard_user", "secret_sauce")
})
When("Eu visualizar a pagina de checkout, deve existir três produtos", function(){
    carrinho_actions.ValidaItensCarrinho()
})
Then ("Eu clico no botão checkout e sou direcionado para a página de informaões do cliente", function (){
    carrinho_actions.VisualizarTelaCheckout()
})










  

