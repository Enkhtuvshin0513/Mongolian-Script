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
import index from '../../letters/egshig/index';
class DoExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      index: 0,
      correct: 0
    };
  }
  componentWillMount() {
    this.setState({
      item: this.props.randomQuiz
    });
  }
  checkQuistion(question) {
    const correct = parseInt(this.state.correct);
    if (question === this.state.item[this.state.index].correct) {
      this.setState({
        correct: correct + 1
      });
    }
    const index = parseInt(this.state.index);
    const length = parseInt(Object.keys(this.state.item).length);
    if (index >= length - 1) {
      Actions.EndExam({ correct: this.state.correct });
    } else {
      this.setState({
        index: index + 1
      });
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <CardItem>
            <Thumbnail />
            <Body>
              <Text>{this.state.item[this.state.index].answer}</Text>
            </Body>
          </CardItem>
          <View style={styles.view}>
            <Button
              full
              light
              style={styles.Button}
              onPress={() => this.checkQuistion('option1')}
            >
              <Text>{this.state.item[this.state.index].option1}</Text>
            </Button>
            <Button
              full
              light
              style={styles.Button}
              onPress={() => this.checkQuistion('option2')}
            >
              <Text>{this.state.item[this.state.index].option2}</Text>
            </Button>
            <Button
              full
              light
              style={styles.Button}
              onPress={() => this.checkQuistion('option3')}
            >
              <Text>{this.state.item[this.state.index].option3}</Text>
            </Button>
            <Button
              full
              light
              style={styles.Button}
              onPress={() => this.checkQuistion('option4')}
            >
              <Text>{this.state.item[this.state.index].option4}</Text>
            </Button>
          </View>
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
    marginBottom: 10,
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
  view: {
    marginTop: 200
  }
});

export default DoExam;
