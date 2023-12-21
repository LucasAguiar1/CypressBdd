Feature: Validar Produtos na página de Checkout
   
  Scenario: Deve existir três produtos na tela de checkout
    Given Que eu estou logado na pagina de checkout
    When Eu visualizar a pagina de checkout, deve existir três produtos
    Then Eu clico no botão checkout e sou direcionado para a página de informaões do cliente
