(function(window){
  var app = angular.module('tiy-gradebook', [ ]);

  app.controller('MainController', function(){
    this.view = null;
    this.page = function(name){
      this.view = 'view/404.html';
      if ( name == 'milestones' ){
        this.view = 'views/milestones.html';
      }
      if ( name == 'repositories' ){
        this.view = 'views/repositories.html';
      }
    };
  }); // END controller(MainController)

})(window);
