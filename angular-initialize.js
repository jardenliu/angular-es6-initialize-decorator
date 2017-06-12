module.exports = function ngInitialize(target) {
  target.prototype.initialize = function(args) {
    angular && angular.forEach(args, (arg, i) => this[target.$inject[i]] = arg);
    this.$scope && this.viewLoaded && typeof this.viewLoaded == 'function' && this.$scope.$on('$viewContentLoaded', this.viewLoaded.bind(this));
  };
}
