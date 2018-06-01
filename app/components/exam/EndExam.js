import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Body,
  Title,
  Thumbnail
} from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
  constructor() {
    console.disableYellowBox = true;
    super();
  }
  showPopup = aa => {};

  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Body>
            <Title>Mонгол бичиг</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.Content}>
          <View>
            <Text>Та {this.props.correct} асуултанд зөв хариулсан байна</Text>
          </View>
          <Button
            full
            style={styles.Button}
            onPress={() => Actions.StartExam({})}
          >
            <Text>Дахин тоглох </Text>
          </Button>
          <Button full style={styles.Button}>
            <Text>Найзууддаа хуваалцах</Text>
          </Button>
          <Button full style={styles.Button} onPress={() => Actions.Main({})}>
            <Text>Гарах </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    marginBottom: 5,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontFamily: 'mnglwritingotf'
  },
  Content: {
    alignSelf: 'center'
  },
  Thumbnail: {
    marginTop: 20,
    marginBottom: 80,
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  }
});

export default Main;
