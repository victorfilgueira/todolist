package com.simonassi.todolistnative.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.recyclerview.widget.LinearLayoutManager
import com.simonassi.todolistnative.databinding.ActivityMainBinding
import com.simonassi.todolistnative.model.Todo
import com.simonassi.todolistnative.ui.list.TodoAdapter
import com.simonassi.todolistnative.ui.list.TodoManager
import com.simonassi.todolistnative.ui.list.UpdateTodoListCallback

class MainActivity : AppCompatActivity(), UpdateTodoListCallback {

    private lateinit var binding: ActivityMainBinding
    private val adapter = TodoAdapter(mutableListOf(), this, TodoManager())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        binding.todoList.adapter = adapter
        binding.todoList.layoutManager = LinearLayoutManager(this)
        createListeners()
    }

    private fun createListeners() {
        binding.addTodoBtn.setOnClickListener{
            if(binding.todoInputText.text.toString().isNotEmpty()){
                val newTodo = Todo(description = binding.todoInputText.text.toString(), done = false)
                adapter.todoList.add(newTodo)
                onListChanged()
                adapter.notifyItemInserted(adapter.todoList.size-1)
                binding.todoInputText.setText("")
            }
        }
    }

    override fun onListChanged() {
        binding.tvShowCreated.text = adapter.todoList.size.toString()
        binding.tvShowFinished.text = adapter.todoList.filter { it.done }.size.toString()
        binding.listEmptyContainer.visibility = if (adapter.todoList.size > 0) View.GONE else View.VISIBLE
        binding.listContainer.visibility = if (adapter.todoList.size > 0) View.VISIBLE else View.GONE
    }

}
