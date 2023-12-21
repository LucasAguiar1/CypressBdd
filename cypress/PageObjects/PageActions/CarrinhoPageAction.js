
const { LoginPageAction } = require('./LoginPageAction')
const { ProdutoPageAction } = require('./ProdutoPageAction')

const login_actions = new  LoginPageAction  
const product_actions = new ProdutoPageAction 
const productElement  = require('../PageElements/ProdutoPageElements')


export class CarrinhoPageAction {

    
    loginCarinho(username,password){
      login_actions.urlLogin()
      login_actions.login(username,password) 
      login_actions.buttonLogin() 
      this.OrdenaLowToHigh() 
      product_actions.SelecioneProdutos()
      product_actions.AdicionarProdutoCarrinho()
      product_actions.VerificarQuantidadeDeProdutosNoCarrinho()
    }
    OrdenaLowToHigh(){
        cy.get(productElement.ELEMENTS.lowTohigh).select("Price (low to high)")
    }  

    ValidaItensCarrinho(){
        cy.get('.shopping_cart_link').click()
        cy.get('.title').contains('Your Cart')
        cy.get('#item_4_title_link > .inventory_item_name').should('contain', "Sauce Labs Backpack")
        cy.get('#item_0_title_link > .inventory_item_name').should('contain', "Sauce Labs Bike Light")
        cy.get('#item_1_title_link > .inventory_item_name').should('contain', "Sauce Labs Bolt T-Shirt")

    }
    VisualizarTelaCheckout(){
        cy.get('[data-test="checkout"]').click()
        cy.get('.title').contains('Checkout: Your Information')
    }
}