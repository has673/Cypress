describe('intercept',()=>{
    beforeEach(()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
    })
    it('new', ()=>{
       
        cy.intercept({
            path:'/posts'

        }).as('posts')
        cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click()
        cy.wait('@posts').then((intercept)=>{
            cy.log(JSON.stringify(intercept))
        })
      

    })
})