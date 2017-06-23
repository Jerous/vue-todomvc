<template>
<input class="new-todo"
  autofocus autocomplete="off"
  placeholder="What needs to be done?"
  v-model="newTodo"
  @keyup.enter="addTodo">
</template>

<script>
  export default {
    data () {
      return {
        newTodo: ''
      }
    },
    methods: {
      addTodo () {
        const todo = this.newTodo && this.newTodo.trim()

        if (!todo) {
          return
        }

        // this.todos.push({
        //   title: todo,
        //   completed: false
        // })
        // 將原有的 todos.push 改用 $emit 來將資料傳遞到父元件
        this.$emit('add-todo', todo)

        this.newTodo = ''
      }
    }
  }
</script>
