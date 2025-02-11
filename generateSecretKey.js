const crypto = require('crypto');
const fs = require('fs');

// Generate a random secret key
const secretKey = crypto.randomBytes(64).toString('hex');

// Append the secret key to the .env file
fs.appendFileSync('.env', `\nJWT_SECRET=${secretKey}\n`, 'utf8');

console.log('Secret key generated and added to .env file:', secretKey);
