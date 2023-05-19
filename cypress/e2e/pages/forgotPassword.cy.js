/*import {femail, submit} from '../Constants/forgotPassword'
import { rEmail } from './registrationspec.cy';
export const subject = 'Cyber: Password reset'
const serverId = 'r7uojvgn';

describe('Forgot Password Process', () => {
    it('should send a password reset email when a user forgets their password', () => {
  
      cy.visit('https://csma.ccdev.space/forgotPasswordRequest');
  
  
      cy.get(femail).type(rEmail);
      cy.get(submit).click();

      cy.wait(2000)
      cy.mailosaurGetMessage( serverId, {
        sentTo: rEmail
    }).then( email => {
       console.log(email)
        expect(email.subject).to.equal('Cyber: Password reset');
        cy.get('#mailcontainer').contains('a:contains("Send Reset Password Instructions")');
          
      })
    })
      
    });
*/
  