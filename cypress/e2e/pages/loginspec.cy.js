import {rEmail } from '../pages/registrationspec.cy'
import {email,password, submit, getcode} from '../Constants/login'
export const subject = 'Cyber : Get your verification code'
const serverId = 'r7uojvgn';
const MailosaurClient = require('mailosaur');
const client = new MailosaurClient('mvSGfcIaT3VHtUvkMWSpTd15f2iKtI3c');


describe('Login', () => {
    it('should log in with valid credentials', async () => {

      cy.visit('https://csma.ccdev.space/login')
      cy.wait(2000)
  
      cy.get(email).type(rEmail)
      cy.get(password).type('Mypassword!!1234-')
  

      cy.get(submit).click()
      cy.wait(4000)
  
      //login after registration
      //cy.contains('Your registration is now complete. Please login to your dashboard.')
      cy.mailosaurGetMessage( serverId, {
        sentTo: rEmail
    }).then( email => {
       console.log(email)
        expect(email.subject).to.equal('Cyber : Get your verification code');
        cy.wrap(client.messages.get(serverId, subject)).then((messages) => {

        const message = messages.items[0]; 
          const firstCode = message.html.codes[0];
          console.log(firstcode)
          cy.get(getcode).type(firstCode.value);
       
        })
      })
      cy.get(submit).click()

    
    })
  
})