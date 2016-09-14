//  <email></email>
//  created by John Wayne 'meracoid' Creech

define(['angular'], function(angular){
  angular.module('main').directive('email',['email', function(email){
    return{
      restrict:'E',
      templateUrl: 'docs/views/email.html',
      scope:{
      },
      link: function(){
        
      },
    };
  ]);
});