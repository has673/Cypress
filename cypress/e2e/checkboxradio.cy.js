
describe('checkbox',()=>{
    it('lauch app',()=>{
        cy.visit('https://demo.guru99.com/test/radio.html')
     
        cy.get('[type="radio"]').check('Option 1')
        cy.get('[type="checkbox"]').check('checkbox3')
        cy.get('[type="checkbox"]').first().click()
        
        

    })

})