Feature: CompraProdutos
   
  Scenario: Adicionando no Carrinho
    Given Que eu estou logado na pagina de produtos
    And  Eu seleciono três produtos
    When  Eu adicionar três produtos 
    Then O carrinho dever ter três produtos no carrinho
