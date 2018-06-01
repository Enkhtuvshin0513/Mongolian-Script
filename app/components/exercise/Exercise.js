import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title
} from 'native-base';
import images from '../../images';
import questions from '../../questions';
import { Actions } from 'react-native-router-flux';
export default class Exercise extends Component {
  returnPoint() {
    return 6;
  }
  returnImage() {
    return images.anhan;
  }
  render() {
    console.log(questions.level1);

    return (
      <Container>
        <Header>
          <Body>
            <Title>Дасгал</Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <CardItem
              cardBody
              button
              onPress={() =>
                Actions.Exercises({
                  questions: questions.level1,
                  xaxa: 'Анхан шат'
                })
              }
            >
              <Image
                source={this.returnImage()}
                style={{ height: 113, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left />
              <Body>
                <Text />
              </Body>
              <Right />
            </CardItem>
          </Card>
          <Card>
            <CardItem
              cardBody
              button
              onPress={() =>
                Actions.Exercises({
                  questions: questions.level2,
                  xaxa: 'Дунд шат'
                })
              }
            >
              <Image
                source={images.dund}
                style={{ height: 113, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left />
              <Body>
                <Text />
              </Body>
              <Right />
            </CardItem>
          </Card>
          <Card>
            <CardItem
              cardBody
              button
              onPress={() =>
                Actions.Exercises({
                  questions: questions.level3,
                  xaxa: 'Ахисан шат'
                })
              }
            >
              <Image
                source={images.ahisan}
                style={{ height: 113, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left />
              <Body>
                <Text />
              </Body>
              <Right />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
