
const { LoginPageAction } = require('./LoginPageAction')
const { ProdutoPageAction } = require('./ProdutoPageAction')
const { CarrinhoPageAction }= require('./CarrinhoPageAction')
const { CheckoutPageAction }= require('./CheckoutPageAction')

const login_actions = new  LoginPageAction  
const product_actions = new ProdutoPageAction 
const carrinho_action = new CarrinhoPageAction 
const checkout_Action = new  CheckoutPageAction

const productElement  = require('../PageElements/ProdutoPageElements')
const FinalizarCompraElement  = require('../PageElements/FinalizarCompraPageElements')

export class FinalizarCompraPageAction {

    loginFinalizarCompra(username,password){
      login_actions.urlLogin()
      login_actions.login(username,password) 
      login_actions.buttonLogin() 
      this.OrdenaLowToHigh() 
      product_actions.SelecioneProdutos()
      product_actions.AdicionarProdutoCarrinho()
      product_actions.VerificarQuantidadeDeProdutosNoCarrinho()
      carrinho_action.ValidaItensCarrinho()
      carrinho_action.VisualizarTelaCheckout()
      checkout_Action.DadosCliente()
      checkout_Action.VisualizoDadosDaCompra()
    }
    OrdenaLowToHigh(){
        cy.get(productElement.ELEMENTS.lowTohigh).select("Price (low to high)")
    }  

    ValorTotalCompra()
    {
      cy.get(FinalizarCompraElement.ELEMENTS.labelTotal).should('have.text', "Total: $60.45")
    }
    FinalizarCompra(){
      cy.get(FinalizarCompraElement.ELEMENTS.btnFinish).click()
    }
    VisualizarMsnConfirmação(){
      cy.get(FinalizarCompraElement.ELEMENTS.msnSucesso).should('contain', "Thank you for your order!")
    }
}

