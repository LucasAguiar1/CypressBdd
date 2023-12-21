
///<reference types="Cypress"/>
const { FinalizarCompraPageAction } = require("../../../PageObjects/PageActions/FinalizarCompraPageAction");

const finalizar_actions = new   FinalizarCompraPageAction  

Given("Que o usuário esteja efetuando o Checkout", function(){
    finalizar_actions.loginFinalizarCompra("standard_user", "secret_sauce")
})

When("ele finalizar a compra", function(){
    finalizar_actions.ValorTotalCompra()
    finalizar_actions.FinalizarCompra()
})
Then ("o sistema apresenta a mensagem de Thanks you for your order!", function (){
    finalizar_actions.VisualizarMsnConfirmação()
})


