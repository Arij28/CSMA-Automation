import { link } from '../Constants/upload';
import { Answer1, Answer2 } from '../Constants/anwser';
const selecanswer = ['Not Applicable',
  '0 - Not Performed',
  '1 -Performed Informally',
  '2 - Planned',
  '3 - Well Defined',
  '4 - Quantitatively Controlled',
  '5 - Continuously Improved'];


describe('Answer test', () => {
    it('Answer qustion ', () => {
        cy.visit(link)
// Define the starting and ending numbers
const startNumber = 1;
const endNumber = 81;


// Generate and use the incremented selectors
for (let i = startNumber; i <= endNumber; i += 1) {
  const incrementedSelector = `button[id="a.${i}"]`;
  const randomIndex = Math.floor(Math.random() * selecanswer.length);
  const randomWord = selecanswer[randomIndex];

  // Use the incremented selector
  cy.get(incrementedSelector).click()
  cy.contains(randomWord).click();


}


   
    });
  });
  