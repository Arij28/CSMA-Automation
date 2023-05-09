import {randomfirstname,randomsurname,
  randomcompanyname,randomindustry,
  randomjob,firstname,surname,email,
  job,companyname,industry,location,
  numberofemployee,password,confirmpassword,
  acceptterms,submit} from '../Constants/register'

import {randomEmail} from '../randomEmail'
export let rEmail = randomEmail

const serverId = 'r7uojvgn';
    
describe('Registration', () => {
    it('registers a new user', () => {
      
      cy.visit('https://csma.ccdev.space/register')

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

      cy.mailosaurGetMessage( serverId, {
        sentTo: randomEmail
    }).then( email => {
       console.log(email)
        expect(email.subject).to.equal('Welcome to cyber');
        if(email.html.links.length > 0){
          let confirmationLink = email.html.links[0].href;
          console.log(confirmationLink)
          cy.visit(confirmationLink)
        }else{
          console.log('No links founded in email')
        }
        
      })

      
      
      


    }) 
  })