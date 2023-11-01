package com.simonassi.todolistnative.ui

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.simonassi.todolistnative.databinding.TodoItemBinding
import com.simonassi.todolistnative.model.Todo


class TodoAdapter(val todoList: MutableList<Todo>, val onListChangedCallback: UpdateTodoListCallback) :
    RecyclerView.Adapter<TodoAdapter.TodoViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TodoViewHolder {
        return TodoViewHolder(
            TodoItemBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: TodoViewHolder, position: Int) {
        holder.bind(todoList[position], position)
    }

    override fun getItemCount(): Int = todoList.size

    inner class TodoViewHolder(private val binding: TodoItemBinding) : RecyclerView.ViewHolder(binding.root) {
        fun bind(todo: Todo, position: Int) {
            with(todo) {
                binding.todoContent.text = description
                binding.checkedImageView.visibility = if (done) View.VISIBLE else View.GONE
                binding.uncheckedImageView.visibility = if (done) View.GONE else View.VISIBLE

                binding.uncheckedImageView.setOnClickListener { changeCheckedState(position) }
                binding.checkedImageView.setOnClickListener { changeCheckedState(position) }

                binding.trashImageView.setOnClickListener { deleteTodo(position)}
            }
        }

        private fun changeCheckedState(position: Int) {
            val selectedItem = todoList[position]
            selectedItem.done = !selectedItem.done
            todoList[position] = selectedItem
            notifyItemChanged(position)
        }

        private fun deleteTodo(position: Int) {
            todoList.removeAt(position)
            notifyItemRemoved(position)
            onListChangedCallback.onListChanged()
        }
    }
}
