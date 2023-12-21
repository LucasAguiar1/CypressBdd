
const { LoginPageAction } = require('./LoginPageAction')
const login_actions = new  LoginPageAction  
const productElement  = require('../PageElements/ProdutoPageElements')
const carrinhoElement  = require('../PageElements/CarrinhoPageElements')
export class ProdutoPageAction {

    
    loginProduto(username,password){
      login_actions.urlLogin()
      login_actions.login(username,password) 
      login_actions.buttonLogin() 
      this.OrdenaLowToHigh() 
    }
    OrdenaLowToHigh(){
        cy.get(productElement.ELEMENTS.lowTohigh).select("Price (low to high)")
    }  

    SelecioneProdutos()
    {
      cy.get('.title').should('contain', productElement.ELEMENTS.pageTitle)
      cy.get(productElement.ELEMENTS.productLinks[0]).should('contain', "Sauce Labs Backpack").click()
      cy.get(productElement.ELEMENTS.botaoVoltar).click()
      cy.get(productElement.ELEMENTS.productLinks[1]).should('contain', "Sauce Labs Bike Light").click()
      cy.get(productElement.ELEMENTS.botaoVoltar).click()
      cy.get(productElement.ELEMENTS.productLinks[2]).should('contain', "Sauce Labs Bolt T-Shirt").click()
      cy.get(productElement.ELEMENTS.botaoVoltar).click()
    }

    AdicionarProdutoCarrinho(){
      cy.get(productElement.ELEMENTS.addToCartButtons[0]).click()
      cy.get(productElement.ELEMENTS.addToCartButtons[1]).click()
      cy.get(productElement.ELEMENTS.addToCartButtons[2]).click()

    }
    VerificarQuantidadeDeProdutosNoCarrinho(){
      cy.get(carrinhoElement.ELEMENTS.carrinho).should('have.text', 3)
    }
    
  
}