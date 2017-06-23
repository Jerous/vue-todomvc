// 載入待測目標
import store from 'src/store'
// 用chai套件來做assertion
import chai from 'chai'
chai.should()

// describe來描述待測目標
describe('Store', () => {
  // it來描述行為
  it('應可從 localStorage 中取得資料', () => {
    // arrange，先用localStorage準備好測試資料
    const STORAGE_KEY = 'vue-todomvc'
    const expected = ['test']
    localStorage.setItem(STORAGE_KEY, '["test"]')

    // act，測試重點是資料取出時有沒有用JSON.parse轉換過
    const actual = store.fetch()

    // assert，用should.to.dee.equal來驗證結果
    actual.should.to.deep.equal(expected)
  })
})
