
///<reference types="Cypress"/>
const { ProdutoPageAction } = require("../../../PageObjects/PageActions/ProdutoPageAction");
const { LoginPageAction } = require("../../../PageObjects/PageActions/LoginPageAction");

const login_actions = new  LoginPageAction
const produto_actions = new   ProdutoPageAction  

Given("Que eu estou logado na pagina de produtos", function(){
    produto_actions.loginProduto("standard_user", "secret_sauce")
})
And("Eu seleciono três produtos", function(){
    produto_actions.SelecioneProdutos()
})
When("Eu adicionar três produtos", function(){
    produto_actions.AdicionarProdutoCarrinho()
})
Then ("O carrinho dever ter três produtos no carrinho", function (){
   produto_actions.VerificarQuantidadeDeProdutosNoCarrinho()
})










  

