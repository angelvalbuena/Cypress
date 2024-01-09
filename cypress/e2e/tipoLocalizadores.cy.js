describe ('Tipos de localizadores', ()=> {

  beforeEach(() => {

    // Este bloque se ejecutará antes de cada prueba (it)

    cy.visit('/automation-practice-form')

  })

    it ('obtener por medio de tag', ()=> {
        cy.get('input')
    })

    it ('obtener por medio de atributo', ()=> {
        cy.get('[placeholder="First Name"]')
    })

     it ('obtener por medio de atributo y tag', ()=> {
        cy.get('input[placeholder="First Name"]')
    })

    it ('obtener por medio de id', ()=> {
        cy.get('#firstName')
    })

     it ('obtener por medio de class', ()=> {
        cy.get('.mr-sm-2.form-control')
    })

     it('obtener por medio de contains', ()=> {
        cy.contains('Reading')
    })

     it('obtener por medio de class y contains', ()=> {
        cy.contains('.header-wrapper','Elements')
    })

    it.only ('obtener usando parents', ()=> {
        //Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()
        //Obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents()

        cy.get('input[placeholder="First Name"]').parents().find('label')

        cy.get('form').find('label')
    })
})