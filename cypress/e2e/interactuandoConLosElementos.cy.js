describe ('Interactuando con los elementos', function(){
    it ('Click', ()=> {
        cy.visit('/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain','You have done a dynamic click')
    })

    it('Double Click', ()=> {
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain','You have done a double click')
    })

    it('Rigth Click', ()=> {
        cy.visit('/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')
    })

    it('Force Click', ()=> {
        cy.visit('/dynamic-properties')
        cy.get('#enableAfter').click({timeout:0,force: true})
       
    })

     it('Click por posicion', ()=> {
        cy.visit('/buttons')
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click('bottomLeft')
        cy.get('button').eq(3).parent().parent().click(5,60)
    })

     it('Input type text', ()=> {
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Jose')
        cy.get('#lastName').type('Perez')
        cy.get('#firstName').type('{selectAll}{backspace}')
        cy.get('#firstName').type('Camilo')
        cy.get('#firstName').clear()
    })

     it('Checkboxes y radio botones', ()=> {
        cy.visit('/automation-practice-form')
        //cy.get('#gender-radio-1').click({force:true})
        //cy.get('#gender-radio-1').check({force:true})
        cy.get('label[for="gender-radio-1"]').click()
        cy.get('label[for="hobbies-checkbox-1"]').click()
     })

     it('Extrayendo info', function(){
        cy.visit('/automation-practice-form')
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Javier')

        cy.get('@nombre').invoke('val').as('nombreACompartir') 
     })

     it('Compartir info', function(){
        cy.visit('/automation-practice-form')
        cy.get('#lastName').as('nombre2')
        cy.get('@nombre2').type(this.nombreACompartir)
     })

     it('Interactuando con los dropdown(select)', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select(2)
        cy.get('select').select('saab').should('have.value','saab')
        cy.get('select').select('Audi').should('have.value','audi')
     })

     it('Interactuando con los dropdown(select) dinamico', function(){
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(" ")
        cy.get('#react-select-6-listbox').children()
        .each(($el,index,$list) => {
            if($el.text() === 'Red'){
                $el.click()
            }
        })
       
     })

     it('Interactuando con los dropdown(select) dinamico con contains', function(){
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(" ")
        cy.get('#react-select-6-listbox')
        .children()
       .contains("Red")
       .click()
     })

     it('Interactuando con tablas', function(){
        cy.visit('https://www.w3schools.com/html/html_tables.asp')

        cy.get('#customers')
        .find('th')
        .each(($el)=>{
        cy.log($el.text())
        })
      
        cy.get('#customers')
        .find('th')
        .first()
        .invoke('text')
        .should('equal','Company')

        cy.get('#customers')
        .find('th')
        .eq(1)
        .invoke('text')
        .should('equal','Contact')

        
        cy.get('#customers')
        .find('tr')
        .eq(1)
        .find('td')
        .eq(1)
        .invoke('text')
        .should('equal','Maria Anders')
     })

     it('Interactuando con date pickers', function(){
        cy.visit('https://material.angular.io/components/datepicker/overview')
        cy.get('datepicker-overview-example')
        .find('label')
        .eq(0)
        .type('05/01/2024')
     })

     it('Interactuando con modals', function(){
        cy.visit('/modal-dialogs')
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
     })

     it('Interactuando con modals confirmando dialogo', function(){
        cy.visit('/alerts')

        const stub = cy.stub()
        cy.on('window:confirm',stub)

        cy.get('#confirmButton').click().then(()=>{
           expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        })
       
        cy.contains('You selected Ok').should('exist')

     })

      it('Interactuando con alerts confirmando dialogo', function(){
        cy.visit('/alerts')

        cy.get('#confirmButton').click()
        cy.on('window:confirm',(confirm)=>{
        expect(confirm).to.equal('Do you confirm action?')
       })
       cy.contains('You selected Ok').should('exist')

      })

      it('Interactuando con alerts rechazando dialogo', function(){
        cy.visit('/alerts')

        cy.get('#confirmButton').click()
        cy.on('window:confirm',(confirm) => {
        expect(confirm).to.equal('Do you confirm action?')
        return false
       })
       cy.contains('You selected Cancel').should('exist')

      })

      it('Interactuando con tooltip', function(){
        cy.visit('/tool-tips')

        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout')
        cy.contains('You hovered over the Button').should('not.exist')
       

      })

   it.only('Interacting with drag and drop', () => {
    cy.visit('/dragabble')
    cy.get('#dragBox')
    .trigger('mousedown', {which:1, pageX:600, pageY:100}) // Selection
    .trigger('mousemove', {which:1, pageX:700, pageY:400}) // Movement
    .trigger('mousedown', {which:1, pageX:700, pageY:400}) // Selection
    .trigger('mousemove', {which:1, pageX:900, pageY:200}) // Movement
    .trigger('mouseup') // De-selection
  })
})