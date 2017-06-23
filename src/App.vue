<template>
  <div id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <!-- 接收子元件的事件來觸發自己的方法 -->
      <todo-input @add-todo="addTodo"></todo-input>
    </header>
    <!-- v-cloak會讓{{}}被編譯完後再讓元素出現-->
    <section class="main" v-show="todos.length" v-cloak>
      <ul class="todo-list">
        <li class="todo" 
          :class="{ completed: todo.completed }"
          v-for="todo in todos" :key="todo.title">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label for="">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput'
import store from './store'

export default {
  mounted () {
    this.todos = store.fetch()
  },

  watch: {
    todos: {
      deep: true,
      handler: store.save
    }
  },

  components: {
    TodoInput
  },

  data () {
    return {
      newTodo: '',
      todos: []
    }
  },

  methods: {
    addTodo (todo) {
      this.todos.push({
        title: todo,
        completed: false
      })
    },
    removeTodo (todo) {
      var index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style src="todomvc-app-css/index.css"></style>
