package com.simonassi.todolistnative.ui

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import com.simonassi.todolistnative.databinding.TodoItemBinding
import com.simonassi.todolistnative.model.Todo

class TodoListAdapter : ListAdapter<Todo, RecyclerView.ViewHolder>(TodoDiffCallback())  {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        return TodoViewHolder(
            TodoItemBinding
                .inflate(
                    LayoutInflater.from(parent.context),
                    parent,
                    false
                )
        )
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        val item = getItem(position)
        (holder as TodoViewHolder).bind(item)
    }

    class TodoViewHolder(
        private val binding: TodoItemBinding
    ) : RecyclerView.ViewHolder(binding.root) {
        init {
            binding.checkedImageView.setOnClickListener() {
                //TODO
            }
        }

        fun bind(item: Todo) {
            binding.apply {
                item.description = item.description
                item.done = item.done
//                executePendingBindings()
            }
        }
    }
}

private class TodoDiffCallback : DiffUtil.ItemCallback<Todo>() {

    override fun areItemsTheSame(oldItem: Todo, newItem: Todo): Boolean {
        return oldItem.description == newItem.description
    }

    override fun areContentsTheSame(oldItem: Todo, newItem: Todo): Boolean {
        return oldItem.description == newItem.description
    }
}