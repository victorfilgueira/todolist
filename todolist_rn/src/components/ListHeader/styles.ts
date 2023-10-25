import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#333333',
    paddingHorizontal: 24
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },
  blueText: {
    color: '#4EA8DE',
  },
  purpleText: {
    color: '#8284FA',
  },
  tag: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
    marginLeft: 8,
    borderRadius: 12
  },
  counter: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D9D9D9'
  }
})