import 'cypress-file-upload';
import { link, upload ,fileName, fileInput, fileType} from '../Constants/upload';

describe('File upload test', () => {
    it('uploads a file', () => {
      cy.visit(link)
      
      cy.get(upload).find('input[type="file"]').then(hiddenInput => {
        // Perform assertions or interactions with the hidden input element
        // Example: Assert that the hidden input element is present
        cy.wrap(hiddenInput).should('exist');})

        cy.get(upload).click()
        cy.get('input[type="file"]').attachFile(fileName);
    
  
    

      
    
    });
  });
  