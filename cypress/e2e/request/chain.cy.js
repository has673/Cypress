describe('first', ()=>{
    it('first', ()=>{
        const uniqueEmail = `W+${Date.now()}@gmail.com`;
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users/",
            headers:{
                authorization: "Bearer acb1e20f98ca460e1e756fc7c1595a7741091ac716cb87d9f3bbde574c06ebb5"
            },
            body:{
                "name" : "lii",
                "email": uniqueEmail,
                "gender": "male",
                "status" : "active"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq("lii")
            const resp = res.body.id
            return resp
        }).then((resp)=>{
        
            cy.log(resp)
            cy.log("chain")
            cy.request({
                method:"PUT",
                url:`https://gorest.co.in/public/v2/users/${resp}`,
                headers:{
                    authorization : "Bearer acb1e20f98ca460e1e756fc7c1595a7741091ac716cb87d9f3bbde574c06ebb5"
                },
                body:{
                    'name' : 'siu'
                }


            }).then((respone)=>{
                cy.log(JSON.stringify(respone))
                cy.log(respone.body.name)
            })

        })
        
    })
})