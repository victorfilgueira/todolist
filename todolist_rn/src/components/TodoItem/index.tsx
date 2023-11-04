import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { Todo } from '../../screens/Home';
import { styles } from './styles';

interface TodoItemProps {
  onChangeStatus: () => void;
  onDelete: () => void;
  todoItem: Todo;
}

export const TodoItem = ({
  todoItem,
  onChangeStatus,
  onDelete,
}: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onChangeStatus} testID="radio-btn">
        {todoItem.done ? (
          <Image
            style={{ ...styles.checkIcon }}
            source={require('../../../assets/check.png')}
            testID="checkbox-checked"
          />
        ) : (
          <Image
            style={{ ...styles.checkIcon }}
            source={require('../../../assets/uncheck.png')}
            testID="checkbox-unchecked"
          />
        )}
      </Pressable>
      <Text
        style={{
          ...styles.todoText,
          opacity: todoItem.done ? 0.5 : 1,
          textDecorationLine: todoItem.done ? 'line-through' : 'none',
        }}
      >
        {todoItem.description}
      </Text>
      <TouchableOpacity onPress={onDelete} testID="delete-btn">
        <Image
          style={{ ...styles.deleteIcon }}
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
