var ProgressBar = require('progress');

var makeCallback = function() {
  var bar;
  return {
    setup: function(n) {
      bar = new ProgressBar('[:bar] :current/:total', { total: n });
    },
    iteration: function() {
      bar.tick();
    }
  };
};

module.exports = {
  makeCallback: makeCallback
};
