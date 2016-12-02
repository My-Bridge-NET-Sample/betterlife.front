'use strict';

angular.
  module('cs.controllers.main', ['csArticle']).
  controller('MainController',
    function($scope, $location, ShareObject) {
      var queryParams = $location.search();
      if (queryParams.userId) {
        ShareObject.setUserId(queryParams.userId);
      }

      if (queryParams.shareId) {
        ShareObject.setShareId(queryParams.shareId);
      }

    }
  );
