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
}
