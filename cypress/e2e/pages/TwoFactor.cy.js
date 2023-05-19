import {password, submit, getcode, emailfield} from '../Constants/login'
import { testEmail } from '../Constants/exctractCode';

  describe('Login', () => {
    it('should log in with valid credentials', async () => {

      cy.visit('https://csma.ccdev.space/login')
      cy.wait(2000)
  
      cy.get(emailfield).type(testEmail)
      cy.get(password).type('Arij96403399-!')
  

      cy.get(submit).click()

               cy.mailslurp()
              .then(mailslurp =>
                mailslurp.waitForLatestEmail(this.inboxId, 30000, true)
              )
              .then(email => {
                const regex = /.*verification code is (\d{6}).*/;
                const match = regex.exec(email.body);
                const code = match[1]
              })
             .then(code => {
                cy.get(getcode)
                  .type(code)
                  cy.get('input[type="submit"]').click()
              });
          });
     
  
        
          });
  
      
      //cy.get(submit).click()

    
  
  
