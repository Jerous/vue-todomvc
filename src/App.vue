<template>
  <div id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo"
      >
    </header>
    <!-- v-cloak會讓{{ }}被編譯完後再讓元素出現-->
    <section class="main" v-show="todos.length" v-cloak>
      <ul class="todo-list">
        <li class="todo" v-for="todo in todos" >
          <div class="view">
            <label for="">{{ todo.title }}</label>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      todos: []
    }
  },

  methods: {
    addTodo () {
      const todo = this.newTodo && this.newTodo.trim()
      if (!todo) {
        return
      }
      this.todos.push({
        title: todo,
        completed: false
      })
      this.newTodo = ''
    }
  }
}
</script>

<style src="todomvc-app-css/index.css"></style>
