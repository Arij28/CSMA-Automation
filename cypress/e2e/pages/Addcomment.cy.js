import { comment, commentField, save,cancel } from '../Constants/comment';
import { link } from '../Constants/upload'
describe('comment test', () => {
    it('Add comment', () => {
      cy.visit(link)

        cy.get(comment).click()

        cy.get(commentField).type('This a comment')

        cy.get(save).click()
       cy.get(cancel).click()

      //cy.contains('Quantitatively Controlled').click();

     
    });
  });
  