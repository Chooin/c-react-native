import React from 'react';
import { Text, View } from 'react-native';
import InputHead from './input-head';
import InputBody from './input-body';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props)
  }

  static Head = InputHead;
  static Body = InputBody;

  render () {
    return (
      <View style={styles.input}>
        {this.props.children}
      </View>
    )
  }
}