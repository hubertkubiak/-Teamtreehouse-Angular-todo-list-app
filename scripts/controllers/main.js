'use strict';

angular.module('todoListApp')
  .controller('mainCtrl', function ($scope, dataService) {
    $scope.addTodo = function () {
      let todo = {
        name: "This is a new todo."
      };
      $scope.todos.push(todo);
    };

    $scope.helloWorld = dataService.helloWorld;

    dataService.getTodos(function (response) {
      console.log(response.data);
      $scope.todos = response.data;
    });

    $scope.deleteTodo = function (todo, $index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice($index, 1);
    };

    $scope.saveTodos = function () {
      let filteredTodos = $scope.todos.filter(function (todo) {
        if (todo.edited) {
          return todo;
        }
      })
      dataService.saveTodos(filteredTodos);
    };
  })