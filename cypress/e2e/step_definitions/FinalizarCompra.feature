Feature: Finalizar Compra
   
  Scenario: Fazer Checkout da Compra
    Given Que o usuário esteja efetuando o Checkout
    When  ele finalizar a compra
    Then o sistema apresenta a mensagem de Thanks you for your order!