export function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 15);
  const domainName = 'r7uojvgn.mailosaur.net';
  return `${randomString}@${domainName}`;
}
export const randomEmail = generateRandomEmail();

