import { password, submit, getcode, emailfield, mdp, link } from "../Constants/login";
import { testEmail ,BoiteId} from "../Constants/exctractCode";

describe("Login", () => {
  it("should log in with valid credentials", async () => {
    cy.visit(link);


    cy.get(emailfield).type(testEmail);
    cy.get(password).type(mdp);

    cy.get(submit).click();
cy.wait(1500)
    cy.waitForLatestEmail(BoiteId).then(
      (email) => {
        cy.wait(1500)
        var recievedCode = "";
        assert.isDefined(email);
        assert.strictEqual(/Your verification code is/.test(email.body), true);

        var s = email.body;
        var htmlObject = document.createElement("div");
        htmlObject.innerHTML = s;

        const elements = htmlObject.querySelectorAll(
          '[data-testid="fxjIfNWgTuQUD_MG51hx8"]'
        );
        console.log(elements);

        for (const [key, value] of Object.entries(elements)) {
          if (value?.firstChild?.innerHTML) {
            const codeElementText = value?.firstChild?.innerHTML;
            //code added in span child of <p>
            if (
              codeElementText?.length === 6 &&
              !Number.isNaN(parseInt(codeElementText))
            ) {
              recievedCode = codeElementText;
            }
          }
        }
        console.log("code: " + recievedCode);
        cy.get(getcode).type(recievedCode);
        cy.get(submit).click()
        // { subject: '...', body: '...' }
      }
    );

  
    

  });
});


