describe('Login', () => {
    it('should log in with valid credentials', () => {

      cy.visit('https://csma.ccdev.space/login')
      cy.wait(2000)
  
      cy.get(email).type(randomEmail)
      cy.get(password).type('Mypassword!!1234-')
  

      cy.get(submit).click()
  
      //login after registration
      //cy.contains('Your registration is now complete. Please login to your dashboard.')

    
    })
  
})