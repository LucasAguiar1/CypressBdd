Feature: Checkout
   
  Scenario: Fazer Checkout da Compra
    Given Que já selecionei os três produtos na tela de produtos
    When  Eu cadastro os dados do cliente e clico no botão continuar 
    Then  Eu devo visualizar a página Overview com os dados da compra do cliente