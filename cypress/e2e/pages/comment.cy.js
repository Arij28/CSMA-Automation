import { link  } from "../Constants/upload";
import { comment, commentField, save , cancel } from "../Constants/comment"

describe('Commenting on a website', () => {
    it('Allows users to leave a comment', () => {

      cy.visit(link)
      cy.get(comment).click()

      cy.get(commentField).type('This a comment')

      cy.get(save).click()
     cy.get(cancel).click()
     
    });
  });
  