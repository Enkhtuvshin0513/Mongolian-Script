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
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import images from '../../../images';
import PropTypes from 'prop-types';

export default class ScratchsAbout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    return (
      <Container>
        <Card>
          <CardItem header>
            <Text>{item.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{item.intro}</Text>
            </Body>
          </CardItem>
        </Card>

        <Content contentContainerStyle={styles.Content}>
          <Thumbnail style={styles.Thumbnail} source={item.zurag} />
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
    width: 200,
    height: 200,
    backgroundColor: 'transparent'
  }
});

ScratchsAbout.propTypes = {
  item: PropTypes.object
};
