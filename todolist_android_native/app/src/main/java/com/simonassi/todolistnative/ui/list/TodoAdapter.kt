package com.simonassi.todolistnative.ui.list

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.simonassi.todolistnative.databinding.TodoItemBinding
import com.simonassi.todolistnative.model.Todo


class TodoAdapter(
    var todoList: MutableList<Todo>,
    val onListChangedCallback: UpdateTodoListCallback,
    val todoManager: TodoManager
) : RecyclerView.Adapter<TodoAdapter.TodoViewHolder>() {

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

                binding.uncheckedImageView.setOnClickListener {
                    todoManager.changeCheckedState(todoList, position)
                    notifyItemChanged(position)
                    onListChangedCallback.onListChanged()
                }

                binding.checkedImageView.setOnClickListener {
                    todoManager.changeCheckedState(todoList, position)
                    notifyItemChanged(position)
                    onListChangedCallback.onListChanged()
                }

                binding.trashImageView.setOnClickListener {
                    todoManager.deleteTodo(todoList, position)
                    notifyItemRemoved(position)
                    onListChangedCallback.onListChanged()
                }
            }
        }
    }
}
