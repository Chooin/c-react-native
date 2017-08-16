import React from 'react';
import { Text, View } from 'react-native';
import Input from './input';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.inputGroup}>
        <View style={styles.inputGroupTitle}>
          <Text>{this.props.title}</Text>
        </View>
        <View style={styles.inputGroupContent}>
          {this.props.children}
        </View>
      </View>
    )
  }
}