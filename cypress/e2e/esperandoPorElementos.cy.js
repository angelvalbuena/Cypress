describe ('Esperando por elementos', ()=> {

    beforeEach(() => {
        cy.visit('https://www.platzi.com')
    })

    it ('Esperar por un tiempo definido', ()=> {
        cy.wait(5000)
    })

    it ('Esperar por un elemento', ()=> {
        cy.get('.Nav-header-mobileCtas-actions--login', {timeout:6000})
    })

    it ('Esperar por un elemento y hacer una asersion', ()=> {
        cy.get('.Nav-header-mobileCtas-actions--login', {timeout:6000}).should('be.visible')
    })
    
})