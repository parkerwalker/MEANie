console.log('js');
var myApp = angular.module( 'myApp', [] );

myApp.controller( 'WhereMyPeeps', function( PeepsService ){
  var vm = this;

  vm.newPeep = function(){
    console.log( 'in newPeep' );
    var peepToAdd = {
      name: vm.nameIn,
      location: vm.locationIn
    }; //end peepToAdd
    PeepsService.addPeep( peepToAdd );
  }; //end whereMyPeepsAt

  vm.whereMyPeepsAt = function(){
    console.log( 'in whereMyPeepsAt' );
    PeepsService.getPeeps().then( function(){
      vm.peepsDisplay = PeepsService.allMyPeeps.data;
      console.log( 'back in controller:', PeepsService.allMyPeeps, vm.peepsDisplay );
    });
  }; //end whereMyPeepsAt
}); // end controller
