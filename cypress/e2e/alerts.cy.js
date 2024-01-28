describe('handle alert',()=>{
    it('alerts',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.equal("I am a JS Confirm");
        })
        
    })
})