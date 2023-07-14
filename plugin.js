arc.run([
  '$rootScope',
  function ($rootScope) {
    $rootScope.plugin('arcTransactionLogs', 'Transaction Logs', 'page', {
      menu: 'tools',
      icon: 'fa-tasks',
      description: 'This plugin is to query transaction logs',
      author: 'George Bryant',
      url: 'https://github.com/gbryant-dev/arc-plugin-transaction-log',
      version: '1.0.0'
    })
  }
])

arc.directive('arcTransactionLogs', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      instance: '=tm1Instance'
    },
    templateUrl: '__/plugins/transaction-log/template.html',
    link: function ($scope, element, attrs) {},
    controller: [
      '$scope',
      '$rootScope',
      '$helper',
      function ($scope, $rootScope, $helper) {
        // Scope variables

        // Helpers

        //Close the tab
        $scope.$on('close-tab', function (event, args) {
          // Event to capture when a user has clicked close on the tab
          if (
            args.page == 'arcTransactionLogs' &&
            args.instance == $scope.instance &&
            args.name == null
          ) {
            // The page matches this one so close it
            $rootScope.close(args.page, { instance: $scope.instance })
          }
        })

        //Trigger an event after the plugin closes
        $scope.$on('$destroy', function (event) {
          clear()
        })
      }
    ]
  }
})
