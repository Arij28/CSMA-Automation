import { link  } from "../Constants/upload";

describe('Commenting on a website', () => {
    it('Allows users to leave a comment', () => {

      cy.visit('https://csma.ccdev.space/login')
      cy.wait(1000)
      cy.get(':nth-child(2) > .css-1kdzbr1 > :nth-child(2) > .MuiBox-root > :nth-child(4) > .MuiButtonBase-root').click()
      
    });
  });
  