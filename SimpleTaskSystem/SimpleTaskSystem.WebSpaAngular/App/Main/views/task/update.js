(function() {
    var app = angular.module('app');

    var controllerId = 'sts.views.task.update';
    app.controller(controllerId, [
        '$scope', '$location', '$stateParams', 'abp.services.tasksystem.task', 'abp.services.tasksystem.person',
        function ($scope, $location, $stateParams, taskService, personService) {
            var vm = this;

            vm.task = [];

            var localize = abp.localization.getSource('SimpleTaskSystem');

            vm.people = []; //TODO: Move Person combo to a directive?

            vm.getTaskDetail = function () {
                abp.ui.setBusy( //Set whole page busy until getTasks complete
                    null,
                    taskService.getTasks({ //Call application service method directly from javascript
                        TaskId: $stateParams.taskId
                    }).success(function (data) {
                        vm.task = data.tasks[0];
                    })
                );
            };
            vm.getTaskDetail();

            personService.getAllPeople().success(function(data) {
                vm.people = data.people;
            });

            vm.saveTask = function () {
                vm.task.TaskId = vm.task.id;
                abp.ui.setBusy(
                    null,
                    taskService.updateTask(
                        vm.task
                    ).success(function() {
                        abp.notify.info(abp.utils.formatString(localize("TaskUpdatedMessage")));
                        $location.path('/');
                    })
                );
            };
        }
    ]);
})();