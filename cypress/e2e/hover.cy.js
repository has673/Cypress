describe('hover',()=>{
    it('mouse hover',()=>{
        cy.visit('https://www.yatra.com/')
        //methods old
        // cy.get('.moreOption').invoke('show')
        // //second option via trigger
        // cy.get('.moreOption').trigger('mouseover')
         

        //hovering via real events
        // a mew package
          cy.get('.moreOption').realHover()
        
        
        

    })

})