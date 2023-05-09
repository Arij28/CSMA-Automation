import {password, submit, getcode, emailfield} from '../Constants/login'
export const subject = 'Cyber : Get your verification code'
const testEmail = 'bfc61547-e115-4376-bd09-84e7d5574e3e@mailslurp.biz'
const mailslurp = new MailSlurp({ apiKey: "47e5eb728e573bc66e4b480aadba436399019dc2cd38bfc30059c3d2fc39e03f" });
const inbox = await mailslurp.inboxController.createInboxWithDefaults();
const inboxId = inbox.id




  
  describe('Login', () => {
    it('should log in with valid credentials', async () => {

      cy.visit('https://csma.ccdev.space/login')
      cy.wait(2000)
  
      cy.get(emailfield).type(testEmail)
      cy.get(password).type('Arij96403399-!')
  

      cy.get(submit).click()
        cy.waitForLatestEmail(inboxId).then(email => {
          // verify we received an email
          assert.isDefined(email);
          assert.strictEqual(/verification code is/.test(email.body), true);
      
          // extract the confirmation code (so we can confirm the user)
          const code = /(\d{6})$/.exec(email.body)[1];
        
          });
      });
      cy.get(getcode).type(code)
      cy.get('input[type="submit"]').click();
     
  
      //cy.get(submit).click()

    
    })
  
