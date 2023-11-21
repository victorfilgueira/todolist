package com.simonassi.todolistnative

import com.simonassi.todolistnative.model.Todo
import com.simonassi.todolistnative.ui.list.TodoManager
import org.junit.Assert
import org.junit.Before
import org.junit.Test

class TodoManagerTest {

    private lateinit var todoManager: TodoManager
    private lateinit var todoList: MutableList<Todo>

    @Before
    fun setup() {
        todoManager = TodoManager()
        todoList = mutableListOf(
            Todo("Todo 1", false),
            Todo("Todo 2", false),
            Todo("Todo 3", false)
        )
    }

    @Test
    fun changeCheckedStateTest() {
        val position = 1
        val oldState = todoList[position].done
        todoManager.changeCheckedState(todoList, position)
        Assert.assertNotEquals(oldState, todoList[position].done)
    }

    @Test
    fun deleteTodoTest() {
        val position = 1
        val oldSize = todoList.size
        todoManager.deleteTodo(todoList, position)
        Assert.assertEquals(oldSize - 1, todoList.size)
    }
}