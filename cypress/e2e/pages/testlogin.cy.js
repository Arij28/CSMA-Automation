import {password, submit, getcode, emailfield} from '../Constants/login'
const testEmail = '7e3ab2fc-aeea-406c-b8ab-b109838780f7@mailslurp.com'

  describe('Login', () => {
    it('should log in with valid credentials', async () => {

      cy.visit('https://csma.ccdev.space/login')
      cy.wait(2000)
  
      cy.get(emailfield).type(testEmail)
      cy.get(password).type('Arij96403399-!')
  

      cy.get(submit).click()
      /*cy.get(getcode).type(code)
      cy.get('input[type="submit"]').click()*/
     
  
        
          });
      });
      
      //cy.get(submit).click()

    
  
  
