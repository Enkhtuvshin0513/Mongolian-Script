import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Body,
  Title,
} from 'native-base';
import { AsyncStorage, ListView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Database } from '../../config';

export default class ArticlesCat extends Component {
  constructor(props) {
    super(props);
    this.tasksRef = Database.database().ref('/Categories');

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource,
    };
  }

  componentDidMount() {
    this.listenForTasks(this.tasksRef);
  }

  listenForTasks(tasksRef) {
    tasksRef.on('value', dataSnapshot => {
      const tasks = [];
      dataSnapshot.forEach(child => {
        tasks.push({
          name: child.val().name,
          key: child.key,
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tasks),
      });
    });
  }

  renderRow(rowItem) {
    return (
      <Text
        style={styles.text}
        onPress={() => Actions.Articles({ catId: rowItem.key })}
      >
        {rowItem.name}
      </Text>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Унших</Title>
          </Body>
        </Header>
        <Content>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    paddingLeft: 5,
    paddingTop: 8,
    justifyContent: 'center',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
  },
});
