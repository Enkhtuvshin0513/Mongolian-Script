import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Title,
  Body,
  Button,
  Thumbnail,
  Left
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import images from '../../images';
import { Fonts } from '../../utils/Fonts';
import { Database } from '../../config';
import {
  AsyncStorage,
  ListView,
  ScrollView,
  View,
  Dimensions
} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default class ArticlesRead extends Component {
  constructor(props) {
    super(props);

    this.tasksRef = Database.database().ref('/Articles/' + this.props._id);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      titleS: ''
    };
  }

  componentDidMount() {
    this.listenForTasks(this.tasksRef);
  }

  listenForTasks(tasksRef) {
    tasksRef.on('value', dataSnapshot => {
      this.setState({
        titleS: dataSnapshot.val().titleS,
        content: dataSnapshot.val().content
      });
    });
  }

  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <Container>
        <Header>
          <Body>
            <Title>Зурлага</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.Content}>
          <View style={styles.content}>
            <ArticleContent style={styles.text}>
              {this.state.content}
            </ArticleContent>
          </View>
        </Content>
      </Container>
    );
  }
}

const { width, height } = Dimensions.get('window');
const ArticleTitle = styled.Text`
  transform: rotate(90deg);
  font-size: 20;
  font-weight: bold;
  font-family: ${Fonts.mongol}
  width: 300;
  height: 300;
  padding-top: 80;
  padding-left: 20;
`;
const ArticleContent = styled.Text`
  transform: rotate(90deg);
  font-size: 20;
  width: 1500;
  height: ${width};
  margin-top: 400;
  padding-bottom: 50;
  padding-top: 50;
  padding-right: 20;
  padding-left: 200;
`;
const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    justifyContent: 'center',
    fontFamily: Fonts.mongol
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: Fonts.mongol
  }
});
