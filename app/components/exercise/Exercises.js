import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Body,
  Title,
  Thumbnail,
  View,
  Card,
  CardItem,
  Left
} from 'native-base';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';

class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      item: {}
    };
  }
  renderAnswer(answer) {
    return answer;
  }
  render() {
    const items = this.props.questions;

    return (
      <Container>
        <Header>
          <Body>
            <Title>{this.props.xaxa}</Title>
          </Body>
        </Header>
        <Content>
          {Object.keys(items).map(i => (
            <Card>
              <CardItem
                button
                onPress={() =>
                  Actions.DoExercise({
                    items: items,
                    index: i
                  })
                }
              >
                <Left>
                  <Thumbnail />
                  <Body>
                    <Text>{this.renderAnswer(items[i].answer)}</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  ListItem: {
    marginBottom: 30
  },

  ModalButton: {
    alignSelf: 'center',
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    justifyContent: 'center'
  },
  Button: {
    marginBottom: 5,
    width: 200,
    textAlign: 'center',
    justifyContent: 'center'
  },
  Content: {
    marginTop: 50,
    alignSelf: 'center'
  },
  Thumbnail: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 80
  },
  View: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 20,
    width: 300,
    marginTop: 80,
    marginBottom: 100,
    height: 80,
    backgroundColor: '#FFFFFF'
  }
});

export default Exercises;
