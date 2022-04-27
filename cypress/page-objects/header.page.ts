/// <reference types="cypress" />
export class Header {
    overViewBtn() {
        return cy.get('.overview').first();
    }
    downloadBtn() {
        return cy.get('.download').first();
    }
    activityBtn() {
        return cy.get('.activity').first();
    }
    roadmapBtn() {
        return cy.get('.roadmap').first();
    }
    issuesBtn() {
        return cy.get('.issues').first();
    }
    issueTracking() {
        return cy.get('.issues > ul').first();
    }
    newsBtn(){
        return cy.get('.news').first();
    }
    wikiBtn(){
        return cy.get(':nth-child(7) > .wiki').first();
    }
    forumsBtn() {
        return cy.get('.boards').first();
    }
    repoBtn() {
        return cy.get('.repository').first();
    }
    searchField() {
        return cy.get('#q').first();
    }
}