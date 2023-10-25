import React from 'react';
import { View, Text } from 'react-native';

import { Todo } from '../../screens/Home';
import { styles } from './styles';

type ListHeaderProps = {
  todos: Todo[]
}

export function ListHeader({ todos }: ListHeaderProps ) {
  const created = todos.length
  const finalized = todos.filter(todo => todo.done).length;

  return (
    <View style={[styles.box, styles.row]}>
      <View style={styles.row}>
        <Text style={[styles.text, styles.blueText]}>Criadas</Text>
        <View style={styles.tag}>
          <Text style={styles.counter}>{created}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={[styles.text, styles.purpleText]}>Concluídas</Text>
        <View style={styles.tag}>
          <Text style={styles.counter}>{finalized}</Text>
        </View>
      </View>
    </View>
  )
}