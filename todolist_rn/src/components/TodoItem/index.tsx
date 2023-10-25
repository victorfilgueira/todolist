import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { Todo } from "../../screens/Home";
import { styles } from "./styles";

interface TodoItemProps {
    onChangeStatus: () => void;
    onDelete: () => void;
    todoItem: Todo;
}

export const TodoItem = ({ todoItem, onChangeStatus, onDelete }: TodoItemProps) => {

    return (
        <View style={styles.container}>
            <Pressable onPress={onChangeStatus}>
                <Image style={{ ...styles.icon, width: 30, height: 30 }}
                    source={todoItem.done ? require('../../../assets/check.png') : require('../../../assets/uncheck.png')} />
            </Pressable>
            <Text style={{...styles.todoText, opacity: todoItem.done ? 0.5 : 1, textDecorationLine: todoItem.done ? 'line-through' : 'none' }}>{todoItem.description}</Text>
            <TouchableOpacity onPress={onDelete}>
                <Image style={{ ...styles.icon, width: 30, height: 40 }} source={require('../../../assets/trash.png')} />
            </TouchableOpacity>

        </View>
    );
}