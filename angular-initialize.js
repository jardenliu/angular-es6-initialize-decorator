module.exports = function ngInitialize(target) {
  target.prototype.initialize = function(args) {
    angular && angular.forEach(args, (arg, i) => this[target.$inject[i]] = arg);
  };
}
