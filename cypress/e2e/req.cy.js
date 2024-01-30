// const { expect } = require("chai")

describe('requests', ()=>{
    it.skip('get', ()=>{
        cy.request("GET", 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('userId')
            expect(response.body).to.have.property('title')
        })
    })
    it("post",()=>{
        cy.request("POST", 'https://jsonplaceholder.typicode.com/posts/' , {
            userId : 1,
            title: 'siu',
            body:"siu",
            id:101
        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id');
            expect(response.body.title).to.equal('siu');
            expect(response.body.body).to.equal('siu');
            expect(response.body.userId).to.equal(1);
            cy.log(response.body.body)

        })
    })

    it.skip("get 1",()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/5').then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.title).to.equal("nesciunt quas odio")
            cy.log(response.body.body)

            
        })
    })
    it("get mine",()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/101').then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.title).to.equal("siu")
            cy.log(response.body.body)

            
        })
    })

})