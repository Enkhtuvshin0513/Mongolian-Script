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
import images from '../../../images';
import Zurlag from '../../../letters/zurlag';
import Egshig from '../../../letters/egshig';
import Modal from 'react-native-modal';

class LetterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      item: {}
    };
  }

  showPopup(item) {
    Actions.LettersTabs({ item: item });
  }

  render() {
    const items = Egshig;

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
              <CardItem button onPress={() => this.showPopup(items[i])}>
                <Left>
                  <Thumbnail source={items[i].main} />
                  <Body>
                    <Text>{items[i].title}</Text>
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

export default LetterList;
