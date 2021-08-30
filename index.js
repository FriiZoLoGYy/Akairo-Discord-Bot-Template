require('dotenv').config();

const VoodooPharaoh = require('./core/client.js');
const client = new VoodooPharaoh();

client.login(process.env.TOKEN);
