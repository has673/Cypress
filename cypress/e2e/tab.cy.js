describe('new tab ' , ()=>{
    it('tab', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/', { timeout: 200000 })
        cy.get('#opentab' , {timeout: 130000}).invoke('removeAttr','target').click()
        cy.url().should('include', 'https://www.qaclickacademy.com/', {timeout: 130000 })
        cy.go('back')
    })
})