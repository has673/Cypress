
describe('login user then validate',()=>{
    it('lauch app',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
        // cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[name='username']").type('asd')
        cy.get("input[name='password']").type('12345')
        cy.get("input[type='submit']").click()
        cy.get("a[class='ng-binding']").click()
        cy.get("#month").select('May')
        cy.get("#transactionType").select(1)
        cy.get("input[value='Go']").click()
        
        
        

    })

})