import { Header } from "../../page-objects/header.page";
const header = new Header();

describe('Header menu buttons functionality',() => {
    it('Overview button check', () => { 
        cy.visit('https://www.redmine.org/');
        header.overViewBtn().click();
        header.issueTracking().children().eq(Math.floor(Math.random() * 3)).as('selectedChild') //randomly selecting in list 
        // .click({force: true}).each(header.selectedIssue).click(); // no need to use it
        cy.get('@selectedChild').click("left");
   })
   it ('Download button check', () => {
       header.downloadBtn().click();
       cy.url().should("include","www.redmine.org/projects/redmine/wiki/Download") //Assert  the url
       cy.title().should("include","Download") //Assert the title
   })
   it ('Activity button check', () => {
       header.activityBtn().click();
       cy.url().should("include","www.redmine.org/projects/redmine/activity") //Assert  the url
       cy.title().should("include","Activity") //Assert the title

   })
   it ('Roadmap button check', () => {
       header.roadmapBtn().click();
       cy.url().should("include","www.redmine.org/projects/redmine/roadmap") //Assert  the url
       cy.title().should("include","Roadmap") //Assert the title
       
   })
   it ('Issues button check', () => {
       header.issuesBtn().click();
       cy.url().should("include","www.redmine.org/projects/redmine/issues") //Assert  the url
       cy.title().should("include","Issues") //Assert the title
       cy.get('[type="checkbox"]').check({force: true})
       cy.get('.icon-reload').click();
       cy.get('.collapsed > legend').click();
       cy.get('#available_columns > [value="fixed_version"]').click(); //wont move other side 
       cy.get('[value="→"]').click({force: true});
       cy.get('#available_columns > [value="start_date"]').click();
       cy.get('[value="→"]').click({force: true});
       cy.get('#available_columns > [value="done_ratio"]').click();
       cy.get('[value="→"]').click({force: true});
       cy.get('#selected_columns > [value="fixed_version"]').click();
       cy.get('[value="←"]').click({force: true});

       
   })
   it ('News button check', () => {
       header.newsBtn().click();
       cy.url().should("include","www.redmine.org/projects/redmine/news") //Assert  the url
       cy.title().should("include","News") //Assert the title
   })
   it ('Wiki button check', () => {
       header.wikiBtn().click();
       cy.url().should("include","www.redmine.org/projects/redmine/wiki") //Assert  the url
       cy.title().should("include","Wiki") //Assert the title
   })
   it ('Forums button check', () => {
       header.forumsBtn().click();
       cy.url().should("include","www.redmine.org/projects/redmine/boards") //Assert  the url
       cy.title().should("include","Forums") //Assert the title
   })
   it ('Repository button check', () => {
       header.repoBtn().click();
       cy.url().should("include","www.redmine.org/projects/redmine/repository") //Assert  the url
       cy.title().should("include","Repository") //Assert the title

   })
})
describe('Header menu editable search field functionality check',() =>{
    it('Search field functionality check', () =>{
        header.searchField().type('blablabla1998{enter}', { force: true })
        .should("have.value","blablabla1998");
        header.searchField().type('{enter}'); // wont hit enter ?
    })

    
})