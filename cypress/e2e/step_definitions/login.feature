Feature: Login

  Scenario Outline: Invalid inputs for login <username> and <password> should show a messsage <error_message>
    Given I'm on the login page
    When I vary the following entries "<username>","<password>" 
    Then the error message is returned "<error_message>"

    Examples:
      | username       | password        | error_message                                                             |
      | standard_user1 | secret_sauce    | Epic sadface: Username and password do not match any user in this service |
     
    
 