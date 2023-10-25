package com.simonassi.todolistnative.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.simonassi.todolistnative.databinding.ActivityMainBinding
import com.simonassi.todolistnative.model.Todo
import java.util.*
import kotlin.properties.Delegates

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    lateinit var todoAdapter: TodoListAdapter
    private var todoList: MutableList<Todo> = mutableListOf()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        todoAdapter = TodoListAdapter()
        binding.todoList.adapter = todoAdapter
        todoAdapter.submitList(todoList)
        createListeners()
    }

    private fun createListeners() {

        binding.addTodoBtn.setOnClickListener{
            if(binding.todoInputText.text.toString().isNotEmpty()){
                val newTodo = Todo(description = binding.todoInputText.text.toString(), done = false)
                todoList.add(newTodo)
                onListUpdated()
            }
        }
    }

    private fun onListUpdated() {
        binding.tvShowCreated.text = todoList.size.toString()
        binding.tvShowFinished.text = todoList.filter { it.done }.size.toString()
        todoAdapter.submitList(todoList)
    }

}
