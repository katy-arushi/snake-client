const { connect } = require('./client');
const { setUpInput } = require('./input');

console.log('Connecting ...');
const conn = connect();

setUpInput(conn);