import {password, submit, getcode, emailfield} from '../Constants/login'
import { testEmail } from '../Constants/exctractCode';

  describe('Login', () => {
    it('should log in with valid credentials', async () => {

      cy.visit('https://csma.ccdev.space/login')
      cy.wait(2000)
  
      cy.get(emailfield).type(testEmail)
      cy.get(password).type('123456Csma!')
  

      cy.get(submit).click()

      cy.waitForLatestEmail('f37af992-6ee4-41f2-ad6c-e05bb484ffb9').then((email) => {

        var recievedCode = "";
        assert.isDefined(email);
        assert.strictEqual(/Your verification code is/.test(email.body), true);
        
        var s = email.body;
        var htmlObject = document.createElement('div');
        htmlObject.innerHTML = s;

        const elements = htmlObject.querySelectorAll('[data-testid="fxjIfNWgTuQUD_MG51hx8"]');
        console.log(elements);
        
        for (const [key, value] of Object.entries(elements)) {
          if(value?.firstChild?.innerHTML){
            const codeElementText = value?.firstChild?.innerHTML;
            //code added in span child of <p>
            if(codeElementText?.length === 6 && !Number.isNaN(parseInt(codeElementText))){
              recievedCode = codeElementText
            }
          }
        }
        console.log('code: ' + recievedCode)
        

        
        
        // { subject: '...', body: '...' }
      });
  
      // Use the extracted code in your test assertions or actions
      //cy.get('#codeInput').type(code);
      //console.log(code);
      //cy.get('#verifyButton').click();


        
          });
     
  
        
          });
  
      
      //cy.get(submit).click()

    
  
  
