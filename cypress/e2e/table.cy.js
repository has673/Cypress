describe('new tab ' , ()=>{
    it('table', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/', { timeout: 200000 })
        cy.get('.tableFixHead > #product> tbody > tr > td:nth-child(1)').each(($elm , index , $list)=>{
             const t = $elm.text()
             if(t.includes('Jack')){
                cy.log(index)
                cy.get('.tableFixHead> #product> tbody > tr > td:nth-child(1)').next().then((d)=>{
                    const r = d.text()
               //assertion
                   expect(r).to.include('Engineer');
                })

             }
        })
   
    })
})