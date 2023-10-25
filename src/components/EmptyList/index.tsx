import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/clipboard.png')} style={styles.image} />
      
      <Text style={[styles.text, styles.title]}>
      Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={[styles.text, styles.subtitle]}>
      Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}