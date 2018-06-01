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
import questions from '../../questions';
import index from '../../questions';

class StartExam extends Component {
  constructor() {
    super();
  }
  generateExam() {
    const all = [];
    const randomQuiz = [];
    Object.keys(questions).map(index => {
      Object.keys(questions[index]).map(i => {
        all.push({
          answer: questions[index][i].answer,
          correct: questions[index][i].correct,
          option1: questions[index][i].option1,
          option2: questions[index][i].option2,
          option3: questions[index][i].option3,
          option4: questions[index][i].option4
        });
      });
    });
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * 30);
      randomQuiz.push({
        answer: all[index].answer,
        correct: all[index].correct,
        option1: all[index].option1,
        option2: all[index].option2,
        option3: all[index].option3,
        option4: all[index].option4
      });
    }
    Actions.DoExam({
      randomQuiz
    });
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Body>
            <Title>Шалгалт</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.Content}>
          <Button style={styles.Button} onPress={() => this.generateExam()}>
            <Text>Эхлэх </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    marginTop: 150,
    width: 200,
    height: 200,
    borderRadius: 100,
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

export default StartExam;
