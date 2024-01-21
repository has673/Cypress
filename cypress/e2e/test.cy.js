
describe('my first test',()=>{
    it('lauch app',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        // cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('ali')
        cy.get("input[id='customer.lastName']").type('khan')
        cy.get("input[id='customer.address.street']").type('sguixgwohs')
        cy.get("input[id='customer.address.city']").type('siu')
        cy.get("input[id='customer.address.state']").type('maine')
        cy.get("input[id='customer.address.zipCode']").type('1000')
        cy.get("input[id='customer.phoneNumber']").type('11111111')
        cy.get("input[id='customer.ssn']").type('12345')
        cy.get("input[id='customer.username']").type('asd')
        cy.get("input[id='customer.password']").type('12345')
        cy.get("#repeatedPassword").type('12345')
        cy.get('[colspan="2"] > .button').click()
        

    })

})