if (process.env.NODE_ENV === 'production') {
  console.log(require('./prod'));
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
