/// <reference types="cypress" />
export class SignIn {
    loginField(){
        return cy.get('#username').first();
    }
    passwordField(){
        return cy.get('#password').first();
    }
    autoLogin(){
        return cy.get('#autologin').first();
    }
    loginBtn(){
        return cy.get('[style="text-align:right;"] > input').first();
    }
    errorBx(){
        return cy.get('#errorExplanation').first();
    }
    lostPasswordBtn(){
        return cy.get('[style="text-align:left;"] > a').first();
    }
    backBtn(){
        return cy.get('#content > :nth-child(3) > a').first();
    }
    lostPasswordEmailField(){
        return cy.get('#mail').first();
    }
    lostPasswordEmailSbmtBtn(){
        return cy.get('[name="commit"]').first();
    }
    

}

export class Register {
    userLoginField(){
        return cy.get('#user_login').first();
    }
    userPasswordField(){
        return cy.get('#user_password').first();
    }
    userConfirmationField(){
        return cy.get('#user_password_confirmation').first();
    }
    userFirstNameField(){
        return cy.get('#user_firstname').first();
    }
    userLastNameField(){
        return cy.get('#user_lastname').first();
    }
    userEmailField(){
        return cy.get('#user_mail').first();
    }
    userLanguage(){
        return cy.get('#user_language').first();
    }
    userNick(){
        return cy.get('#user_custom_field_values_3').first();
    }
    userSubmitBtn(){
        return cy.get('[name="commit"]').first();
    }
}