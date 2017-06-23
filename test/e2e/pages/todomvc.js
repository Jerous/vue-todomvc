// 官方的寫法是用 object literal ，這裡改為 constructor
module.exports = function (browser) {
  const newTodo = '.new-todo'
  const firstTodoItem = '.todo-list > .todo:first-child'

  this.show = () => {
    return browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
  }

  this.shouldSeeTitleAndInput = () => {
    return browser
      .assert.elementPresent('.header')
      .assert.containsText('h1', 'todos')
      .assert.elementPresent('.new-todo')
  }

  this.addTodo = (todo) => {
    return browser
      .setValue(newTodo, [todo, browser.Keys.ENTER])
  }

  this.shouldSeeAtNewTodo = (value) => {
    return browser
      .assert.value(newTodo, value)
  }

  this.shouldSeeAtFirstTodoItem = (todo) => {
    return browser
      .waitForElementVisible(firstTodoItem, 1000)
      .assert.containsText(firstTodoItem + ' > .view > label', todo)
  }

  this.shouldHiddenTodoListWithoutTodo = () => {
    return browser
      .assert.hidden('.main', 1000)
  }

  this.makeTodoCompeleted = () => {
    return browser
      // click 表示對 DOM 元素按滑鼠左鍵
      .click(firstTodoItem + ' > .view > .toggle')
  }

  this.shouldCompeleteTodo = () => {
    return browser
      .assert.cssClassPresent(firstTodoItem, 'completed')
  }

  this.deleteTodo = () => {
    return browser
      // moveToElement 是將滑鼠移到元素上的指定坐標
      .moveToElement('.todo-list > .todo:first-child', 10, 10)
      .click('.todo-list > .todo:first-child > .view > button.destroy')
  }

  this.shouldGetEmptyTodoList = () => {
    return browser
      // assert.elementCount 是自訂的 assertion
      // test/e2e/custom-assertions/elementCount.js
      .assert.elementCount('.todo', 0)
  }
}
