var app = angular.module('contactApp');
app.controller('contactCtr',[function(){
      self = this;
      
      self.submit = function(){
          console.log('Usuário ',self.user);
      };
}]);

