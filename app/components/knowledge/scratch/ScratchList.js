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
import Swiper from '../Swiper';
import images from '../../../images';
import Zurlag from '../../../letters/zurlag';
import Modal from 'react-native-modal';

class ScratchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      item: {}
    };
  }

  SelectType(type) {
    let items = {};
    if (type === 'Зурлаг') {
      items = Zurlag;
      return items;
    }
  }
  showPopup(item) {
    this.setState({
      item: item,
      showPopup: !this.state.showPopup
    });
  }
  onModalPress(item) {
    this.setState({ showPopup: false });
    Actions.ScratchDraw({ item: item });
  }
  renderPopup() {
    const item = this.state.item;
    return (
      <View onPress={() => Actions.ScratchDraw()}>
        <Modal
          style={styles.View}
          isVisible={this.state.showPopup}
          onBackdropPress={() => this.setState({ showPopup: false })}
        >
          <View>
            <Image style={styles.Thumbnail} source={item.zuraga} />
            <Button
              style={styles.ModalButton}
              onPress={() => Actions.ScratchTabs({ item: item })}
            >
              <Text>Зурах</Text>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }

  render() {
    const items = this.SelectType(this.props.xaxa);

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
                onPress={() => Actions.ScratchTabs({ item: items[i] })}
              >
                <Left>
                  <Thumbnail source={items[i].zurag} />
                  <Body>
                    <Text>{items[i].title}</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          ))}
          {this.renderPopup()}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
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

export default ScratchList;
