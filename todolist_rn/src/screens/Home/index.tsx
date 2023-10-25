import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { TodoItem } from "../../components/TodoItem";
import { ListHeader } from "../../components/ListHeader";
import { EmptyList } from "../../components/EmptyList";

export type Todo = {
    description: string;
    done: boolean;
}

export function Home() {
    const [todo, setTodo] = useState<Todo[]>([
        {
            done: false,
            description: 'Fazer café'
        },
        {
            done: true,
            description: 'Fazer trabalho de teste de software'
        }
    ]);

    const [input, setInput] = useState<string>("");

    const hasSomeTodo = todo.length > 0;

    const handleDelete = (todoToDelete: Todo) => {
        console.log(todoToDelete);
        setTodo(todo.filter(todoItem => todoItem !== todoToDelete));
    }

    const handleChangeState = (todoToChange: Todo) => {
        setTodo(todo.map(todoItem => todoItem === todoToChange ? { ...todoItem, done: !todoItem.done } : todoItem));
    }

    const addTodo = (description: string) => {
        if(description.length){
            setTodo([{ description, done: false }, ...todo]);
            setInput("");
        }
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#6b6b6b'
                    value={input}
                    onChange={e => setInput(e.nativeEvent.text)}
                />
                <TouchableOpacity style={styles.button} onPress={() => addTodo(input)}>
                    <Image style={styles.imagePlus} source={require('../../../assets/plus.png')} />
                </TouchableOpacity>
            </View>

            <View>

                <ListHeader todos={todo} />

                {
                        todo.map((item, index) => (
                            <TodoItem key={index} todoItem={item} onDelete={() => handleDelete(item)} onChangeStatus={() => handleChangeState(item)} />
                        ))
                }

                {!hasSomeTodo && <EmptyList />}

            </View>
        </View>
    );
}