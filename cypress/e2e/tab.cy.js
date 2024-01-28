describe('new tab ' , ()=>{
    it('tab', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/', { timeout: 200000 })
        cy.get('#idopentab' , {timeout: 130000}).invoke('removeAttr','target').click()
        cy.url().should('include', 'https://www.qaclickacademy.com/')
        cy.go('back')
    })
})