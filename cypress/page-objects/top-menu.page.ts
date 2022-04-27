/// <reference types="cypress" />

export class TopMenu{
    homeBtn(){
    return cy.get('.home').first();
    }
    projectsBtn(){
     return cy.get('.projects').first();
     }
     helpBtn(){
         return cy.get('.help').first();
     }
     signInBtn(){
         return cy.get('.login').first();
     }
     registerBtn(){
         return cy.get('.register').first();
     }
  } 