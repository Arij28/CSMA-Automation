import 'cypress-file-upload';
import { link, upload ,fileName, fileInput, fileType} from '../Constants/upload';

describe('File upload test', () => {
    it('uploads a file', () => {
        cy.visit(link);
      cy.get('body').then($body => {
        const input = '<input type="file" style="display: none">';
        $body.append(input);
      });

      cy.fixture(fileName).then(fileContent => {
        
        cy.get(upload).click();
  
     cy.get(fileInput).attachFile({
          fileContent,
          fileName: fileName,
          mimeType: fileType
        });

  
      });
    });
  });
  