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
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import images from '../images';

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
          <Thumbnail style={styles.Thumbnail} source={images.mainlogo} />
          <Button style={styles.Button} onPress={() => Actions.KnowType({})}>
            <Text>Мэдлэг </Text>
          </Button>
          <Button style={styles.Button} onPress={() => Actions.Exercise({})}>
            <Text>Дасгал </Text>
          </Button>
          <Button style={styles.Button} onPress={() => Actions.StartExam({})}>
            <Text>Шалгалт</Text>
          </Button>
          <Button style={styles.Button} onPress={() => Actions.ArticlesCat({})}>
            <Text>Унших </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    marginBottom: 5,
    width: 200,
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
