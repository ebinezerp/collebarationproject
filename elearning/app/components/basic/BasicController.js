BasicModule.controller('BasicController',['BasicServices','$scope',function(BasicService,$scope){
var me=this;
//me.greeting='This message is comming from angular controller';
BasicService.getGreeting().then(


    function(greeting){
        me.greeting=greeting;
    },
    function(error)
    {
        console.log(error);
    }
);

}]);