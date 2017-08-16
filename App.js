import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { InputGroup, Input } from './packages/input-group';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputGroup title="InputGroup">
          <Input>
            <Input.Head>
              <Text>12313</Text>
            </Input.Head>
            <Input.Body>
              <Text>12313</Text>
            </Input.Body>
          </Input>
          <Input>
            <Input.Head>
              <Text>12313</Text>
            </Input.Head>
            <Input.Body>
              <Text>12313</Text>
            </Input.Body>
          </Input>
          <Input>
            <Input.Head>
              <Text>12313</Text>
            </Input.Head>
            <Input.Body>
              <TextInput style={{ width: '100%', height: 20, fontSize: 14 }} placeholder="请输入" placeholderTextColor="#574751" />
            </Input.Body>
          </Input>
        </InputGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
