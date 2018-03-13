(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.lineCount = function (inElement) {
    var styles = global.getComputedStyle(inElement, null);
    var lh = parseInt(styles.lineHeight, 10);
    var h = parseInt(styles.height, 10);
    var lc = Math.round(h / lh);
    return lc;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.lineCount;
  }

}());
