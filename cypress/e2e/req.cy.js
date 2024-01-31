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
    it.skip("post",()=>{
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
 

    it.skip('via token',()=>{
        cy.request({
            method: "Get",
            url:"https://gorest.co.in/public/v2/users/6129752",
            headers:{
                authorization: "Primary Token    acb1e20f98ca460e1e756fc7c1595a7741091ac716cb87d9f3bbde574c06ebb5 "
            },
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(response.body.name)

        })
    })

    it.skip('post via token',()=>{
        const uniqueEmail = `W+${Date.now()}@gmail.com`;
        cy.request({
            method: "POST",
            url:"https://gorest.co.in/public/v2/users/",
            headers:{
                authorization:" Bearer acb1e20f98ca460e1e756fc7c1595a7741091ac716cb87d9f3bbde574c06ebb5 "
            },
            body:{
               "name" : "ii",
                "email": uniqueEmail,
                "gender": "male",
                "status" : "active"
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(response.body.name)

        })
    })

    
    it.skip('via token',()=>{
        cy.request({
            method: "GET",
            url:"https://gorest.co.in/public/v2/users/6129952",
            headers:{
                authorization: "Primary Token    acb1e20f98ca460e1e756fc7c1595a7741091ac716cb87d9f3bbde574c06ebb5 "
            },
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(response.body.name)

        })
    })

    it.only('delete', () => {
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/6129952",
            headers: {
                authorization: "Bearer acb1e20f98ca460e1e756fc7c1595a7741091ac716cb87d9f3bbde574c06ebb5"
            },
        }).then((response) => {
            cy.wrap(response).its('status').should('eq', 204); // Assuming a successful deletion returns status code 204
            cy.log('done');
        });
    });

    it.skip("get 1",()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/5').then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.title).to.equal("nesciunt quas odio")
            cy.log(response.body.body)

            
        })
    })
    it.skip("get mine",()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/101').then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.title).to.equal("siu")
            cy.log(response.body.body)

            
        })
    })

})