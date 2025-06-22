
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dir = './src/environments';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Create environment.prod.ts
const prodPath = path.join(dir, 'environment.prod.ts');
const prodContent = `
export const environment = {
  production: true,
  emailJsPublicKey: '${process.env['emailJsPublicKey']}',
};
`;
fs.writeFileSync(prodPath, prodContent);

// Create environment.ts
const devPath = path.join(dir, 'environment.ts');
const devContent = `
export const environment = {
  production: false,
  emailJsPublicKey: '${process.env['emailJsPublicKey']}',
};
`;
fs.writeFileSync(devPath, devContent);

console.log('✅ Generated environment.ts and environment.prod.ts');