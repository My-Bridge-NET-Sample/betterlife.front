'use strict';

var ISMOBILE = false;


var loadedDependencies = [
    'mobile-angular-ui',
    'ngAnimate',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination',
    'ngFileUpload',
    'bbBlog',
    'bb.common'
];
if (ISMOBILE){
    var mobileDependencies = ['ngTouch', 'ng-fastclick'];
    loadedDependencies.concat(mobileDependencies);
} else {
    var webDependencies = [];
    loadedDependencies.concat(webDependencies);
}
angular.module('bb.controllers', loadedDependencies);

angular.module('bb.service', []);

//
// Here is how to define your module
// has dependent on mobile-angular-ui
//
var app = angular.module('bb', [
  'ngRoute',
  'ngStorage',
  'ngCookies',
  'bb.service',
  'bb.controllers'
]);

app.run();

app.config(['$locationProvider', '$routeProvider', '$httpProvider',
  function($locationProvider, $routeProvider, $httpProvider) {
    // //所有的异步都不需要自动序列化成JSON格式
    // $httpProvider.defaults.transformRequest = function(data) {
    //   使用jQuery的param方法把JSON数据转换成字符串形式
    //   return $.param(data);
    //   todo: 采用angular的方式实现$.param jqlite没有作用？
    // };

    // $locationProvider.hashPrefix("!");
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // $httpProvider.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

    bootbox.addLocale('zh_CN_OK', { OK : '确定', CANCEL  : "取消", CONFIRM : "确认" });
    bootbox.setLocale("zh_CN_OK");
    bootbox.setDefaults({
        "title"  : "提示信息",
        "animate": true
    });

    // $locationProvider.html5Mode(true);
    // $locationProvider.html5Mode({enabled:true,requireBase:false,rewriteLinks:false});

    $routeProvider.
      when('/', {
        templateUrl: 'home.html',  reloadOnSearch: false
      }).
      when('/music', {
        templateUrl: 'music.html', reloadOnSearch: false
      }).
      when('/news', {
        templateUrl: 'news.html', reloadOnSearch: false
      }).
      when('/blog', {
        templateUrl: 'blog.html', reloadOnSearch: false
      }).
      otherwise('/');
  }
]);

app.filter('trustHtml', function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    }
});

app.directive('go', ['$window',
    function($window, $scope) {
        return function(scope, element ,attrs) {
            element.bind('mousedown', function() {
                $window.location.href = attrs.go;
            });
        }
    }
]);
