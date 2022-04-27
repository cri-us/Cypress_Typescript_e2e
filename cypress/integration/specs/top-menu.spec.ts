import { TopMenu } from "../../page-objects/top-menu.page";
const topMenu = new TopMenu();

describe('Top menu buttons functionality',() => {
    it('Home button check', () => {
        cy.visit('https://www.redmine.org/');

        topMenu.homeBtn().click();
        cy.url().should("include","redmine.org") //Assert  the url
        cy.title().should("include","Overview") //Assert the title
    });
    it('Project button check',() => {
        
        topMenu.projectsBtn().click();
        cy.url().should("include","www.redmine.org/projects") //Assert  the url
        cy.title().should("include","Projects") //Assert the title

    })
    it('Sign in button check',() => {
        topMenu.signInBtn().click();
        cy.url().should("include","www.redmine.org/login") //Assert  the url
        cy.title().should("include","Sign in") //Assert the title

    })
    it('Register button check',() => {
        topMenu.registerBtn().click();
        cy.url().should("include","www.redmine.org/account/register") //Assert  the url
        cy.title().should("include","Register") //Assert the title
    })
    /*it('Help button check',() => {
        topMenu.helpBtn().click();
        cy.url().should("include","www.redmine.org/guide") //Assert  the url
        cy.title().should("include","Guide") //Assert the title
    }) */
    
    
    
});


     

