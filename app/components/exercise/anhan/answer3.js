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
  Card,
  CardItem
} from 'native-base';
import { StyleSheet, Alert, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import images from '../../../images';

class answer3 extends Component {
  constructor() {
    console.disableYellowBox = true;
    super();
  }

  render() {
    console.log('xaxa');

    return (
      <Container style={styles.Container}>
        <Content contentContainerStyle={styles.Content}>
          <Card style={{ marginBottom: 70 }}>
            <CardItem cardBody>
              <Image
                source={images.answer3}
                style={{ height: 200, flex: 1, backgroundColor: 'transparent' }}
              />
            </CardItem>
          </Card>

          <Button
            full
            light
            style={styles.Button}
            onPress={() =>
              Alert.alert(
                'Буруу хариулт байна!',
                '.',
                [
                  {
                    text: 'Дахиж хариулах',
                    onPress: () => console.log('OK Pressed')
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text>5</Text>
          </Button>
          <Button
            full
            light
            style={styles.Button}
            onPress={() =>
              Alert.alert(
                'Буруу хариулт байна!',
                '.',
                [
                  {
                    text: 'Дахиж хариулах',
                    onPress: () => console.log('OK Pressed')
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text>3</Text>
          </Button>
          <Button
            full
            light
            style={styles.Button}
            onPress={() =>
              Alert.alert(
                'Баяр хүргэе! Зөв хариуллаа!',
                '.',
                [
                  {
                    text: 'Дараагийн асуулт',
                    onPress: () => console.log('OK Pressed')
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text>7</Text>
          </Button>
          <Button
            full
            light
            style={styles.Button}
            onPress={() =>
              Alert.alert(
                'Буруу хариулт байна!',
                '.',
                [
                  {
                    text: 'Дахиж хариулах',
                    onPress: () => Actions.Answer3({})
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text>0</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    height: 50,
    marginBottom: 10,
    textAlign: 'center'
  },
  Content: {},
  Thumbnail: {
    width: 400,
    height: 250,
    backgroundColor: 'transparent'
  }
});

export default answer3;
