
const { LoginPageAction } = require('./LoginPageAction')
const { ProdutoPageAction } = require('./ProdutoPageAction')
const {CarrinhoPageAction} = require('./CarrinhoPageAction')

const login_actions = new  LoginPageAction  
const product_actions = new ProdutoPageAction 
const carrinho_action = new CarrinhoPageAction 

const productElement  = require('../PageElements/ProdutoPageElements')
const checkoutElement  = require('../PageElements/CheckoutPageElements')

export class CheckoutPageAction {

    
    loginCheckOut(username,password){
      login_actions.urlLogin()
      login_actions.login(username,password) 
      login_actions.buttonLogin() 
      this.OrdenaLowToHigh() 
      product_actions.SelecioneProdutos()
      product_actions.AdicionarProdutoCarrinho()
      product_actions.VerificarQuantidadeDeProdutosNoCarrinho()
      carrinho_action.ValidaItensCarrinho()
      carrinho_action.VisualizarTelaCheckout()
    }
    OrdenaLowToHigh(){
        cy.get(productElement.ELEMENTS.lowTohigh).select("Price (low to high)")
    }  

    DadosCliente(){
      cy.get(checkoutElement.ElEMENTS.nomeCliente).type("Lucas")
      cy.get(checkoutElement.ElEMENTS.sobrennomeCliente).type("Aguiar")
      cy.get(checkoutElement.ElEMENTS.cepCliente).type("022.17-030")
      cy.get(checkoutElement.ElEMENTS.btnContinuar).click()
    }
    VisualizoDadosDaCompra()
    {
      cy.get(checkoutElement.ElEMENTS.pageTitle).should('contain', "Checkout: Overview")
      cy.get(checkoutElement.ElEMENTS.productLinks[0]).should('contain', "Sauce Labs Backpack")
      cy.get(checkoutElement.ElEMENTS.productLinks[1]).should('contain', "Sauce Labs Bike Light")
      cy.get(checkoutElement.ElEMENTS.productLinks[2]).should('contain', "Sauce Labs Bolt T-Shirt")
      
    }
}

