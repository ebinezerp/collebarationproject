window.routes={
    "/home":{
        templateUrl:'app/components/basic/home.html',
        controller:'BasicController',
        controllerAs:'basicCtrl',
        requireLogin:false,
        roles:['GUEST','ADMIN','STAFF','STUDENT']

    },
    "/login":
    {
        templateUrl:'app/components/authentication/login.html',
        controller:'AuthenticationController',
        controllerAs:'authCtrl',
        requireLogin:false,
        roles:['GUEST','ADMIN','STAFF','STUDENT']

    },
    "/aboutus":{
          templateUrl:'app/components/basic/aboutus.html',
        controller:'BasicController',
        controllerAs:'basicCtrl',
        requireLogin:false,
        roles:['GUEST','ADMIN','STAFF','STUDENT']


    }
};


//specify the backend url where you are going to get the values

app.constant('REST_URI','http://localhost:8080/eponlinecollaboration');

app.config(['$routeProvider',function($routeProvider){

for(var path in window.routes)
{
    $routeProvider.when(path,window.routes[path]);
}

$routeProvider.otherwise({redirectTo:'/login'});
}]);