module.exports = function ngInitialize(target) {
  return class extends target {
    constructor(...args) {
      super(...args);
      angular && angular.forEach(args, (arg, i) => this[target.$inject[i]] = arg);
    }
  };
}
