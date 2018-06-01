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
import images from '../../../images';

class answer1 extends Component {
  constructor() {
    console.disableYellowBox = true;
    super();
  }
  nextAnswer() {
    Actions.Answer2({});
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Body>
            <Title>Mongolian</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.Content}>
          <Thumbnail style={styles.Thumbnail} source={images.mainlogo} />
          <Button
            style={styles.Button}
            onPress={() =>
              Alert.alert(
                'Зөв хариуллаа!',
                [
                  {
                    text: 'Дараагийн асуулт',
                    onPress: () => {
                      this.nextAnswer();
                    }
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text>Титэм</Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() =>
              Alert.alert(
                'Буруу хариуллаа!',
                [
                  {
                    text: 'Дахин оролдох',
                    onPress: () => console.log('xax')
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text>Гэдэс</Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() =>
              Alert.alert(
                'Буруу хариуллаа!',
                [
                  {
                    text: 'Дахин оролдох',
                    onPress: () => console.log('xax')
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text>Нуруу</Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() =>
              Alert.alert(
                'Буруу хариуллаа!',
                [
                  {
                    text: 'Дахин оролдох',
                    onPress: () => console.log('xax')
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text>Шүд</Text>
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
    justifyContent: 'center'
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

export default answer1;
