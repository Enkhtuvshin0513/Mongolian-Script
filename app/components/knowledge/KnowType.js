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
import images from '../../images';

class KnowType extends Component {
  constructor(props) {
    super(props);
  }

  onPressItem(type) {
    if (type === 'Зурлаг') {
      Actions.ScratchList({
        xaxa: type
      });
    }
    if (type === 'Эгшиг') {
      Actions.LetterList({
        xaxa: type
      });
    }
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Body>
            <Title>Mэдлэг</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.Content}>
          <Button
            style={styles.Button}
            onPress={() => this.onPressItem('Зурлаг')}
          >
            <Text>Үндсэн зурлага</Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => this.onPressItem('Эгшиг')}
          >
            <Text>Эгшиг </Text>
          </Button>
          <Button style={styles.Button}>
            <Text>Гийгүүлэгч </Text>
          </Button>
          <Button style={styles.Button}>
            <Text>Дэвсгэр үсэг</Text>
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
    marginTop: 100,
    alignSelf: 'center'
  }
});

export default KnowType;
