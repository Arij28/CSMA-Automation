import {randomfirstname,randomsurname,
  randomcompanyname,randomindustry,
  randomjob,firstname,surname,email,
  job,companyname,industry,location,
  numberofemployee,password,confirmpassword,
  acceptterms,submit, link, testEmail } from '../Constants/register'
  let randomEmail = 'csmaA1000@yopmail.com'
  

    describe('Registration', () => {
    it('registers a new user', () => {
      
      cy.visit(link)

      cy.get(firstname).type(randomfirstname)
      cy.get(surname).type(randomsurname)
      cy.get(email).type(randomEmail)
      cy.get(job).type(randomjob)
      cy.get(companyname).type(randomcompanyname)
      cy.get(industry).type(randomindustry)

       //Location
       cy.get(location).click()
       cy.contains('Tunisia').click();
 

      //Dropdown menu
      cy.get(numberofemployee).click()
      cy.contains('1-10').click();
      //Password

      cy.get(password).type('Mypassword!!1234-')
      cy.get(confirmpassword).type('Mypassword!!1234-')

      //Accept terms and conditions
      cy.get(acceptterms).check()
      cy.get(acceptterms).should('be.checked')
      //Clik the button
      cy.get(submit).click()
    }) 
  })