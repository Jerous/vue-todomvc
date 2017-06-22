module.exports = {
  '應顯示程式標題與輸入欄位' (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.header')
      .assert.containsText('h1', 'todos')
      .assert.elementPresent('.new-todo')
      .end()
  },

  '輸入欄位應該在輸入待辦事項後清空' (browser) {
    const todo = 'This is a new todo.'

    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      // setValue 來設定 input 輸入值，第二個參數可帶內容
      .setValue('.new-todo', [todo, browser.Keys.ENTER])
      .assert.value('.new-todo', '')
      .end()
  },

  '建立新待辦事項後應該出現待辦事項列表' (browser) {
    const todo = 'This is a new todo.'

    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .setValue('.new-todo', [todo, browser.Keys.ENTER])

      // 通常 waitForElementVisible 和 assert.containsText 會用在動態增長的元素上
      .waitForElementVisible('.todo-list > .todo:first-child', 1000)
      .assert.containsText('.todo-list > .todo:first-child > .view > label', todo)
      .end()
  },

  '當沒有待辦事項時列表應該隱藏 ' (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.hidden('.main', 1000)
      .end()
  }
}