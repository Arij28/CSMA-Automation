import 'cypress-file-upload';
import { link ,fileName, fileInput, fileType} from '../Constants/upload';
import { selecanswer } from '../Constants/anwser';
import { commentField, save,cancel } from '../Constants/comment';


describe('New assessment test', () => {
    it('start a new assessment', () => {

      cy.visit(link)

      const startNumber = 1;
      const endNumber = 81;
      
         
            for (let i = startNumber; i <= endNumber; i += 1) {

              //answer questions
              const incrementedSelector = `button[id="a.${i}"]`;
              const randomIndex = Math.floor(Math.random() * selecanswer.length);
              const randomWord = selecanswer[randomIndex];
              const upload = `button[id="u.${i}"]`;
              const comment = `button[id="c.${i}"]`;
             const commentField = `textarea[id="r.${i}"]`

            
              cy.get(incrementedSelector).click()
              cy.contains(randomWord).click();
            
              //upload file
              cy.get('body').then($body => {
                const input = '<input type="file">';
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
              //Add comment
              cy.get(comment).click()

      cy.get(commentField).type('This a comment')

      cy.get(save).click()
     cy.get(cancel).click()
     
        
              
            
            }
            
            
     
    });
  });
  