const { connect } = require('./client');
const { setUpInput } = require('./input');

// Connecting to the server
console.log('Connecting ...');
const conn = connect();

// for user inputs
setUpInput(conn);