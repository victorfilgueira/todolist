package com.simonassi.todolistnative.ui.list

import com.simonassi.todolistnative.model.Todo

class TodoManager {
    fun changeCheckedState(todoList: MutableList<Todo>, position: Int) {
        val selectedItem = todoList[position]
        selectedItem.done = !selectedItem.done
        todoList[position] = selectedItem
    }

    fun deleteTodo(todoList: MutableList<Todo>, position: Int) {
        todoList.removeAt(position)
    }
}