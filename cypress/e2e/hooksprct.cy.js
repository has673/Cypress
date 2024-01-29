describe('hooks', ()=>{
    before(()=>{
        cy.log('before')
    })
    after(()=>{
        cy.log('after')
    })
    beforeEach(()=>{
        cy.log('beforeeach')
    })
    afterEach(()=>{
        cy.log('aftereach')
    })

    it('first',()=>{
        cy.log(1)
    })
    it('second',()=>{
        cy.log(2)
    })
})