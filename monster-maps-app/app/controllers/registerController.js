//IIFE takes things out of the global name space
(function RegisterControllerIIFE(ang) {

  // // Controller
  // var CustomersController = function() {
  //   //attribute on customers controller
  //   this.sortBy = "name";
  //   this.reverse = false;

  //   this.customers = data;
  // };
  // //create method on customers controller
  // CustomersController.prototype.doSort = function(propName) {
  //   this.sortBy = propName;
  //   this.reverse = !this.reverse;
  // };

  // The Controller is part of the module.
  ang.module('mapApp').controller('registerController', RegisterController);

  // pass in customer data which is the environment
  // passing two global variables/objects into the IIFE
})(angular);
