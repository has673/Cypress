describe('new tab ' , ()=>{
    it('tab', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/', { timeout: 200000 })
        cy.frameLoaded('#cousres-iframe' , {timeout: 130000})
        cy.iframe().find('.')
        cy.url().should('include', 'https://www.qaclickacademy.com/', {timeout: 130000 })
        cy.go('back')
    })
})