
export const Mailosaur = require('mailosaur');
export const mailosaurApiKey = 'FW576ID3ouMlqCd6';
export const mailosaurServerId = '6xgiaiiu';
export const client = new Mailosaur(mailosaurApiKey);

Cypress.Commands.add('getVerificationEmail', (recipient) => {
    const searchCriteria = {
      sentTo: recipient,
      subject: 'Verify your email address',
    };
    return client.messages
    .list(mailosaurServerId, searchCriteria)
    .then((result) => {
      if (result.items.length === 0) {
        throw new Error('No matching message found.');
      }
      return result.items[0];
    });
});

