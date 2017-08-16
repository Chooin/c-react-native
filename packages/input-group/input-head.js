import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.inputHead}>
        {this.props.children}
      </View>
    )
  }
}