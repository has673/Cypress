describe('intercept', ()=>{
    beforeEach(()=>{
        cy.visit('https://dummyapi.io/explorer')
    })
    it('try intercept', ()=>{
        cy.log('intercept')
        cy.get('.flex > :nth-child(5)').click()
        cy.intercept({
            path:"v1/post/60d21af267d0d8992e610b8d/comment?limit=10"
        }).as("comments")
        cy.wait("@comments").then((intercept)=>{
            expect(intercept.statusCode).to.equal(200)

        })
        
    })
    it.only('mock', () => {
        cy.get('.flex > :nth-child(5)').click();
        
        cy.intercept('GET', 'v1/post/60d21af267d0d8992e610b8d/comment?limit=10', { statusCode: 200, body: { limit: 10 } }).as("comments");
      
        cy.wait("@comments").then((intercept) => {
          // Access the response object
          const response = intercept.response;
          
          // Check the status code
          expect(response.statusCode).to.equal(200);
      
          // Check the response body
          expect(response.body.limit).to.equal(10); // Adjust this according to the actual structure of the response
        });
      });
      
})