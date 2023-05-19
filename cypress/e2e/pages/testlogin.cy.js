import {password, submit, getcode, emailfield} from '../Constants/login'
const testEmail = 'bfc61547-e115-4376-bd09-84e7d5574e3e@mailslurp.biz'

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

    
  
  
