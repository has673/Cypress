describe('check', () => {
    let data;

    before(() => {
        cy.fixture('login').then((loginData) => {
            data = loginData;
        });
    });

    beforeEach(() => {
        cy.visit('https://www.way2automation.com/angularjs-protractor/registeration/#/login', { timeout: 200000 });
    });

    it('check login', () => {
        data.forEach((userdata)=>{
            cy.get('#username').type(userdata.username); // Remove quotes around this.data.username
            cy.get('#password').type(userdata.password); // Remove quotes around this.data.password
            cy.get('#formly_1_input_username_0',  { timeout: 200000 } ).type(userdata.username); // Remove quotes around this.data.username
            cy.get('.btn').click();
        if(userdata.username == 'angular' && userdata.password === 'password'){
            cy.get('a').click()
        }
        else{
            cy.get('.alert.alert-danger.ng-binding.ng-scope').should('have.text', "Username or password is incorrect")
        }

        })
       
    });
    
});
