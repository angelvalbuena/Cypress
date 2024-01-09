describe ('Aserciones', ()=> {

beforeEach(() => {

    // Este bloque se ejecutará antes de cada prueba (it)

    cy.visit('/automation-practice-form')

  })

    it('Asercion con url', ()=> {
         cy.url().should('include','demoqa.com')
         cy.get('#firstName').should('be.visible').and('have.attr','placeholder','First Name')
    })

    it('Segundo tipo de aserciones con url', ()=> {
         cy.url().should('include','demoqa.com')
         cy.get('#firstName').then((element) => {
             expect(element).to.be.visible
             expect(element).to.have.attr('placeholder','First Name')
         })
    })

     it('Tercer tipo de aserciones con url', ()=> {
         cy.url().should('include','demoqa.com')
         cy.get('#firstName').then((element) => {
             assert.equal(element.attr('placeholder'),'First Name')
         })
    })
})