describe('file upload',()=>{
    it('file upload',()=>{
        cy.visit('https://www.techlistic.com/p/selenium-practice-form.html')
        // cy.get('#loginPanel > :nth-child(3) > a').click()
       cy.get('#photo').scrollIntoView()
       cy.get('#photo').selectFile("D:\\selenium.\\full.png")
        
        
        

    })

})