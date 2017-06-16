myApp.service( 'PeepsService', function( $http ){
  var sv = this;

  sv.addPeep = function( newPeep ){
    console.log( 'in addRecord:', newPeep );
    $http( {
      method: 'POST',
      url: '/peeps',
      data: newPeep
    });//end http
  };//end add peep

  sv.getPeeps = function(){
    console.log( 'in getRecords' );
    return $http({
      method: 'GET',
      url: '/peeps',
    }).then( function( response ){
      sv.allMyPeeps = response;
    });
  };//end getPeeps
});//end myApp
